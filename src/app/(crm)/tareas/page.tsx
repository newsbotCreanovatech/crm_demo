import { agentes, formatoFecha, tareas } from "@/lib/datos";
import { Campo, Etiqueta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

export default function Tareas() {
  return (
    <>
      <Titulo titulo="Tareas" subtitulo="4 abiertas · 1 vence hoy" />
      <div className="flex flex-wrap items-start gap-5">
        <section className="tarjeta flex min-w-0 flex-[1_1_280px] flex-col gap-3 p-4">
          <h2 className="condensado text-lg font-bold">Nueva tarea</h2>
          <Campo etiqueta="Título"><input className="campo" placeholder="Ej.: llamar al cliente" /></Campo>
          <Campo etiqueta="Descripción"><textarea className="campo" rows={3} /></Campo>
          <div className="grid grid-cols-2 gap-3">
            <Campo etiqueta="Vence"><input type="date" className="campo" /></Campo>
            <Campo etiqueta="Prioridad">
              <select className="campo" defaultValue="Normal"><option>Baja</option><option>Normal</option><option>Alta</option></select>
            </Campo>
          </div>
          <Campo etiqueta="Asignar a">
            <select className="campo">{agentes.map((a) => <option key={a}>{a}</option>)}</select>
          </Campo>
          <div><BotonDemo variante="principal">Crear tarea</BotonDemo></div>
        </section>

        <div className="flex min-w-0 flex-[2_1_520px] flex-col gap-3">
          <div className="tarjeta flex flex-wrap items-end gap-3 p-3">
            <Campo etiqueta="Buscar" ancho="flex-1 basis-48"><input className="campo" placeholder="Título o descripción" /></Campo>
            <Campo etiqueta="Estado"><select className="campo"><option>Abiertas</option><option>Hechas</option><option>Todas</option></select></Campo>
            <label className="flex min-h-[38px] items-center gap-2 text-sm"><input type="checkbox" className="size-[18px] accent-marca" /> Solo mis tareas</label>
          </div>
          {tareas.map((t) => (
            <article key={t.id} className="tarjeta p-4">
              <div className="flex flex-wrap items-start gap-3">
                <input type="checkbox" defaultChecked={t.hecha} aria-label={`Marcar «${t.titulo}» como hecha`} className="mt-1 size-[18px] accent-marca" />
                <div className="min-w-0 flex-1">
                  <h3 className={`font-semibold ${t.hecha ? "line-through opacity-60" : ""}`}>{t.titulo}</h3>
                  <p className="apagado text-sm">{t.detalle}</p>
                  <div className="apagado mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                    <span>Asignada a <b className="text-tinta">{t.asignada}</b></span>
                    <span>Creada por {t.creador}</span>
                    <span>Vence {formatoFecha(t.vence)}</span>
                  </div>
                </div>
                <Etiqueta>{t.prioridad}</Etiqueta>
              </div>
              {t.checklist.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5 border-t border-tinta/8 pt-3 text-sm">
                  {t.checklist.map((i, n) => (
                    <li key={i}><label className="flex items-center gap-2"><input type="checkbox" defaultChecked={n === 0} className="size-4 accent-marca" />{i}</label></li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
