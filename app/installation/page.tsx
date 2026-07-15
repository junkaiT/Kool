import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { installation } from "@/data/services/installation";

export default function InstallationPage() {
  return <ServicePageTemplate data={installation} />;
}
