import { pricingGuide } from "./pricing-guide";
import { servicingFrequency } from "./servicing-frequency";
import { whatHappensDuringAService } from "./what-happens-during-a-service";
import type { ArticleData } from "./types";

export const ARTICLES: ArticleData[] = [servicingFrequency, pricingGuide, whatHappensDuringAService];

export { pricingGuide, servicingFrequency, whatHappensDuringAService };
export type { ArticleData };
