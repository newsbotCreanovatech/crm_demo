import { Titulo } from "@/components/ui";
import { BotonDemo } from "@/components/Avisos";
import { TablaClientes } from "@/components/TablaClientes";
import { Plus, Download } from "lucide-react";

export default function Clientes() {
  return (
    <>
      <Titulo titulo="Clientes" subtitulo="Cartera 2026 · 163 aplicaciones, 315 personas cubiertas">
        <BotonDemo><Download size={16} aria-hidden="true" /> Exportar</BotonDemo>
        <BotonDemo variante="principal"><Plus size={16} aria-hidden="true" /> Nuevo cliente</BotonDemo>
      </Titulo>
      <TablaClientes />
    </>
  );
}
