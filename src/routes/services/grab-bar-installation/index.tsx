import { component$ } from '@builder.io/qwik';
import { Breadcrumb } from '../../../components/ui/breadcrumb/breadcrumb';

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
              <Breadcrumb.Link href="/services">Services</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Grab Bar Installation</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>

      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Grab Bar Installation</h1>
        <p class="text-lg text-muted-foreground">
          Overview of installation process, benefits, and types of grab bars offered.
        </p>
        
        {/* Add more content sections here */}
      </div>
    </div>
  );
}); 