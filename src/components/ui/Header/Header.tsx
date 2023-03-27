import { Hamburger } from "assets";
import { __LOGGED_IN_USER__, AppRoutes } from "../../../constant";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserIsLoggedIn } from "store/actions";
import { clearItemFromLocalStorage, getEmail } from "utils/helpers";
import Button from "../Button";
import styles from "./Header.module.scss";
import { useOnClickOutside } from "utils/hooks";

type HeaderPropsType = {
  text: string;
  showHamburger: boolean;
};

const Header = ({ text, showHamburger }: HeaderPropsType) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = getEmail();
  const dropDownRef = useRef(null);

  const handleDropDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  const handleLogOut = () => {
    dispatch(setUserIsLoggedIn(false));
    clearItemFromLocalStorage(__LOGGED_IN_USER__);
    navigate(AppRoutes.LOGIN);
  };

  useOnClickOutside(dropDownRef, () => setShowDropDown(false));

  return (
    <header className={styles.header}>
      <div className={styles.headerText}>{text}</div>
      {showHamburger && (
        <div ref={dropDownRef}>
          <div className={styles.hamburger} onClick={handleDropDown}>
            <img src={Hamburger} alt="hamburger" />
          </div>

          {showDropDown && (
            <div className={styles.dropdown}>
              <span>{userEmail}</span>
              <Button
                buttonText="LOGOUT"
                overrideClassName={styles.btn}
                onClick={handleLogOut}
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
