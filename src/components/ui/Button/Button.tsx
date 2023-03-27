import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  buttonText: string,
  image?: string,
  overrideClassName?: string,
  imageClassName?: string,
  onClick?: () => void,
  type?: "submit" | "button",
  showArrow?: boolean,
  arrowClassName?: string
}

const Button: React.FC<ButtonProps> = ({
  buttonText="",
  image = "",
  overrideClassName = "",
  imageClassName = "",
  onClick = () => {},
  type = "button",
  showArrow = false,
  arrowClassName = ""
}) => {
  return (
    <button type={type} className={`${styles.button} ${overrideClassName}`} onClick={onClick}>
      {buttonText && buttonText}
      {image && <img src={image} className={imageClassName} alt={buttonText} />}
    </button>
  );
};

export default React.memo(Button);
