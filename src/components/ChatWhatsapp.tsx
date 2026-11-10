"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { clientes, conversaciones, iniciales, plantillasWhatsapp } from "@/lib/datos";
import { Avatar } from "./ui";
import { avisar } from "./Avisos";

export function ChatWhatsapp() {
  const [abierta, setAbierta] = useState(conversaciones[0].id);
  const [extra, setExtra] = useState<Record<string, { texto: string; hora: string }[]>>({});
  const [texto, setTexto] = useState("");
  const conv = conversaciones.find((c) => c.id === abierta)!;
  const cliente = clientes.find((c) => c.nombre === conv.nombre);

  const enviar = (t: string) => {
    if (!t.trim()) return;
    setExtra({ ...extra, [abierta]: [...(extra[abierta] ?? []), { texto: t, hora: "ahora" }] });
    setTexto("");
    avisar("En la demo el mensaje no se envía de verdad.");
  };

  return (
    <section className="tarjeta flex min-h-[560px] flex-wrap overflow-hidden">
      <ul className="flex-[1_1_260px] border-b border-tinta/8 md:border-b-0 md:border-r">
        {conversaciones.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => setAbierta(c.id)}
              className={`flex w-full items-center gap-3 border-b border-tinta/5 px-4 py-3 text-left ${abierta === c.id ? "bg-marca/5" : "hover:bg-tinta/[0.03]"}`}
            >
              <Avatar texto={iniciales(c.nombre)} />
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold">{c.nombre}</span>
                  <span className="apagado shrink-0 text-xs">{c.hace}</span>
                </span>
                <span className="apagado block truncate text-[13px]">{c.mensajes.at(-1)?.texto}</span>
              </span>
              {c.sinLeer > 0 && <span className="rounded-full bg-marca px-1.5 text-xs font-bold text-white">{c.sinLeer}</span>}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex min-w-0 flex-[2_1_420px] flex-col">
        <div className="flex items-center gap-3 border-b border-tinta/8 px-4 py-3">
          <Avatar texto={iniciales(conv.nombre)} />
          <div className="min-w-0 flex-1">
            <div className="font-semibold">{conv.nombre}</div>
            <div className="apagado text-xs">WhatsApp Business · número de la agencia</div>
          </div>
          {cliente && <Link href={`/clientes/${cliente.id}`} className="text-sm text-marca hover:underline">Ver ficha</Link>}
        </div>
        <div className="flex flex-1 flex-col gap-2 bg-crema/40 p-4">
          {[...conv.mensajes, ...(extra[abierta] ?? []).map((m) => ({ ...m, de: "agente" }))].map((m, i) => (
            <div
              key={i}
              className={`max-w-[75%] rounded-xl px-3 py-2 text-sm ${m.de === "agente" ? "self-end bg-marca text-white" : "self-start bg-white"}`}
            >
              {m.texto}
              <div className={`mt-0.5 text-right text-[11px] ${m.de === "agente" ? "text-white/75" : "apagado"}`}>{m.hora}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 border-t border-tinta/8 px-4 pt-3">
          {plantillasWhatsapp.map((p) => (
            <button key={p} type="button" onClick={() => setTexto(`[Plantilla] ${p}`)} className="min-h-8 rounded-full border border-marca/30 bg-marca/5 px-3 text-[13px] text-marca-oscuro hover:bg-marca/10">
              {p}
            </button>
          ))}
        </div>
        <form className="flex gap-2 p-4" onSubmit={(e) => { e.preventDefault(); enviar(texto); }}>
          <label htmlFor="msg" className="sr-only">Mensaje</label>
          <input id="msg" className="campo" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe un mensaje…" />
          <button type="submit" aria-label="Enviar" className="flex min-w-11 items-center justify-center rounded-lg bg-marca text-white hover:bg-marca-oscuro">
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
