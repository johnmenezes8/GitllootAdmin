import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Calendar as CalendarIcon, 
  Download, 
  Search, 
  Filter, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Wallet,
  CreditCard,
  ArrowUpRight
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const financialData = [
  { name: 'Jan', revenue: 12400, escrow: 45000, cashback: 1200 },
  { name: 'Feb', revenue: 14398, escrow: 52000, cashback: 1500 },
  { name: 'Mar', revenue: 18900, escrow: 61000, cashback: 2100 },
  { name: 'Apr', revenue: 21000, escrow: 58000, cashback: 2300 },
  { name: 'May', revenue: 24500, escrow: 65000, cashback: 2800 },
  { name: 'Jun', revenue: 28000, escrow: 72000, cashback: 3200 },
];

const transactions = [
  { id: "TRX-1001", date: "2023-12-01 14:30", user: "User123", type: "Depósito", amount: "+$500.00", status: "Concluído", method: "PIX" },
  { id: "TRX-1002", date: "2023-12-01 15:15", user: "SellerPro", type: "Venda (Escrow)", amount: "+$1,200.00", status: "Retido", method: "Saldo" },
  { id: "TRX-1003", date: "2023-12-01 16:00", user: "BuyerOne", type: "Compra", amount: "-$1,200.00", status: "Concluído", method: "Cartão" },
  { id: "TRX-1004", date: "2023-12-01 16:45", user: "User123", type: "Saque", amount: "-$200.00", status: "Processando", method: "Crypto" },
  { id: "TRX-1005", date: "2023-12-01 17:30", user: "GamerX", type: "Taxa Plataforma", amount: "+$60.00", status: "Concluído", method: "Sistema" },
];

export default function FinancialAdvancedPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-white flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-emerald-400" />
              Financeiro Avançado
            </h1>
            <p className="text-muted-foreground">Controle total de movimentações, escrow e taxas.</p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10">
               <Download className="w-4 h-4 mr-2" />
               Exportar Relatório (CSV)
             </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="glass-card border-emerald-500/20 bg-emerald-500/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Receita Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-emerald-400">$124,592.00</div>
              <div className="flex items-center text-xs text-emerald-400 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" /> +12.5% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-blue-500/20 bg-blue-500/5">
             <CardHeader className="pb-2">
               <CardTitle className="text-sm font-medium text-muted-foreground">Retido no Escrow</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="text-3xl font-bold font-display text-blue-400">$72,000.00</div>
               <div className="flex items-center text-xs text-blue-400 mt-1">
                 <Wallet className="w-3 h-3 mr-1" /> 145 transações ativas
               </div>
             </CardContent>
           </Card>

           <Card className="glass-card border-purple-500/20 bg-purple-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Cashback Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-display text-purple-400">$3,200.00</div>
                <div className="flex items-center text-xs text-purple-400 mt-1">
                  <ArrowUpRight className="w-3 h-3 mr-1" /> 2.5% do volume total
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
               <CardHeader className="pb-2">
                 <CardTitle className="text-sm font-medium text-muted-foreground">Taxas Arrecadadas</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="text-3xl font-bold font-display text-white">$6,229.00</div>
                 <div className="flex items-center text-xs text-muted-foreground mt-1">
                   5% média por transação
                 </div>
               </CardContent>
             </Card>
        </div>

        {/* Chart */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle>Fluxo Financeiro</CardTitle>
            <CardDescription>Comparativo de Receita, Escrow e Cashback nos últimos 6 meses.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financialData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEscrow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" name="Receita" />
                  <Area type="monotone" dataKey="escrow" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorEscrow)" name="Escrow" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History Table with Filters */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle>Histórico de Transações</CardTitle>
              <div className="flex flex-wrap gap-2">
                <div className="relative w-40">
                   <CalendarIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                   <Input placeholder="Data" className="pl-9 h-9 bg-secondary/50 border-border" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[150px] h-9 bg-secondary/50 border-border">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos Status</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="held">Retido</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                   <SelectTrigger className="w-[150px] h-9 bg-secondary/50 border-border">
                     <SelectValue placeholder="Método" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="all">Todos Métodos</SelectItem>
                     <SelectItem value="pix">PIX</SelectItem>
                     <SelectItem value="card">Cartão</SelectItem>
                     <SelectItem value="crypto">Crypto</SelectItem>
                   </SelectContent>
                 </Select>
                 <div className="relative w-48">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Buscar usuário..." className="pl-9 h-9 bg-secondary/50 border-border" />
                 </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead>ID</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Método</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((trx) => (
                  <TableRow key={trx.id} className="border-border hover:bg-secondary/20">
                    <TableCell className="font-mono text-xs">{trx.id}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{trx.date}</TableCell>
                    <TableCell className="font-medium text-white">{trx.user}</TableCell>
                    <TableCell>{trx.type}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-secondary/50 border-border">{trx.method}</Badge>
                    </TableCell>
                    <TableCell className={`font-bold ${trx.amount.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {trx.amount}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`
                        ${trx.status === 'Concluído' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : ''}
                        ${trx.status === 'Retido' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : ''}
                        ${trx.status === 'Processando' ? 'border-amber-500/30 text-amber-400 bg-amber-500/10' : ''}
                      `}>
                        {trx.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                      </Button>
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
