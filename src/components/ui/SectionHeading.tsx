import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center mx-auto" : "items-start",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-[2px] w-10 bg-primary" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-heading">
          {subtitle}
        </span>
      </div>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase font-heading",
        light ? "text-white" : "text-secondary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "max-w-2xl text-base md:text-lg leading-relaxed mt-2",
          light ? "text-white/70" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
