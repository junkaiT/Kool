import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { generalServicing } from "@/data/services/general-servicing";

export default function GeneralServicingPage() {
  return <ServicePageTemplate data={generalServicing} />;
}
