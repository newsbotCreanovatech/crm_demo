"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutGrid, UserPlus, Users, HeartPulse, CheckSquare, CalendarDays, MessageCircle,
  FileText, RefreshCw, FolderOpen, Link2, BarChart3, GraduationCap, UserCog,
  ArrowDownUp, History, Menu as IconoMenu, X, LogOut,
} from "lucide-react";

const secciones = [
  {
    titulo: "Día a día",
    enlaces: [
      { href: "/", texto: "Panel", icono: LayoutGrid },
      { href: "/prospectos", texto: "Prospectos", icono: UserPlus, cuenta: 7 },
      { href: "/clientes", texto: "Clientes", icono: Users },
      { href: "/medicare", texto: "Medicare", icono: HeartPulse },
      { href: "/tareas", texto: "Tareas", icono: CheckSquare, cuenta: 4 },
      { href: "/calendario", texto: "Calendario", icono: CalendarDays },
      { href: "/mensajes", texto: "WhatsApp", icono: MessageCircle, cuenta: 2 },
    ],
  },
  {
    titulo: "Cartera",
    enlaces: [
      { href: "/polizas", texto: "Pólizas", icono: FileText },
      { href: "/renovaciones", texto: "Renovaciones 2027", icono: RefreshCw },
      { href: "/documentos", texto: "Documentos y cartas", icono: FolderOpen },
      { href: "/aseguradoras", texto: "Aseguradoras", icono: Link2 },
      { href: "/informes", texto: "Informes", icono: BarChart3 },
      { href: "/formacion", texto: "Formación", icono: GraduationCap },
    ],
  },
  {
    titulo: "Administración",
    enlaces: [
      { href: "/equipo", texto: "Equipo y permisos", icono: UserCog },
      { href: "/importar", texto: "Importar / exportar", icono: ArrowDownUp },
      { href: "/historial", texto: "Historial de cambios", icono: History },
    ],
  },
];

export function Menu() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);

  const activo = (href: string) => (href === "/" ? ruta === "/" : ruta.startsWith(href));

  return (
    <aside className="bg-tinta text-crema lg:sticky lg:top-0 lg:h-screen lg:w-60 lg:shrink-0">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="flex items-center gap-2.5 px-2.5 pb-3">
          <div className="condensado flex size-8 items-center justify-center rounded-lg bg-marca text-lg font-extrabold text-white">
            C
          </div>
          <div className="condensado text-lg font-bold leading-tight">CRM Seguros</div>
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            className="ml-auto flex size-10 items-center justify-center rounded-lg hover:bg-white/10 lg:hidden"
          >
            {abierto ? <X size={20} /> : <IconoMenu size={20} />}
          </button>
        </div>

        <nav
          aria-label="Menú principal"
          className={`${abierto ? "flex" : "hidden"} min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto lg:flex`}
        >
          {secciones.map((s) => (
            <div key={s.titulo} className="flex flex-col gap-0.5">
              <div className="px-2.5 pb-1 pt-3.5 text-[11px] uppercase tracking-wider text-crema/60">{s.titulo}</div>
              {s.enlaces.map((e) => {
                const Icono = e.icono;
                const on = activo(e.href);
                return (
                  <Link
                    key={e.href}
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    aria-current={on ? "page" : undefined}
                    className={`flex min-h-9 items-center gap-2.5 rounded-lg px-2.5 text-sm transition-colors ${
                      on ? "bg-marca text-white" : "text-crema/80 hover:bg-white/10 hover:text-crema"
                    }`}
                  >
                    <Icono size={17} aria-hidden="true" />
                    {e.texto}
                    {e.cuenta ? (
                      <span className={`ml-auto rounded-full px-1.5 text-xs ${on ? "bg-white/20" : "bg-white/15"}`}>
                        {e.cuenta}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className={`${abierto ? "flex" : "hidden"} mt-3 items-center gap-2.5 border-t border-white/10 px-2.5 pt-3.5 lg:flex`}>
          <div className="flex size-9 items-center justify-center rounded-full bg-white/15 text-xs font-bold">LG</div>
          <div className="text-[13px] leading-tight">
            <div className="font-semibold">Laura Gómez</div>
            <div className="text-crema/65">Agente · Admin</div>
          </div>
          <Link href="/entrar" aria-label="Cerrar sesión" className="ml-auto flex size-9 items-center justify-center rounded-lg text-crema/70 hover:bg-white/10 hover:text-crema">
            <LogOut size={17} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
