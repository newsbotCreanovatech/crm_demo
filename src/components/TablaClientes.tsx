"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { agentes, clientes, formatoFecha, iniciales } from "@/lib/datos";
import { Avatar, Estado, Etiqueta } from "./ui";

const estados = ["Borrador", "En revisión", "Faltan documentos", "Aprobada", "Cancelada", "Venta perdida"];

export function TablaClientes() {
  const [texto, setTexto] = useState("");
  const [estado, setEstado] = useState("");
  const [agente, setAgente] = useState("");
  const [legal, setLegal] = useState("");

  const lista = useMemo(
    () =>
      clientes.filter(
        (c) =>
          (!texto || `${c.nombre} ${c.telefono} ${c.email} ${c.aplicacion}`.toLowerCase().includes(texto.toLowerCase())) &&
          (!estado || c.estado === estado) &&
          (!agente || c.agente === agente) &&
          (!legal || c.estatusLegal === legal)
      ),
    [texto, estado, agente, legal]
  );

  return (
    <section className="tarjeta">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3 border-b border-tinta/8 p-4">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Buscar</span>
          <input className="campo" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Nombre, teléfono o aplicación" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Estado</span>
          <select className="campo" value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="">Todos</option>
            {estados.map((e) => <option key={e}>{e}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Agente</span>
          <select className="campo" value={agente} onChange={(e) => setAgente(e.target.value)}>
            <option value="">Todos</option>
            {agentes.map((a) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium">Estatus legal</span>
          <select className="campo" value={legal} onChange={(e) => setLegal(e.target.value)}>
            <option value="">Todos</option>
            <option>Ciudadano</option>
            <option>Residente</option>
            <option>Permiso de trabajo</option>
          </select>
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="tabla">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Miembros</th>
              <th>Aseguradora y plan</th>
              <th>Estado</th>
              <th>Estatus legal</th>
              <th>Agente</th>
              <th>Fecha</th>
              <th>2027</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((c) => (
              <tr key={c.id}>
                <td>
                  <Link href={`/clientes/${c.id}`} className="flex items-center gap-2.5 hover:text-marca">
                    <Avatar texto={iniciales(c.nombre)} />
                    <span>
                      <span className="block font-semibold">{c.nombre}</span>
                      <span className="apagado block text-xs">{c.telefono}</span>
                    </span>
                  </Link>
                </td>
                <td>{c.miembros.length}</td>
                <td className="min-w-56">
                  <span className="block font-medium">{c.aseguradora}</span>
                  <span className="apagado block text-xs">{c.plan}</span>
                </td>
                <td><Estado estado={c.estado} /></td>
                <td><Etiqueta>{c.estatusLegal}</Etiqueta></td>
                <td className="whitespace-nowrap">{c.agente}</td>
                <td className="whitespace-nowrap">{formatoFecha(c.fecha)}</td>
                <td>{c.renovado2027 ? <span className="text-xs font-semibold text-marca">Renovado</span> : <span className="apagado text-xs">Pendiente</span>}</td>
              </tr>
            ))}
            {lista.length === 0 && (
              <tr><td colSpan={8} className="apagado py-10 text-center">No hay clientes con esos filtros.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="apagado flex items-center justify-between p-4 text-sm">
        <span>Mostrando {lista.length} de 163 clientes (demo con 10)</span>
        <span>Página 1 de 17</span>
      </div>
    </section>
  );
}
