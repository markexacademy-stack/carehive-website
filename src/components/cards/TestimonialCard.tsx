import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="h-full rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="flex gap-1 text-coral" aria-label="5 star rating placeholder">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-base leading-7 text-ink">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-navy">
        — {testimonial.name}, {testimonial.location}
      </figcaption>
      {testimonial.isPlaceholder ? (
        <p className="mt-2 text-xs text-muted">
          Placeholder review. Replace this entry in the testimonials data file
          when a real customer quote is available.
        </p>
      ) : null}
    </figure>
  );
}
