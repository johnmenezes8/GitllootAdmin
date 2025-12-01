import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  ArrowUpRight, 
  ShieldCheck, 
  History,
  AlertTriangle,
  Download
} from "lucide-react";

const transactions = [
  { id: "TRX-9821", user: "Alex Gamer", amount: "$450.00", type: "Escrow Release", status: "Completed", date: "Today, 10:23 AM" },
  { id: "TRX-9820", user: "ProTrader99", amount: "$120.00", type: "Escrow Hold", status: "Held", date: "Today, 09:15 AM" },
  { id: "TRX-9819", user: "ValoKing", amount: "$85.00", type: "Cashback", status: "Completed", date: "Yesterday" },
  { id: "TRX-9818", user: "GoldFarmer", amount: "$60.00", type: "Escrow Dispute", status: "Disputed", date: "Yesterday" },
];

export default function FinancialPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-display text-white">Financial & Escrow</h1>
          <p className="text-muted-foreground">Manage held funds, disputes, and cashback configuration.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glass-card border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground/80">Total Held in Escrow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-primary">$45,231.50</div>
              <p className="text-xs text-muted-foreground mt-1">Across 142 active transactions</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Disputes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-white">12</div>
              <p className="text-xs text-rose-400 mt-1 flex items-center">
                <AlertTriangle className="w-3 h-3 mr-1" /> Action required
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cashback Distributed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-white">$2,840.00</div>
              <p className="text-xs text-emerald-400 mt-1 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +12% this month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((trx) => (
                    <div key={trx.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-secondary/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${
                          trx.type.includes('Escrow') ? 'bg-blue-500/10 text-blue-400' : 
                          trx.type.includes('Cashback') ? 'bg-purple-500/10 text-purple-400' :
                          'bg-gray-500/10 text-gray-400'
                        }`}>
                          {trx.type.includes('Dispute') ? <AlertTriangle className="w-5 h-5" /> :
                           trx.type.includes('Cashback') ? <Wallet className="w-5 h-5" /> :
                           <ShieldCheck className="w-5 h-5" />
                          }
                        </div>
                        <div>
                          <div className="font-medium text-white">{trx.type}</div>
                          <div className="text-sm text-muted-foreground">{trx.user} • {trx.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold font-mono text-white">{trx.amount}</div>
                        <Badge variant="outline" className={`mt-1 
                          ${trx.status === 'Completed' ? 'text-emerald-400 border-emerald-500/30' : ''}
                          ${trx.status === 'Held' ? 'text-blue-400 border-blue-500/30' : ''}
                          ${trx.status === 'Disputed' ? 'text-rose-400 border-rose-500/30' : ''}
                        `}>
                          {trx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Cashback Rules</CardTitle>
                <CardDescription>Configure global cashback percentages.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Global Cashback</span>
                    <span className="text-primary font-bold">2.5%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <Label>Promotional Boost</Label>
                  <div className="flex gap-2">
                    <Input type="number" defaultValue="5" className="bg-secondary/50 border-border" />
                    <Button variant="outline">%</Button>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Update Rules</Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" /> Monthly Financial Report
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" /> Escrow Dispute Log
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" /> Tax Summary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
