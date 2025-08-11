"use client"

import { useState } from "react"
import LockIcon from "@/components/animated-icons/lock-icon"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button"
import { cn } from "@/lib/utils"

interface TabItem {
  key: string
  label: string
}

const TABS: TabItem[] = [
  { key: "overview", label: "Overview" },
  { key: "billing", label: "Billing" },
  { key: "authentication", label: "Authentication & Security" },
  { key: "integrations", label: "Integrations" },
]

export default function TabsLockPage() {
  const [activeKey, setActiveKey] = useState<string>("overview")

  return (
    <div className="px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Global settings</span>
            <span>/</span>
            <span className="text-foreground font-medium">Tabs lock</span>
          </div>
          <ThemeToggleButton />
        </div>

        <nav className="flex items-center gap-2 overflow-x-auto">
          {TABS.map((tab) => {
            const isActive = activeKey === tab.key
            const isAuth = tab.key === "authentication"
            return (
              <button
                key={tab.key}
                onClick={() => setActiveKey(tab.key)}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors",
                  isActive ? "bg-background text-foreground border-border" : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {isAuth && <LockIcon isUnlocked={isActive} />}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-8 rounded-xl border p-6">
          <h2 className="text-base font-semibold mb-2">{TABS.find(t => t.key === activeKey)?.label}</h2>
          <p className="text-sm text-muted-foreground">
            {activeKey === "authentication"
              ? "Authentication & Security content. Clicking this tab animates the lock to unlock."
              : "Select different tabs to see the locked state on the Authentication tab."}
          </p>
        </div>
      </div>
    </div>
  )
}

