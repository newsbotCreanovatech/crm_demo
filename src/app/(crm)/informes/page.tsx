import { Cifra, Tarjeta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

const meses = [
  { m: "Jun", n: 6 }, { m: "Jul", n: 9 }, { m: "Ago", n: 7 }, { m: "Sep", n: 12 }, { m: "Oct", n: 18 }, { m: "Nov", n: 23 },
];

const porAgente = [
  { nombre: "Laura Gómez", ventas: 58, horas: "31 h" },
  { nombre: "Carlos Méndez", ventas: 41, horas: "27 h" },
  { nombre: "Sofía Herrera", ventas: 28, horas: "22 h" },
];

const entradas = [
  { fecha: "10 nov.", usuario: "Laura Gómez", entrada: "08:47", salida: "11:17" },
  { fecha: "9 nov.", usuario: "Carlos Méndez", entrada: "10:18", salida: "—" },
  { fecha: "9 nov.", usuario: "Laura Gómez", entrada: "09:46", salida: "18:02" },
  { fecha: "8 nov.", usuario: "Sofía Herrera", entrada: "08:16", salida: "14:48" },
];

export default function Informes() {
  const max = Math.max(...meses.map((x) => x.n));
  return (
    <>
      <Titulo titulo="Informes" subtitulo="Del 1 de junio al 10 de noviembre de 2026">
        <BotonDemo>Descargar PDF</BotonDemo>
      </Titulo>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-3">
        <Cifra etiqueta="Pólizas nuevas" valor={75} destacada />
        <Cifra etiqueta="Tasa de aprobación" valor="78 %" />
        <Cifra etiqueta="Cancelaciones" valor={12} />
        <Cifra etiqueta="Prospectos convertidos" valor="34 %" />
      </div>
      <div className="flex flex-wrap items-start gap-5">
        <Tarjeta titulo="Pólizas aprobadas por mes" className="min-w-0 flex-[2_1_440px]">
          <div className="flex h-52 items-end gap-3 border-b border-tinta/10 pb-0">
            {meses.map((x) => (
              <div key={x.m} className="flex flex-1 flex-col items-center justify-end gap-1 self-stretch">
                <span className="text-xs font-semibold">{x.n}</span>
                <div className="w-full max-w-12 rounded-t-md bg-marca" style={{ height: `${(x.n / max) * 80}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex gap-3">
            {meses.map((x) => <span key={x.m} className="apagado flex-1 text-center text-xs">{x.m}</span>)}
          </div>
        </Tarjeta>
        <Tarjeta titulo="Por agente" className="min-w-0 flex-[1_1_300px]">
          <table className="tabla">
            <thead><tr><th>Agente</th><th>Pólizas</th><th>Conectado</th></tr></thead>
            <tbody>
              {porAgente.map((a) => (
                <tr key={a.nombre}><td className="font-semibold">{a.nombre}</td><td>{a.ventas}</td><td>{a.horas}</td></tr>
              ))}
            </tbody>
          </table>
        </Tarjeta>
      </div>
      <Tarjeta titulo="Entradas y salidas del equipo">
        <div className="overflow-x-auto">
          <table className="tabla">
            <thead><tr><th>Fecha</th><th>Usuario</th><th>Primera entrada</th><th>Última salida</th></tr></thead>
            <tbody>
              {entradas.map((e, i) => (
                <tr key={i}><td>{e.fecha}</td><td className="font-semibold">{e.usuario}</td><td>{e.entrada}</td><td>{e.salida}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Tarjeta>
    </>
  );
}
