import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, MapPin, MessageCircle, Phone, RefreshCw } from "lucide-react";
import { clientes, formatoFecha, iniciales } from "@/lib/datos";
import { Avatar, Estado, Etiqueta, Tarjeta } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";
import { FichaPestanas } from "@/components/FichaPestanas";

export function generateStaticParams() {
  return clientes.map((c) => ({ id: c.id }));
}

export default async function FichaCliente({ params }: PageProps<"/clientes/[id]">) {
  const { id } = await params;
  const c = clientes.find((x) => x.id === id);
  if (!c) notFound();

  return (
    <>
      <Link href="/clientes" className="apagado inline-flex w-fit items-center gap-1.5 text-sm hover:text-marca">
        <ArrowLeft size={16} aria-hidden="true" /> Clientes
      </Link>

      <section className="tarjeta flex flex-wrap items-center gap-4 p-4">
        <Avatar texto={iniciales(c.nombre)} grande />
        <div className="min-w-0 flex-1 basis-64">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="condensado text-[26px] font-extrabold leading-tight">{c.nombre}</h1>
            <Estado estado={c.estado} />
            <Etiqueta>{c.estatusLegal}</Etiqueta>
          </div>
          <div className="apagado mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1"><Phone size={14} aria-hidden="true" />{c.telefono}</span>
            <span className="inline-flex items-center gap-1"><Mail size={14} aria-hidden="true" />{c.email}</span>
            <span className="inline-flex items-center gap-1"><MapPin size={14} aria-hidden="true" />{c.ciudad}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/mensajes" className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-tinta/15 bg-white px-3.5 text-sm font-semibold hover:bg-tinta/5">
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp
          </Link>
          <BotonDemo variante="suave"><RefreshCw size={16} aria-hidden="true" /> Renovar a 2027</BotonDemo>
          <BotonDemo variante="principal">Guardar cambios</BotonDemo>
        </div>
      </section>

      <div className="flex flex-wrap items-start gap-5">
        <div className="min-w-0 flex-[2_1_520px]">
          <FichaPestanas c={c} />
        </div>
        <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-5">
          <Tarjeta titulo="Resumen">
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div><dt className="apagado text-xs">Crédito fiscal</dt><dd className="condensado text-2xl font-bold text-marca">{c.credito} $</dd></div>
              <div><dt className="apagado text-xs">Paga el cliente</dt><dd className="condensado text-2xl font-bold">{c.prima} $</dd></div>
              <div><dt className="apagado text-xs">Miembros</dt><dd className="font-semibold">{c.miembros.length}</dd></div>
              <div><dt className="apagado text-xs">Alta</dt><dd className="font-semibold">{formatoFecha(c.fecha)}</dd></div>
              <div><dt className="apagado text-xs">Agente</dt><dd className="font-semibold">{c.agente}</dd></div>
              <div><dt className="apagado text-xs">Renovación 2027</dt><dd className="font-semibold">{c.renovado2027 ? "Hecha" : "Pendiente"}</dd></div>
            </dl>
          </Tarjeta>
          <Tarjeta titulo="Actividad">
            <ol className="flex flex-col gap-3 border-l-2 border-marca/20 pl-4 text-sm">
              <li><div className="font-semibold">Ficha actualizada</div><div className="apagado text-xs">9 nov. · Laura Gómez</div></li>
              <li><div className="font-semibold">WhatsApp enviado: recordatorio</div><div className="apagado text-xs">5 nov. · automático</div></li>
              <li><div className="font-semibold">Documento subido: identificación</div><div className="apagado text-xs">2 nov. · Laura Gómez</div></li>
              <li><div className="font-semibold">Pasó de prospecto a cliente</div><div className="apagado text-xs">28 oct. · Laura Gómez</div></li>
            </ol>
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
