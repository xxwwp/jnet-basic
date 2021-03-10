/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import LinkIcon from "../assets/icon/link";

const H1_6Cls = {
  header: css`
    &:hover {
      svg {
        visibility: visible;
      }
    }
  `,
  link: css`
    float: left;
    margin-left: -24px;
    color: inherit;
    svg {
      visibility: hidden;
    }
  `,
};

const H1_6 = {};
[1, 2, 3, 4, 5, 6].forEach(
  (level) =>
    (H1_6[`h${level}`] = (props) => {
      const { children: id } = props;
      return jsx(`h${level}`, { id, ...props, css: H1_6Cls.header }, [
        id,
        <a key={id} css={H1_6Cls.link} href={`#${id}`}>
          <LinkIcon />
        </a>,
      ]);
    })
);

export default H1_6;
