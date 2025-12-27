import React from 'react'
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";

function DashboardLayout({children}) {
  return (
    <>
      <div className="dashboard">
        <Topbar/>
        <Sidebar/>
        <div className="dashboard-content">
            {children}
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
