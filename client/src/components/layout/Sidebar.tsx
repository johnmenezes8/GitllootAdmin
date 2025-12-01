import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Wallet, 
  Layers, 
  Settings, 
  LogOut,
  ShieldCheck
} from "lucide-react";
import gitllootLogo from "@assets/generated_images/gitlloot_logo.png";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: ShoppingBag, label: "Ads & Moderation", href: "/ads" },
  { icon: Wallet, label: "Financial", href: "/financial" },
  { icon: Layers, label: "Categories", href: "/categories" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border fixed left-0 top-0 z-40 flex flex-col transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <img src={gitllootLogo} alt="Gitlloot" className="w-8 h-8 rounded-md shadow-lg shadow-primary/20" />
          <span className="text-xl font-display font-bold tracking-tight text-white">
            GITLLOOT<span className="text-primary">.</span>
          </span>
        </div>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 mb-2">
          <p className="text-xs font-medium text-sidebar-foreground/50 uppercase tracking-wider">Menu</p>
        </div>
        {sidebarItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <a className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary shadow-sm shadow-primary/5" 
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-white"
              )}>
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary" : "text-sidebar-foreground/50 group-hover:text-white"
                )} />
                {item.label}
              </a>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
