/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import ExpandIcon from "../assets/icon/expand";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface DocsNavButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 展开状态
  expand: boolean;
}

function DocsNavButton({ expand, ...rest }: DocsNavButton) {
  return (
    <button
      {...rest}
      css={css`
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 100;
        background-color: rgba(82, 122, 253, 0.37);
        border-radius: 50%;
        padding: 10px;
        border: none;
        width: 20px;
        height: 20px;
        box-sizing: content-box;
        transition: background-color 0.3s;

        @media screen and (min-width: 1200px) {
          display: none;
        }

        svg {
          width: inherit;
          height: inherit;
          transition: transform 0.3s;
          transform: rotateX(0);
        }
        &.active {
          background-color: rgba(0, 0, 0, 0.123);
          svg {
            transform: rotateX(180deg);
          }
        }
      `}
      className={clsx(expand && "active")}
    >
      <ExpandIcon />
    </button>
  );
}

export default DocsNavButton;
