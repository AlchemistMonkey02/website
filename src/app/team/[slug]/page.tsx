import { notFound } from "next/navigation";

/*
import { PageHero } from "@/components/layout/PageHero";
import { SkillBar } from "@/components/ui/SkillBar";
import { Globe, Zap, Briefcase, Camera, Mail, Phone } from "lucide-react";
import { getTeamMemberPageMetadata } from "@/lib/seo";
import { SocialShare } from "@/components/ui/SocialShare";

// Fallback hardcoded team records
export const teamMembersData: Record<string, any> = { ... };
*/

export function generateStaticParams() {
  return [{ slug: "disabled" }];
}

export default async function TeamMemberDetailsPage() {
  notFound();
}

