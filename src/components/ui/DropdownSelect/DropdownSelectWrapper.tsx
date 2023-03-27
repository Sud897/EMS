import React from "react";
import { Controller } from "react-hook-form";
import DropdownSelect from "./DropdownSelect";
import { DropdownSelectWrapperProps } from "./type";


const DropdownSelectWrapper = <TFieldValues extends unknown>({
    control,
    name,
    rules,
    ...rest
  }: DropdownSelectWrapperProps<TFieldValues>): JSX.Element => {
    if (control && name) {
      return (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <DropdownSelect {...rest} onChange={(value: string) => onChange(value)} />
          )}
        />
      );
    }
    return <DropdownSelect {...rest} />;
  };
  
export default React.memo( DropdownSelectWrapper ) as typeof DropdownSelectWrapper;