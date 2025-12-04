import { footerColumns } from "@/lib/menuData2";
import { notFound } from "next/navigation";
import FooterHero from "../page";
import StartSelling from "../StartSelling";
import WordInTheMarket from "../WordInTheMarket";

const formatTitle = (slug: string) => {
  if (!slug) return "Page Details"; // Safety fallback
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default async function FooterDynamicPage({ params }: { params: Promise<{ slug: string }> }) {

  const resolvedParams = await params;
  const { slug } = resolvedParams;

  let pageData = (footerColumns as any)?.[slug];

  if (!pageData) {
    pageData = {
      title: formatTitle(slug),
      content: "This page is currently under construction. Please check back later for updates regarding " + formatTitle(slug) + ".",
      lastUpdated: new Date().toLocaleDateString()
    };
  }

  return (
    <div className="">
      <FooterHero title={pageData.title} />
      <StartSelling />
      <WordInTheMarket/>
    </div>
  );
}