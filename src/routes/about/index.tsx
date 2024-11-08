import { component$ } from '@builder.io/qwik';
import { Breadcrumb } from '../../components/ui/breadcrumb/breadcrumb';
import { LeadForm } from '../../components/LeadForm';
import type { DocumentHead } from '@builder.io/qwik-city';

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
              <Breadcrumb.Page>About</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <div class="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section class="text-center space-y-4">
          <h1 class="text-4xl font-bold">Safer Grab Bars – Your Trusted Partner in Safety</h1>
          <p class="text-lg text-muted-foreground">
            Welcome to Safer Grab Bars, where safety and accessibility are our priorities. Founded in Dallas-Fort Worth, we're committed to providing high-quality, ADA-compliant grab bar installation services to enhance the safety and comfort of homes, businesses, and public spaces across the region.
          </p>
        </section>

        {/* Mission Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
          <p class="text-lg text-muted-foreground">
            At Safer Grab Bars, our mission is simple: to make every space safer for everyone. From seniors who want greater stability to businesses aiming to meet accessibility standards, we're here to create secure environments where people feel confident and supported.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section class="bg-muted rounded-lg p-8">
          <h2 class="text-3xl font-semibold mb-6">Why Choose Safer Grab Bars?</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">Experienced and Certified Technicians</h3>
              <p class="text-muted-foreground">Our team is trained in professional installation techniques to ensure that every grab bar is mounted securely. We follow ADA guidelines closely and customize each installation to meet the unique needs of our clients.</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Quality and Durability</h3>
              <p class="text-muted-foreground">We only use premium grab bars from trusted brands, including Moen, known for their durability and style. Every product we install is designed to withstand daily use while enhancing the aesthetics of your space.</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Local Expertise</h3>
              <p class="text-muted-foreground">As a Dallas-Fort Worth business, we understand the needs of our community. We're proud to offer prompt, reliable service to individuals and businesses throughout the metroplex.</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-4">Our Story</h2>
          <p class="text-lg text-muted-foreground">
            Safer Grab Bars was founded out of a passion for helping people live more safely and independently. We saw a need in our community for trustworthy, skilled grab bar installation services that don't compromise on quality. Our team is made up of dedicated professionals who genuinely care about the well-being of our clients. Every installation is a step towards creating safer environments, whether in private homes, commercial facilities, or healthcare settings.
          </p>
        </section>

        {/* Meet Our Team Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <p class="text-lg text-muted-foreground">
            Our team at Safer Grab Bars is a group of experienced, certified professionals with a background in safe installations, mobility solutions, and customer care. We take pride in the relationships we build with our clients and are always here to answer questions, provide guidance, and ensure satisfaction with every installation.
          </p>
        </section>

        {/* Community Commitment Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-4">Community Commitment</h2>
          <p class="text-lg text-muted-foreground">
            We believe in giving back to the Dallas-Fort Worth community that we call home. From partnering with local organizations to providing resources on safe living for seniors, we're dedicated to making a positive impact both inside and outside our installations.
          </p>
        </section>

        {/* Contact CTA Section */}
        <section class="text-center space-y-6 py-8">
          <h3 class="text-2xl font-semibold">Ready to make your space safer?</h3>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help with expert advice and a free consultation. Reach out to Safer Grab Bars today and take the first step toward a safer, more accessible environment.
          </p>
          <div class="inline-block">
            <LeadForm />
          </div>
        </section>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'About Us | Safer Grab Bars',
  meta: [
    {
      name: 'description',
      content: 'Learn about Safer Grab Bars, your trusted partner for professional grab bar installation in Dallas-Fort Worth. Experienced technicians, quality products, and local expertise.',
    },
  ],
}; 