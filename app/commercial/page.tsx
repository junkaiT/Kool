import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { commercial } from "@/data/services/commercial";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(commercial);

export default function CommercialPage() {
  return <ServicePageTemplate data={commercial} />;
}
