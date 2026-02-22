import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "../context/useStudents";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { students } = useStudents();
  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="details-card">
        <h2>Student not found</h2>
        <button className="back-btn" onClick={() => navigate("/students")}>
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <h2 className="details-title">Student Details</h2>

        <div className="detail-item">
          <span>Name</span>
          <p>{student.name}</p>
        </div>

        <div className="detail-item">
          <span>Email</span>
          <p>{student.email}</p>
        </div>

        <div className="detail-item">
          <span>Major</span>
          <p>{student.major}</p>
        </div>

        <div className="detail-item">
          <span>GPA</span>
          <p>{student.gpa}</p>
        </div>

        <button className="back-btn" onClick={() => navigate("/students")}>
          ← Back to Students
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;
