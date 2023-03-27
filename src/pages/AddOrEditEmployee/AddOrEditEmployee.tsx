import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import Header from "components/ui/Header";
import styles from "./AddOrEditEmployee.module.scss";
import { Button, Dialog, Input, Select } from "components/ui";
import { validationRules } from "utils/validations";
import { AppRoutes, DOMAINS } from "../../constant";
import { addEmployee, editEmployee } from "store/actions";
import { EmployeeFormValues } from "types/types";

const AddOrEditEmployee = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmployeeFormValues>({
    defaultValues: {
      domain: "",
      email: "",
      firstName: "",
      id:"",
      lastName: "",
      phoneNumber: "",
    },
  });

  let formData = useWatch({ control });
  const { domain } = formData;
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newFormData, setNewFormData] = useState<EmployeeFormValues>();

  useEffect(() => {
    if (state?.employee) {
      setValue("domain", state.employee ? state.employee.domain : "");
      setValue("email", state.employee ? state.employee.email : "");
      setValue("firstName", state.employee ? state.employee.firstName : "");
      setValue("id", state.employee ? state.employee.id : 0);
      setValue("lastName", state.employee ? state.employee.lastName : "");
      setValue("phoneNumber", state.employee ? state.employee.phoneNumber : "");
    }
  }, [setValue, state?.employee]);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  var empID=uuid().slice(0,4);
  const handleEmployeeFormSubmit: SubmitHandler<EmployeeFormValues> = (
    data
  ) => {
    if (JSON.stringify(data) !== JSON.stringify(state.employee)) {
      if(state.isAdd){
        data.id=empID;
      }
      setNewFormData(data);
      handleOpenDialog();
    }
  };

  const handleDispatchData = () => {
    if (state.isAdd) {
      dispatch(addEmployee(newFormData as EmployeeFormValues));
    } else {
      dispatch(editEmployee(newFormData as EmployeeFormValues));
    }
    setIsDialogOpen(false);
    navigate(AppRoutes.EMPLOYEE_LIST);
  };

  const headerText = state?.isAdd ? "ADD EMPLOYEE" : "EDIT EMPLOYEE";
  const buttonText = state?.isAdd ? "SUBMIT" : "UPDATE";
  return (
    <div>
      {isDialogOpen && (
        <Dialog
          onClose={() => setIsDialogOpen(false)}
          onClick={handleDispatchData}
        />
      )}
      <Header text={headerText} showHamburger={false} />
      <div className={styles.employeeFormContainer}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleEmployeeFormSubmit)}
        >
          <div className={styles.row}>
            <Input
              fieldName="firstName"
              placeholder="FIRST NAME"
              inputClassName={styles.inputClassName}
              register={register}
              rules={validationRules.firstName}
              error={errors?.firstName?.message}
            />
            <Input
              fieldName="lastName"
              placeholder="LAST NAME"
              inputClassName={styles.inputClassName}
              register={register}
            />
          </div>
          <div className={styles.row}>
            <Input
              fieldName="email"
              placeholder="EMAIL"
              inputClassName={styles.inputClassName}
              register={register}
              rules={validationRules.userId}
              error={errors?.email?.message}
            />
            <Input
              fieldName="phoneNumber"
              placeholder="PHONE NUMBER"
              inputClassName={styles.inputClassName}
              register={register}
              rules={validationRules.phoneNumber}
              error={errors?.phoneNumber?.message}
            />
          </div>
          <Select
            name="domain"
            control={control}
            optionsList={DOMAINS}
            value={domain as string}
            placeholder="DOMAIN"
            rules={validationRules.domain}
            error={errors?.domain?.message}
          />
          <div className={styles.actions}>
            <Button
              buttonText="DISCARD"
              overrideClassName={`${styles.btn} ${styles.discard}`}
              onClick={() => navigate(-1)}
            />
            <Button
              buttonText={buttonText}
              overrideClassName={styles.btn}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrEditEmployee;
