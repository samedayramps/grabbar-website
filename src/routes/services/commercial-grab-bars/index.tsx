import { component$ } from '@builder.io/qwik';
import { Breadcrumb } from '../../../components/ui/breadcrumb/breadcrumb';
import { LeadForm } from '../../../components/LeadForm';

export default component$(() => {
  const commercialClients = [
    {
      title: 'Offices & Corporate Buildings',
      description: 'Enhance restroom safety for employees and visitors with durable, ADA-compliant grab bars.'
    },
    {
      title: 'Healthcare Facilities',
      description: 'From hospitals to clinics, we provide secure grab bar installations to support patient mobility and safety.'
    },
    {
      title: 'Retail Stores & Shopping Centers',
      description: 'Make your space accessible and welcoming with grab bars designed for public use and heavy traffic.'
    },
    {
      title: 'Hospitality',
      description: 'Ensure compliance and comfort in hotels, restaurants, and other public venues with secure, high-quality grab bars.'
    },
    {
      title: 'Educational Institutions',
      description: 'Schools and campuses can provide safe, accessible facilities with our ADA-compliant grab bars.'
    }
  ];

  const installationSteps = [
    {
      title: 'Consultation & Assessment',
      description: "We begin with an on-site consultation to assess your facility's needs and determine the ideal placement for grab bars. Our team will work with you to understand your safety goals and compliance requirements."
    },
    {
      title: 'Product Selection',
      description: "Choose from a selection of ADA-compliant grab bars that match your facility's aesthetic and durability needs. Our products include various finishes, lengths, and styles, ensuring a perfect fit for your space."
    },
    {
      title: 'Professional Installation',
      description: 'Our skilled installers handle every detail, ensuring a secure fit and adherence to ADA standards. We install grab bars in restrooms, hallways, entryways, and any other area requiring additional support.'
    },
    {
      title: 'Compliance Check',
      description: 'Once installation is complete, we verify that each grab bar meets ADA regulations and provide you with documentation for compliance.'
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
              <Breadcrumb.Link href="/services">Services</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Commercial Grab Bars</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <div class="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section class="text-center space-y-4">
          <h1 class="text-4xl font-bold">Trusted Commercial Grab Bar Installations in Dallas-Fort Worth</h1>
          <p class="text-lg text-muted-foreground">
            Ensure your business or facility meets ADA compliance and provides a safe, accessible environment for all with professional commercial grab bar installations from Safer Grab Bars. Serving the Dallas-Fort Worth metroplex, we specialize in ADA-compliant grab bar solutions that bring safety, durability, and peace of mind to a wide range of commercial spaces.
          </p>
        </section>

        {/* ADA Compliance Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-4">Enhance Accessibility with ADA-Compliant Grab Bars</h2>
          <p class="text-lg text-muted-foreground">
            Accessibility is a crucial aspect of creating an inclusive space, whether it's an office, healthcare facility, retail store, or public building. Our ADA-compliant grab bars are carefully selected and professionally installed to provide secure support in high-traffic areas such as bathrooms, hallways, and entrances. By choosing Safer Grab Bars, you're ensuring that your facility meets industry standards while prioritizing the safety and comfort of your clients, patients, and employees.
          </p>
        </section>

        {/* Who We Serve Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-6">Who We Serve</h2>
          <div class="grid gap-6 md:grid-cols-2">
            {commercialClients.map((client) => (
              <div key={client.title} class="bg-muted rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-2">{client.title}</h3>
                <p class="text-muted-foreground">{client.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section class="bg-muted rounded-lg p-8">
          <h2 class="text-3xl font-semibold mb-6">Why Choose Safer Grab Bars for Your Commercial Needs?</h2>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Certified Installation:</strong> Our experienced technicians are trained in ADA standards and will install grab bars according to compliance requirements and best practices.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Quality Products:</strong> We offer a range of durable grab bars, including options from trusted brands like Moen, that provide both function and style for your commercial space.</span>
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Local Dallas-Fort Worth Expertise:</strong> We understand the unique needs of businesses in the Dallas-Fort Worth area and are committed to providing prompt, reliable service that prioritizes your safety and satisfaction.</span>
            </li>
          </ul>
        </section>

        {/* Installation Process Section */}
        <section>
          <h2 class="text-3xl font-semibold mb-6">Our Commercial Installation Process</h2>
          <div class="space-y-6">
            {installationSteps.map((step, index) => (
              <div key={step.title} class="flex gap-4">
                <div class="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">{step.title}</h3>
                  <p class="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section class="text-center space-y-6 py-8">
          <h3 class="text-2xl font-semibold">Contact Us for a Free Commercial Consultation</h3>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to enhance accessibility and safety at your business? Contact Safer Grab Bars today for a free consultation. Our team will help you create a safer, more inclusive space that meets ADA standards and promotes peace of mind for everyone who enters your facility.
          </p>
          <div class="inline-block">
            <LeadForm />
          </div>
        </section>
      </div>
    </div>
  );
});

export const head = {
  title: 'Commercial Grab Bar Solutions | Dallas-Fort Worth | Safer Grab Bars',
  meta: [
    {
      name: 'description',
      content: 'Professional commercial grab bar installation in Dallas-Fort Worth. ADA-compliant solutions for offices, healthcare facilities, retail stores, and more. Get a free consultation.',
    },
  ],
};
