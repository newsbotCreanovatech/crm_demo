import { FileSignature, FileText, Folder, Receipt } from "lucide-react";
import { clientes } from "@/lib/datos";
import { Tarjeta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

const generadores = [
  { icono: FileSignature, titulo: "Carta de consentimiento", texto: "Con el logo de la agencia, los datos del cliente y la vigencia en meses. Se descarga en PDF o se envía por WhatsApp para firmar." },
  { icono: Receipt, titulo: "Declaración de ingresos", texto: "Carta formal al Marketplace con los ingresos estimados del cliente, lista para firmar." },
  { icono: FileText, titulo: "Plantillas PDF propias", texto: "Sube un PDF de la aseguradora y el sistema lo rellena con los datos de la ficha." },
];

export default function Documentos() {
  return (
    <>
      <Titulo titulo="Documentos y cartas" subtitulo="Una carpeta por cliente y año, y cartas que se rellenan solas" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
        {generadores.map((g) => (
          <section key={g.titulo} className="tarjeta flex flex-col gap-2 p-4">
            <g.icono size={22} className="text-marca" aria-hidden="true" />
            <h2 className="condensado text-lg font-bold">{g.titulo}</h2>
            <p className="apagado flex-1 text-sm">{g.texto}</p>
            <div><BotonDemo variante="suave">Crear</BotonDemo></div>
          </section>
        ))}
      </div>
      <Tarjeta titulo="Carpetas de clientes" accion={<BotonDemo variante="principal">Subir archivo</BotonDemo>}>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
          {clientes.slice(0, 8).map((c, i) => (
            <li key={c.id} className="flex items-center gap-3 rounded-lg border border-tinta/10 p-3 text-sm hover:border-marca/40">
              <Folder size={22} className="text-marca" aria-hidden="true" />
              <div className="min-w-0">
                <div className="truncate font-semibold">{c.nombre}</div>
                <div className="apagado text-xs">2026 · {(i % 4) + 2} archivos</div>
              </div>
            </li>
          ))}
        </ul>
      </Tarjeta>
    </>
  );
}
