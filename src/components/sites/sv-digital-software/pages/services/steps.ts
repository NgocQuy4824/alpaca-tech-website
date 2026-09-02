import type { LucideIcon } from "lucide-react";

/** A presentation-ready process step (dictionary step + icon). */
export type StepDef = {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

type RawStep = { step: string; title: string; desc: string };

/**
 * Zips dictionary steps (step/title/desc) with a per-template icon list,
 * producing presentation-ready StepDefs. Falls back to the last icon if the
 * list is shorter than the steps.
 */
export function withIcons(steps: RawStep[], icons: LucideIcon[]): StepDef[] {
  return steps.map((s, i) => ({ ...s, icon: icons[i] ?? icons[icons.length - 1] }));
}
