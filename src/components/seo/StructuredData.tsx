import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export function StructuredData() {
  return (
    <JsonLd
      data={[organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()]}
    />
  );
}
