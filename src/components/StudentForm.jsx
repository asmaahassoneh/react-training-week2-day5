import { toast } from "react-toastify";
import { useStudents } from "../context/useStudents";
import useForm from "../hooks/useForm";

function StudentForm() {
  const { addStudent } = useStudents();

  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    major: "",
    gpa: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.major.trim()) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const gpaValue = parseFloat(values.gpa);
    if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
      toast.error("GPA must be between 0 and 4");
      return;
    }

    addStudent(values);
    toast.success("Student Registered Successfully!");
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input
        name="name"
        placeholder="Full Name"
        value={values.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        value={values.email}
        onChange={handleChange}
      />

      <input
        name="major"
        placeholder="Major"
        value={values.major}
        onChange={handleChange}
      />

      <input
        name="gpa"
        type="number"
        step="0.1"
        placeholder="GPA (0 - 4)"
        value={values.gpa}
        onChange={handleChange}
      />

      <button type="submit">Register Student</button>
    </form>
  );
}

export default StudentForm;
