"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  IconShoppingBag,
  IconHome,
  IconCode,
  IconPlayerPlay,
  IconBookmark,
  IconPuzzle,
  IconCalendar,
  IconWorld,
  IconDatabase,
  IconCreditCard,
  IconSettings,
  IconChevronDown,
  IconCommand,
  IconQuestionMark,
  IconCheck,
  IconEdit,
  IconLogout,
} from "@tabler/icons-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { LiquidToggle } from "@/components/liquid-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/ui/data-table"

// Navigation data matching the Apify Console design
const navMain = [
  {
    title: "Apify Store",
    icon: IconShoppingBag,
    url: "#",
  },
  {
    title: "Home",
    icon: IconHome,
    url: "#",
  },
  {
    title: "Actors",
    icon: IconCode,
    url: "#",
  },
  {
    title: "Runs",
    icon: IconPlayerPlay,
    url: "#",
  },
  {
    title: "Saved tasks",
    icon: IconBookmark,
    url: "#",
  },
  {
    title: "Integrations",
    icon: IconPuzzle,
    url: "#",
  },
  {
    title: "Schedules",
    icon: IconCalendar,
    url: "#",
  },
]

const developmentItems = [
  { title: "Web Scraper", url: "#" },
  { title: "Cheerio Scraper", url: "#" },
  { title: "Puppeteer Scraper", url: "#" },
]

const navSecondary = [
  {
    title: "Proxy",
    icon: IconWorld,
    url: "#",
  },
  {
    title: "Storage",
    icon: IconDatabase,
    url: "#",
  },
  {
    title: "Billing",
    icon: IconCreditCard,
    url: "#",
  },
  {
    title: "Settings",
    icon: IconSettings,
    url: "#",
  },
]

// Account data for dropdown
const accounts = [
  {
    id: 1,
    name: "Caroline Yooni Huh",
    username: "Personal",
    avatar: "/anakin.jpg",
    isSelected: true,
  },
  {
    id: 2,
    name: "Yooni Huh",
    username: "Personal",
    avatar: "/anakin.jpg",
    isSelected: false,
  },
]

const organizations = [
  {
    id: 1,
    name: "Yooni Huh org",
    username: "Organization",
    avatar: "/anakin.jpg",
  },
]

