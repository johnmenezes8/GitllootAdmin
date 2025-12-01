import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  AlertTriangle, 
  ShieldAlert, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  UserX,
  Eye
} from "lucide-react";

const reports = [
  {
    id: "RPT-1024",
    target: "User: Scammer123",
    type: "Fraude",
    priority: "Alta",
    status: "Pendente",
    reporter: "VictimUser",
    date: "10 min ago",
    description: "User attempted to scam me with a fake item link.",
  },
  {
    id: "RPT-1023",
    target: "Ad: Rare Knife",
    type: "Item Falso",
    priority: "Média",
    status: "Em Análise",
    reporter: "Observer99",
    date: "1 hour ago",
    description: "The screenshot looks edited, item float value doesn't match.",
  },
  {
    id: "RPT-1022",
    target: "User: ToxicPlayer",
    type: "Comportamento",
    priority: "Baixa",
    status: "Resolvido",
    reporter: "FriendlyGamer",
    date: "1 day ago",
    description: "Harassment in chat messages.",
  },
  {
    id: "RPT-1021",
    target: "Transaction: #9988",
    type: "Chargeback",
    priority: "Alta",
    status: "Pendente",
    reporter: "System",
    date: "2 hours ago",
    description: "Payment reversed by payment processor.",
  },
  {
    id: "RPT-1020",
    target: "Ad: Cheap Gold",
    type: "Scam",
    priority: "Alta",
    status: "Resolvido",
    reporter: "GoldSeeker",
    date: "3 days ago",
    description: "Seller asks for payment outside platform.",
  }
];

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-white flex items-center gap-2">
              <ShieldAlert className="w-8 h-8 text-primary" />
              Denúncias & Segurança
            </h1>
            <p className="text-muted-foreground">Gerencie denúncias de usuários, anúncios e transações suspeitas.</p>
          </div>
          <div className="flex gap-2">
             <Button variant="destructive" className="shadow-lg shadow-destructive/20">
               <AlertTriangle className="w-4 h-4 mr-2" />
               Alertas Urgentes (3)
             </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
           <Card className="glass-card border-border/50 md:col-span-3">
             <CardHeader className="pb-2">
               <div className="flex items-center justify-between">
                 <CardTitle>Fila de Denúncias</CardTitle>
                 <div className="flex items-center gap-2">
                   <div className="relative w-64">
                     <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                     <Input placeholder="Buscar denúncias..." className="pl-9 h-9 bg-secondary/50 border-border" />
                   </div>
                   <Button variant="outline" size="sm" className="h-9"><Filter className="w-4 h-4 mr-2" /> Filtros</Button>
                 </div>
               </div>
             </CardHeader>
             <CardContent>
               <Tabs defaultValue="all" className="w-full">
                 <TabsList className="mb-4 bg-secondary/50">
                   <TabsTrigger value="all">Todas</TabsTrigger>
                   <TabsTrigger value="pending">Pendentes</TabsTrigger>
                   <TabsTrigger value="analysis">Em Análise</TabsTrigger>
                   <TabsTrigger value="resolved">Resolvidas</TabsTrigger>
                 </TabsList>
                 
                 <div className="space-y-4">
                   {reports.map((report) => (
                     <div key={report.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg border border-border/50 bg-card hover:bg-secondary/20 transition-colors gap-4">
                       <div className="flex items-start gap-4">
                         <div className={`p-2 rounded-full mt-1 ${
                           report.priority === 'Alta' ? 'bg-rose-500/10 text-rose-400' : 
                           report.priority === 'Média' ? 'bg-amber-500/10 text-amber-400' : 
                           'bg-blue-500/10 text-blue-400'
                         }`}>
                           <AlertTriangle className="w-5 h-5" />
                         </div>
                         <div>
                           <div className="flex items-center gap-2 mb-1">
                             <span className="font-bold text-white">{report.id}</span>
                             <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">{report.type}</Badge>
                             <Badge variant="outline" className={`
                               ${report.priority === 'Alta' ? 'border-rose-500/30 text-rose-400' : ''}
                               ${report.priority === 'Média' ? 'border-amber-500/30 text-amber-400' : ''}
                               ${report.priority === 'Baixa' ? 'border-blue-500/30 text-blue-400' : ''}
                             `}>{report.priority}</Badge>
                           </div>
                           <h4 className="font-medium text-foreground">{report.target}</h4>
                           <p className="text-sm text-muted-foreground mt-1 max-w-xl">{report.description}</p>
                           <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                             <span className="flex items-center"><UserX className="w-3 h-3 mr-1" /> Denunciante: {report.reporter}</span>
                             <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {report.date}</span>
                           </div>
                         </div>
                       </div>
                       
                       <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
                         {report.status === 'Pendente' && (
                           <>
                             <Button size="sm" className="flex-1 md:flex-none bg-primary hover:bg-primary/90">Analisar</Button>
                             <Button size="sm" variant="outline" className="flex-1 md:flex-none border-rose-500/50 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300">Banir</Button>
                           </>
                         )}
                         {report.status === 'Em Análise' && (
                            <Button size="sm" className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-700">Resolver</Button>
                         )}
                         {report.status === 'Resolvido' && (
                            <Button size="sm" variant="secondary" className="flex-1 md:flex-none">Detalhes</Button>
                         )}
                       </div>
                     </div>
                   ))}
                 </div>
               </Tabs>
             </CardContent>
           </Card>

           <div className="space-y-6">
             <Card className="glass-card border-border/50">
               <CardHeader>
                 <CardTitle>Estatísticas</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <div className="flex justify-between items-center">
                   <span className="text-sm text-muted-foreground">Total Denúncias</span>
                   <span className="font-bold text-white">1,248</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-sm text-muted-foreground">Pendentes</span>
                   <span className="font-bold text-amber-400">42</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-sm text-muted-foreground">Resolvidas (Hoje)</span>
                   <span className="font-bold text-emerald-400">15</span>
                 </div>
                 <div className="h-px bg-border/50 my-2" />
                 <div className="space-y-2">
                   <span className="text-xs uppercase text-muted-foreground font-semibold">Top Motivos</span>
                   <div className="flex justify-between text-sm">
                     <span>Fraude/Scam</span>
                     <span className="text-rose-400">45%</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span>Item Falso</span>
                     <span className="text-primary">25%</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span>Comportamento</span>
                     <span className="text-blue-400">15%</span>
                   </div>
                 </div>
               </CardContent>
             </Card>

             <Card className="glass-card border-border/50 bg-rose-950/10">
               <CardHeader>
                 <CardTitle className="text-rose-400 flex items-center gap-2">
                   <AlertTriangle className="w-5 h-5" /> Ações Automáticas
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-3">
                 <div className="flex items-center justify-between">
                   <span className="text-sm font-medium">Auto-Block Reincidentes</span>
                   <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">Ativo</Badge>
                 </div>
                 <div className="flex items-center justify-between">
                   <span className="text-sm font-medium">Alerta de Chargeback</span>
                   <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">Ativo</Badge>
                 </div>
               </CardContent>
               <CardFooter>
                 <Button variant="outline" size="sm" className="w-full border-rose-500/30 hover:bg-rose-500/10 text-rose-400">Configurar Regras</Button>
               </CardFooter>
             </Card>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
