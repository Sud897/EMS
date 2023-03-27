import React, { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Loader } from "components/ui";
import { getToken } from "utils/helpers";
import { useDispatch } from "react-redux";
import { setUserIsLoggedIn } from "store/actions";
import styles from "./Pages.module.scss";

const Pages = () => {
  const token = getToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(setUserIsLoggedIn(true));
    }
    //eslint-disable-next-line
  }, []);

  const SpinLoader = () => {
    return (
        <div className={styles.parentLoadingContainer}>
            <Loader overrideClassname={styles.overRideLoader} />
        </div>
    )
}
  return (
    <Suspense fallback={<SpinLoader/>}>
      {useRoutes(routes(token))}
    </Suspense>
  );
};

export default Pages;
