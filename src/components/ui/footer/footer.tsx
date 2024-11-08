import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LeadForm } from "../../LeadForm";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { href: '/services/grab-bar-installation', label: 'Grab Bar Installation' },
      { href: '/services/bathroom-safety-consultation', label: 'Safety Consultation' },
      { href: '/services/custom-grab-bar-solution', label: 'Custom Solutions' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/about/why-choose-us', label: 'Why Choose Us' },
      { href: '/about/our-team', label: 'Our Team' },
    ],
    serviceAreas: [
      { href: '/service-areas/dallas-grab-bar-installation', label: 'Dallas' },
      { href: '/service-areas/fort-worth-grab-bar-installation', label: 'Fort Worth' },
    ],
    resources: [
      { href: '/contact', label: 'Contact' },
      { href: '/contact/request-quote', label: 'Request Quote' },
      { href: '/contact/service-areas', label: 'Service Areas' },
    ],
  };

  return (
    <footer class="bg-muted mt-16">
      <div class="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 class="font-semibold text-lg mb-4">Safer Grab Bars</h3>
            <p class="text-muted-foreground mb-4">
              Professional grab bar installation services throughout Dallas-Fort Worth. Making spaces safer, one installation at a time.
            </p>
            <LeadForm />
          </div>

          {/* Services Links */}
          <div>
            <h3 class="font-semibold text-lg mb-4">Services</h3>
            <ul class="space-y-2">
              {links.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    class="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 class="font-semibold text-lg mb-4">Company</h3>
            <ul class="space-y-2">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    class="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 class="font-semibold text-lg mb-4">Contact</h3>
            <ul class="space-y-2 text-muted-foreground">
              <li>Dallas-Fort Worth, TX</li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  class="hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@safergrab.com"
                  class="hover:text-primary transition-colors"
                >
                  info@safergrab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div class="border-t border-border mt-8 pt-8">
          <h3 class="font-semibold text-lg mb-4">Service Areas</h3>
          <ul class="flex flex-wrap gap-4">
            {links.serviceAreas.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div class="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-muted-foreground">
            © {currentYear} Safer Grab Bars. All rights reserved.
          </p>
          <ul class="flex flex-wrap gap-4 text-sm">
            <li>
              <Link 
                href="/legal/privacy-policy" 
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/legal/terms-and-conditions" 
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link 
                href="/legal/accessibility-statement" 
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}); 