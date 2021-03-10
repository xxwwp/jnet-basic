/** @jsx jsx  */
import { css, jsx } from "@emotion/react";
import { NavList } from "docs/nav.yaml";
import DocsNavList from "./docs-nav-list";

const navStyle = css`
  padding: 20px 0;
  white-space: nowrap;
  min-width: 120px;
  box-sizing: content-box;
  .title {
    padding-left: 20px;
    margin-bottom: 20px;
    font-size: 1.2em;
    font-weight: lighter;
  }
`;

export interface DocsCatalogProps {
  catalogList?: NavList;
}

function DocsCatalog({ catalogList }: DocsCatalogProps) {
  return (
    <nav css={navStyle}>
      <div className={"title"}>目录</div>
      <DocsNavList list={catalogList} type="anchor" />
    </nav>
  );
}

export default DocsCatalog;
