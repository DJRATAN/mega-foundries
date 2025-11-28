import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Hammer, 
  Anvil, 
  Truck, 
  Factory, 
  HardHat, 
  Briefcase, 
  Store 
} from 'lucide-react';
 
const loginConfig: Record<string, any> = {
  "team": {
    title: "Team Mega Login",
    description: "Internal portal for Mega Foundries employees and administrators.",
    icon: Users,
    roleId: "admin"  
  },
  "engineer": {
    title: "Engineer / Architect",
    description: "Access technical blueprints, CAD revisions, and project specs.",
    icon: HardHat,
    roleId: "engineer"
  },
  "customer": {
    title: "Customer Portal",
    description: "Track your orders, view invoices, and manage RFQs.",
    icon: Briefcase,
    roleId: "customer"
  },
  "logistics": {
    title: "Logistics Partner",
    description: "Manage shipments, update tracking, and view delivery manifests.",
    icon: Truck,
    roleId: "logistics"
  },
  "foundry": {
    title: "Foundry Partner",
    description: "Manage casting orders, update capacity, and certifications.",
    icon: Anvil,
    roleId: "foundry"
  },
  "forge": {
    title: "Forge Shop Portal",
    description: "Portal for forging partners to manage heat codes and production.",
    icon: Hammer,
    roleId: "forge"
  },
  "fabricator": {
    title: "Fabricator Login",
    description: "Access fabrication drawings and assembly requirements.",
    icon: Factory,
    roleId: "fabricator"
  },
  "vendor": {
    title: "Vendor / Supplier",
    description: "General portal for raw material suppliers and tooling vendors.",
    icon: Store,
    roleId: "vendor"
  }
};

interface PageProps {
  params: Promise<{ type: string }>; // Updated for Next.js 15
}

export default async function DynamicLoginPage({ params }: PageProps) {
  // 1. Get the type from the URL (e.g., "foundry", "customer")
  const resolvedParams = await params;
  const type = resolvedParams.type;
  
  // 2. Look up the configuration
  const config = loginConfig[type];

  // 3. If user types a random URL (e.g., /login/pizza), show 404
  if (!config) {
    return notFound();
  }

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      
      {/* Optional: Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-red-100/50 rounded-full blur-3xl"></div>
         <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-slate-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
            <Link href="/">
                <Image 
                    src="/Mega-foundries-logo.PNG" 
                    alt="Logo" 
                    width={80} 
                    height={80} 
                    className="object-contain"
                />
            </Link>
        </div>

        <Card className="shadow-xl border-slate-200">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <Icon className="w-6 h-6 text-[#cc2221]" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">
                {config.title}
            </CardTitle>
            <CardDescription className="text-slate-500">
                {config.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="grid gap-4">
            
            {/* --- THE LOGIN FORM --- */}
            <form>
                {/* Hidden field to tell backend which role is logging in */}
                <input type="hidden" name="role" value={config.roleId} />
                
                <div className="grid gap-2 mb-4">
                <Label htmlFor="email">Email or User ID</Label>
                <Input id="email" type="email" placeholder="name@company.com" required />
                </div>
                
                <div className="grid gap-2 mb-6">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/login/reset" className="text-xs text-[#cc2221] hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <Input id="password" type="password" required />
                </div>

                <Button type="submit" className="w-full bg-[#cc2221] hover:bg-red-700 text-white font-bold py-5">
                    Sign In to {config.title}
                </Button>
            </form>

          </CardContent>
          <CardFooter className="flex flex-col gap-2">
             <div className="text-center text-sm text-slate-500">
                Not a registered partner yet?
             </div>
             <Link href="/partner" className="w-full">
                <Button variant="outline" className="w-full border-slate-300">
                    Apply for Partnership
                </Button>
             </Link>
          </CardFooter>
        </Card>

        <p className="text-center text-xs text-slate-400 mt-6">
            Protected by Mega Foundries Security Systems. <br/>
            <Link href="/" className="hover:text-slate-600">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}