import React from "react";
import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  error: string | undefined,
  overRideClassName?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error = "", overRideClassName = "" }) => {
  return (
      <div className={`${styles.error} ${overRideClassName}`}>{error}</div>
  );
};

export default ErrorMessage;
