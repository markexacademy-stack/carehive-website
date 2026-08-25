import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/faqs";

export function FAQSection({
  items = faqs,
  title = "Questions families usually ask",
}: {
  items?: { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="bg-soft py-16 sm:py-20" id="faqs">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQs"
          title={title}
          description="Clear answers without invented service areas, guarantees or medical claims."
        />
        <Accordion items={items} />
      </Container>
    </section>
  );
}
