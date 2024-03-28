import React from "react";
import TimeButton from "./time_button";
import "../components/table_data_style.css";

function TableData({ tableContent }) {
  return (
    <>
      {tableContent.works.length > 1 ? (
        <tbody>
          {tableContent.works.map((work, i) => {
            return (
              <tr className="tr-merged-cell">
                {i === 0 ? (
                  <>
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <tr>
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
