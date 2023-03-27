import React, { useRef, useState } from "react";
import { DownArrow } from "assets";
import styles from "./DropdownSelect.module.scss";
import Option from "./Option";
import { useOnClickOutside } from "utils/hooks";
import { DropdownSelectProps } from "./type";
import ErrorMessage from "../ErrorMessage";

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  optionsList = [],
  value,
  onChange,
  placeholder,
  onSelect,
  error = "",
  overRideContainerClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectContainerRef = useRef(null);
  useOnClickOutside(selectContainerRef, () => setIsOpen(false));

  const onOptionClick = (option: string) => {
    if (option !== value) {
      onChange && onChange(option);
      onSelect && onSelect(option);
    }
    setIsOpen(false);
  };

  const openSelectDropdown = () => {
    setIsOpen(!isOpen);
  };

  const downArrowImageClassName = `${styles.arrow} ${
    isOpen ? styles.oppositeArrow : ""
  }`;

  const selectBoxContainerClassName = `${styles.selectedBoxContainer} ${
    isOpen ? styles.selectedBoxContainerOpen : ""
  }`;

  const selectedOption = optionsList.find((option) => option === value);

  const parentContainerClassName = `${styles.selectContainer} ${
    error && styles.error
  } ${overRideContainerClassName}`;

  const getOptionContainerClassName = () => {
    const classNames = [styles.optionsOuterContainer];
    if (isOpen) {
      classNames.push(styles.showOptionsContainer);
    }
    return classNames.join(" ");
  };

  return (
    <div className={parentContainerClassName} ref={selectContainerRef}>
      <div className={selectBoxContainerClassName} onClick={openSelectDropdown}>
        <div className={styles.innerSelectedBox}>
          {value?.length === 0 && placeholder && (
            <div className={styles.selectedText}>{placeholder}</div>
          )}
          {selectedOption && (
            <div className={styles.selectedText}> {selectedOption} </div>
          )}
          <img
            className={downArrowImageClassName}
            src={DownArrow}
            alt="arrow-down"
          />
        </div>
      </div>
      {error && !isOpen && <ErrorMessage error={error} />}
      <div className={getOptionContainerClassName()}>
        {optionsList.length > 0 && (
          <ul>
            {optionsList.map((option, index) => (
              <Option
                key={index}
                option={option}
                onOptionClick={onOptionClick}
                isOptionSelected={value === option}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownSelect;
