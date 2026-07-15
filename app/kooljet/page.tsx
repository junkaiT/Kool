import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { kooljet } from "@/data/services/kooljet";

export default function KooljetPage() {
  return <ServicePageTemplate data={kooljet} />;
}
