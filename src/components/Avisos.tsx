"use client";

import { useEffect, useState } from "react";

const EVENTO = "demo-aviso";

/** Muestra un aviso breve: en la demo los botones no hacen la acción real. */
export function avisar(texto = "Esto es una demostración: esta acción no está activa.") {
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: texto }));
}

export function Avisos() {
  const [texto, setTexto] = useState<string | null>(null);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const oir = (e: Event) => {
      setTexto((e as CustomEvent<string>).detail);
      clearTimeout(t);
      t = setTimeout(() => setTexto(null), 2600);
    };
    window.addEventListener(EVENTO, oir);
    return () => {
      window.removeEventListener(EVENTO, oir);
      clearTimeout(t);
    };
  }, []);

  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      {texto && (
        <div className="rounded-lg bg-tinta px-4 py-3 text-sm text-crema shadow-lg">{texto}</div>
      )}
    </div>
  );
}

/** Botón que en la demo solo muestra el aviso. */
export function BotonDemo({
  children,
  variante = "normal",
  aviso,
  className = "",
}: {
  children: React.ReactNode;
  variante?: "normal" | "principal" | "peligro" | "suave";
  aviso?: string;
  className?: string;
}) {
  const estilos = {
    normal: "border border-tinta/15 bg-white text-tinta hover:bg-tinta/5",
    principal: "border border-marca bg-marca text-white hover:bg-marca-oscuro",
    peligro: "border border-tinta/15 bg-white text-tinta hover:bg-tinta hover:text-white",
    suave: "border border-marca/30 bg-marca/5 text-marca-oscuro hover:bg-marca/10",
  }[variante];
  return (
    <button
      type="button"
      onClick={() => avisar(aviso)}
      className={`inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg px-3.5 text-sm font-semibold transition-colors ${estilos} ${className}`}
    >
      {children}
    </button>
  );
}
