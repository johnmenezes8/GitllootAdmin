import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Users, 
  ShoppingBag, 
  AlertCircle, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight,
  DollarSign,
  Activity
} from "lucide-react";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Tooltip,
  BarChart,
  Bar
} from "recharts";

const stats = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Active Ads",
    value: "4,821",
    change: "+5.4%",
    trend: "up",
    icon: ShoppingBag,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "Pending Review",
    value: "142",
    change: "+23%",
    trend: "down", // down is bad here contextually, but visual is down arrow
    icon: AlertCircle,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    title: "Escrow Volume",
    value: "$45,231",
    change: "+8.2%",
    trend: "up",
    icon: Wallet,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
];

const chartData = [
  { name: 'Mon', users: 400, ads: 240, revenue: 2400 },
  { name: 'Tue', users: 300, ads: 139, revenue: 1398 },
  { name: 'Wed', users: 200, ads: 980, revenue: 9800 },
  { name: 'Thu', users: 278, ads: 390, revenue: 3908 },
  { name: 'Fri', users: 189, ads: 480, revenue: 4800 },
  { name: 'Sat', users: 239, ads: 380, revenue: 3800 },
  { name: 'Sun', users: 349, ads: 430, revenue: 4300 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-display tracking-tight text-white">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of Gitlloot platform performance.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold font-display">{stat.value}</h3>
                  <div className={`flex items-center mt-1 text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {stat.change} from last month
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <Card className="col-span-4 glass-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Platform Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAds" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                    <Area type="monotone" dataKey="ads" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorAds)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 glass-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                Revenue & Cashback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
