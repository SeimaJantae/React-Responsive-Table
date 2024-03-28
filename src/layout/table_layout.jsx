import React from "react";
import TableData from "../components/table_data";
import "../layout/table_layout_style.css";

function TableLayout({ tableContents }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th className="th-team">Team</th>
            <th>Day</th>
            <th className="th-time">Time</th>
            <th>Hall</th>
            {/* {headers.map((header, i) => {
              return <th>{header}</th>;
            })} */}
          </tr>
        </thead>

        {tableContents.map((tableContent, i) => {
          return <TableData tableContent={tableContent}></TableData>;
        })}
      </table>
    </div>
  );
}

export default TableLayout;
