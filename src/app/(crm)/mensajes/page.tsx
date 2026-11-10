import { Titulo } from "@/components/ui";
import { ChatWhatsapp } from "@/components/ChatWhatsapp";

export default function Mensajes() {
  return (
    <>
      <Titulo titulo="WhatsApp" subtitulo="Todas las conversaciones con clientes en un solo sitio · 2 sin responder" />
      <ChatWhatsapp />
    </>
  );
}
