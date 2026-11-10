import { Menu } from "@/components/Menu";
import { Cabecera } from "@/components/Cabecera";

export default function LayoutCrm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Menu />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="bg-marca px-4 py-1.5 text-center text-xs font-medium text-white">
          Versión de demostración · todos los datos son ficticios
        </div>
        <Cabecera />
        <main className="flex flex-1 flex-col gap-5 px-4 py-5 lg:px-7 lg:py-6">{children}</main>
      </div>
    </div>
  );
}
