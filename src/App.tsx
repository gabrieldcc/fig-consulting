import { ContactSection } from './components/sections/ContactSection'
import { FaqSection } from './components/sections/FaqSection'
import { Footer } from './components/sections/Footer'
import { Header } from './components/sections/Header'
import { HeroSection } from './components/sections/HeroSection'
import { MethodologySection } from './components/sections/MethodologySection'
import { MetricsSection } from './components/sections/MetricsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { ValueSection } from './components/sections/ValueSection'
import { WhyChooseSection } from './components/sections/WhyChooseSection'
import { WhatsAppButton } from './components/sections/WhatsAppButton'
import { useReveal } from './hooks/useReveal'
import { siteContent } from './data/siteContent'

function App() {
  useReveal()

  return (
    <div>
      <Header navigation={siteContent.navigation} />
      <main>
        <HeroSection />
        <ValueSection />
        <ServicesSection />
        <WhyChooseSection />
        <MethodologySection />
        <MetricsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer navigation={siteContent.navigation} />
      <WhatsAppButton />
    </div>
  )
}

export default App
