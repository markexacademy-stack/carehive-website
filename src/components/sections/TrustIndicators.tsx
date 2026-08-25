import { HeartHandshake, Home, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const items = [
  { icon: HeartHandshake, label: "Compassionate caregivers" },
  { icon: Home, label: "Care in your own home" },
  { icon: Users, label: "Family-first communication" },
  { icon: Sparkles, label: "Support tailored to each patient" },
];

export function TrustIndicators() {
  return (
    <section className="bg-white">
      <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-soft px-4 py-4">
              <item.icon className="h-5 w-5 text-teal" aria-hidden />
              <p className="text-sm font-semibold text-navy">{item.label}</p>
            </div>
          </FadeIn>
        ))}
      </Container>
    </section>
  );
}
