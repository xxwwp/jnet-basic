/** @jsx jsx */
import React, { ReactNode } from "react";
import Helmet from "react-helmet";
import { Global, css, jsx } from "@emotion/react";

export interface RootProps {
  children: ReactNode;
  helmet?: ReactNode;
}

function Root({ children, helmet = "" }: RootProps) {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
          }
          html,
          body {
            overflow-x: hidden;
          }
        `}
      />
      <Helmet>{helmet}</Helmet>
      {children}
    </React.Fragment>
  );
}

export default Root;
