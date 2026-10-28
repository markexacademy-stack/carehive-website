import { cn } from "@/lib/utils";

export function WaveBand({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none relative h-16 w-full overflow-hidden sm:h-20",
        flip && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <svg
        className="wave-drift absolute bottom-0 left-0 h-full w-[200%] text-teal/25"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 64c120 28 240 28 360 0s240-28 360 0 240 28 360 0 240-28 360 0v56H0Z"
        />
      </svg>
      <svg
        className="wave-drift-slow absolute bottom-0 left-0 h-full w-[200%] text-coral/20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 80c160-36 280-36 440 0s280 36 440 0 280-36 440 0 160 36 120 0v40H0Z"
        />
      </svg>
    </div>
  );
}
