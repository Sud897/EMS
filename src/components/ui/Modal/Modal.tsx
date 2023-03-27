import Button from "../Button";
import styles from "./modal.module.scss";

type ModalPropsType = {
  onClose: () => void;
  onClick: () => void;
  containerClassName?: string;
  overlayClassName?: string;
  modalBodyClassName?: string;
  modalHeaderClassName?: string;
};

const Modal = ({
  onClose,
  onClick,
  containerClassName = "",
  overlayClassName = "",
  modalBodyClassName = "",
}: ModalPropsType) => {
  return (
    <div className={`${styles.modal} ${containerClassName}`}>
      <div
        className={`${styles.overlay} ${overlayClassName}`}
        onClick={onClose}
      />
      <div className={`${styles.modalContent} ${modalBodyClassName}`}>
        <div className={styles.qsn}>ARE YOU SURE ?</div>
        <div className={styles.actions}>
          <Button
            buttonText="CANCEL"
            overrideClassName={styles.btn}
            onClick={onClose}
          />
          <Button
            buttonText="CONFIRM"
            overrideClassName={`${styles.btn} ${styles.confirm}`}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
