import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Check, X, Eye, MessageSquare } from "lucide-react";

const ads = [
  {
    id: 1,
    title: "Rare CS:GO Knife - Factory New",
    price: "$450.00",
    seller: "Alex Gamer",
    status: "Pending",
    image: "https://placehold.co/600x400/1e1b2e/FFF?text=CSGO+Knife",
    category: "Skins",
    date: "2 hours ago"
  },
  {
    id: 2,
    title: "League of Legends Account - Diamond II",
    price: "$120.00",
    seller: "ProTrader99",
    status: "Pending",
    image: "https://placehold.co/600x400/1e1b2e/FFF?text=LoL+Account",
    category: "Accounts",
    date: "5 hours ago"
  },
  {
    id: 3,
    title: "Valorant Vandal Skin Bundle",
    price: "$85.00",
    seller: "ValoKing",
    status: "Reported",
    image: "https://placehold.co/600x400/1e1b2e/FFF?text=Valorant+Skins",
    category: "Items",
    date: "1 day ago",
    reportReason: "Misleading description"
  },
  {
    id: 4,
    title: "WoW Gold - 1 Million - Illidan Server",
    price: "$60.00",
    seller: "GoldFarmer",
    status: "Approved",
    image: "https://placehold.co/600x400/1e1b2e/FFF?text=WoW+Gold",
    category: "Currency",
    date: "3 days ago"
  },
  {
    id: 5,
    title: "Fortnite Account - OG Skull Trooper",
    price: "$300.00",
    seller: "FortniteKid",
    status: "Rejected",
    image: "https://placehold.co/600x400/1e1b2e/FFF?text=Fortnite",
    category: "Accounts",
    date: "1 week ago"
  }
];

export default function AdsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-display text-white">Ad Moderation</h1>
          <p className="text-muted-foreground">Review pending ads and manage reported listings.</p>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="bg-card border border-border p-1 mb-6">
            <TabsTrigger value="pending" className="data-[state=active]:bg-primary data-[state=active]:text-white">Pending Review</TabsTrigger>
            <TabsTrigger value="reported" className="data-[state=active]:bg-destructive data-[state=active]:text-white">Reported</TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-secondary data-[state=active]:text-white">All Ads</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {ads.filter(a => a.status === 'Pending').map(ad => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reported" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {ads.filter(a => a.status === 'Reported').map(ad => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {ads.map(ad => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

function AdCard({ ad }: { ad: any }) {
  return (
    <Card className="glass-card border-border/50 overflow-hidden flex flex-col h-full hover:border-primary/30 transition-colors">
      <div className="relative h-48 bg-secondary/50">
        <img src={ad.image} alt={ad.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className={`backdrop-blur-md
              ${ad.status === 'Pending' ? 'bg-amber-500/20 text-amber-400' : ''}
              ${ad.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : ''}
              ${ad.status === 'Rejected' ? 'bg-rose-500/20 text-rose-400' : ''}
              ${ad.status === 'Reported' ? 'bg-destructive/20 text-destructive' : ''}
            `}
          >
            {ad.status}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
           <Badge variant="secondary" className="bg-black/50 backdrop-blur-md text-white border-none">
             {ad.category}
           </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-white line-clamp-1">{ad.title}</h3>
            <p className="text-sm text-muted-foreground">by {ad.seller} • {ad.date}</p>
          </div>
          <div className="text-lg font-bold text-primary font-mono">{ad.price}</div>
        </div>
      </CardHeader>
      
      {ad.reportReason && (
        <CardContent className="pb-2">
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md flex gap-2 text-sm text-destructive-foreground">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Reported:</span> {ad.reportReason}
            </div>
          </div>
        </CardContent>
      )}

      <CardFooter className="mt-auto pt-4 gap-2 border-t border-border/50">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
        {ad.status === 'Pending' || ad.status === 'Reported' ? (
          <>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white px-3">
              <Check className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="destructive" className="px-3">
              <X className="w-4 h-4" />
            </Button>
          </>
        ) : (
           <Button size="sm" variant="secondary" className="px-3">
             <MessageSquare className="w-4 h-4" />
           </Button>
        )}
      </CardFooter>
    </Card>
  )
}
