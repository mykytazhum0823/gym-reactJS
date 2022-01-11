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
import Payout from './trainer/Payout';
import EditAccount from './customer/EditAccount';
import Membership from './customer/Membership';
import ManageClass from './gym/ManageClass';
import ManageTrainer from "./gym/ManageTrainer";
import Reporting from './gym/Reporting';

const ConsoleRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ConsoleLayout />}>
        <Route index element={<Dashboard/>}/>
        <Route path="admin">
          <Route index element={<Dashboard/>}/>
          <Route path="gym" element={<ManageGym />} />
          <Route path="membership" element={<ManageMembership />} />
          <Route path="user" element={<ManageUser />} />
          <Route path="reporting" element={<AdminReporting/>} />
        </Route>
        <Route path="trainer">
          <Route index element={<EditAccountTrainer />} />
          <Route path="pay" element={<Payout />} />
        </Route>
        <Route path="customer">
          <Route index element={<EnrollClass />} />
          <Route path="edit" element={<EditAccount/>}/>
          <Route path="membership" element={<Membership/>}/>
        </Route>
        <Route path="gym">
          <Route index element={<GymDashboard />} />
          <Route path="class" element={<ManageClass />} />
          <Route path="trainer" element={<ManageTrainer />} />
          <Route path="report" element={<Reporting />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ConsoleRoute;
