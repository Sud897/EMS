import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "components/ui";
import styles from "./Login.module.scss";
import Header from "components/ui/Header";
import { validationRules } from "utils/validations";
import { setItemInLocalStorage } from "utils/helpers";
import { AppRoutes, __LOGGED_IN_USER__ } from "../../constant";
import { setUserIsLoggedIn } from "store/actions";

type LoginFormValues = {
  userId: string;
  password: string;
};

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginFormSubmit: SubmitHandler<LoginFormValues> = (data) => {
    const { userId } = data;
    setItemInLocalStorage(__LOGGED_IN_USER__, {
      email: userId,
      token: __LOGGED_IN_USER__,
    });
    dispatch(setUserIsLoggedIn(true));
    navigate(AppRoutes.EMPLOYEE_LIST);
  };

  return (
    <>
      <Header text="WELCOME" showHamburger={false} />
      <div className={styles.loginContainer}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleLoginFormSubmit)}
        >
          <Input
            fieldName="userId"
            placeholder="USER ID"
            inputClassName={styles.inputClassName}
            register={register}
            rules={validationRules.userId}
            error={errors?.userId?.message}
          />
          <Input
            fieldName="password"
            type= "password"
            placeholder="PASSWORD"
            inputClassName={styles.passwordInput}
            register={register}
            rules={validationRules.password}
            error={errors?.password?.message}
          />
          <Button
            buttonText="LOGIN"
            overrideClassName={styles.btn}
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
