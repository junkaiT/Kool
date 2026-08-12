import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { chemicalWash } from "@/data/services/chemical-wash";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(chemicalWash);

export default function ChemicalWashPage() {
  return <ServicePageTemplate data={chemicalWash} />;
}
