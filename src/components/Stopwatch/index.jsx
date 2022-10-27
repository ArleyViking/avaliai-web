import { useEffect, useState } from "react";

export function Stopwatch() {
  const [totalTime, setTotalTime] = useState(7);

  const seconds = totalTime;

  useEffect(() => {
    if (totalTime === 0) {
      return;
    } else {
      setTimeout(() => {
        setTotalTime(totalTime - 1);
      }, 1000);
    }
  }, [totalTime]);
  return (
    <div>
      {" "}
      Caso demore mais de {seconds}, sinto muito, mas ainda não <br />
      temos itens para esta heurística.
    </div>
  );
}
