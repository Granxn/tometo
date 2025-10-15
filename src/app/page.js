import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.todoApp}>
        
        {/* เพิ่มอิโมจิ ✨ หน้าหัวข้อ */}
        <h1 className={styles.title}>✨ Todo List App</h1>

        <div className={styles.inputForm}>
          <input
            type="text"
            placeholder="Enter a new task.."
            className={styles.inputField}
          />
          <button className={styles.addButton}>Add</button>
        </div>

        <ul className={styles.taskList}>
          {/* เพิ่มอิโมจิ ⭐ */}
          <li className={styles.taskItem}>
            <input type="checkbox" className={styles.checkbox} />
            <span>⭐ Sleep</span>
          </li>
          {/* เพิ่มอิโมจิ 💗 */}
          <li className={styles.taskItem}>
            <input type="checkbox" defaultChecked={true} className={styles.checkbox} />
            <span className={styles.completed}>💗 Join React class</span>
          </li>
          {/* เพิ่มอิโมจิ 🍀 */}
          <li className={styles.taskItem}>
            <input type="checkbox" className={styles.checkbox} />
            <span>🍀 Do react homework</span>
          </li>
        </ul>

      </div>
    </main>
  );
}




