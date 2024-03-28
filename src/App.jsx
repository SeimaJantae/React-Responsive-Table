import "./App.css";
import TableLayout from "./layout/table_layout";

function App() {
  const tableContents = [
    {
      team: "U8 mix",
      works: [
        {
          day: "Friday",
          time: {
            start: "15:30",
            end: "16:45",
          },
          hall: "Deusterschule Kitzingen",
        },
      ],
    },
    {
      team: "U10 mix",
      works: [
        {
          day: "Friday",
          time: {
            start: "17:00",
            end: "18:30",
          },
          hall: "Deusterschule Kitzingen",
        },
        {
          day: "Friday",
          time: {
            start: "16:45",
            end: "18:15",
          },
          hall: "Deusterschule Kitzingen",
        },
      ],
    },
    {
      team: "U12 mix",
      works: [
        {
          day: "Thursday",
          time: {
            start: "17:35",
            end: "18:45",
          },
          hall: "Mainstockheim",
        },
        {
          day: "Thursday",
          time: {
            start: "11:00",
            end: "12:30",
          },
          hall: "Mainstockheim",
        },
      ],
    },
  ];

  return (
    <>
      <TableLayout tableContents={tableContents}></TableLayout>
    </>
  );
}

export default App;
