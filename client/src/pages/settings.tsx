import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Bell, Lock, Shield, User, Globe, Mail, Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold font-display text-white">Settings</h1>
          <p className="text-muted-foreground">Manage platform preferences and system configurations.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="bg-card border border-border p-1 mb-6 w-full justify-start">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security & Access</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="team">Team Members</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Platform Information</CardTitle>
                <CardDescription>General details about the marketplace.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="Gitlloot" className="bg-secondary/50 border-border" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" defaultValue="support@gitlloot.com" className="bg-secondary/50 border-border" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="timezone">System Timezone</Label>
                  <Input id="timezone" defaultValue="UTC-3 (Brasília Time)" className="bg-secondary/50 border-border" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button className="bg-primary text-white">Save Changes</Button>
              </CardFooter>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Maintenance Mode</CardTitle>
                <CardDescription>Temporarily disable the marketplace for updates.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium text-white">Enable Maintenance Mode</div>
                  <div className="text-sm text-muted-foreground">Users will see a maintenance screen.</div>
                </div>
                <Switch />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure security protocols for the platform.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <div className="font-medium text-white">Two-Factor Authentication (2FA)</div>
                    <div className="text-sm text-muted-foreground">Require 2FA for all admin accounts.</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <div className="font-medium text-white">New Device Alerts</div>
                    <div className="text-sm text-muted-foreground">Notify admins when logging in from a new IP.</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-border/50" />
                <div className="space-y-2 pt-2">
                  <Label>Session Timeout (minutes)</Label>
                  <Input type="number" defaultValue="30" className="bg-secondary/50 border-border max-w-[200px]" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button className="bg-primary text-white">Update Security</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Admin User", role: "Super Admin", email: "admin@gitlloot.com", status: "Active" },
                { name: "Sarah Mod", role: "Moderator", email: "sarah@gitlloot.com", status: "Active" },
                { name: "Mike Support", role: "Support Agent", email: "mike@gitlloot.com", status: "Away" },
              ].map((member, i) => (
                <Card key={i} className="glass-card border-border/50">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${member.email}`} />
                      <AvatarFallback>{member.name.slice(0,2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-4">{member.email}</div>
                    <div className="flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-secondary w-fit">
                      <div className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {member.status}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border/50 pt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                  </CardFooter>
                </Card>
              ))}
              
              <Button variant="outline" className="h-auto min-h-[200px] border-dashed border-2 flex flex-col gap-2 hover:bg-secondary/20">
                <div className="p-2 rounded-full bg-secondary">
                  <PlusIcon className="w-6 h-6" />
                </div>
                <span>Add Team Member</span>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
