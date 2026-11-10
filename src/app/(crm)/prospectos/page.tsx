import { prospectos } from "@/lib/datos";
import { Campo, Etiqueta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

export default function Prospectos() {
  return (
    <>
      <Titulo titulo="Prospectos" subtitulo="Personas interesadas que aún no tienen póliza" />

      <details className="tarjeta p-4" open>
        <summary className="condensado cursor-pointer text-lg font-bold">Nuevo prospecto</summary>
        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          <Campo etiqueta="Nombre"><input className="campo" /></Campo>
          <Campo etiqueta="Teléfono"><input className="campo" /></Campo>
          <Campo etiqueta="Email"><input className="campo" type="email" /></Campo>
          <Campo etiqueta="Área">
            <select className="campo"><option>Salud</option><option>Vida</option><option>Medicare</option><option>Dental</option></select>
          </Campo>
          <Campo etiqueta="Fuente">
            <select className="campo"><option>Facebook</option><option>Referido</option><option>WhatsApp</option><option>Llamada</option><option>Web</option></select>
          </Campo>
          <Campo etiqueta="Nota"><input className="campo" /></Campo>
        </div>
        <div className="mt-3"><BotonDemo variante="principal">Guardar prospecto</BotonDemo></div>
      </details>

      <section className="tarjeta overflow-x-auto">
        <table className="tabla">
          <thead>
            <tr><th>Llamado</th><th>Nombre</th><th>Área</th><th>Contacto</th><th>Fuente</th><th>Nota</th><th></th></tr>
          </thead>
          <tbody>
            {prospectos.map((p) => (
              <tr key={p.id}>
                <td><input type="checkbox" defaultChecked={p.llamado} aria-label={`Marcar a ${p.nombre} como llamado`} className="size-[18px] accent-marca" /></td>
                <td className="font-semibold whitespace-nowrap">{p.nombre}</td>
                <td><Etiqueta>{p.area}</Etiqueta></td>
                <td className="whitespace-nowrap">
                  <span className="block">{p.telefono}</span>
                  <span className="apagado block text-xs">{p.email || "—"}</span>
                </td>
                <td>{p.fuente}</td>
                <td className="apagado min-w-48">{p.nota || "—"}</td>
                <td>
                  <div className="flex justify-end gap-2">
                    <BotonDemo>WhatsApp</BotonDemo>
                    <BotonDemo variante="suave" aviso="En la versión real, el prospecto pasaría a Clientes con sus datos.">Convertir en cliente</BotonDemo>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
