import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Check, X, Eye, MessageSquare } from "lucide-react";

import awpDragonLore from "@assets/generated_images/awp_dragon_lore_skin.png";
import karambitSapphire from "@assets/generated_images/karambit_sapphire_knife.png";
import valorantRadiant from "@assets/generated_images/valorant_radiant_rank.png";
import wowGold from "@assets/generated_images/fantasy_gold_coins.png";
import akWildLotus from "@assets/generated_images/ak-47_wild_lotus_skin.png";
import lolChallenger from "@assets/generated_images/lol_challenger_rank.png";
import tibiaCoins from "@assets/generated_images/tibia_coins_stack.png";
import rustFacemask from "@assets/generated_images/rust_metal_facemask.png";

const ads = [
  {
    id: 1,
    title: "AWP | Dragon Lore (Factory New)",
    price: "$2,450.00",
    seller: "Alex Gamer",
    status: "Pending",
    image: awpDragonLore,
    category: "CS:GO Skins",
    date: "2 hours ago"
  },
  {
    id: 2,
    title: "Karambit | Doppler (Sapphire)",
    price: "$1,800.00",
    seller: "ProTrader99",
    status: "Pending",
    image: karambitSapphire,
    category: "CS:GO Skins",
    date: "5 hours ago"
  },
  {
    id: 3,
    title: "Valorant Account - Radiant (All Agents)",
    price: "$350.00",
    seller: "ValoKing",
    status: "Reported",
    image: valorantRadiant,
    category: "Accounts",
    date: "1 day ago",
    reportReason: "Account sharing suspicion"
  },
  {
    id: 4,
    title: "WoW Gold - 5 Million - Area 52",
    price: "$400.00",
    seller: "GoldFarmer",
    status: "Approved",
    image: wowGold,
    category: "Currency",
    date: "3 days ago"
  },
  {
    id: 5,
    title: "AK-47 | Wild Lotus (Minimal Wear)",
    price: "$1,200.00",
    seller: "SkinCollector",
    status: "Rejected",
    image: akWildLotus,
    category: "CS:GO Skins",
    date: "1 week ago"
  },
  {
    id: 6,
    title: "League of Legends - Challenger Account",
    price: "$800.00",
    seller: "LoLBooster",
    status: "Pending",
    image: lolChallenger,
    category: "Accounts",
    date: "30 mins ago"
  },
  {
    id: 7,
    title: "Tibia Coins - 2500 TC",
    price: "$95.00",
    seller: "TibiaTrader",
    status: "Approved",
    image: tibiaCoins,
    category: "Currency",
    date: "4 hours ago"
  },
  {
    id: 8,
    title: "Rust - Big Grin Facemask",
    price: "$450.00",
    seller: "RustLord",
    status: "Reported",
    image: rustFacemask,
    category: "Rust Skins",
    date: "2 days ago",
    reportReason: "Potential dupe item"
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
      <div className="relative h-48 bg-secondary/50 group">
        <img src={ad.image} alt={ad.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
        <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className={`backdrop-blur-md shadow-lg
              ${ad.status === 'Pending' ? 'bg-amber-500/20 text-amber-400 border-amber-500/20' : ''}
              ${ad.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20' : ''}
              ${ad.status === 'Rejected' ? 'bg-rose-500/20 text-rose-400 border-rose-500/20' : ''}
              ${ad.status === 'Reported' ? 'bg-destructive/20 text-destructive border-destructive/20' : ''}
            `}
          >
            {ad.status}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
           <Badge variant="secondary" className="bg-black/60 backdrop-blur-md text-white border-white/10">
             {ad.category}
           </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-bold text-lg text-white line-clamp-1 leading-tight">{ad.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">by <span className="text-primary/80">{ad.seller}</span> • {ad.date}</p>
          </div>
          <div className="text-lg font-bold text-primary font-mono shrink-0">{ad.price}</div>
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
        <Button variant="outline" size="sm" className="flex-1 border-white/10 hover:bg-white/5">
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
        {ad.status === 'Pending' || ad.status === 'Reported' ? (
          <>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 shadow-lg shadow-emerald-900/20">
              <Check className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="destructive" className="px-3 shadow-lg shadow-rose-900/20">
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
