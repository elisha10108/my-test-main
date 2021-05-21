// import React, { useState, useEffect } from 'react';

// const Interval = () => {
//     const [seconds, setSeconds] = useState(0);
//     const [minute,  setMinuts] = useState(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//        const intervalMinutes=setIntervalMinuts(() => {
//            setMinuts(minuts => minuts+1);
//        },60000);

//       return () => Interval(interval);
//     }, []);
//     return() =>intervalMinute(intervalMinute);
// },[]);

//     return (
//       <div className="App">
//         <header className="App-header">
//           {seconds} seconds have elapsed since mounting.
//         </header>
//       </div>
//     );
//   };

//   export default IntervalExample;
