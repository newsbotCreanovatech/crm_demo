import Link from "next/link";
import { clientes } from "@/lib/datos";
import { Cifra, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

export default function Renovaciones() {
  const aprobados = clientes.filter((c) => c.estado === "Aprobada");
  return (
    <>
      <Titulo titulo="Renovaciones 2027" subtitulo="Pasa cada cliente de 2026 a 2027 con su familia y sus documentos en un clic">
        <BotonDemo variante="principal" aviso="En la versión real se renovarían todos los clientes seleccionados.">Renovar seleccionados</BotonDemo>
      </Titulo>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-3">
        <Cifra etiqueta="Por renovar" valor={108} destacada />
        <Cifra etiqueta="Renovados" valor={19} nota="15 % de la cartera" />
        <Cifra etiqueta="Fin de la inscripción" valor="15 ene" nota="66 días" />
      </div>
      <section className="tarjeta overflow-x-auto">
        <table className="tabla">
          <thead><tr><th><span className="sr-only">Seleccionar</span></th><th>Cliente</th><th>Plan 2026</th><th>Miembros</th><th>Documentos</th><th>2027</th><th></th></tr></thead>
          <tbody>
            {aprobados.map((c) => (
              <tr key={c.id}>
                <td><input type="checkbox" disabled={c.renovado2027} aria-label={`Seleccionar a ${c.nombre}`} className="size-[18px] accent-marca" /></td>
                <td><Link href={`/clientes/${c.id}`} className="font-semibold hover:text-marca">{c.nombre}</Link></td>
                <td>{c.aseguradora} · {c.plan}</td>
                <td>{c.miembros.length}</td>
                <td>4 archivos</td>
                <td>{c.renovado2027 ? <span className="text-xs font-semibold text-marca">Renovado</span> : <span className="apagado text-xs">Pendiente</span>}</td>
                <td className="text-right">{!c.renovado2027 && <BotonDemo variante="suave">Renovar</BotonDemo>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
