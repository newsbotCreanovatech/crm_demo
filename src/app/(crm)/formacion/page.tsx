import { PlayCircle } from "lucide-react";
import { cursos } from "@/lib/datos";
import { Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

export default function Formacion() {
  return (
    <>
      <Titulo titulo="Formación" subtitulo="Cursos internos para que cada agente nuevo aprenda el proceso de la agencia" />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
        {cursos.map((c) => (
          <li key={c.titulo} className="tarjeta flex flex-col gap-3 p-4">
            <PlayCircle size={24} className="text-marca" aria-hidden="true" />
            <div>
              <h2 className="condensado text-lg font-bold">{c.titulo}</h2>
              <p className="apagado text-sm">{c.lecciones} lecciones · {c.minutos} min</p>
            </div>
            <div>
              <div className="h-2 overflow-hidden rounded-full bg-tinta/5">
                <div className="h-full bg-marca" style={{ width: `${c.progreso}%` }} />
              </div>
              <div className="apagado mt-1 text-xs">{c.progreso === 100 ? "Completado" : `${c.progreso} % hecho`}</div>
            </div>
            <div><BotonDemo variante={c.progreso === 100 ? "normal" : "suave"}>{c.progreso === 0 ? "Empezar" : c.progreso === 100 ? "Repasar" : "Continuar"}</BotonDemo></div>
          </li>
        ))}
      </ul>
    </>
  );
}
