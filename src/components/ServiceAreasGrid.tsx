import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Card } from './ui/card/card';
import Image from '/public/shower-grab-bar.webp?jsx';

export const ServiceAreasGrid = component$(() => {
  const serviceAreas = [
    {
      city: 'Dallas',
      description: 'Professional grab bar installation services throughout Dallas and surrounding neighborhoods.',
      href: '/service-areas/dallas-grab-bar-installation',
      areas: ['Downtown Dallas', 'North Dallas', 'Lake Highlands', 'Preston Hollow']
    },
    {
      city: 'Fort Worth',
      description: 'Expert grab bar installation for Fort Worth homes, businesses, and healthcare facilities.',
      href: '/service-areas/fort-worth-grab-bar-installation',
      areas: ['Downtown Fort Worth', 'North Fort Worth', 'South Fort Worth', 'West Fort Worth']
    }
  ];

  return (
    <section class="space-y-8">
      <div class="flex flex-wrap -mx-4">
        {serviceAreas.map((area) => (
          <div key={area.city} class="w-full px-4 mb-8 md:w-1/2">
            <Link 
              href={area.href}
              class="block hover:no-underline h-full"
            >
              <Card.Root 
                class="h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <Image alt={`${area.city} Grab Bar Installation`} class="w-full h-48 object-cover" />
                <Card.Header>
                  <Card.Title class="text-xl mb-2">{area.city} Grab Bar Installation</Card.Title>
                  <Card.Description>{area.description}</Card.Description>
                  <div class="mt-4">
                    <h4 class="font-medium mb-2">Areas Served:</h4>
                    <ul class="list-disc pl-5 text-sm text-muted-foreground">
                      {area.areas.map((subArea) => (
                        <li key={subArea}>{subArea}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Header>
              </Card.Root>
            </Link>
          </div>
        ))}
      </div>

      <div class="bg-muted rounded-lg p-8">
        <h2 class="text-3xl font-semibold mb-6">Full Coverage Area</h2>
        <p class="text-lg mb-4">
          Our service area extends throughout the Dallas-Fort Worth metroplex, including but not limited to:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 class="font-semibold mb-2">Dallas County</h3>
            <ul class="list-disc pl-5 text-muted-foreground">
              <li>Dallas</li>
              <li>Richardson</li>
              <li>Garland</li>
              <li>Irving</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Tarrant County</h3>
            <ul class="list-disc pl-5 text-muted-foreground">
              <li>Fort Worth</li>
              <li>Arlington</li>
              <li>North Richland Hills</li>
              <li>Hurst</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Surrounding Areas</h3>
            <ul class="list-disc pl-5 text-muted-foreground">
              <li>Plano</li>
              <li>Frisco</li>
              <li>McKinney</li>
              <li>Denton</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}); 