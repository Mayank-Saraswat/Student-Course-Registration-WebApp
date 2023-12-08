import React from "react";
import { Link } from "react-router-dom";

export const AdvancedPhysicsDetails = () => {
  return (
    <div
      style={{
        width: "95%",
        boxShadow: "0 0 10px lightsteelblue",
        borderRadius: "1rem",
        margin: "10px 0  20px 45px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>Advanced Physics</h2>
      <ul style={{ textAlign: "center" }}>
        <li>Instructor: H K Verma</li>
        <li>Description: Learn advanced concepts of Physics</li>
        <li>Enrollment Status: Open</li>
        <li>Duration: 6 Months</li>
      </ul>
      <Link to="/">
        <span>Back to course list</span>
      </Link>
    </div>
  );
};

export const IntroCpp = () => {
  return (
    <div
      style={{
        width: "95%",
        boxShadow: "0 0 10px lightsteelblue",
        borderRadius: "1rem",
        margin: "10px 0  20px 45px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>Introduction to C++</h2>
      <ul>
        <li>Instructor: Maxwell</li>
        <li>Description: Learn advanced concepts of C++</li>
        <li>Enrollment Status: Open</li>
        <li>Duration: 6 Months</li>
      </ul>
      <Link to="/">
        <span>Back to course list</span>
      </Link>
    </div>
  );
};

export const IntroReact = () => {
  return (
    <div
      style={{
        width: "95%",
        boxShadow: "0 0 10px lightsteelblue",
        borderRadius: "1rem",
        margin: "10px 0  20px 45px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>Introduction to React</h2>
      <ul>
        <li>Instructor: Morgan</li>
        <li>Description: Learn advanced concepts of React</li>
        <li>Enrollment Status: Closed</li>
        <li>Duration: 6 Months</li>
      </ul>
      <Link to="/">
        <span>Back to course list</span>
      </Link>
    </div>
  );
};

export const JavaScriptLang = () => {
  return (
    <div
      style={{
        width: "95%",
        boxShadow: "0 0 10px lightsteelblue",
        borderRadius: "1rem",
        margin: "10px 0  20px 45px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>JavaScript: The Language of Web</h2>
      <ul>
        <li>Instructor: Ramesh</li>
        <li>Description: Learn advanced concepts of JavaScript</li>
        <li>Enrollment Status: Closed</li>
        <li>Duration: 6 Months</li>
      </ul>
      <Link to="/">
        <span>Back to course list</span>
      </Link>
    </div>
  );
};

export const QuantumComp = () => {
  return (
    <div
      style={{
        width: "95%",
        boxShadow: "0 0 10px lightsteelblue",
        borderRadius: "1rem",
        margin: "10px 0  20px 45px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h2>Quantum Computing</h2>
      <ul>
        <li>Instructor: Quantum</li>
        <li>Description: Learn advanced concepts of Quantum Computing</li>
        <li>Enrollment Status: Closed</li>
        <li>Duration: 3 Months</li>
      </ul>
      <Link to="/">
        <span>Back to course list</span>
      </Link>
    </div>
  );
};