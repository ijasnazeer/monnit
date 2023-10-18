"use client";

import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar/Topbar";

import "./style.css";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Topbar />
        <div className="master">
          <header>
            <div className="head-left">
              <span>Master Page</span>
              <caption>Manage your whole data for employee here</caption>
            </div>
            <div className="head-right"></div>
          </header>

          <div className="master-main">

            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">HOLIDAYS</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                      Add New Holidays <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-holidays">
                        <div>
                          <label>Name</label>
                          <Input type="text" />
                        </div>
                        <div>
                          <label htmlFor="yearSelect">Date</label>
                          <select
                            className="select-year"
                            id="yearSelect"
                            // value={selectedYear}
                            // onChange={handleYearChange}
                          >
                            <option value="">Select</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                          </select>
                        </div>
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}



            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">DESIGNATION</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                      Add New Roles <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-designation">
                          <label>Role Name</label>
                          <Input type="text" />
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}



            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">LEAVE TYPES</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                      Add New Leave Type <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-leave">
                        <div>
                          <label>Types</label>
                          <Input type="text" />
                        </div>
                        <div>
                          <label>Number of Days</label>
                          <Input type="text" />
                        </div>
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}





            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">PROJECTS</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                      Add New Projects <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-projects">
                            <div>
                              <label>Client</label>
                              <Input type="text" />
                            </div>
                            <div>
                              <label>Date of Initiation</label>
                              <Input type="text" />
                                  <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.72144 13.8099H11.1072V16.1956H8.72144V13.8099ZM25.4214 7.84565V24.5456C25.4214 25.8578 24.3479 26.9314 23.0357 26.9314H6.33573C5.01166 26.9314 3.95001 25.8578 3.95001 24.5456L3.96194 7.84565C3.96194 6.5335 5.01166 5.45993 6.33573 5.45993H7.52858V3.07422H9.9143V5.45993H19.4572V3.07422H21.8429V5.45993H23.0357C24.3479 5.45993 25.4214 6.5335 25.4214 7.84565ZM6.33573 10.2314H23.0357V7.84565H6.33573V10.2314ZM23.0357 24.5456V12.6171H6.33573V24.5456H23.0357ZM18.2643 16.1956H20.65V13.8099H18.2643V16.1956ZM13.4929 16.1956H15.8786V13.8099H13.4929V16.1956Z" fill="#ABB6C7"/>
                                  </svg>
                            </div>
                            <div>
                              <label>Client POC</label>
                              <Input type="text" />
                            </div>
                            <div>
                              <label htmlFor="yearSelect">Manager</label>
                              <select
                                className="select-year"
                                id="yearSelect"
                                // value={selectedYear}
                                // onChange={handleYearChange}
                              >
                                <option value="">Select</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                              </select>
                            </div>
                            <div>
                              <label>Project POC Contact</label>
                              <Input type="text" />
                                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.17271 6.65134C8.24428 7.71298 8.42321 8.75077 8.7095 9.74084L7.27807 11.1723C6.789 9.74084 6.47885 8.22591 6.3715 6.65134H8.17271ZM19.9343 20.9895C20.9482 21.2758 21.986 21.4547 23.0357 21.5263V23.3036C21.4611 23.1963 19.9462 22.8861 18.5029 22.409L19.9343 20.9895ZM9.31785 4.26562H5.14285C4.48678 4.26562 3.95 4.80241 3.95 5.45848C3.95 16.6594 13.0276 25.7371 24.2286 25.7371C24.8846 25.7371 25.4214 25.2003 25.4214 24.5442V20.3811C25.4214 19.7251 24.8846 19.1883 24.2286 19.1883C22.7494 19.1883 21.3061 18.9497 19.9701 18.5083C19.8508 18.4606 19.7196 18.4487 19.6003 18.4487C19.2901 18.4487 18.9919 18.568 18.7534 18.7946L16.1291 21.4189C12.7533 19.6893 9.98585 16.9338 8.26814 13.558L10.8924 10.9337C11.2264 10.5997 11.3219 10.1345 11.1906 9.71698C10.7493 8.38098 10.5107 6.94955 10.5107 5.45848C10.5107 4.80241 9.97393 4.26562 9.31785 4.26562Z" fill="#ABB6C7"/>
                                </svg>
                            </div>
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}

            
            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">WORK DESCRIPTION</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                    Add New Working Description <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-Description">
                          <label>Description Name</label>
                          <Input type="text" />
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}


            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">EARNING DEFINATIONS</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                    Add New Earning Definations <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-defination">
                        <div>
                          <label>Definition Name</label>
                          <Input type="text" />
                        </div>
                        <div>
                          <label htmlFor="yearSelect">Definition Type</label>
                          <select
                            className="select"
                            id="yearSelect"
                            // value={selectedYear}
                            // onChange={handleYearChange}
                          >
                            <option value="">Select</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                          </select>
                        </div>
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}
            

            
            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">DEDUCTION DEFINATIONS</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                    Add New Deduction Definations <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                    <div className="dialog-defination">
                        <div>
                          <label>Definition Name</label>
                          <Input type="text" />
                        </div>
                        <div>
                          <label htmlFor="yearSelect">Definition Type</label>
                          <select
                            className="select"
                            id="yearSelect"
                            // value={selectedYear}
                            // onChange={handleYearChange}
                          >
                            <option value="">Select</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                          </select>
                        </div>
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}


            <div className="section"> {/*--------------starting----------------*/}
              <div className="caption">P-TAX</div>
              <Dialog>
                <DialogTrigger>
                  <div>
                    <Button>Add</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.2894 0.499531C10.8994 0.109531 10.2694 0.109531 9.87937 0.499531L5.99937 4.37953L2.11937 0.499531C1.72937 0.109531 1.09937 0.109531 0.709367 0.499531C0.319366 0.889531 0.319366 1.51953 0.709367 1.90953L5.29937 6.49953C5.68937 6.88953 6.31937 6.88953 6.70937 6.49953L11.2994 1.90953C11.6794 1.52953 11.6794 0.889531 11.2894 0.499531Z" fill="#ABB6C7"/> </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="dialogcontent">
                  <DialogHeader className="dialogheader">
                    <DialogTitle className="dialogtitle">
                      Add New P-Tax <Button>Confirm</Button>{" "}
                    </DialogTitle>
                    <DialogDescription className="dialogdescription">
                      <div className="dialog-ptax">
                        <div>
                        <label htmlFor="yearSelect">Year</label>
                          <select
                            className="select-year"
                            id="yearSelect"
                            // value={selectedYear}
                            // onChange={handleYearChange}
                          >
                            <option value="">Select</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="yearSelect">State</label>
                          <select
                            className="select-year"
                            id="yearSelect"
                            // value={selectedYear}
                            // onChange={handleYearChange}
                          >
                            <option value="">Select</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                          </select>
                        </div>
                      </div>
                      <Button>Add
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0A68FF"/> </svg>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>    {/*--------------Ending----------------*/}

            
            


          </div>
        </div>
      </div>
    </div>
  );
}
