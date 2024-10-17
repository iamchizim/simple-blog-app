import React, { useState } from "react";

import { useEffect } from "react";

const ErrorMessage = ({ blogs }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      setErrorMessage(
        "There are no blogs available right now. Please check back in a few minutes."
      );
    } else {
      setErrorMessage("");
    }
  }, [blogs]);

  return <section>{errorMessage && <p>{errorMessage}</p>}</section>;
};

export default ErrorMessage;
