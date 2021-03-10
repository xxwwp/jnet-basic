// 文章页面导航
/** @jsx jsx */
import { Link } from "gatsby";
import { css, jsx } from "@emotion/react";
import { NavList } from "docs/nav.yaml";
import DocsNavList from "./docs-nav-list";

const navStyle = css`
  width: 200px;
  overflow: hidden;
  padding: 10px 0px 50px;
  border-right: 4px double rgba(0, 0, 0, 0.1);
  min-height: 100%;
  background: #fff;
  .title {
    text-align: center;
    a {
      line-height: 40px;
      color: #c0c0c0;
      text-decoration: none;
      font-size: 1.5em;
    }
  }
`;

interface DocsPageNavProps {
  navList?: NavList;
}

export default function DocsPageNav({ navList }: DocsPageNavProps) {
  return (
    <nav css={navStyle}>
      <div className="title">
        <Link to={`/`}>JNet Basic</Link>
      </div>
      <DocsNavList list={navList} type="link" />
    </nav>
  );
}
