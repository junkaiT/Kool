import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { installation } from "@/data/services/installation";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(installation);

export default function InstallationPage() {
  return <ServicePageTemplate data={installation} />;
}
