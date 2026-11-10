import Link from "next/link";
import { clientes, estadosCartera, formatoFecha } from "@/lib/datos";
import { Estado, Titulo } from "@/components/ui";

export default function Polizas() {
  return (
    <>
      <Titulo titulo="Pólizas" subtitulo="Cartera 2026 · 163 aplicaciones de 272 personas" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        {estadosCartera.map((e) => (
          <div key={e.estado} className={`tarjeta p-4 ${e.estado === "Aprobada" ? "!border-marca" : ""}`}>
            <div className="apagado text-xs uppercase tracking-wide">{e.estado}</div>
            <div className={`condensado mt-1 text-[32px] font-bold ${e.estado === "Aprobada" ? "text-marca" : ""}`}>{e.n}</div>
          </div>
        ))}
      </div>
      <section className="tarjeta">
        <h2 className="condensado px-4 pt-4 text-lg font-bold">Aplicaciones recientes</h2>
        <div className="overflow-x-auto">
          <table className="tabla">
            <thead><tr><th>Titular</th><th>Nº aplicación</th><th>Aseguradora</th><th>Plan</th><th>Estado</th><th>Fecha</th></tr></thead>
            <tbody>
              {[...clientes].sort((a, b) => b.fecha.localeCompare(a.fecha)).map((c) => (
                <tr key={c.id}>
                  <td><Link href={`/clientes/${c.id}`} className="font-semibold hover:text-marca">{c.nombre}</Link></td>
                  <td className="tabular-nums">{c.aplicacion}</td>
                  <td>{c.aseguradora}</td>
                  <td>{c.plan}</td>
                  <td><Estado estado={c.estado} /></td>
                  <td className="whitespace-nowrap">{formatoFecha(c.fecha)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
