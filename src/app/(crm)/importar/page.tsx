import { Upload } from "lucide-react";
import { Tarjeta, Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";

export default function Importar() {
  return (
    <>
      <Titulo titulo="Importar y exportar" subtitulo="Trae tu cartera desde Excel o descárgala cuando quieras" />
      <div className="flex flex-wrap items-start gap-5">
        <Tarjeta titulo="Importar desde Excel o CSV" className="min-w-0 flex-[1_1_380px]">
          <fieldset className="mb-3 flex flex-wrap gap-4 text-sm">
            <legend className="mb-1 font-medium">¿Qué vas a importar?</legend>
            <label className="flex items-center gap-2"><input type="radio" name="tipo" className="accent-marca" /> Prospectos</label>
            <label className="flex items-center gap-2"><input type="radio" name="tipo" defaultChecked className="accent-marca" /> Clientes con su familia</label>
          </fieldset>
          <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-dashed border-marca/30 bg-marca/[0.03] px-4 py-10 text-center">
            <Upload size={26} className="text-marca" aria-hidden="true" />
            <div className="font-semibold">Arrastra aquí tu archivo .xlsx o .csv</div>
            <div className="apagado text-sm">En el siguiente paso eliges qué columna va a cada campo</div>
            <BotonDemo variante="principal" className="mt-2">Elegir archivo</BotonDemo>
          </div>
        </Tarjeta>
        <Tarjeta titulo="Exportar" className="min-w-0 flex-[1_1_320px]">
          <fieldset className="mb-3 flex flex-col gap-2 text-sm">
            <legend className="mb-1 font-medium">¿Qué quieres descargar?</legend>
            <label className="flex items-center gap-2"><input type="radio" name="exp" defaultChecked className="accent-marca" /> Prospectos y clientes</label>
            <label className="flex items-center gap-2"><input type="radio" name="exp" className="accent-marca" /> Solo prospectos</label>
            <label className="flex items-center gap-2"><input type="radio" name="exp" className="accent-marca" /> Solo clientes (con miembros)</label>
          </fieldset>
          <fieldset className="mb-4 flex flex-col gap-2 text-sm">
            <legend className="mb-1 font-medium">Formato</legend>
            <label className="flex items-center gap-2"><input type="radio" name="fmt" defaultChecked className="accent-marca" /> Excel (varias hojas)</label>
            <label className="flex items-center gap-2"><input type="radio" name="fmt" className="accent-marca" /> PDF resumen</label>
          </fieldset>
          <BotonDemo variante="principal">Exportar ahora</BotonDemo>
        </Tarjeta>
      </div>
    </>
  );
}
