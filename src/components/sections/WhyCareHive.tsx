import { Heart, Home, MessageCircle, Shield, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { WHY_CAREHIVE } from "@/lib/content";

const icons = [Heart, Shield, Sparkles, MessageCircle, Home, Users];

export function WhyCareHive() {
  return (
    <section className="bg-[#fff1ea] py-16 sm:py-20" id="why-carehive">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="Why CareHive"
          title="A calmer way to arrange care at home"
          description="Families come to CareHive when they need support they can explain, trust and actually get started."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CAREHIVE.map((item, index) => {
            const Icon = icons[index];
            return (
              <FadeIn
                key={item.title}
                delay={index * 0.04}
                className={index === 0 ? "lg:col-span-2" : undefined}
              >
                <article
                  className={`h-full rounded-[1.6rem] border border-white/70 p-6 shadow-[var(--shadow-card)] ${
                    index === 0 ? "bg-navy text-white lg:col-span-2" : "bg-white"
                  }`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light text-teal">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className={`text-xl font-bold ${index === 0 ? "text-white" : "text-navy"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-6 ${index === 0 ? "text-white/75" : "text-muted"}`}>
                    {item.text}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
