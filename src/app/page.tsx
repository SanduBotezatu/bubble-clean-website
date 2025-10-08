import { RainbowButtonDemo } from "@/components/rainbow-button-demo"
import { RainbowButton } from "@/components/ui/rainbow-button"
import SolarPanelDemo from "@/components/solar-panel-demo"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Solar Panel Scroll Expansion Demo */}
      <SolarPanelDemo />
      
      {/* Rainbow Button Demo Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              CleanExpert React
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Rainbow Button Component Demo
            </p>
          </div>
          
          <div className="space-y-4">
            <RainbowButtonDemo />
            
            <div className="space-y-2">
              <RainbowButton size="sm" className="text-sm px-4 py-2 h-8">
                Small Button
              </RainbowButton>
              
              <RainbowButton size="lg" className="text-lg px-12 py-4 h-14">
                Large Button
              </RainbowButton>
              
              <RainbowButton disabled>
                Disabled Button
              </RainbowButton>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Features
            </h2>
            <ul className="text-left space-y-2 text-slate-600 dark:text-slate-400">
              <li>• Animated rainbow gradient background</li>
              <li>• Responsive design with Tailwind CSS</li>
              <li>• TypeScript support</li>
              <li>• Dark mode compatible</li>
              <li>• Accessible with proper focus states</li>
              <li>• Customizable with className prop</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
