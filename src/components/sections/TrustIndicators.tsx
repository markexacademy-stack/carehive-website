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
    <section className="relative z-10 -mt-10 bg-transparent sm:-mt-14">
      <Container className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.05}>
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-navy-deep/80 px-4 py-4 text-white shadow-[0_18px_40px_-24px_rgb(0_0_0/0.7)] backdrop-blur-md">
              <item.icon className="h-5 w-5 shrink-0 text-[#55e6dc]" aria-hidden />
              <p className="text-sm font-semibold">{item.label}</p>
            </div>
          </FadeIn>
        ))}
      </Container>
    </section>
  );
}
