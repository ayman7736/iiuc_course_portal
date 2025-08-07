// src/CourseDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then(res => res.json())
      .then(data => {
        setCourse(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading course details...</div>;
  if (!course) return <div className="p-8 text-center">Course not found.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <Link to="/dashboard" className="text-blue-600 underline mb-4 block">&larr; Back to Dashboard</Link>
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <p className="mb-2"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
      <p className="mb-4">{course.description}</p>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={course.video_url}
          title={course.title}
          className="w-full h-64"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

