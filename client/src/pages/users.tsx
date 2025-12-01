import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  MoreHorizontal, 
  Search, 
  Filter, 
  UserPlus, 
  Shield, 
  Ban,
  CheckCircle2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  { id: 1, name: "Alex Gamer", email: "alex@example.com", role: "User", status: "Active", joinDate: "2023-10-12", avatar: "AG" },
  { id: 2, name: "ProTrader99", email: "trader@example.com", role: "VIP", status: "Active", joinDate: "2023-09-05", avatar: "PT" },
  { id: 3, name: "ScammerAlert", email: "suspicious@example.com", role: "User", status: "Banned", joinDate: "2023-11-20", avatar: "SA" },
  { id: 4, name: "ModSarah", email: "sarah@gitlloot.com", role: "Moderator", status: "Active", joinDate: "2023-01-15", avatar: "MS" },
  { id: 5, name: "LootMaster", email: "loot@example.com", role: "User", status: "Suspended", joinDate: "2023-08-30", avatar: "LM" },
];

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display text-white">User Management</h1>
            <p className="text-muted-foreground">Manage user accounts, roles, and permissions.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search users..." 
              className="pl-9 bg-card border-border"
            />
          </div>
          <Button variant="outline" className="border-dashed">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-[300px]">User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border-border hover:bg-secondary/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-border">
                        <AvatarFallback className="bg-secondary text-xs">{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {user.role === 'Moderator' && <Shield className="w-3 h-3 text-primary" />}
                      <span className={user.role === 'Moderator' ? 'text-primary font-medium' : ''}>{user.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`
                        ${user.status === 'Active' ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10' : ''}
                        ${user.status === 'Banned' ? 'border-rose-500/50 text-rose-400 bg-rose-500/10' : ''}
                        ${user.status === 'Suspended' ? 'border-amber-500/50 text-amber-400 bg-amber-500/10' : ''}
                      `}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.joinDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border-border">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="cursor-pointer">View Profile</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Edit Details</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border" />
                        {user.status === 'Active' ? (
                          <DropdownMenuItem className="text-amber-400 cursor-pointer">
                            <Ban className="w-4 h-4 mr-2" /> Suspend
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-emerald-400 cursor-pointer">
                            <CheckCircle2 className="w-4 h-4 mr-2" /> Reactivate
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-destructive cursor-pointer">Delete User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
