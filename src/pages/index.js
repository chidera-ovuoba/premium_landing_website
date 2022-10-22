import { ThemeProvider } from 'theme-ui';
import theme from 'themes'
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Banner from 'sections/Banner';
import KeyFeature from 'sections/KeyFeature';
import ServiceSection from 'sections/ServiceSection';
import Feature from 'sections/Feature';
import CoreFeature from 'sections/CoreFeature';
import WorkFlow from 'sections/WorkFlow';
import Package from 'sections/Package';
import TeamSection from 'sections/TeamSection';
import TestimonialCard from 'sections/TestimonialCard';
  
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title='NextJS Landing Page' />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard/>
      </Layout>    
    </ThemeProvider>
  )
}
