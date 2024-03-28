import React from "react";
import TimeButton from "./time_button";
import "../components/table_data_style.css";

function TableData({ tableContent }) {
  return (
    <>
      {tableContent.works.length > 1 ? (
        // Team data table has multiple work
        <tbody>
          {React.Children.toArray(
            tableContent.works.map((work, i) => {
              return (
                <>
                  {i === 0 ? (
                    <tr className="tr-merged-cell tr-full-data">
                      <td data-cell="Team" rowSpan={tableContent.works.length} className="td-team">
                        {tableContent.team}
                      </td>
                      <td data-cell="Day" className="td-day">
                        {work.day}
                      </td>
                      <td data-cell="Time" className="td-time">
                        <div className="time-flex">
                          <TimeButton time={work.time.start} />
                          <div>-</div>
                          <TimeButton time={work.time.end} />
                        </div>
                      </td>
                      <td data-cell="Hall" className="td-hall">
                        {work.hall}
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td data-cell="Day" className="td-day">
                        {work.day}
                      </td>
                      <td data-cell="Time" className="td-time">
                        <div className="time-flex">
                          <TimeButton time={work.time.start} />
                          <div>-</div>
                          <TimeButton time={work.time.end} />
                        </div>
                      </td>
                      <td data-cell="Hall" className="td-hall">
                        {work.hall}
                      </td>
                    </tr>
                  )}
                </>
              );
            })
          )}
        </tbody>
      ) : (
        // Team data table has only one work
        <tbody>
          <tr className="tr-full-data">
            <td data-cell="Team" className="td-team">
              {tableContent.team}
            </td>
            <td data-cell="Day" className="td-day">
              {tableContent.works[0].day}
            </td>
            <td data-cell="Time" className="td-time">
              <div className="time-flex">
                <TimeButton time={tableContent.works[0].time.start} />
                <div>-</div>
                <TimeButton time={tableContent.works[0].time.end} />
              </div>
            </td>
            <td data-cell="Hall" className="td-hall">
              {tableContent.works[0].hall}
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
}

export default TableData;
