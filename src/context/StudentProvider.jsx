import { StudentContext } from "./StudentContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function StudentProvider({ children }) {
  const [students, setStudents] = useLocalStorage("students", []);

  const addStudent = (student) => {
    const newStudent = { ...student, id: crypto.randomUUID() };
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
