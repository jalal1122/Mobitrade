import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import WhyChoose from '../components/WhyChoose'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage
