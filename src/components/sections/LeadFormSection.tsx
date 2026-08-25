import { Container } from "@/components/ui/container";
import { LeadForm } from "@/components/forms/LeadForm";

export function LeadFormSection({ source = "homepage" }: { source?: string }) {
  return (
    <section className="bg-teal-light/50 py-16 sm:py-20" id="request-care">
      <Container className="max-w-4xl">
        <LeadForm source={source} />
      </Container>
    </section>
  );
}
