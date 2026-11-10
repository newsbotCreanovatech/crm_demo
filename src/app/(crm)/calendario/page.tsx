import { citas } from "@/lib/datos";
import { Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export default function Calendario() {
  // Noviembre de 2026 empieza en domingo: 6 huecos antes del día 1.
  const celdas: (number | null)[] = [...Array(6).fill(null), ...Array.from({ length: 30 }, (_, i) => i + 1)];
  while (celdas.length % 7) celdas.push(null);

  return (
    <>
      <Titulo titulo="Calendario" subtitulo="Tus citas y las de tu equipo, con recordatorios">
        <BotonDemo variante="principal"><Plus size={16} aria-hidden="true" /> Nueva cita</BotonDemo>
      </Titulo>

      <section className="tarjeta p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h2 className="condensado mr-auto text-xl font-bold">Noviembre 2026</h2>
          <BotonDemo><ChevronLeft size={16} aria-hidden="true" /> Anterior</BotonDemo>
          <BotonDemo>Siguiente <ChevronRight size={16} aria-hidden="true" /></BotonDemo>
        </div>
        <div className="overflow-x-auto">
          <div className="grid min-w-[700px] grid-cols-7 gap-1.5">
            {dias.map((d) => <div key={d} className="apagado px-1 text-xs font-semibold">{d}</div>)}
            {celdas.map((d, i) => {
              const delDia = citas.filter((c) => c.dia === d);
              return (
                <div
                  key={i}
                  className={`min-h-24 rounded-lg border p-1.5 text-xs ${
                    d === null ? "border-transparent" : d === 10 ? "border-marca bg-marca/5" : "border-tinta/8 bg-white"
                  }`}
                >
                  {d !== null && (
                    <>
                      <div className={`mb-1 font-semibold ${d === 10 ? "text-marca" : ""}`}>{d}</div>
                      {delDia.map((c) => (
                        <div key={c.hora + c.titulo} className="mb-1 truncate rounded bg-marca px-1.5 py-0.5 text-white" title={`${c.hora} ${c.titulo} · ${c.con}`}>
                          {c.hora} {c.titulo}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
