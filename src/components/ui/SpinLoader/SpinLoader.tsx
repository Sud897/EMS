import styles from "./spinLoader.module.scss";

const SpinLoader = ({
  overrideClassname = "",
}: {
  overrideClassname?: string;
}) => {
  return (
    <div className={`${styles.loaderWrapper} ${overrideClassname}`}></div>
  );
};

export default SpinLoader;
