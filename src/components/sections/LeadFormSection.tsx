import { Container } from "@/components/ui/container";
import { LeadForm } from "@/components/forms/LeadForm";

export function LeadFormSection({ source = "homepage" }: { source?: string }) {
  return (
    <section className="bg-navy-deep py-16 sm:py-24" id="request-care">
      <Container className="max-w-4xl rounded-[2rem] bg-[#fff8f0] p-4 sm:p-8">
        <LeadForm source={source} />
      </Container>
    </section>
  );
}
