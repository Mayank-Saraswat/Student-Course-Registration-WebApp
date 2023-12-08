import React, { Fragment, useState, useRef } from "react";
import userLogo from "./profile.png";
import CourseList from "./CourseList";

const MainPage = () => {
  const courseListRef = useRef(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  function handleListClickButton(courseName) {
    if (!enrolledCourses.includes(courseName)) {
      setEnrolledCourses([...enrolledCourses, courseName]);
    }
  }

  function handleEnrolledClickBtn(courseName) {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course != courseName)
    );
  }

  const handleClick1 = () => {
    courseListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Fragment>
      <div
        style={{
          width: "95%",
          boxShadow: "0 0 10px lightsteelblue",
          borderRadius: "1rem",
          margin: "10px 0  20px 45px",
          padding: "10px",
        }}
      >
        <h1 style={{ color: "red", textAlign: "center" }}>Student Dashboard</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
              marginRight: "350px",
            }}
          >
            <span>Name: Mayank Saraswat</span>
            <span>Email: mayanksaraswat@gmail.com</span>
            <span>Mobile: +91 9045999999</span>
            <span>DOB: 01/01/2023</span>
            <span>Courses Enrolled: {enrolledCourses.length}</span>
            <button
              style={{ fontSize: "13px", margin: "0.5rem 9rem 0 0.5rem" }}
              className="refBtn"
              onClick={handleClick1}
            >
              Click to view all courses
            </button>
          </div>
          <div>
            <img src={userLogo} alt="user image" className="userLogo" />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Courses Enrolled</h2>
          {enrolledCourses.length === 0 ? (
            <p>No courses enrolled yet.</p>
          ) : (
            <table>
              {enrolledCourses.map((course, index) => (
                <tr key={index}>
                  <td>
                    {course}{" "}
                    <button onClick={() => handleEnrolledClickBtn(course)}>
                      Unenroll
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
      <div
        style={{
          width: "95%",
          boxShadow: "0 0 10px lightsteelblue",
          borderRadius: "1rem",
          margin: "10px 0  20px 45px",
          textAlign: "center",
          padding: "10px",
        }}
        ref={courseListRef}
      >
        <h2>List of courses available</h2>
        <CourseList
          onEnroll={handleListClickButton}
          enrolledCourses={enrolledCourses}
          courseListRef={courseListRef}
        />
      </div>
    </Fragment>
  );
};

export default MainPage;