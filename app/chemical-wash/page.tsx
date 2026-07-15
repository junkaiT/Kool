import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { chemicalWash } from "@/data/services/chemical-wash";

export default function ChemicalWashPage() {
  return <ServicePageTemplate data={chemicalWash} />;
}
