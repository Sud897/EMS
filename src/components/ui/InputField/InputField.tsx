import React from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import styles from "./Input.module.scss";

type InputFieldProps<TFormValues> = {
  inputClassName?: string;
  type?: "email" | "password" | "text";
  containerClassName?: string;
  register: UseFormRegister<
    TFormValues extends FieldValues ? TFormValues : any
  >;
  fieldName: Path<TFormValues extends FieldValues ? TFormValues : any>;
  error?: string;
  rules?: RegisterOptions;
  placeholder?: string;
};

const InputField = <TFormValues extends unknown>({
  inputClassName = "",
  type = "text",
  containerClassName = "",
  register,
  fieldName,
  error,
  placeholder,
  rules = { required: false },
}: InputFieldProps<TFormValues>) => {
  const getClassnames = (): string => {
    const classNames = [styles.formControl];
    if (containerClassName) {
      classNames.push(containerClassName);
    }
    return classNames.join(" ");
  };

  const getInputClassNames = (): string => {
    const classnames = [styles.input];
    if (inputClassName) {
      classnames.push(inputClassName);
    }
    return classnames.join(" ");
  };

  return (
    <div className={getClassnames()}>
      <div className={getInputClassNames()}>
        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          {...register(fieldName, rules)}
        />
      </div>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default React.memo(InputField);
