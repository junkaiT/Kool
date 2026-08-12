import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book an Aircon Service Online",
  description:
    "Book your aircon service in Singapore online — pick a date and slot, or WhatsApp us. Same-day appointments often available. No payment needed upfront.",
  path: "/book",
});

export default function BookPage() {
  return <BookPageClient />;
}
