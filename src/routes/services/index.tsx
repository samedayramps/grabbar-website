import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Breadcrumb } from '../../components/ui/breadcrumb/breadcrumb';
import { Button } from '../../components/ui/button/button';
import { Card } from '../../components/ui/card/card';
import Image from '/public/shower-grab-bar.webp?jsx';

export default component$(() => {
  const services = [
    {
      title: 'Bathroom Grab Bars',
      description: 'Safe and secure grab bars for your bathroom, shower, and tub areas.',
      href: '/services/bathroom-grab-bars'
    },
    {
      title: 'Shower Grab Bars',
      description: 'Extra stability for wet areas. Perfect for safer showering and bathing.',
      href: '/services/shower-grab-bars'
    },
    {
      title: 'ADA-Compliant Grab Bars',
      description: 'Professional installation meeting all safety standards for homes and businesses.',
      href: '/services/ada-grab-bars'
    },
    {
      title: 'Moen Grab Bars',
      description: 'Quality grab bars that combine safety with style.',
      href: '/services/moen-grab-bars'
    },
    {
      title: 'Commercial Grab Bar Installation',
      description: 'Safety solutions for businesses and public spaces in Dallas-Fort Worth.',
      href: '/services/commercial-grab-bars'
    }
  ];

  return (
    <div class="container mx-auto px-4">
      <div class="py-4">
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Services</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <div class="space-y-12">
        {/* Hero Section */}
        <section class="text-center space-y-4">
          <h1 class="text-4xl font-bold">Enhance Safety and Accessibility with Our Grab Bar Installation Services</h1>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Safer Grab Bars, we are dedicated to helping you and your loved ones feel safe and confident in every room. Our professional installation services bring added stability to homes, businesses, and public spaces, all while meeting ADA standards and aesthetic preferences.
          </p>
        </section>

        {/* Services Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-8">Our Services</h2>
          <div class="flex flex-wrap -mx-4">
            {services.map((service) => (
              <div key={service.title} class="w-full px-4 mb-8 sm:w-1/2 lg:w-1/3">
                <Link 
                  href={service.href}
                  class="block hover:no-underline h-full"
                >
                  <Card.Root 
                    class="h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  >
                    <Image alt={service.title} class="w-full h-48 object-cover" />
                    <Card.Header>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Description>{service.description}</Card.Description>
                    </Card.Header>
                  </Card.Root>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us section */}
        <section class="bg-muted rounded-lg p-8">
          <h2 class="text-3xl font-semibold mb-6">Why Choose Safer Grab Bars?</h2>
          <ul class="space-y-4 text-lg">
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Experienced Professionals:</strong> Our certified installers bring extensive experience to each project, ensuring a secure and durable installation.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Quality Products:</strong> We only use high-quality, ADA-compliant products to ensure both safety and style.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Local Experts:</strong> We're proud to serve the Dallas-Fort Worth community, offering prompt, reliable, and personalized service.</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section class="text-center space-y-6 py-8">
          <h3 class="text-2xl font-semibold">Book Your Grab Bar Installation in Dallas-Fort Worth Today</h3>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your home or business with professional grab bar installation from Safer Grab Bars. Contact us today for a free consultation and learn more about how our services can provide added safety and peace of mind.
          </p>
          <Button look="primary" size="lg">Get a Free Quote</Button>
        </section>
      </div>
    </div>
  );
});