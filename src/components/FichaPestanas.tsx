"use client";

import { useState } from "react";
import { FileText, Upload } from "lucide-react";
import type { Cliente } from "@/lib/datos";
import { formatoFecha } from "@/lib/datos";
import { BotonDemo } from "./Avisos";
import { Campo, Etiqueta } from "./ui";

const pestanas = ["Póliza", "Familia", "Ingresos y pago", "Documentos", "Notas"] as const;

export function FichaPestanas({ c }: { c: Cliente }) {
  const [activa, setActiva] = useState<(typeof pestanas)[number]>("Póliza");

  return (
    <section className="tarjeta">
      <div role="tablist" aria-label="Secciones de la ficha" className="flex gap-1 overflow-x-auto border-b border-tinta/8 px-3 pt-2">
        {pestanas.map((p) => (
          <button
            key={p}
            role="tab"
            type="button"
            aria-selected={activa === p}
            onClick={() => setActiva(p)}
            className={`min-h-10 whitespace-nowrap border-b-2 px-3 text-sm font-semibold ${
              activa === p ? "border-marca text-marca" : "apagado border-transparent hover:text-tinta"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activa === "Póliza" && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            <Campo etiqueta="Aseguradora"><input className="campo" defaultValue={c.aseguradora} /></Campo>
            <Campo etiqueta="Plan"><input className="campo" defaultValue={c.plan} /></Campo>
            <Campo etiqueta="Nº de aplicación"><input className="campo" defaultValue={c.aplicacion} /></Campo>
            <Campo etiqueta="Estado">
              <select className="campo" defaultValue={c.estado}>
                <option>Borrador</option><option>En revisión</option><option>Faltan documentos</option>
                <option>Aprobada</option><option>Cancelada</option><option>Venta perdida</option>
              </select>
            </Campo>
            <Campo etiqueta="Crédito fiscal (USD/mes)"><input className="campo" defaultValue={c.credito} /></Campo>
            <Campo etiqueta="Prima del cliente (USD/mes)"><input className="campo" defaultValue={c.prima} /></Campo>
            <Campo etiqueta="Vigencia desde"><input className="campo" defaultValue="01/01/2026" /></Campo>
            <Campo etiqueta="Agente registrado"><input className="campo" defaultValue={c.agente} /></Campo>
          </div>
        )}

        {activa === "Familia" && (
          <>
            <div className="overflow-x-auto">
              <table className="tabla">
                <thead><tr><th>Nombre</th><th>Relación</th><th>Nacimiento</th><th>Pide seguro</th></tr></thead>
                <tbody>
                  {c.miembros.map((m) => (
                    <tr key={m.nombre}>
                      <td className="font-semibold">{m.nombre}</td>
                      <td>{m.relacion}</td>
                      <td>{formatoFecha(m.nacimiento)}</td>
                      <td>{m.aplica ? <Etiqueta>Sí</Etiqueta> : <span className="apagado">No</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3"><BotonDemo>Añadir miembro</BotonDemo></div>
          </>
        )}

        {activa === "Ingresos y pago" && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            <Campo etiqueta="Ocupación"><input className="campo" defaultValue="Atención al cliente" /></Campo>
            <Campo etiqueta="Tipo de empleo">
              <select className="campo" defaultValue="W2"><option>W2</option><option>1099</option><option>Sin empleo</option></select>
            </Campo>
            <Campo etiqueta="Empresa"><input className="campo" defaultValue="Empresa de ejemplo LLC" /></Campo>
            <Campo etiqueta="Ingreso anual (USD)"><input className="campo" defaultValue={c.ingresoAnual.toLocaleString("es-ES")} /></Campo>
            <Campo etiqueta="Forma de pago">
              <select className="campo" defaultValue="Mensual"><option>Mensual</option><option>Trimestral</option></select>
            </Campo>
            <Campo etiqueta="Método">
              <select className="campo" defaultValue="Tarjeta"><option>Tarjeta</option><option>Cuenta bancaria (ACH)</option></select>
            </Campo>
            <Campo etiqueta="Tarjeta"><input className="campo" defaultValue="•••• 4242" readOnly /></Campo>
            <Campo etiqueta="Día de pago"><input className="campo" defaultValue="15" /></Campo>
          </div>
        )}

        {activa === "Documentos" && (
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <BotonDemo variante="principal"><Upload size={16} aria-hidden="true" /> Subir documento</BotonDemo>
              <BotonDemo>Generar carta de consentimiento</BotonDemo>
              <BotonDemo>Generar declaración de ingresos</BotonDemo>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
              {["Identificación.pdf", "Prueba de ingresos.pdf", "Carta de consentimiento 2026.pdf", "Tarjeta del seguro.jpg"].map((d, i) => (
                <li key={d} className="flex items-center gap-3 rounded-lg border border-tinta/10 p-3 text-sm">
                  <FileText size={20} className="text-marca" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{d}</div>
                    <div className="apagado text-xs">Subido el {9 - i} nov. 2026</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activa === "Notas" && (
          <div className="flex flex-col gap-3">
            <Campo etiqueta="Nueva nota">
              <textarea className="campo" rows={3} placeholder="Escribe lo que hablaste con el cliente…" />
            </Campo>
            <div><BotonDemo variante="principal">Guardar nota</BotonDemo></div>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="rounded-lg bg-crema/60 p-3">
                <div className="apagado mb-1 text-xs">Laura Gómez · 9 nov. 2026, 15:27</div>
                Inscripción hecha por HealthSherpa. Crédito de {c.credito} USD, prima {c.prima} USD. Vigencia desde el 01/01/2026.
              </li>
              <li className="rounded-lg bg-crema/60 p-3">
                <div className="apagado mb-1 text-xs">Laura Gómez · 2 nov. 2026, 11:04</div>
                Prefiere que le escribamos por WhatsApp después de las 17:00.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
