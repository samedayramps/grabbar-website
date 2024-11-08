import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Card } from '~/components/ui/card/card';
import { Button } from '~/components/ui/button/button';

export default component$(() => {
  const benefits = [
    {
      title: 'Customized Recommendations',
      description: 'Every bathroom is different, and so are your needs. We will suggest grab bar placement and other adjustments that best fit your space and mobility requirements.'
    },
    {
      title: 'ADA Compliance',
      description: 'For commercial spaces or homes with specific accessibility needs, we can recommend ADA-compliant grab bar options and proper placements to meet regulatory standards.'
    },
    {
      title: 'Peace of Mind',
      description: 'Our goal is to give you peace of mind, knowing that you or your loved ones can move confidently and safely in the bathroom.'
    }
  ];

  const audiences = [
    {
      title: 'Seniors',
      description: 'Reduce the risk of slips and falls by adding secure grab bars in high-traffic areas.'
    },
    {
      title: 'People with Limited Mobility',
      description: 'We offer solutions to enhance independence and accessibility for those with mobility challenges.'
    },
    {
      title: 'Caregivers and Family Members',
      description: 'Our consultation provides insights on how to make daily routines safer and more convenient.'
    },
    {
      title: 'Business Owners',
      description: 'For commercial bathrooms, we help you meet ADA guidelines and provide a safer environment for clients and employees.'
    }
  ];

  return (
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-6">
        Expert Bathroom Safety Consultations in Dallas-Fort Worth
      </h1>
      
      <section class="mb-8">
        <p class="text-lg">
          At Safer Grab Bars, we believe that every bathroom can be a safer space. Our professional safety consultation helps you determine the ideal placement for grab bars and other safety features, tailored to your unique needs. Whether you're preparing for future accessibility or want to enhance safety for a loved one, our team is here to guide you.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">What to Expect from Your Safety Consultation</h2>
        <p>
          During our bathroom safety consultation, our experienced team will visit your location to assess your bathroom layout, discuss your needs, and recommend the best solutions to improve safety and mobility. We focus on practical solutions that make daily tasks easier and prevent accidents, especially in wet, slippery areas like showers and bathtubs.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Benefits of a Bathroom Safety Consultation</h2>
        <div class="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card.Root key={benefit.title}>
              <Card.Header>
                <Card.Title>{benefit.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <Card.Description>{benefit.description}</Card.Description>
              </Card.Content>
            </Card.Root>
          ))}
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Who Can Benefit from a Bathroom Safety Consultation?</h2>
        <ul class="space-y-4">
          {audiences.map((audience) => (
            <li key={audience.title} class="border-b border-border pb-4 last:border-0">
              <h3 class="font-semibold mb-2">{audience.title}</h3>
              <p class="text-muted-foreground">{audience.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section class="mb-8 bg-muted p-6 rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Ready to Make Your Bathroom Safer?</h2>
        <p class="mb-6">
          A bathroom safety consultation is a simple step toward greater security and peace of mind. Contact Safer Grab Bars today to schedule your consultation in Dallas-Fort Worth. Let us help you create a safer, more accessible space for yourself or your loved ones.
        </p>
        <div class="flex gap-4">
          <Link href="/contact">
            <Button look="primary" size="lg">Schedule Your Consultation Today</Button>
          </Link>
          <Link href="/services">
            <Button look="outline" size="lg">View All Services</Button>
          </Link>
        </div>
      </section>
    </div>
  );
});
