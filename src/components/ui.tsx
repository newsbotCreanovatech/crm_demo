import type { EstadoPoliza } from "@/lib/datos";

export function Titulo({
  titulo,
  subtitulo,
  children,
}: {
  titulo: string;
  subtitulo?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end gap-3">
      <div className="min-w-0 flex-1 basis-64">
        <h1 className="condensado text-[28px] font-extrabold leading-tight">{titulo}</h1>
        {subtitulo && <p className="apagado text-sm">{subtitulo}</p>}
      </div>
      {children && <div className="flex flex-wrap items-center gap-2">{children}</div>}
    </header>
  );
}

export function Tarjeta({
  titulo,
  accion,
  children,
  className = "",
}: {
  titulo?: string;
  accion?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`tarjeta p-4 ${className}`}>
      {(titulo || accion) && (
        <div className="mb-3 flex items-center justify-between gap-3">
          {titulo && <h2 className="condensado text-lg font-bold">{titulo}</h2>}
          {accion}
        </div>
      )}
      {children}
    </section>
  );
}

export function Cifra({ etiqueta, valor, nota, destacada }: { etiqueta: string; valor: string | number; nota?: React.ReactNode; destacada?: boolean }) {
  return (
    <div className="tarjeta p-4">
      <div className="apagado text-xs uppercase tracking-wide">{etiqueta}</div>
      <div className={`condensado mt-1 text-[34px] font-bold leading-tight ${destacada ? "text-marca" : ""}`}>{valor}</div>
      {nota && <div className="apagado text-[13px]">{nota}</div>}
    </div>
  );
}

const estilosEstado: Record<string, string> = {
  Aprobada: "bg-marca text-white",
  "En revisión": "bg-marca/10 text-marca-oscuro",
  "Faltan documentos": "border border-marca/40 text-marca-oscuro",
  Borrador: "bg-tinta/5 text-tinta",
  "Pago pendiente": "bg-tinta/5 text-tinta",
  Cancelada: "bg-tinta/80 text-white",
  "Venta perdida": "bg-tinta/10 text-tinta/80 line-through",
};

export function Estado({ estado }: { estado: EstadoPoliza | string }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${estilosEstado[estado] ?? "bg-tinta/5"}`}>
      {estado}
    </span>
  );
}

export function Etiqueta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex whitespace-nowrap rounded-full bg-tinta/5 px-2.5 py-0.5 text-xs font-medium">{children}</span>
  );
}

export function Avatar({ texto, grande }: { texto: string; grande?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-marca/10 font-bold text-marca-oscuro ${
        grande ? "size-14 text-lg" : "size-9 text-xs"
      }`}
    >
      {texto}
    </div>
  );
}

export function Campo({ etiqueta, children, ancho }: { etiqueta: string; children: React.ReactNode; ancho?: string }) {
  return (
    <label className={`flex flex-col gap-1 text-sm ${ancho ?? ""}`}>
      <span className="font-medium">{etiqueta}</span>
      {children}
    </label>
  );
}
