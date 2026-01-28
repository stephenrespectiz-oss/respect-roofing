import { Hero } from '@/components/Hero'
import { TrustBadges } from '@/components/TrustBadges'
import { MetalTiles } from '@/components/MetalTiles'
import { ProfiledSheeting } from '@/components/ProfiledSheeting'
import { MetalFence } from '@/components/MetalFence'
import { Contact } from '@/components/Contact'
import { Toaster } from '@/components/ui/sonner'

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Hero />
            <TrustBadges />
            <MetalTiles />
            <ProfiledSheeting />
            <MetalFence />
            <Contact />
            <Toaster />
        </div>
    )
}

export default App