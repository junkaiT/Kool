import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { chemicalOverhaul } from "@/data/services/chemical-overhaul";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(chemicalOverhaul);

export default function ChemicalOverhaulPage() {
  return <ServicePageTemplate data={chemicalOverhaul} />;
}
