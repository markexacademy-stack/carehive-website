"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn(
        "divide-y divide-line rounded-3xl border border-line bg-white",
        className,
      )}
    >
      {items.map((item, index) => {
        const value = `item-${index}`;
        return (
          <AccordionPrimitive.Item key={item.question} value={value}>
            <AccordionPrimitive.Header asChild>
              <h3 className="m-0">
                <AccordionPrimitive.Trigger
                  className="group flex w-full items-start justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-navy transition hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:px-6"
                  aria-controls={`${value}-content`}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </AccordionPrimitive.Trigger>
              </h3>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content
              id={`${value}-content`}
              className="overflow-hidden data-[state=closed]:animate-none"
            >
              <p className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6">
                {item.answer}
              </p>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        );
      })}
    </AccordionPrimitive.Root>
  );
}
