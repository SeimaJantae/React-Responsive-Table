import React from "react";
import TableData from "../components/table_data";
import "../layout/table_layout_style.css";

function TableLayout({ tableContents }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="th-team">Team</th>
          <th>Day</th>
          <th className="th-time">Time</th>
          <th>Hall</th>
        </tr>
      </thead>

      {React.Children.toArray(tableContents.map((tableContent, i) => {
        return <TableData tableContent={tableContent}></TableData>;
      }))}
    </table>
  );
}

export default TableLayout;
