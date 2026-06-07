"use client"

import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeroAction {
  text: string
  href: string
  variant?: "default" | "glow" | "outline"
  icon?: ReactNode
}

interface HeroBadge {
  text: string
  action?: {
    text: string
    href: string
  }
}

interface HeroImage {
  light: string
  dark: string
  alt: string
}

interface HeroSectionProps {
  badge?: HeroBadge
  title: string
  description?: string
  actions?: HeroAction[]
  image?: HeroImage
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
      {/* Subtle radial glow behind the content */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm shadow-sm">
              <span className="text-muted-foreground">{badge.text}</span>
              {badge.action && (
                <>
                  <span className="text-muted-foreground/40">·</span>
                  <Link
                    href={badge.action.href}
                    className="font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    {badge.action.text} →
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
              {description}
            </p>
          )}

          {/* Actions */}
          {actions && actions.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {actions.map((action, i) => (
                <Link
                  key={i}
                  href={action.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-95",
                    action.variant === "glow"
                      ? "bg-primary text-primary-foreground shadow-[0_0_18px_rgba(var(--primary-rgb,99,102,241),0.45)] hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(var(--primary-rgb,99,102,241),0.65)]"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                  )}
                >
                  {action.icon}
                  {action.text}
                </Link>
              ))}
            </div>
          )}

          {/* Preview image */}
          {image && (
            <div className="mt-4 w-full max-w-5xl overflow-hidden rounded-2xl border border-border shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
              <Image
                src={image.light}
                alt={image.alt}
                width={1200}
                height={750}
                className="dark:hidden w-full"
                priority
              />
              <Image
                src={image.dark}
                alt={image.alt}
                width={1200}
                height={750}
                className="hidden dark:block w-full"
                priority
              />
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