function ApifySidebar() {
  const [selectedAccount, setSelectedAccount] = useState<typeof accounts[0] | null>(null)
  
  // Fix hydration issue by initializing state after mount
  useEffect(() => {
    setSelectedAccount(accounts.find(acc => acc.isSelected) || accounts[0])
  }, [])
  
  // Prevent rendering until state is initialized
  if (!selectedAccount) {
    return null
  }

  return (
    <Sidebar variant="inset" className="w-[220px] min-w-[220px] max-w-[220px]">
      <SidebarHeader className="overflow-hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 px-1 py-1.5 cursor-pointer hover:bg-sidebar-accent rounded-md transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarImage src={selectedAccount.avatar} alt={`${selectedAccount.name} Avatar`} />
                <AvatarFallback className="bg-blue-600 text-white text-xs">
                  {selectedAccount.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{selectedAccount.name}</span>
                <span className="truncate text-xs text-muted-foreground">Personal</span>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto h-7 w-7">
                <IconChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-2 rounded-xl" align="start" side="bottom">
            <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-2 py-1.5">
              Switch account
            </DropdownMenuLabel>
            <div className="space-y-1 mb-2">
              {accounts.map((account) => (
                <DropdownMenuItem
                  key={account.id}
                  className="flex items-center gap-3 p-3 rounded-md cursor-pointer focus:bg-sidebar-accent"
                  onClick={() => setSelectedAccount(account)}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={account.avatar} alt={`${account.name} Avatar`} />
                    <AvatarFallback className="bg-blue-600 text-white text-xs">
                      {account.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid text-left text-sm leading-tight">
                    <span className="font-semibold">{account.name}</span>
                    <span className="text-xs text-muted-foreground">{account.username}</span>
                  </div>
                  {account.isSelected && (
                    <IconCheck className="h-4 w-4 text-slate-900" />
                  )}
                </DropdownMenuItem>
              ))}
            </div>
            
            <div className="space-y-1 mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground px-2">Organizations</span>
                <Button variant="ghost" size="icon" className="h-5 w-5">
                  <IconEdit className="h-4 w-4" />
                </Button>
              </div>
              {organizations.map((org) => (
                <DropdownMenuItem
                  key={org.id}
                  className="flex items-center gap-3 p-3 rounded-md cursor-pointer focus:bg-sidebar-accent"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={org.avatar} alt={`${org.name} Avatar`} />
                    <AvatarFallback className="bg-gray-600 text-white text-xs">
                      {org.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid text-left text-sm leading-tight">
                    <span className="font-semibold">{org.name}</span>
                    <span className="text-xs text-muted-foreground">{org.username}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            
            <DropdownMenuSeparator className="my-2" />
            
            <DropdownMenuItem className="flex items-center gap-3 px-3 h-7 rounded-md cursor-pointer text-black focus:bg-sidebar-accent focus:text-black hover:h-7">
              <IconLogout className="h-4 w-4" />
              <span className="font-medium">Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="px-1 relative">
          <SidebarInput placeholder="Search.." className="h-8" />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground pointer-events-none">
            <IconCommand className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Development">
                      <IconCode className="h-4 w-4" />
                      <span>Development</span>
                      <IconChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {developmentItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-2 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>RAM</span>
            <span>0 MB / 8MB</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
            <span>Usage</span>
            <span>$2.6k / $10k</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" aria-label="Go to homepage">
                <svg width="60" height="18" viewBox="0 0 60 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.48656 0.728882H16.2916C16.43 0.728882 16.5422 0.841097 16.5422 0.979521V11.3792C16.5422 11.6283 16.2182 11.7249 16.0818 11.5165L9.27683 1.11676C9.16775 0.950061 9.28735 0.728882 9.48656 0.728882Z" fill="#246DFF"/>
                  <path d="M7.05565 0.728882H0.25064C0.112215 0.728882 0 0.841097 0 0.979521V11.3792C0 11.6283 0.323978 11.7249 0.460369 11.5165L7.26538 1.11676C7.37446 0.950061 7.25487 0.728882 7.05565 0.728882Z" fill="#20A34E"/>
                  <path d="M8.15452 9.05526L0.424015 16.8439C0.267032 17.0021 0.379063 17.2711 0.601907 17.2711H15.9467C16.1686 17.2711 16.281 17.0039 16.1259 16.8452L8.51164 9.05661C8.41384 8.95657 8.25308 8.95596 8.15452 9.05526Z" fill="#F86606"/>
                  <path d="M53.0472 3.00463H50.1515C49.2456 3.00463 48.8573 3.45755 48.8573 4.28255V5.07522L53.0763 5.07535L55.4866 10.6402L57.8971 5.07535H60.0001L54.9528 16.7067H52.8821L54.4351 13.1154L51.5482 6.82236H48.8573V13.2609H46.7867V6.82236H44.538V5.07522H46.7867V3.8782C46.7867 2.29284 47.6602 1.35455 49.5206 1.35455H53.0472V3.00463Z" fill="#1F2123"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M36.567 4.8974C38.7024 4.89743 40.4495 6.49899 40.4495 9.16819C40.4495 11.8535 38.7024 13.4388 36.567 13.4388C34.7875 13.4388 33.8977 12.3388 33.7359 12.0153V16.6906H31.6977V5.07535H33.7521V6.36954C33.8977 6.06218 34.7875 4.8974 36.567 4.8974ZM36.0331 6.70928C34.6257 6.7093 33.7198 7.7608 33.7198 9.16819C33.7198 10.5594 34.6257 11.6271 36.0331 11.6271C37.4566 11.6271 38.3626 10.5594 38.3626 9.16819C38.3626 7.76078 37.4566 6.70928 36.0331 6.70928Z" fill="#1F2123"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.4526 4.86497C28.9923 4.86499 30.3998 6.19149 30.3998 8.13271V10.899C30.3998 11.3843 30.5777 11.6108 31.0468 11.6431V13.3094H30.3998C29.3806 13.2932 28.7173 12.9049 28.4909 12.177C28.0864 12.7593 27.2452 13.4388 25.8379 13.4388C23.9128 13.4388 22.4568 12.3388 22.4568 10.6725C22.4568 9.02248 23.7024 8.13272 25.7245 8.13271H28.41C28.4099 7.14594 27.6496 6.51507 26.4526 6.51505C25.3202 6.51505 24.8672 7.12972 24.7539 7.34004H22.667C22.8288 6.46647 23.8804 4.86497 26.4526 4.86497ZM26.0643 9.54011C25.1098 9.54011 24.4951 9.89606 24.4951 10.6402C24.4951 11.4329 25.2393 11.902 26.2746 11.902C27.4394 11.902 28.41 11.3196 28.41 10.2357V9.54011H26.0643Z" fill="#1F2123"/>
                  <path d="M43.5526 13.2609H41.482V5.07535H43.5526V13.2609Z" fill="#1F2123"/>
                  <path d="M43.585 3.76499H41.4334V1.30608H43.585V3.76499Z" fill="#1F2123"/>
                </svg>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0 border border-border">
                <IconQuestionMark className="h-4 w-4" />
              </Button>
              <SidebarTrigger className="h-6 w-6 shrink-0 border border-border rounded-md" />
            </div>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default function LayoutPage() {

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "220px",
          "--sidebar-width-mobile": "220px",
        } as React.CSSProperties
      }
    >
      <ApifySidebar />
      <SidebarInset>
        <div className="px-4 pb-4 pt-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-2">
              <Textarea
                id="console-textarea"
                placeholder="Enter your commands, scripts, or configuration here..."
                className="min-h-32 resize-y font-mono text-sm bg-muted/30 border-muted-foreground/20 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 transition-all duration-200 hover:border-muted-foreground/40"
                rows={6}
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>Press Ctrl+Enter to execute</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    JavaScript
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    Clear
                  </Button>
                  <Button variant="default" size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700">
                    Execute
                  </Button>
                </div>
              </div>
            </div>

                      </div>
        </div>

        {/* Table Section - Stretched with 24px margins */}
        <div className="px-6 pt-8">
            <DataTable />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden">
          <div className="min-h-[100vh] rounded-xl p-4 overflow-auto">
            {/* content */}
          </div>
        </div>
      </SidebarInset>
      <LiquidToggle/>
    </SidebarProvider>
  )
}
