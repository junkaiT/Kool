import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { generalServicing } from "@/data/services/general-servicing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(generalServicing);

export default function GeneralServicingPage() {
  return <ServicePageTemplate data={generalServicing} />;
}
