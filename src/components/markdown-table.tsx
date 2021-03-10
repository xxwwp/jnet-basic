/** @jsx jsx */
import { css, jsx } from "@emotion/react";

function MarkdownTable(props) {
  return (
    <div
      css={css`
        overflow-x: auto;
        margin: 1rem -1rem;
        box-shadow: 0 0 10px 3px rgba(222, 226, 230, 0.548);
        border-radius: 5px;
        table {
          border-collapse: collapse;
          min-width: 100%;
        }
        thead tr {
          border-bottom: 1px solid currentColor;
        }
        tbody tr {
          border-bottom: 1px solid #dee2e6;
        }
        tbody tr:hover {
          background-color: #f8f9fa;
        }
        td,
        th {
          padding: 0.75em;
          border: inherit;
          text-align: left;
        }
        th {
          white-space: nowrap;
        }
      `}
    >
      <table {...props} />
    </div>
  );
}

export default MarkdownTable;
