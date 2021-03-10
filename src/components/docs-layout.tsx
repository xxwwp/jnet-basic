/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react";
import DocsPageNav from "./docs-page-nav";
import Root, { RootProps } from "./root";
import DocsCatalog from "./docs-catalog";
import { useState } from "react";
import clsx from "clsx";
import { NavList } from "docs/nav.yaml";
import DocsNavButton from "./docs-nav-button";

const cls = {
  global: css`
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      color: #303133;
    }
  `,
  leftSidebar: css`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: transform 0.3s, opacity 0.3s;
    overflow: hidden;
    z-index: 10;
    @media screen and (min-width: 1200px) {
      &:hover {
        overflow: auto;
        overflow: overlay;
      }
    }
    @media screen and (max-width: 1200px) {
      opacity: 0;
      transform: translateX(-100%);
      &.active {
        opacity: 1;
        transform: translateX(0);
        overflow: auto;
        overflow: overlay;
      }
      nav {
        width: 100vw;
      }
    }
  `,
  main: css`
    margin: auto;
    width: 90%;
    max-width: 760px;

    .article-container {
      padding: 50px 10px;
    }
    .article-catalog {
      position: fixed;
      top: 0;
      left: 80%;
      left: calc(50% + 380px);
      bottom: 0;
      overflow: hidden;

      z-index: 10;
      &:hover {
        overflow: auto;
        overflow: overlay;
        padding-right: 1rem;
      }
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  `,
};

const prismTheme = <link key="prismTheme" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-tomorrow.css"></link>;

export interface DocsLayoutProps extends RootProps {
  pageNavList?: NavList;
  catalogList?: NavList;
}

function DocsLayout({ children, helmet = "", pageNavList, catalogList }: DocsLayoutProps) {
  const [leftSidebarActive, setLeftSidebarActive] = useState(false);

  function handleToggleLeftSidebarActive() {
    setLeftSidebarActive(!leftSidebarActive);
  }

  return (
    <Root helmet={[prismTheme, helmet]}>
      <Global styles={cls.global} />
      <aside className={clsx({ active: leftSidebarActive })} css={[cls.leftSidebar]}>
        <DocsPageNav navList={pageNavList} />
      </aside>
      <DocsNavButton expand={leftSidebarActive} onClick={handleToggleLeftSidebarActive} />
      <main css={cls.main}>
        <aside className="article-catalog">
          <DocsCatalog catalogList={catalogList} />
        </aside>
        <div className="article-container">{children}</div>
      </main>
    </Root>
  );
}

export default DocsLayout;
