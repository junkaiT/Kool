import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { commercial } from "@/data/services/commercial";

export default function CommercialPage() {
  return <ServicePageTemplate data={commercial} />;
}
