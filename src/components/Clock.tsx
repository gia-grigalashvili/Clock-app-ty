// import React, { useEffect, useState } from "react";

// function Clock() {
//   const [timeData, setTimeData] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await fetch(
//           "http://worldtimeapi.org/api/timezone/Etc/UTC"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setTimeData(data);
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//       }
//     })();
//   }, []);

//   //   console.log(timeData);
//   return <div>Clock</div>;
// }

// export default Clock;
