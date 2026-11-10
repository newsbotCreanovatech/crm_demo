import { ExternalLink } from "lucide-react";
import { accesos } from "@/lib/datos";
import { Titulo } from "@/components/ui";

export default function Aseguradoras() {
  return (
    <>
      <Titulo titulo="Aseguradoras y portales" subtitulo="Accesos directos a cotizadores y portales que usa la agencia" />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
        {accesos.map((a) => (
          <li key={a.nombre}>
            <a
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="tarjeta flex items-center gap-3 p-4 transition-colors hover:!border-marca"
            >
              <div className="condensado flex size-10 shrink-0 items-center justify-center rounded-lg bg-marca/10 font-bold text-marca-oscuro">
                {a.nombre[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold">{a.nombre}</div>
                <div className="apagado text-sm">{a.detalle}</div>
              </div>
              <ExternalLink size={16} className="apagado" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
