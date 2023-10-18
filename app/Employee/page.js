"use client";
import React,{useState} from "react";
import "./style.css";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar/Topbar";
import AllEmployee from "@/Components/AllEmployee/AllEmployee";
import ActiveEmployee from "@/Components/ActiveEmployee/ActiveEmployee";
import InactiveEmployee from "@/Components/InactiveEmployee/InactiveEmployee";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";


export default function page() {
  const [activeTab, setActiveTab] = useState(""); // Initialize with the default active tab

  // Function to handle tab click and update the activeTab state
  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Topbar />
        <div className="employee">
          <header>
            <div className="head-left">
              <span>Employee</span>
              <caption>
              Here you can manage employees
              </caption>
            </div>
            <div className="head-right">
              <Button className="button-download-report" >
                   Download Report<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0.344727 17.5H14.3447V15.5H0.344727V17.5ZM14.3447 6.5H10.3447V0.5H4.34473V6.5H0.344727L7.34473 13.5L14.3447 6.5Z" fill="white"/>
                    </svg>
              </Button>
            </div>
          </header>

          <div className="employee-main">
            <Tabs defaultValue="account" className="w-[400px] tabs">
              <TabsList className="tablist">
                <TabsTrigger className={`tabstrigger ${activeTab === "All" ? "active" : ""}`} value="All" onClick={() => handleTabClick("All")} >All</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Active" ? "active" : ""}`} value="Active" onClick={() => handleTabClick("Active")}>Active</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Inactive" ? "active" : ""}`} value="Inactive" onClick={() => handleTabClick("Inactive")}>Inactive</TabsTrigger>
              </TabsList>

              <TabsContent className="All" value="All">
                <AllEmployee />
              </TabsContent>

              <TabsContent className="active" value="Active">
                <ActiveEmployee />
              </TabsContent>
                            
              <TabsContent className="inactive" value="Inactive">
                <InactiveEmployee />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
