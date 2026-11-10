import Link from "next/link";

export default function Entrar() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-tinta p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-6">
        <div className="mb-5 flex items-center gap-2.5">
          <div className="condensado flex size-9 items-center justify-center rounded-lg bg-marca text-lg font-extrabold text-white">C</div>
          <div className="condensado text-xl font-bold">CRM Seguros</div>
        </div>
        <h1 className="condensado text-2xl font-extrabold">Entrar</h1>
        <p className="apagado mb-4 text-sm">Demo: pulsa «Entrar», no hace falta contraseña.</p>
        <form action="/" className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Email</span>
            <input className="campo" type="email" defaultValue="laura@tuagencia.com" readOnly />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Contraseña</span>
            <input className="campo" type="password" placeholder="No hace falta en la demo" />
          </label>
          <button type="submit" className="mt-1 min-h-10 rounded-lg bg-marca text-sm font-semibold text-white hover:bg-marca-oscuro">Entrar</button>
        </form>
        <Link href="/" className="mt-3 block text-center text-sm text-marca hover:underline">Ir directamente al panel</Link>
      </div>
    </main>
  );
}
