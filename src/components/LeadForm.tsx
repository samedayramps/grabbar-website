import { component$, useSignal } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { Modal } from './ui/modal/modal';
import { Button } from './ui/button/button';
import { useLeadFormAction } from '../routes/layout';

export const LeadForm = component$(() => {
  const isOpen = useSignal(false);
  const formAction = useLeadFormAction();

  return (
    <>
      <Modal.Root bind:show={isOpen}>
        <Modal.Trigger>
          <Button look="primary" size="lg" asChild>Get a Free Quote</Button>
        </Modal.Trigger>
        <Modal.Panel position="center" class="w-full max-w-2xl">
          <Modal.Title class="text-2xl font-bold mb-4">
            Get a Free Quote for Grab Bar Installation
          </Modal.Title>
          <Modal.Description class="mb-6">
            Fill out the form below to receive a free consultation and quote for grab bar installation. 
            We'll be in touch soon to discuss your needs and how we can make your space safer.
          </Modal.Description>

          <Form action={formAction} class="space-y-6">
            <div class="space-y-4">
              {/* Full Name */}
              <div>
                <label class="block text-sm font-medium mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required
                  placeholder="John Doe"
                  class="w-full rounded-md border border-input px-3 py-2"
                />
              </div>

              {/* Phone */}
              <div>
                <label class="block text-sm font-medium mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="(123) 456-7890"
                  class="w-full rounded-md border border-input px-3 py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label class="block text-sm font-medium mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="johndoe@example.com"
                  class="w-full rounded-md border border-input px-3 py-2"
                />
              </div>

              {/* Installation Address */}
              <div>
                <label class="block text-sm font-medium mb-1">Installation Address *</label>
                <input 
                  type="text" 
                  name="address" 
                  required
                  placeholder="123 Main St, Dallas, TX"
                  class="w-full rounded-md border border-input px-3 py-2"
                />
              </div>

              {/* Installation Type */}
              <div>
                <label class="block text-sm font-medium mb-1">Type of Installation *</label>
                <select 
                  name="installationType" 
                  required
                  class="w-full rounded-md border border-input px-3 py-2"
                >
                  <option value="">Select Installation Type</option>
                  <option value="bathroom">Bathroom Grab Bars</option>
                  <option value="shower">Shower Grab Bars</option>
                  <option value="ada">ADA-Compliant Grab Bars</option>
                  <option value="moen">Moen Grab Bars</option>
                  <option value="commercial">Commercial Grab Bars</option>
                </select>
              </div>

              {/* Contact Method */}
              <div>
                <label class="block text-sm font-medium mb-1">Preferred Contact Method *</label>
                <div class="space-x-4">
                  <label class="inline-flex items-center">
                    <input type="radio" name="contactMethod" value="phone" checked class="mr-2"/>
                    Phone
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" name="contactMethod" value="email" class="mr-2"/>
                    Email
                  </label>
                </div>
              </div>

              {/* Needs */}
              <div>
                <label class="block text-sm font-medium mb-1">Describe Your Needs</label>
                <textarea 
                  name="needs" 
                  rows={4}
                  placeholder="Tell us more about the installation, specific locations, or special requirements"
                  class="w-full rounded-md border border-input px-3 py-2"
                ></textarea>
              </div>

              {/* Timeline */}
              <div>
                <label class="block text-sm font-medium mb-1">How Soon Do You Need This Installation?</label>
                <select 
                  name="timeline" 
                  class="w-full rounded-md border border-input px-3 py-2"
                >
                  <option value="">Select Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1week">Within 1 Week</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="exploring">Not Sure / Exploring Options</option>
                </select>
              </div>
            </div>

            <div class="flex justify-end gap-4">
              <Modal.Close>
                <Button look="outline" asChild>Cancel</Button>
              </Modal.Close>
              <Button type="submit" look="primary">Get My Free Quote</Button>
            </div>
          </Form>

          {formAction.value?.success && (
            <div class="mt-4 p-4 bg-primary/10 text-primary rounded-md">
              {formAction.value.message}
            </div>
          )}
        </Modal.Panel>
      </Modal.Root>
    </>
  );
}); 