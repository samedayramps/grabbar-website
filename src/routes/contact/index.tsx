import { component$ } from '@builder.io/qwik';
import { Breadcrumb } from '../../components/ui/breadcrumb/breadcrumb';
import { LeadForm } from '../../components/LeadForm';
import { ServiceAreasGrid } from '../../components/ServiceAreasGrid';

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
              <Breadcrumb.Page>Contact</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <div class="space-y-12">
        {/* Hero Section */}
        <section class="text-center space-y-4">
          <h1 class="text-4xl font-bold">Contact Us</h1>
          <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to make your space safer? Get in touch with our team for professional grab bar installation services throughout Dallas-Fort Worth.
          </p>
        </section>

        {/* Contact Form Section */}
        <section class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-semibold mb-6">Get Your Free Quote</h2>
          <div class="inline-block">
            <LeadForm />
          </div>
        </section>

        {/* Service Areas Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-8">Our Service Areas</h2>
          <ServiceAreasGrid />
        </section>
      </div>
    </div>
  );
});
