import { historial } from "@/lib/datos";
import { Titulo } from "@/components/ui";

export default function Historial() {
  return (
    <>
      <Titulo titulo="Historial de cambios" subtitulo="Quién hizo qué y cuándo. No se puede borrar." />
      <section className="tarjeta overflow-x-auto">
        <table className="tabla">
          <thead><tr><th>Fecha</th><th>Usuario</th><th>Qué hizo</th></tr></thead>
          <tbody>
            {historial.map((h, i) => (
              <tr key={i}>
                <td className="whitespace-nowrap tabular-nums">{h.fecha}</td>
                <td className="whitespace-nowrap font-semibold">{h.usuario}</td>
                <td>{h.accion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
