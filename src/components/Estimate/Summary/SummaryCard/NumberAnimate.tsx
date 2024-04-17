import React from "react";
import CountUp from "react-countup";

export default function NumberAnimate({
  start,
  end,
  duration,
}: {
  start: any;
  end: any;
  duration: any;
}) {
  return <CountUp start={start} end={end} duration={duration} />;
}
