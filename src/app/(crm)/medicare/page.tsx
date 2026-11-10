import { medicare, formatoFecha } from "@/lib/datos";
import { Cifra, Estado, Etiqueta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";
import { Plus } from "lucide-react";

export default function Medicare() {
  return (
    <>
      <Titulo titulo="Clientes Medicare" subtitulo="Mayores de 65 y planes Advantage, suplementos y medicamentos">
        <BotonDemo variante="principal"><Plus size={16} aria-hidden="true" /> Nuevo cliente Medicare</BotonDemo>
      </Titulo>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-3">
        <Cifra etiqueta="Clientes Medicare" valor={3} />
        <Cifra etiqueta="Cumplen 65 en 3 meses" valor={2} nota="prospectos a contactar" destacada />
        <Cifra etiqueta="Periodo de inscripción" valor="15 oct – 7 dic" />
      </div>
      <section className="tarjeta overflow-x-auto">
        <table className="tabla">
          <thead><tr><th>Cliente</th><th>Edad</th><th>Tipo</th><th>Plan</th><th>Estado</th><th>Efectiva</th></tr></thead>
          <tbody>
            {medicare.map((m) => (
              <tr key={m.id}>
                <td className="font-semibold">{m.nombre}</td>
                <td>{m.edad}</td>
                <td><Etiqueta>{m.parte}</Etiqueta></td>
                <td>{m.plan}</td>
                <td><Estado estado={m.estado} /></td>
                <td>{formatoFecha(m.efectiva)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
