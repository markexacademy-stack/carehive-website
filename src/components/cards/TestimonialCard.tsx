import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative h-full overflow-hidden rounded-[2rem] bg-navy-deep p-6 text-white sm:p-8">
      <span aria-hidden className="font-brand pointer-events-none absolute -top-4 right-4 text-8xl text-white/10">
        “
      </span>
      <div className="flex gap-1 text-coral" aria-label="5 star rating placeholder">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="relative mt-4 text-base leading-7 text-white/90">
        {testimonial.quote}
      </blockquote>
      <figcaption className="relative mt-5 text-sm font-semibold text-[#55e6dc]">
        — {testimonial.name}, {testimonial.location}
      </figcaption>
      {testimonial.isPlaceholder ? (
        <p className="relative mt-2 text-xs text-white/55">
          Placeholder review. Replace this entry in the testimonials data file
          when a real customer quote is available.
        </p>
      ) : null}
    </figure>
  );
}
