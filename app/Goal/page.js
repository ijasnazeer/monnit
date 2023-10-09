"use client";

import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar/Topbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import "./style.css";
import * as React from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function page() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Topbar />
        <div className="goal">
          <header>
            <div className="head-left">
              <span>Goal</span>
              <caption>
                Your goals are here, which you want to achieve in the future
              </caption>
            </div>
            <div className="head-right">
                <Form>
                <select className="select-year" id="yearSelect"
                     // value={selectedYear}
                     // onChange={handleYearChange}
                  >
                    <option value="">Select</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    </select>
                    <Button>Add Your Goals
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
                        </svg>
                    </Button>
                </Form>
            </div>
          </header>

          <div className="goal-main">

            <div className="goals">      {/*each goals */}
              <div className="goal-top-section">
                <name>I will learn Java this year</name>
                <div className="completed-date">complete by <span>19/12/2023</span></div>
                <div className="select">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Not Started</SelectItem>
                      <SelectItem value="dark">Ongoing</SelectItem>
                      <SelectItem value="system">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="goal-description">
                I want to learn Java because it is a popular and powerful programming language
                that is used in a wide variety of applications. I believe that learning Java 
                will open up new opportunities for me in my career and allow me to create more
                interesting and complex software.
              </div>
              <div className="company-profile-container">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  very good
                </div>

                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Cooool!!
                </div>
              </div>
            </div>
            <div className="goals">      {/*each goals */}
              <div className="goal-top-section">
                <name>I will learn Java this year</name>
                <div className="completed-date">complete by <span>19/12/2023</span></div>
                <div className="select">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Not Started</SelectItem>
                      <SelectItem value="dark">Ongoing</SelectItem>
                      <SelectItem value="system">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="goal-description">
                I want to learn Java because it is a popular and powerful programming language
                that is used in a wide variety of applications. I believe that learning Java 
                will open up new opportunities for me in my career and allow me to create more
                interesting and complex software.
              </div>
              <div className="company-profile-container">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  very good
                </div>

                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Cooool!!
                </div>
              </div>
            </div>
            <div className="goals">      {/*each goals */}
              <div className="goal-top-section">
                <name>I will learn Java this year</name>
                <div className="completed-date">complete by <span>19/12/2023</span></div>
                <div className="select">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Not Started</SelectItem>
                      <SelectItem value="dark">Ongoing</SelectItem>
                      <SelectItem value="system">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="goal-description">
                I want to learn Java because it is a popular and powerful programming language
                that is used in a wide variety of applications. I believe that learning Java 
                will open up new opportunities for me in my career and allow me to create more
                interesting and complex software.
              </div>
              <div className="company-profile-container">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  very good
                </div>

                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Cooool!!
                </div>
              </div>
            </div>
            <div className="goals">      {/*each goals */}
              <div className="goal-top-section">
                <name>I will learn Java this year</name>
                <div className="completed-date">complete by <span>19/12/2023</span></div>
                <div className="select">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Not Started</SelectItem>
                      <SelectItem value="dark">Ongoing</SelectItem>
                      <SelectItem value="system">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="goal-description">
                I want to learn Java because it is a popular and powerful programming language
                that is used in a wide variety of applications. I believe that learning Java 
                will open up new opportunities for me in my career and allow me to create more
                interesting and complex software.
              </div>
              <div className="company-profile-container">
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 0.5H5C4.175 0.5 3.5 1.175 3.5 2V11C3.5 11.825 4.175 12.5 5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H5V2H14V11ZM2 3.5H0.5V14C0.5 14.825 1.175 15.5 2 15.5H12.5V14H2V3.5ZM11 8V5.75C11 5.3375 10.6625 5 10.25 5H8.75V8.75H10.25C10.6625 8.75 11 8.4125 11 8ZM9.5 5.75H10.25V8H9.5V5.75ZM12.5 7.25H13.25V6.5H12.5V5.75H13.25V5H11.75V8.75H12.5V7.25ZM6.5 7.25H7.25C7.6625 7.25 8 6.9125 8 6.5V5.75C8 5.3375 7.6625 5 7.25 5H5.75V8.75H6.5V7.25ZM6.5 5.75H7.25V6.5H6.5V5.75Z" fill="#F75B4F"/>
                  </svg>Company Profile
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  very good
                </div>

                <div className="comment">
                  <Avatar className='avatar'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Cooool!!
                </div>
              </div>
            </div>

          </div>




        </div>
      </div>
    </div>
  );
}
