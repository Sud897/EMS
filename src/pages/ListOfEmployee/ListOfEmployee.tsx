import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dialog, Header } from "components/ui";
import styles from "./ListOfEmployee.module.scss";
import { AppRoutes } from "constant";
import { EmployeeFormValues } from "types/types";
import { RootState } from "store";
import { useState } from "react";
import { deleteEmployee } from "store/actions";
import { Employee } from "assets";

const ListOfEmployee = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [emp, setEmp] = useState<EmployeeFormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const employeeList = useSelector(
    (state: RootState) => state.employee.employeeList
  );

  const handleAddEmployee = () => {
    navigate(AppRoutes.ADD_EMPLOYEE, { state: { isAdd: true } });
  };

  const handleEditEmployee = (emp: EmployeeFormValues) => {
    navigate(AppRoutes.EDIT_EMPLOYEE, {
      state: { isAdd: false, employee: emp },
    });
  };

  const handleDialogOpen = (emp: EmployeeFormValues) => {
    setIsDialogOpen(true);
    setEmp(emp);
  };

  const handleDelelteEmployee = () => {
    dispatch(deleteEmployee(emp as EmployeeFormValues));
    setIsDialogOpen(false);
  };
  return (
    <div>
      {isDialogOpen && (
        <Dialog
          onClose={() => setIsDialogOpen(false)}
          onClick={handleDelelteEmployee}
        />
      )}
      <Header text="LIST OF EMPLOYEES" showHamburger={true} />
      <div className={styles.homePageContainer}>
        <div className={styles.actions}>
          <Button
            buttonText="ADD"
            overrideClassName={styles.btn}
            onClick={handleAddEmployee}
          />
        </div>

        <div className={styles.listContainer}>
          {employeeList?.length > 0 ? (
            <table>
              <thead>
                <tr className={styles.head}>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Phone No</th>
                  <th>Domain</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList?.map((employee, index) => (
                  <tr key={index} className={`${styles.head} ${styles.body}`}>
                    <td>
                      {employee.firstName} {employee.lastName}
                    </td>
                    <td>{employee.email}</td>
                    <td>XXXXXX{employee.phoneNumber.slice(-4)}</td>
                    <td>{employee.domain}</td>
                    <td className={styles.actions}>
                      <Button
                        buttonText="Edit"
                        overrideClassName={`${styles.btn} ${styles.discard}`}
                        onClick={() => handleEditEmployee(employee)}
                      />
                      <Button
                        buttonText="Delete"
                        overrideClassName={styles.btn}
                        onClick={() => handleDialogOpen(employee)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.noData}>
              <img src={Employee} alt="NoEmployee"/>
              <div>No Employees are there, Please Add Employee !!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListOfEmployee;
