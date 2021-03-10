// 文章导航列表组件
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { NavList } from "docs/nav.yaml";
import { Link } from "gatsby";
import { ut } from "../utils/index";

export interface ListProps {
  list?: NavList;
  type?: "link" | "anchor";
  prefix?: string;
}

const cls = {
  linkActive: css`
    &.active {
      color: #999;
    }
  `,
};

const List = ({ list, type, prefix = "" }: ListProps) => {
  return (
    <ol>
      {list?.map(({ id, title, items }, index) => {
        let lable;
        const content = title ?? id;
        const prefixPath = `${prefix}/${id ?? title}`;
        const url = type === "link" ? `${prefix}/${id}` : `#${id}`;

        if (!ut.isUndefined(id)) {
          lable = (
            <Link activeClassName="active" css={cls.linkActive} to={url}>
              {content}
            </Link>
          );
        } else if (!ut.isUndefined(title)) {
          lable = <span>{title}</span>;
        } else {
          throw new Error("错误的导航列表渲染");
        }

        return (
          <li key={id ?? title ?? index}>
            {lable}
            {Array.isArray(items) && <List list={items} type={type} prefix={prefixPath} />}
          </li>
        );
      })}
    </ol>
  );
};
// 这个列表样式作用在左右两侧的列表中，更改需谨慎
export const ulStyle = css`
  ol {
    list-style: none;
    padding-left: 20px;
    margin: 0;
    ol {
      padding-left: 10px;
    }
    li {
      line-height: 30px;
      margin: 0;
    }
    a {
      color: #555;
      text-decoration: none;
      line-height: 30px;
      &:hover,
      &.current {
        color: #999;
      }
    }
  }
`;

export interface DocsNavListProps extends ListProps {}

const DocsNavList = ({ list, type }: DocsNavListProps) => (
  <div css={ulStyle}>
    <List list={list} type={type} />
  </div>
);
export default DocsNavList;
