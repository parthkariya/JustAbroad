import React, { useState, useEffect } from "react";

const ChangingProgressProvider = (props) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValuesIndex((prevIndex) => (prevIndex + 1) % props.values.length);
    }, props.interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.values, props.interval]);

  return (props.values[valuesIndex]);
};

ChangingProgressProvider.defaultProps = {
  interval: 1000
};

export default ChangingProgressProvider;
