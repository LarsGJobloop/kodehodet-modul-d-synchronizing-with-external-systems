import { useEffect, useState } from "react";
import style from './Countdown.module.css'

/**
 *
 * @param {{
 * time: number
 * }} props
 * @returns
 */
export function Countdown(props) {
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("1 second passed");

      setTime((oldTime) => {
        if (oldTime > 0) {
          return oldTime - 1;
        }
        return 0;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={style["container"]}>
      <p>Remaining {time}</p>
    </div>
  );
}
