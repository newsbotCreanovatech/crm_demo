"use client";

import { Bell, Plus, Search } from "lucide-react";
import { avisar } from "./Avisos";

export function Cabecera() {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-tinta/10 bg-white/70 px-4 py-3 backdrop-blur lg:px-7">
      <label className="flex min-h-[38px] flex-1 basis-64 items-center gap-2 rounded-lg border border-tinta/12 bg-white px-3 lg:max-w-md">
        <Search size={17} className="apagado shrink-0" aria-hidden="true" />
        <span className="sr-only">Buscar</span>
        <input
          type="search"
          placeholder="Buscar cliente, teléfono o nº de aplicación"
          className="w-full bg-transparent text-sm outline-none"
          onKeyDown={(e) => e.key === "Enter" && avisar("En la demo la búsqueda global no está activa.")}
        />
      </label>
      <label className="flex items-center gap-2 text-sm">
        <span className="apagado">Cartera</span>
        <select defaultValue="2026" className="campo !w-auto font-semibold">
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
        </select>
      </label>
      <button
        type="button"
        aria-label="Notificaciones"
        onClick={() => avisar("Tienes 2 WhatsApp sin responder y 1 tarea que vence hoy.")}
        className="relative flex size-[38px] items-center justify-center rounded-lg border border-tinta/12 bg-white hover:bg-tinta/5"
      >
        <Bell size={17} />
        <span className="absolute right-2 top-2 size-2 rounded-full bg-marca" />
      </button>
      <button
        type="button"
        onClick={() => avisar()}
        className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-marca px-3.5 text-sm font-semibold text-white hover:bg-marca-oscuro"
      >
        <Plus size={17} aria-hidden="true" /> Nuevo
      </button>
    </div>
  );
}
