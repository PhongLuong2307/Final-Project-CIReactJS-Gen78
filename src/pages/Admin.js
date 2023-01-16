import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/Admin/Admin.css"
import BlogsManager from '../components/Admin/BlogsManager';
import DoctorsManager from '../components/Admin/DoctorsManager';
import AppointmentsManager from '../components/Admin/AppointmentsManager';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let currentRole = localStorage.getItem('role');

    if (currentRole !== 'admin') {
      navigate('/');
    }
  })

  return (
    <React.Fragment>
      <BlogsManager />
      <DoctorsManager />
      <AppointmentsManager />
    </React.Fragment>
  )
}

export default Admin;