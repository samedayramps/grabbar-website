import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { cn } from "@qwik-ui/utils";
import { LeadForm } from "../../LeadForm";

export const Navbar = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <nav class={cn("sticky top-0 z-50 flex items-center justify-between p-4 bg-background shadow-md")}>
      <div class="flex items-center">
        <div class="hidden md:flex space-x-4">
          <Link href="/" class="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/about" class="text-foreground hover:text-primary">
            About
          </Link>
          <Link href="/services" class="text-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/contact" class="text-foreground hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
      <div class="hidden md:flex">
        <LeadForm />
      </div>
      <div class="md:hidden">
        <button
          class="text-foreground"
          aria-label="Open Menu"
          onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen.value && (
        <div class="absolute top-16 left-0 w-full bg-background p-4 flex flex-col space-y-2 md:hidden">
          <Link href="/" class="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/about" class="text-foreground hover:text-primary">
            About
          </Link>
          <Link href="/services" class="text-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/contact" class="text-foreground hover:text-primary">
            Contact
          </Link>
          <LeadForm />
        </div>
      )}
    </nav>
  );
}); 