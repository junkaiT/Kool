import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { kooljet } from "@/data/services/kooljet";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(kooljet);

export default function KooljetPage() {
  return <ServicePageTemplate data={kooljet} />;
}
