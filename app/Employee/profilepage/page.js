"use client";
import "./style.css";
import React,{useState} from "react";
import Link from 'next/link';
import Sidebarwithoutmenu from "@/Components/Sidebarwithoutmenu/Sidebarwithoutmenu";
import Topbar from "@/Components/Topbar/Topbar";
import Profile from "@/Components/Profile/profile";
import Documents from "@/Components/Documents/Documents";
import BankAccount from "@/Components/BankAccount/BankAccount";
import Performance from "@/Components/Performance/Performance";

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
      <Sidebarwithoutmenu />
      <div className="right">
        <div className="topbar"></div>
        <div className="profilepage">
          <header>
            <div className="head-left">
              <span>Abhishek Sahoo</span>
              <caption>
              Front-end Developer
              </caption>
                <Link href="../Employee">
                  <div className="back">
                    <svg width="48" height="30" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.8659 14.899L28.8009 12.834L17.1343 24.5007L28.8009 36.1673L30.8659 34.1023L21.2643 24.5007L30.8659 14.899Z" fill="black"/>
                      <rect x="0.1" y="0.6" width="47.8" height="47.8" rx="7.9" stroke="#848D96" stroke-width="0.2"/>
                    </svg>
                    Back
                  </div>
                </Link>
            </div>
            
          </header>

          <div className="proflepage-main">
            <Tabs defaultValue="account" className="w-[400px] tabs">
              <TabsList className="tablist">
                <TabsTrigger className={`tabstrigger ${activeTab === "Profile" ? "active" : ""}`} value="Profile" onClick={() => handleTabClick("Profile")} >Profile</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Attendance" ? "active" : ""}`} value="Attendance" onClick={() => handleTabClick("Attendance")}>Attendance</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Timesheet" ? "active" : ""}`} value="Timesheet" onClick={() => handleTabClick("Timesheet")}>Timesheet</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Performance" ? "active" : ""}`} value="Performance" onClick={() => handleTabClick("Performance")}>Performance</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Documents" ? "active" : ""}`} value="Documents" onClick={() => handleTabClick("Documents")}>Documents</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "BankAccount" ? "active" : ""}`} value="BankAccount" onClick={() => handleTabClick("BankAccount")}>Bank Account</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Setpay" ? "active" : ""}`} value="Setpay" onClick={() => handleTabClick("Setpay")}>Set pay</TabsTrigger>
              </TabsList>

              <TabsContent className="Profile" value="Profile">
                <Profile />
              </TabsContent>

              <TabsContent className="Attendance" value="Attendance">
              Attendance
              </TabsContent>
                            
              <TabsContent className="Timesheet" value="Timesheet">
              Timesheet
              </TabsContent>
              <TabsContent className="Performance" value="Performance">
              <Performance />
              </TabsContent>
              <TabsContent className="Documents" value="Documents">
                <Documents />
              </TabsContent>
              <TabsContent className="BankAccount" value="BankAccount">
                <BankAccount />
              </TabsContent>
              <TabsContent className="Setpay" value="Setpay">
              Set pay
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
