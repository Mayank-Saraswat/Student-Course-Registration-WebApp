import React from "react";
import { Link } from "react-router-dom";

const CourseList = (props) => {
  return (
    <table>
      <tr>
        <td>
          <Link to="/advancedphysics">Advanced Physics</Link>
          <button onClick={() => props.onEnroll("Advanced Physics")}>
            {props.enrolledCourses.includes("Advanced Physics")
              ? "Enrolled"
              : "Enroll"}
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/introcpp">Introduction to C++ </Link>
          <button onClick={() => props.onEnroll("Introduction to C++")}>
            {props.enrolledCourses.includes("Introduction to C++")
              ? "Enrolled"
              : "Enroll"}
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/introreact">Introduction to React</Link>{" "}
          <button onClick={() => props.onEnroll("Introduction to React")}>
            {props.enrolledCourses.includes("Introduction to React")
              ? "Enrolled"
              : "Enroll"}
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/js">JavaScript: The Language of Web </Link>
          <button
            onClick={() => props.onEnroll("JavaScript: The Language of Web")}
          >
            {props.enrolledCourses.includes("JavaScript: The Language of Web")
              ? "Enrolled"
              : "Enroll"}
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/quantumcomp">Quantum Computing </Link>
          <button onClick={() => props.onEnroll("Quantum Computing")}>
            {props.enrolledCourses.includes("Quantum Computing")
              ? "Enrolled"
              : "Enroll"}
          </button>
        </td>
      </tr>
    </table>
  );
};

export default CourseList;