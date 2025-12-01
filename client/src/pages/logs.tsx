import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  FileText, 
  Search, 
  Filter, 
  Download,
  ShieldCheck,
  User,
  Gavel,
  LogIn,
  LayoutList
} from "lucide-react";

const logs = [
  { id: "LOG-5001", action: "Login", actor: "AdminUser", role: "Admin", target: "System", ip: "192.168.1.10", date: "2023-12-01 18:00:00", type: "Auth" },
  { id: "LOG-5002", action: "Ban User", actor: "ModSarah", role: "Moderator", target: "User: Scammer123", ip: "10.0.0.5", date: "2023-12-01 17:45:22", type: "Moderation" },
  { id: "LOG-5003", action: "Create Ad", actor: "GamerX", role: "User", target: "Ad: Rare Skin", ip: "172.16.0.1", date: "2023-12-01 17:30:15", type: "User Action" },
  { id: "LOG-5004", action: "Release Escrow", actor: "AdminUser", role: "Admin", target: "TRX-9988", ip: "192.168.1.10", date: "2023-12-01 16:15:00", type: "Financial" },
  { id: "LOG-5005", action: "Update Settings", actor: "AdminUser", role: "Admin", target: "Global Tax", ip: "192.168.1.10", date: "2023-12-01 15:00:00", type: "System" },
];

export default function LogsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display text-white flex items-center gap-2">
              <FileText className="w-8 h-8 text-primary" />
              Logs & Auditoria
            </h1>
            <p className="text-muted-foreground">Rastreamento completo de ações administrativas e de usuários.</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Logs
          </Button>
        </div>

        <Card className="glass-card border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex gap-2 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Buscar por ID, IP ou Usuário..." className="pl-9 bg-secondary/50 border-border" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] bg-secondary/50 border-border">
                    <SelectValue placeholder="Tipo de Ação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Ações</SelectItem>
                    <SelectItem value="auth">Autenticação</SelectItem>
                    <SelectItem value="moderation">Moderação</SelectItem>
                    <SelectItem value="financial">Financeiro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                   <SelectTrigger className="w-[180px] bg-secondary/50 border-border">
                     <SelectValue placeholder="Função" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="all">Todas Funções</SelectItem>
                     <SelectItem value="admin">Admin</SelectItem>
                     <SelectItem value="moderator">Moderator</SelectItem>
                     <SelectItem value="user">User</SelectItem>
                   </SelectContent>
                 </Select>
              </div>
              <Button variant="ghost" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead>Timestamp</TableHead>
                  <TableHead>ID Log</TableHead>
                  <TableHead>Ator</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Ação</TableHead>
                  <TableHead>Alvo</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead>Tipo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id} className="border-border hover:bg-secondary/20">
                    <TableCell className="text-muted-foreground text-xs font-mono">{log.date}</TableCell>
                    <TableCell className="font-mono text-xs">{log.id}</TableCell>
                    <TableCell className="font-medium text-white flex items-center gap-2">
                      {log.role === 'Admin' ? <ShieldCheck className="w-3 h-3 text-primary" /> : 
                       log.role === 'Moderator' ? <Gavel className="w-3 h-3 text-blue-400" /> : 
                       <User className="w-3 h-3 text-muted-foreground" />}
                      {log.actor}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-secondary/30 border-border text-xs">{log.role}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">{log.action}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{log.target}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{log.ip}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`
                        ${log.type === 'Auth' ? 'border-blue-500/30 text-blue-400' : ''}
                        ${log.type === 'Moderation' ? 'border-rose-500/30 text-rose-400' : ''}
                        ${log.type === 'Financial' ? 'border-emerald-500/30 text-emerald-400' : ''}
                        ${log.type === 'System' ? 'border-amber-500/30 text-amber-400' : ''}
                        ${log.type === 'User Action' ? 'border-gray-500/30 text-gray-400' : ''}
                      `}>
                        {log.type}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
