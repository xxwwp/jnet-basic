/** @jsx jsx */
import { jsx } from "@emotion/react";
import { graphql } from "gatsby";
import DocsLayout from "../components/docs-layout";
import MarkdownPage from "../components/markdown-page";
import navs from "docs/nav.yaml";
import createArticleList from "../utils/createArticleList";

function Docs({ data }) {
  const catalogList = createArticleList(data.mdx.headings);

  return (
    <DocsLayout pageNavList={navs} catalogList={catalogList}>
      <MarkdownPage data={data} />
    </DocsLayout>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      headings {
        depth
        value
      }
    }
  }
`;

export default Docs;
