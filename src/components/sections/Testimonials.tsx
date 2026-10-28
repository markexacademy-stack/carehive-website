import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="bg-[#fff8f0] py-16 sm:py-24">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="Family voices"
          title="What families say"
          description="Real customer quotes will be published here when they are provided. These cards are placeholders so the layout is ready."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
