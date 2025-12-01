import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Dashboard from "@/pages/dashboard";
import UsersPage from "@/pages/users";
import AdsPage from "@/pages/ads";
import FinancialPage from "@/pages/financial";
import FinancialAdvancedPage from "@/pages/financial-advanced";
import CategoriesPage from "@/pages/categories";
import SettingsPage from "@/pages/settings";
import ReportsPage from "@/pages/reports";
import LogsPage from "@/pages/logs";
import SupportPage from "@/pages/support";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard}/>
      <Route path="/users" component={UsersPage}/>
      <Route path="/ads" component={AdsPage}/>
      <Route path="/financial" component={FinancialPage}/>
      <Route path="/financial-advanced" component={FinancialAdvancedPage}/>
      <Route path="/categories" component={CategoriesPage}/>
      <Route path="/settings" component={SettingsPage}/>
      <Route path="/reports" component={ReportsPage}/>
      <Route path="/logs" component={LogsPage}/>
      <Route path="/support" component={SupportPage}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
