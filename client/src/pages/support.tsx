import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  MessageCircle,
  Send,
  Star,
  MoreVertical
} from "lucide-react";

const tickets = [
  {
    id: "TKT-204",
    subject: "Não recebi meu item",
    user: "SadGamer",
    category: "Itens não recebidos",
    status: "Aberto",
    priority: "Alta",
    date: "10 min ago",
    lastMsg: "User: Já se passaram 24 horas e nada...",
    unread: true
  },
  {
    id: "TKT-203",
    subject: "Erro no pagamento",
    user: "BuyerBob",
    category: "Financeiro/Escrow",
    status: "Em Andamento",
    priority: "Média",
    date: "2 hours ago",
    lastMsg: "Support: Estamos verificando com o gateway.",
    unread: false
  },
  {
    id: "TKT-202",
    subject: "Dúvida sobre taxas",
    user: "NewSeller",
    category: "Suporte Técnico",
    status: "Resolvido",
    priority: "Baixa",
    date: "1 day ago",
    lastMsg: "System: Ticket encerrado.",
    rating: 5,
    unread: false
  },
  {
    id: "TKT-201",
    subject: "Denúncia de usuário",
    user: "Vigilante",
    category: "Problemas com compra",
    status: "Pendente",
    priority: "Alta",
    date: "1 day ago",
    lastMsg: "User: Tenho prints da conversa.",
    unread: true
  }
];

export default function SupportPage() {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6">
        <div className="flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-3xl font-bold font-display text-white flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              Suporte & Atendimento
            </h1>
            <p className="text-muted-foreground">Central de tickets e chat com usuários.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
             <Filter className="w-4 h-4 mr-2" /> Configurar Respostas Rápidas
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6 h-full overflow-hidden">
          {/* Ticket List */}
          <Card className="col-span-4 glass-card border-border/50 flex flex-col h-full">
            <CardHeader className="pb-3 shrink-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Buscar tickets..." className="pl-9 bg-secondary/50 border-border" />
              </div>
              <Tabs defaultValue="open" className="w-full mt-3">
                <TabsList className="w-full bg-secondary/50 grid grid-cols-3">
                  <TabsTrigger value="open">Abertos</TabsTrigger>
                  <TabsTrigger value="pending">Pendentes</TabsTrigger>
                  <TabsTrigger value="resolved">Resolvidos</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto space-y-2 p-3">
              {tickets.map((ticket) => (
                <div key={ticket.id} className={`p-3 rounded-lg border cursor-pointer transition-all hover:bg-secondary/40 ${ticket.unread ? 'bg-secondary/20 border-primary/30' : 'bg-transparent border-border/50'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-mono text-xs text-muted-foreground">{ticket.id}</span>
                    <span className="text-xs text-muted-foreground">{ticket.date}</span>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`font-medium text-sm truncate ${ticket.unread ? 'text-white' : 'text-muted-foreground'}`}>{ticket.subject}</h4>
                    {ticket.unread && <div className="w-2 h-2 rounded-full bg-primary shrink-0 ml-2" />}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-[10px] h-5 px-1 bg-secondary/50 border-border">{ticket.category}</Badge>
                    <Badge variant="outline" className={`text-[10px] h-5 px-1 
                      ${ticket.priority === 'Alta' ? 'border-rose-500/30 text-rose-400' : ''}
                      ${ticket.priority === 'Média' ? 'border-amber-500/30 text-amber-400' : ''}
                      ${ticket.priority === 'Baixa' ? 'border-blue-500/30 text-blue-400' : ''}
                    `}>{ticket.priority}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{ticket.lastMsg}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="col-span-8 glass-card border-border/50 flex flex-col h-full">
            <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?u=sadgamer" />
                  <AvatarFallback>SG</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">Não recebi meu item (TKT-204)</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    SadGamer • <span className="text-primary">Online</span>
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Resolver Ticket
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
              {/* Chat Messages */}
              <div className="flex justify-center">
                <Badge variant="outline" className="bg-secondary/30 text-muted-foreground border-border">Ticket criado em 01/12/2025 10:30</Badge>
              </div>
              
              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                   <AvatarFallback>SG</AvatarFallback>
                </Avatar>
                <div className="bg-secondary/50 border border-border p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Olá, comprei uma skin de CS:GO do vendedor Scammer123 há 24 horas e ele ainda não enviou a trade offer. O dinheiro já saiu da minha conta.</p>
                  <span className="text-[10px] text-muted-foreground mt-1 block">10:32 AM</span>
                </div>
              </div>

              <div className="flex gap-3 flex-row-reverse">
                <Avatar className="w-8 h-8 bg-primary">
                   <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p className="text-sm text-white">Olá! Sinto muito pelo transtorno. Vou verificar o status da transação agora mesmo. Você poderia me informar o ID da transação?</p>
                  <span className="text-[10px] text-primary/70 mt-1 block">10:35 AM</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Avatar className="w-8 h-8">
                   <AvatarFallback>SG</AvatarFallback>
                </Avatar>
                <div className="bg-secondary/50 border border-border p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">O ID é TRX-998877.</p>
                  <span className="text-[10px] text-muted-foreground mt-1 block">10:36 AM</span>
                </div>
              </div>
              
              <div className="flex justify-center my-4">
                <span className="text-xs text-muted-foreground">SadGamer enviou um anexo: </span>
                <a href="#" className="text-xs text-primary ml-1 hover:underline">comprovante.jpg</a>
              </div>

            </CardContent>

            <CardFooter className="p-4 border-t border-border/50 bg-card shrink-0">
               <div className="flex gap-2 w-full">
                 <Button variant="ghost" size="icon" className="shrink-0">
                   <div className="rotate-45"><span className="text-lg">📎</span></div>
                 </Button>
                 <Textarea 
                    placeholder="Digite sua resposta... (Enter para enviar)" 
                    className="min-h-[40px] max-h-[120px] bg-secondary/50 border-border resize-none" 
                    rows={1}
                 />
                 <Button className="bg-primary hover:bg-primary/90 shrink-0">
                   <Send className="w-4 h-4" />
                 </Button>
               </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
