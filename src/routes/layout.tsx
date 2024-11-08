import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "../components/ui/navbar/navbar";
import { Footer } from "../components/ui/footer/footer";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeAction$, zod$ } from '@builder.io/qwik-city';
import { z } from 'zod';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export const useLeadFormAction = routeAction$(
  async (data) => {
    // Handle form submission here
    console.log('Form submitted:', data);
    return {
      success: true,
      message: 'Thank you! We will contact you shortly.',
    };
  },
  zod$({
    fullName: z.string().min(2, 'Please enter your full name'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    email: z.string().email('Please enter a valid email address'),
    address: z.string().min(5, 'Please enter your installation address'),
    installationType: z.string(),
    contactMethod: z.enum(['phone', 'email']),
    needs: z.string().optional(),
    timeline: z.string().optional(),
  })
);

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class="min-h-screen">
        <div class="px-4 py-6">
          <Slot />
        </div>
      </main>
      <Footer />
    </>
  );
});
