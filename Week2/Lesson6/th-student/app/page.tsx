import Link from "next/link";
import styles from "../styles/Home.module.css";

// Định nghĩa kiểu cho Student
interface Student {
  id: number;
  name: string;
}

// Giả sử đây là hàm lấy danh sách sinh viên
const getStudents = (): Student[] => {
  return [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Thêm sinh viên khác nếu cần
  ];
};

export default function Home() {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <table className={styles.table}>
            <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Action</th>
            </tr>
            </thead>
            <tbody>
            {getStudents().map((student) => (
                <tr className={styles.tr} key={student.id}>
                  <td className={styles.td}>{student.id}</td>
                  <td className={styles.td}>{student.name}</td>
                  <td className={styles.td}>
                    <Link href={`/student/${encodeURIComponent(student.id)}`}>
                      Show
                    </Link>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </main>
      </div>
  );
}