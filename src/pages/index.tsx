import { Link } from "gatsby";
import * as React from "react";
import Root from "../components/root";
import navs from "docs/nav.yaml";
console.log(navs);

const Index = () => (
  <Root>
    <main>
      <h1>Jnet Basic</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/html/概述"}>HTML</Link>
          </li>
          <li>
            <Link to={"/css/概述"}>CSS</Link>
          </li>
          <li>
            <Link to={"/js/程序引导课"}>JavaScript</Link>
          </li>
        </ul>
      </nav>
      <blockquote>
        <p>Jnet Basic 课堂讲义。</p>
      </blockquote>
    </main>
  </Root>
);

export default Index;
