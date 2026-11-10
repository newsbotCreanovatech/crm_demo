import { equipo, iniciales } from "@/lib/datos";
import { Avatar, Campo, Etiqueta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

export default function Equipo() {
  return (
    <>
      <Titulo titulo="Equipo y permisos" subtitulo="Cada agente ve solo sus clientes; el administrador lo ve todo" />
      <section className="tarjeta p-4">
        <h2 className="condensado mb-3 text-lg font-bold">Invitar a alguien</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-end gap-3">
          <Campo etiqueta="Nombre"><input className="campo" /></Campo>
          <Campo etiqueta="Email"><input className="campo" type="email" /></Campo>
          <Campo etiqueta="Rol">
            <select className="campo"><option>Agente</option><option>Administrador</option><option>Solo lectura</option></select>
          </Campo>
          <div><BotonDemo variante="principal" aviso="En la versión real se enviaría una invitación por email.">Enviar invitación</BotonDemo></div>
        </div>
      </section>
      <section className="tarjeta overflow-x-auto">
        <table className="tabla">
          <thead><tr><th>Usuario</th><th>Rol</th><th>Estado</th><th>Última conexión</th><th></th></tr></thead>
          <tbody>
            {equipo.map((u) => (
              <tr key={u.email}>
                <td>
                  <div className="flex items-center gap-2.5">
                    <Avatar texto={iniciales(u.nombre)} />
                    <span><span className="block font-semibold">{u.nombre}</span><span className="apagado block text-xs">{u.email}</span></span>
                  </div>
                </td>
                <td><Etiqueta>{u.rol}</Etiqueta></td>
                <td>{u.activo ? <span className="text-xs font-semibold text-marca">Activo</span> : <span className="apagado text-xs">Suspendido</span>}</td>
                <td>{u.ultimo}</td>
                <td className="text-right"><BotonDemo>Editar</BotonDemo></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
