/** @jsx jsx */
import { Link } from "gatsby";
import Root from "../components/root";
import { jsx, css } from "@emotion/react";

const Index = () => (
  <Root>
    <main
      css={css`
        padding: 100px 10%;
        text-align: center;
      `}
    >
      <h1
        css={css`
          font-size: 2.5rem;
          color: #00aeff;
        `}
      >
        Jnet Basic
      </h1>
      <nav>
        <ul
          css={css`
            list-style: none;
            padding-left: 0;
            li {
              margin: 10px;
            }

            a {
              color: #2f90ff;
            }
          `}
        >
          <li>
            <Link to={"/html/概述"}>HTML 讲义</Link>
          </li>
          <li>
            <Link to={"/css/概述"}>CSS 讲义</Link>
          </li>
          <li>
            <Link to={"/js/程序引导课"}>JavaScript 讲义</Link>
          </li>
        </ul>
      </nav>
    </main>
  </Root>
);

export default Index;
