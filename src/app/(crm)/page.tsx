import Link from "next/link";
import { Cifra, Estado, Tarjeta, Titulo } from "@/components/ui";
import { Asistente } from "@/components/Asistente";
import { BotonDemo } from "@/components/Avisos";
import { citas, clientes, conversaciones, estadosCartera, tareas } from "@/lib/datos";

export default function Panel() {
  const max = Math.max(...estadosCartera.map((e) => e.n));
  const porRenovar = clientes.filter((c) => c.estado === "Aprobada" && !c.renovado2027).slice(0, 3);
  const hoy = new Date("2026-11-10T12:00:00").toLocaleDateString("es-ES", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Madrid",
  });

  return (
    <>
      <Titulo titulo="Buenos días, Laura" subtitulo={`${hoy.charAt(0).toUpperCase()}${hoy.slice(1)} · Cartera 2026`} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-3">
        <Cifra etiqueta="Prospectos activos" valor={7} nota="2 nuevos esta semana" />
        <Cifra etiqueta="Pólizas aprobadas" valor={127} nota="de 163 aplicaciones" destacada />
        <Cifra etiqueta="Personas cubiertas" valor={315} nota="clientes + miembros" />
        <Cifra etiqueta="Faltan documentos" valor={7} nota={<Link href="/polizas" className="text-marca hover:underline">Ver quiénes</Link>} />
        <Cifra etiqueta="En revisión" valor={4} nota="en la aseguradora" />
        <Cifra etiqueta="Renovados 2027" valor="19" nota="de 127 (15 %)" />
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-5">
          <Tarjeta titulo="Pólizas por estado" accion={<Link href="/polizas" className="text-[13px] text-marca hover:underline">Ver todas</Link>}>
            <div className="flex flex-col gap-2.5 text-sm">
              {estadosCartera.map((e) => (
                <Link key={e.estado} href="/polizas" className="grid grid-cols-[140px_1fr_40px] items-center gap-3 rounded hover:bg-tinta/[0.03]">
                  <span>{e.estado}</span>
                  <span className="h-2.5 overflow-hidden rounded-full bg-tinta/5">
                    <span
                      className={`block h-full rounded-full ${
                        e.estado === "Aprobada" ? "bg-marca" : e.estado === "Cancelada" || e.estado === "Venta perdida" ? "bg-tinta/45" : "bg-marca/45"
                      }`}
                      style={{ width: `${Math.max(1.5, (e.n / max) * 100)}%` }}
                    />
                  </span>
                  <span className="text-right font-bold">{e.n}</span>
                </Link>
              ))}
            </div>
          </Tarjeta>

          <Tarjeta
            titulo="Renovaciones para 2027"
            accion={<BotonDemo>Renovar en bloque</BotonDemo>}
          >
            <p className="apagado -mt-2 text-sm">19 de 127 clientes ya renovados · la inscripción abierta acaba el 15 de enero</p>
            <div className="my-3.5 h-3 overflow-hidden rounded-full bg-tinta/5">
              <div className="h-full w-[15%] bg-marca" />
            </div>
            <div className="overflow-x-auto">
              <table className="tabla">
                <thead>
                  <tr><th>Cliente</th><th>Plan 2026</th><th>Miembros</th><th></th></tr>
                </thead>
                <tbody>
                  {porRenovar.map((c) => (
                    <tr key={c.id}>
                      <td><Link href={`/clientes/${c.id}`} className="font-semibold hover:text-marca">{c.nombre}</Link></td>
                      <td>{c.aseguradora} · {c.plan}</td>
                      <td>{c.miembros.length}</td>
                      <td className="text-right"><BotonDemo variante="suave">Renovar</BotonDemo></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tarjeta>

          <Asistente />
        </div>

        <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-5">
          <Tarjeta titulo="Tareas de hoy" accion={<Link href="/tareas" className="text-[13px] text-marca hover:underline">Todas</Link>}>
            <ul className="text-sm">
              {tareas.slice(0, 3).map((t) => (
                <li key={t.id} className="flex items-start gap-2.5 border-b border-tinta/5 py-2.5 last:border-0">
                  <input type="checkbox" defaultChecked={t.hecha} aria-label={`Marcar «${t.titulo}» como hecha`} className="mt-0.5 size-[18px] accent-marca" />
                  <div>
                    <div className={`font-semibold ${t.hecha ? "line-through opacity-60" : ""}`}>{t.titulo}</div>
                    <div className="apagado">{t.detalle} · prioridad {t.prioridad.toLowerCase()}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Tarjeta>

          <Tarjeta titulo="Próximas citas" accion={<Link href="/calendario" className="text-[13px] text-marca hover:underline">Calendario</Link>}>
            <ul className="flex flex-col gap-2.5 text-sm">
              {citas.slice(0, 3).map((c, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="condensado w-14 rounded-lg bg-marca/10 py-1.5 text-center font-bold text-marca-oscuro">
                    {c.dia === 10 ? c.hora : "Mañ."}
                  </div>
                  <div>
                    <div className="font-semibold">{c.titulo}</div>
                    <div className="apagado">{c.con} · {c.canal.toLowerCase()}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Tarjeta>

          <Tarjeta
            titulo="WhatsApp sin responder"
            accion={<span className="rounded-full bg-marca px-2 py-0.5 text-xs font-bold text-white">2</span>}
          >
            <ul className="flex flex-col gap-3 text-sm">
              {conversaciones.filter((c) => c.sinLeer).map((c) => (
                <li key={c.id}>
                  <Link href="/mensajes" className="block hover:text-marca">
                    <div className="font-semibold">{c.nombre} <span className="apagado font-normal">· hace {c.hace}</span></div>
                    <div className="apagado">{c.mensajes.at(-1)?.texto}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </Tarjeta>

          <Tarjeta titulo="Últimas aprobadas">
            <ul className="flex flex-col gap-2 text-sm">
              {clientes.filter((c) => c.estado === "Aprobada").slice(0, 3).map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-2">
                  <Link href={`/clientes/${c.id}`} className="truncate font-medium hover:text-marca">{c.nombre}</Link>
                  <Estado estado={c.estado} />
                </li>
              ))}
            </ul>
          </Tarjeta>
        </div>
      </div>
    </>
  );
}
