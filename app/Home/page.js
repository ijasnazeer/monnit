"use client";

import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar/Topbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import "./style.css";
import * as React from "react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Topbar />
        <div className="home">
          <header>
            <div className="head-left">
              <span>Hello Abhishek</span>
              <caption>
                It seems like you have a lot of work for today.
                <br />
                So let’s start
              </caption>
            </div>
            <div className="head-right">12th June 2022</div>
          </header>

          <main>
            <div className="birthday">
              <div className="birthday-left">
                <date>12th June 2022</date>
                <div className="birthday-content">
                  <Avatar className="avatar">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <h1>Happy Birthday Snigdha 🎉</h1>
                  <h3>
                    Today is Snigdha’s Birthday. Let’s all celebrate together !{" "}
                  </h3>
                </div>
              </div>

              <div className="birthday-right">
                <div className="main">
                  <div className="top">
                  <h3>Upcoming Birthdays 25</h3>
                  <div className="lists">
                    <div className="list">
                      <div className="left">
                        <Avatar className="avatar">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <name>Arun Jain</name>
                      </div>
                      <div className="right">
                      <date>14th June 2022</date>
                      </div>
                    </div>
                    <div className="list">
                      <div className="left">
                        <Avatar className="avatar">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <name>Anjali Naik</name>
                      </div>
                      <div className="right">
                      <date>21st June 2022</date>
                      </div>
                    </div>
                    <div className="list">
                      <div className="left">
                        <Avatar className="avatar">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                        <name>Sudipti Panda</name>
                      </div>
                      <div className="right">
                      <date>2nd July 2022</date>
                      </div>
                    </div>
                    
                  </div>
                  </div>
                  <div className="bottom">
                    <div className="left">
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <Avatar className="avatar2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <Avatar className="avatar2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <Avatar className="avatar2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <Avatar className="avatar2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <span>+22 this month</span>
                    </div>
                    <div className="right">
                    <Button className="see-all">see all</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-hires">
              <div className="top-section">
                <h3>Recent Hires 28</h3>
                <div className="ul">
                  <div className="li">
                    <left>
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div className="name-position">
                        <name>Arun Jain</name>
                        <position>Frontend Developer</position>
                      </div>
                    </left>
                    <date>16th Mar 2022</date>
                  </div>
                  <div className="li">
                    <left>
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div className="name-position">
                        <name>Amit Subham</name>
                        <position>UI/UX Designer</position>
                      </div>
                    </left>
                    <date>23th Mar 2022</date>
                  </div>
                  <div className="li">
                    <left>
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div className="name-position">
                        <name>Neha Kar</name>
                        <position>Backend Developer</position>
                      </div>
                    </left>
                    <date>3rd June 2022</date>
                  </div>
                  <div className="li">
                    <left>
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div className="name-position">
                        <name>Amit Subham</name>
                        <position>UI/UX Designer</position>
                      </div>
                    </left>
                    <date>23th Mar 2022</date>
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <div className="left">
                  <Avatar className="avatar">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <Avatar className="avatar2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <Avatar className="avatar2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <Avatar className="avatar2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <Avatar className="avatar2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <span>+24 this month</span>
                </div>
                <div className="right">
                  <Button className="see-all">see all</Button>
                </div>
              </div>
            </div>

            <div className="announcements">
              <div className="main">
                <h3>Announcements</h3>
                <div className="lists">
                  
                  <div className="list">
                    <div className="section-1">
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <name>Arun Jain</name>
                      <date>14th June 2022</date>
                    </div>
                    <div className="section-2">
                      <div className="description">On 25th our new product is going to be lunched</div>
                      <Button className="view">View</Button>
                    </div>
                  </div>
                  <div className="list">
                    <div className="section-1">
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <name>Anjali Naik</name>
                      <date>14th June 2022</date>
                    </div>
                    <div className="section-2">
                      <div className="description">Lorem ipsum dolor sit amet consectetur. Tristique sit pretium id quis vulputate nunc. </div>
                      <Button className="view">View</Button>
                    </div>
                  </div>
                  <div className="list">
                    <div className="section-1">
                      <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <name>Sudipti Panda</name>
                      <date>14th June 2022</date>
                    </div>
                    <div className="section-2">
                      <div className="description">Lorem ipsum dolor sit amet consectetur. Tristique sit pretium id quis vulputate nunc. </div>
                      <Button className="view">View</Button>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bottom">
                <Button className="see-all">see all</Button>
              </div>
            </div>

            <div className="upcoming-container">
              <div className="upcoming-leaves">
                <h2>Upcoming Leaves</h2>
                <div className="leaves">
                  <h3>Brother's Wedding</h3>
                  <date>25th Dec 2022</date>
                  to
                  <date>25th Dec 2022</date>
                </div>
                <div className="leaves">
                  <h3>Foreign Tour</h3>
                  <date>25th Dec 2022</date>
                  to
                  <date>25th Dec 2022</date>
                </div>
                <Button className="see-all">see all</Button>
              </div>

              <div className="upcoming-holidays">
                <h2>Upcoming Holidays</h2>
                <div className="holidays">
                  <h3>Christmas Day</h3>
                  <date>25th Dec 2022</date>
                </div>
                <div className="holidays">
                  <h3>New Years Day</h3>
                  <date>1st Jan 2023</date>
                </div>
                <Button className="see-all">see all</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
