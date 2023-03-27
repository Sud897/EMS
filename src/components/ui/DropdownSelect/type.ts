import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

type SingleSelect = {
  value: string;
  onChange?: (value: string) => void;
  isMultiSelect?: false;
}

export type DropdownSelectProps = {
  optionsList: string[];
  placeholder?: string;
  onSelect?: (option: string) => void;
  error?: string;
  overRideContainerClassName?: string;
} & SingleSelect;



export type DropdownSelectWrapperProps<TFieldValues> = {
  control?: Control<TFieldValues extends FieldValues ? TFieldValues : any>;
  name?: Path<TFieldValues extends FieldValues ? TFieldValues : any>;
  rules?: RegisterOptions;
} & DropdownSelectProps;

export type OptionProps = {
  option: string;
  isOptionSelected: boolean;
  onOptionClick: (option: string) => void;
};
