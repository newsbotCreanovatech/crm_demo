"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const respuestas: Record<string, string> = {
  "¿Quién falta por renovar?":
    "Te faltan 108 clientes por renovar a 2027. Los 3 con más miembros son María López (3), Elena Vargas (2) y Carmen Ruiz (2). ¿Quieres que te prepare un WhatsApp de recordatorio para ellos?",
  "Pólizas con documentos pendientes":
    "Hay 7 pólizas en «Faltan documentos». La más antigua es la de José Ramírez (Ambetter, desde el 15 dic.): le falta la prueba de ingresos.",
  "Redacta un WhatsApp de renovación":
    "Hola, {nombre}. Ya podemos renovar su seguro médico para 2027. Su plan actual sigue disponible y puede que pague menos. ¿Le viene bien que lo revisemos juntos esta semana?",
};

export function Asistente() {
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState<string | null>(null);

  const preguntar = (texto: string) => {
    setPregunta(texto);
    setRespuesta(
      respuestas[texto] ??
        "En la versión real, el asistente contestaría usando solo los datos de tus clientes. En esta demo prueba con una de las preguntas sugeridas."
    );
  };

  return (
    <section className="rounded-xl bg-tinta p-4 text-crema">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Sparkles size={18} className="text-[#A9A6FF]" aria-hidden="true" />
        <h2 className="condensado text-lg font-bold">Asistente</h2>
        <span className="ml-auto text-xs text-crema/65">Solo ve tus clientes · 412 de 500 consultas este mes</span>
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (pregunta.trim()) preguntar(pregunta.trim());
        }}
      >
        <label className="sr-only" htmlFor="pregunta-ia">Pregunta al asistente</label>
        <input
          id="pregunta-ia"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
          placeholder="Pregúntale por tu cartera…"
          className="min-h-10 flex-1 rounded-lg border border-crema/20 bg-crema/5 px-3 text-sm text-crema placeholder:text-crema/50 focus:outline-2 focus:outline-marca"
        />
        <button type="submit" className="rounded-lg bg-marca px-4 text-sm font-semibold text-white hover:bg-marca-oscuro">
          Preguntar
        </button>
      </form>
      <div className="mt-3 flex flex-wrap gap-2">
        {Object.keys(respuestas).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => preguntar(r)}
            className="min-h-8 rounded-full border border-crema/25 px-3 text-[13px] hover:bg-crema/10"
          >
            {r}
          </button>
        ))}
      </div>
      {respuesta && (
        <p className="mt-3 rounded-lg bg-crema/8 p-3 text-sm leading-relaxed" style={{ background: "rgb(240 234 234 / 0.08)" }}>
          {respuesta}
        </p>
      )}
    </section>
  );
}
