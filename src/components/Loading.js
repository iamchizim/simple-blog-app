import React, { useEffect, useState } from "react";

const LoadingMessage = ({ blogs }) => {
  const [loadingMessage, setLoadingMessage] = useState("");

  useEffect(() => {
    if (!blogs) {
      setLoadingMessage("Loading...");
    } else {
      setLoadingMessage("");
    }
  }, [blogs]);

  return <section className="loading">{loadingMessage && <p>{loadingMessage}</p>}</section>;
};

export default LoadingMessage;
