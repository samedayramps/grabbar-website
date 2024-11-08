import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Card } from '../ui/card/card';
import Image from '/public/shower-grab-bar.webp?jsx';

export const Services = component$(() => {
  const services = [
    {
      title: 'Grab Bar Installation',
      description: 'Safe, secure grab bar installation for bathrooms, showers, and other areas in your home.',
      href: '/services/grab-bar-installation'
    },
    {
      title: 'Bathroom Safety Consultation',
      description: 'Expert guidance on the best grab bar placement for optimal bathroom safety.',
      href: '/services/bathroom-safety-consultation'
    },
    {
      title: 'Custom Grab Bar Solutions',
      description: 'Specialized grab bar installation tailored to meet your unique needs and space.',
      href: '/services/custom-grab-bar-solution'
    },
  ];

  return (
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link 
            key={service.title}
            href={service.href}
            class="block hover:no-underline"
          >
            <Card.Root 
              class="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <Image alt={service.title} class="w-full h-48 object-cover" />
              <Card.Header>
                <Card.Title>{service.title}</Card.Title>
                <Card.Description>{service.description}</Card.Description>
              </Card.Header>
            </Card.Root>
          </Link>
        ))}
      </div>
    </section>
  );
}); 