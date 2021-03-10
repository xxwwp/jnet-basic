/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Markdown_H1_6 from "./markdown-h1-6";
import MarkdownTable from "./markdown-table";

const articleStyle = css`
  line-height: 1.5;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 1.2;
    color: #212529;
    a,
    a:hover,
    a:active,
    a:visited {
      color: inherit;
    }
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
  }
  em {
    background-color: #fcf8e3;
    font-style: normal;
    color: #000;
  }
  blockquote {
    margin: 1.25rem -1rem;
    padding: 0.5rem 1.25rem;
    border: 1px solid #eee;
    border-left-width: 0.25rem;
    border-radius: 0.25rem;
    border-left-color: #f0ad4e;
    cite {
      text-align: right;
      color: silver;
      font-size: 1rem;
    }
  }
  ul,
  ol {
    padding-left: 2rem;
  }
  .remark-highlight {
    margin-left: -1rem;
    margin-right: -1rem;
  }
  pre {
    border-radius: 5px;
    box-shadow: 0 0 10px 3px #cacaca;
  }
  code {
    color: #e83e8c;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 87.5%;
  }
  img {
    box-shadow: 0 0 10px 3px rgba(222, 226, 230, 0.548);
    border-radius: 5px;
  }
  a {
    color: #0d6efd;
  }
  a:hover {
    color: #488df5;
  }
  a:visited {
    color: #0a5dda;
  }
  a:active {
    color: #72a6f5;
    text-shadow: 0 0 3px #7e8af8;
  }
`;

function MarkdownPage({ data }: { data: any }) {
  return (
    <article css={articleStyle}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <hr />
      <MDXProvider components={{ ...Markdown_H1_6, table: MarkdownTable }}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </article>
  );
}

export default MarkdownPage;
