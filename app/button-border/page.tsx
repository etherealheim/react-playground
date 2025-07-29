"use client"

import { LiquidGlass } from "@specy/liquid-glass-react";

export default function ButtonBorderBackground() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300d4ff;stop-opacity:1' /%3E%3Cstop offset='25%25' style='stop-color:%23ff0080;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23ffb800;stop-opacity:1' /%3E%3Cstop offset='75%25' style='stop-color:%2300ff80;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238000ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grad1)' /%3E%3C/svg%3E")`,
        }}
      />
      {/* Colorful animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-purple-500/70 via-pink-500/70 via-orange-400/70 to-green-400/80 animate-pulse" />
      {/* Additional background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <LiquidGlass
        glassStyle={{
          depth: 0.8,
          segments: 64,
          radius: 0.8,
          roughness: 0.1,
          transmission: 0.9,
          reflectivity: 0.5,
          ior: 1.5,
          dispersion: 0.1,
          thickness: 0.5
        }}
        wrapperStyle={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        style="padding: 8px 16px; border-radius: 100px;"
      >
        <button 
          onClick={() => console.log('Button clicked!')}
          className="text-white font-medium bg-transparent border-none cursor-pointer"
        >
          Click Me
        </button>
      </LiquidGlass>
    </div>
  )
}