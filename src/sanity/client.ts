/** @format */

import { createClient, type QueryParams } from "@sanity/client";

const client = createClient({
  projectId: "a73vobyr",
  dataset: "develop",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 60,
      tags,
    },
  });
}
