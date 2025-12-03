import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { footerColumns } from "@/lib/menuData2";

export async function generateStaticParams() {
  const slugs: string[] = [];

  footerColumns.forEach((col) => {
    if (col.links) {
      col.links.forEach((link) => {
        slugs.push(link.href.split("/").pop()!);
      });
    } else if (col.columns) {
      col.columns.forEach((section) =>
        section.links.forEach((link) => {
          slugs.push(link.href.split("/").pop()!);
        })
      );
    }
  });

  return slugs.map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // find page info in footerColumns
  let currentPage: { label: string } | null = null;

  footerColumns.forEach((col) => {
    if (col.links) {
      col.links.forEach((link) => {
        if (link.href.endsWith(slug)) currentPage = link;
      });
    } else if (col.columns) {
      col.columns.forEach((section) =>
        section.links.forEach((link) => {
          if (link.href.endsWith(slug)) currentPage = link;
        })
      );
    }
  });

  if (!currentPage) return notFound();

  return (
    <div className="container py-10">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-wide">
            {/* {currentPage.label} */}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700 text-sm leading-6">
          <p>
            This page will soon contain full details about{" "}
            {/* <strong>{currentPage.label}</strong>. */}
          </p>
          <p>
            Content is under preparation — if you're looking for something
            specific, feel free to contact us.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
