import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Sidebar />
      <div className="pl-64">
        <Topbar />
        <main className="p-6 max-w-7xl mx-auto animate-in fade-in duration-500">
          {children}
        </main>
      </div>
    </div>
  );
}
