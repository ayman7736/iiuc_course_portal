// src/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading courses...</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded shadow p-5 flex flex-col">
            <h3 className="font-bold text-lg mb-2">{course.title}</h3>
            <p className="mb-2">Instructor: <span className="font-semibold">{course.instructor}</span></p>
            <Link
              to={`/course/${course.id}`}
              className="btn btn-primary mt-auto"
            >
              Watch
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

