import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./admin/Dashboard";
import EnrollClass from "./customer/EnrollClass";
import ConsoleLayout from "./layout/console.layout";
import GymDashboard from "./gym/GymDashboard";
import EditAccountTrainer from "./trainer/EditAccountTrainer";

const ConsoleRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ConsoleLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="admin" element={<Dashboard />} />
        <Route path="trainer" element={<EditAccountTrainer />} />
        <Route path="customer" element={<EnrollClass />} />
        <Route path="gym" element={<GymDashboard />} />
      </Route>
    </Routes>
  );
};

export default ConsoleRoute;
