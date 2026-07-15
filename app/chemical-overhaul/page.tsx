import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { chemicalOverhaul } from "@/data/services/chemical-overhaul";

export default function ChemicalOverhaulPage() {
  return <ServicePageTemplate data={chemicalOverhaul} />;
}
