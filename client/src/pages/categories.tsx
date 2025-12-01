import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, GripVertical, Pencil, Trash2, Gamepad2, Swords, Coins, User } from "lucide-react";

const categories = [
  {
    id: "c1",
    name: "Games & Keys",
    icon: Gamepad2,
    subcategories: ["Steam Keys", "Origin Keys", "Battle.net", "Xbox Live", "PSN Codes"]
  },
  {
    id: "c2",
    name: "In-Game Items (Skins)",
    icon: Swords,
    subcategories: ["CS:GO Skins", "Dota 2 Items", "Rust Skins", "Team Fortress 2"]
  },
  {
    id: "c3",
    name: "Game Currency",
    icon: Coins,
    subcategories: ["WoW Gold", "OSRS Gold", "Lost Ark Gold", "FIFA Coins"]
  },
  {
    id: "c4",
    name: "Accounts",
    icon: User,
    subcategories: ["League of Legends", "Valorant", "Fortnite", "Genshin Impact"]
  }
];

export default function CategoriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display text-white">Categories</h1>
            <p className="text-muted-foreground">Manage marketplace categories and subcategories.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Category
          </Button>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {categories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border border-border rounded-lg bg-card px-4">
                <div className="flex items-center py-4">
                  <GripVertical className="w-5 h-5 text-muted-foreground cursor-move mr-4" />
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <AccordionTrigger className="flex-1 hover:no-underline py-0">
                    <span className="font-medium text-lg">{category.name}</span>
                  </AccordionTrigger>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <AccordionContent className="pl-16 pr-4 pb-4">
                  <div className="space-y-3 pt-2 border-t border-border">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>Subcategories</span>
                      <Button variant="link" size="sm" className="text-primary h-auto p-0">
                        <Plus className="w-3 h-3 mr-1" /> Add Subcategory
                      </Button>
                    </div>
                    {category.subcategories.map((sub, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-md bg-secondary/30 border border-border/50 group">
                        <span className="text-sm font-medium">{sub}</span>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Pencil className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </DashboardLayout>
  );
}
