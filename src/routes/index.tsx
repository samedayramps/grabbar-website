import { component$ } from '@builder.io/qwik';
import { HeroSection } from '../components/homepage/HeroSection';
import { WhyChooseUs } from '../components/homepage/WhyChooseUs';
import { OurSolutions } from '../components/homepage/OurSolutions';
import { CallToAction } from '../components/homepage/CallToAction';
import { ServiceArea } from '../components/homepage/ServiceArea';
import { Services } from '../components/homepage/Services';
import { Breadcrumb } from '../components/ui/breadcrumb/breadcrumb';

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-6 space-y-8">
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Page>Home</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <OurSolutions />
      <CallToAction />
      <ServiceArea />
    </div>
  );
});
