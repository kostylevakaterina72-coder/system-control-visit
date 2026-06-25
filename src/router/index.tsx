// src/router/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import StudentHome from '../pages/StudentHome/StudentHome';
import TeacherHome from '../pages/TeacherHome/TeacherHome';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/teacher" element={<TeacherHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;