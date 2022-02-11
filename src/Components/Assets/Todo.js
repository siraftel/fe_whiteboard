import React from "react";
import styles from "../../Styling/Components/Todo.module.css";
export default function Todo() {
  return (
    <>
      <div className={styles.TodoContainer}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.textTodo}>
          <div>
            <label>Meja Putih Inbox Copy Application</label>
            <p>Design Tasks • One by Meja Putih</p>
          </div>
          <p>Due 10 Jan 2020</p>
        </div>
      </div>
      <div className={styles.TodoContainer}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.textTodo}>
          <div>
            <label>Meja Putih Vietnam</label>
            <p>Design Tasks • One by Meja Putih</p>
          </div>
          <p>Due 10 Jan 2020</p>
        </div>
      </div>
      <div className={styles.TodoContainer}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.textTodo}>
          <div>
            <label>Email Notification Template</label>
            <p>Dev Team • Idev Internal System</p>
          </div>
          <p>Due 10 Jan 2020</p>
        </div>
      </div>
      <div className={styles.TodoContainer}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.textTodo}>
          <div>
            <label>Header Seasonal</label>
            <p>Dev Team • e-Project</p>
          </div>
          <p>Due 10 Jan 2020</p>
        </div>
      </div>
      <div className={styles.TodoContainer}>
        <input className={styles.input} type="checkbox" />
        <div className={styles.textTodo}>
          <div>
            <label>Merchant Check Out Webn</label>
            <p>Dev Team • e-Project</p>
          </div>
          <p>Due 10 Jan 2020</p>
        </div>
      </div>
    </>

    // <div className={styles.containerTodo}>
    //   <form className={styles.form}>
    //     <div className={styles.formInput}>
    //       <input type="checkbox" />
    //     </div>
    //     <div className={styles.formLabel}>
    //       <label>makan nasi</label>
    //       <p>Due 10 Jan 2020</p>
    //     </div>
    //   </form>
    //   <p>Design Tasks • One by Meja Putih</p>
    // </div>
  );
}
