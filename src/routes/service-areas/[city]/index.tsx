import { component$ } from '@builder.io/qwik';
import { Breadcrumb } from '../../../components/ui/breadcrumb/breadcrumb';
import { LeadForm } from '../../../components/LeadForm';
import type { StaticGenerateHandler } from '@builder.io/qwik-city';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  // Define which cities to pre-render
  return {
    params: [
      { city: 'dallas-grab-bar-installation' },
      { city: 'fort-worth-grab-bar-installation' }
    ]
  };
};

export default component$(() => {
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
              <Breadcrumb.Link href="/service-areas">Service Areas</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Dallas Grab Bar Installation</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <div class="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section class="text-center space-y-4">
          <h1 class="text-4xl font-bold">Dallas Grab Bar Installation Services</h1>
          <p class="text-lg text-muted-foreground">
            Professional grab bar installation services throughout Dallas and surrounding areas. 
            Our experienced team provides safe, reliable installations for homes and businesses.
          </p>
        </section>

        {/* Areas Served Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-6">Areas We Serve in Dallas</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xl font-semibold mb-4">Residential Services</h3>
              <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>North Dallas</li>
                <li>Lake Highlands</li>
                <li>Preston Hollow</li>
                <li>Downtown Dallas</li>
                <li>Oak Lawn</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">Commercial Services</h3>
              <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Medical Facilities</li>
                <li>Senior Living Centers</li>
                <li>Office Buildings</li>
                <li>Retail Locations</li>
                <li>Public Facilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="text-center space-y-6 py-8">
          <h3 class="text-2xl font-semibold">Ready to Make Your Space Safer?</h3>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for grab bar installation in Dallas.
          </p>
          <div class="inline-block">
            <LeadForm />
          </div>
        </section>
      </div>
    </div>
  );
}); 