import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./admin/Dashboard";
import ManageGym from './admin/ManageGym';
import ManageMembership from './admin/ManageMembership';
import ManageUser from './admin/ManageUser';
import AdminReporting from './admin/AdminReporting';

import EnrollClass from "./customer/EnrollClass";
import ConsoleLayout from "./layout/console.layout";
import GymDashboard from "./gym/GymDashboard";
import EditAccountTrainer from "./trainer/EditAccountTrainer";
import AdminLayout from "./admin/layout/admin.layout";


const ConsoleRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ConsoleLayout />}>
        <Route index element={<AdminLayout> <Dashboard/></AdminLayout>} />
        <Route path="admin" element={<AdminLayout> <Dashboard/></AdminLayout>} />
        <Route path="admin/gym" element={<AdminLayout><ManageGym /></AdminLayout>} />
        <Route path="admin/membership" element={<AdminLayout><ManageMembership /></AdminLayout>} />
        <Route path="admin/user" element={<AdminLayout><ManageUser /></AdminLayout>} />
        <Route path="admin/reporting" element={<AdminLayout><AdminReporting/></AdminLayout>} />


        <Route path="trainer" element={<EditAccountTrainer />} />
        <Route path="customer" element={<EnrollClass />} />
        <Route path="gym" element={<GymDashboard />} />
      </Route>
    </Routes>
  );
};

export default ConsoleRoute;
