import { MessageCircle } from "lucide-react";

const FloatingChat = () => (
  <a
    href="https://wa.me/16727023922"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300 group"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm font-body font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-border/30">
      Chat with us
    </span>
  </a>
);

export default FloatingChat;
