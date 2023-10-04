"use client";
import React,{useState} from "react";
import "./style.css";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar/Topbar";
import BankDetails from '@/components/BankDetails/BankDetails'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"



export default function page() {
  const [activeTab, setActiveTab] = useState(""); // Initialize with the default active tab

  // Function to handle tab click and update the activeTab state
  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
  };

  // const YearSelector = ({ onYearChange }) => {
  // const [selectedYear, setSelectedYear] = useState(""); // Initialize with an empty string or a default year

  // // Function to handle year selection
  // const handleYearChange = (event) => {
  //   const year = event.target.value;
  //   setSelectedYear(year);
  //   onYearChange(year); // Notify the parent component of the selected year
  // };



  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Topbar />
        <div className="payment">
          <header>
            <div className="head-left">
              <span>Payment</span>
              <caption>
                Note: Can’t change employee’s bank details after 20th of every month
              </caption>
            </div>
          </header>

          <div className="payment-main">
            <Tabs defaultValue="account" className="w-[400px] tabs">
              <TabsList className="tablist">
                <TabsTrigger className={`tabstrigger ${activeTab === "Bank-Account" ? "active" : ""}`} value="Bank-Account" onClick={() => handleTabClick("Bank-Account")} >Bank Account Details</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Pay-slip" ? "active" : ""}`} value="Pay-slip" onClick={() => handleTabClick("Pay-slip")}>Pay-slip Download</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Break-up" ? "active" : ""}`} value="Break-up" onClick={() => handleTabClick("Break-up")}>Salary Break-up</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Taxes" ? "active" : ""}`} value="Taxes" onClick={() => handleTabClick("Taxes")}>Taxes</TabsTrigger>
                <TabsTrigger className={`tabstrigger ${activeTab === "Details" ? "active" : ""}`} value="Details" onClick={() => handleTabClick("Details")}>All Bank Details</TabsTrigger>
              </TabsList>

              <TabsContent className="account" value="Bank-Account">
                <div className="section-1">
                    <div className="child account-number">
                        <name>Account Number</name>
                        <Input />
                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.6858 22.3503C8.37366 22.3503 7.30009 23.4239 7.30009 24.736C7.30009 26.0482 8.37366 27.1218 9.6858 27.1218C10.9979 27.1218 12.0715 26.0482 12.0715 24.736C12.0715 23.4239 10.9979 22.3503 9.6858 22.3503ZM2.52866 0.878906C1.21652 0.878906 0.142944 1.95248 0.142944 3.26462C0.142944 4.57676 1.21652 5.65033 2.52866 5.65033C3.8408 5.65033 4.91437 4.57676 4.91437 3.26462C4.91437 1.95248 3.8408 0.878906 2.52866 0.878906ZM2.52866 8.03605C1.21652 8.03605 0.142944 9.10962 0.142944 10.4218C0.142944 11.7339 1.21652 12.8075 2.52866 12.8075C3.8408 12.8075 4.91437 11.7339 4.91437 10.4218C4.91437 9.10962 3.8408 8.03605 2.52866 8.03605ZM2.52866 15.1932C1.21652 15.1932 0.142944 16.2668 0.142944 17.5789C0.142944 18.891 1.21652 19.9646 2.52866 19.9646C3.8408 19.9646 4.91437 18.891 4.91437 17.5789C4.91437 16.2668 3.8408 15.1932 2.52866 15.1932ZM16.8429 5.65033C18.1551 5.65033 19.2287 4.57676 19.2287 3.26462C19.2287 1.95248 18.1551 0.878906 16.8429 0.878906C15.5308 0.878906 14.4572 1.95248 14.4572 3.26462C14.4572 4.57676 15.5308 5.65033 16.8429 5.65033ZM9.6858 15.1932C8.37366 15.1932 7.30009 16.2668 7.30009 17.5789C7.30009 18.891 8.37366 19.9646 9.6858 19.9646C10.9979 19.9646 12.0715 18.891 12.0715 17.5789C12.0715 16.2668 10.9979 15.1932 9.6858 15.1932ZM16.8429 15.1932C15.5308 15.1932 14.4572 16.2668 14.4572 17.5789C14.4572 18.891 15.5308 19.9646 16.8429 19.9646C18.1551 19.9646 19.2287 18.891 19.2287 17.5789C19.2287 16.2668 18.1551 15.1932 16.8429 15.1932ZM16.8429 8.03605C15.5308 8.03605 14.4572 9.10962 14.4572 10.4218C14.4572 11.7339 15.5308 12.8075 16.8429 12.8075C18.1551 12.8075 19.2287 11.7339 19.2287 10.4218C19.2287 9.10962 18.1551 8.03605 16.8429 8.03605ZM9.6858 8.03605C8.37366 8.03605 7.30009 9.10962 7.30009 10.4218C7.30009 11.7339 8.37366 12.8075 9.6858 12.8075C10.9979 12.8075 12.0715 11.7339 12.0715 10.4218C12.0715 9.10962 10.9979 8.03605 9.6858 8.03605ZM9.6858 0.878906C8.37366 0.878906 7.30009 1.95248 7.30009 3.26462C7.30009 4.57676 8.37366 5.65033 9.6858 5.65033C10.9979 5.65033 12.0715 4.57676 12.0715 3.26462C12.0715 1.95248 10.9979 0.878906 9.6858 0.878906Z" fill="#ABB6C7"/>
                        </svg>

                    </div>
                    <div className="child confirm-account-number">
                        Confirm Account Number
                        <Input />
                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.6858 22.3503C8.37366 22.3503 7.30009 23.4239 7.30009 24.736C7.30009 26.0482 8.37366 27.1218 9.6858 27.1218C10.9979 27.1218 12.0715 26.0482 12.0715 24.736C12.0715 23.4239 10.9979 22.3503 9.6858 22.3503ZM2.52866 0.878906C1.21652 0.878906 0.142944 1.95248 0.142944 3.26462C0.142944 4.57676 1.21652 5.65033 2.52866 5.65033C3.8408 5.65033 4.91437 4.57676 4.91437 3.26462C4.91437 1.95248 3.8408 0.878906 2.52866 0.878906ZM2.52866 8.03605C1.21652 8.03605 0.142944 9.10962 0.142944 10.4218C0.142944 11.7339 1.21652 12.8075 2.52866 12.8075C3.8408 12.8075 4.91437 11.7339 4.91437 10.4218C4.91437 9.10962 3.8408 8.03605 2.52866 8.03605ZM2.52866 15.1932C1.21652 15.1932 0.142944 16.2668 0.142944 17.5789C0.142944 18.891 1.21652 19.9646 2.52866 19.9646C3.8408 19.9646 4.91437 18.891 4.91437 17.5789C4.91437 16.2668 3.8408 15.1932 2.52866 15.1932ZM16.8429 5.65033C18.1551 5.65033 19.2287 4.57676 19.2287 3.26462C19.2287 1.95248 18.1551 0.878906 16.8429 0.878906C15.5308 0.878906 14.4572 1.95248 14.4572 3.26462C14.4572 4.57676 15.5308 5.65033 16.8429 5.65033ZM9.6858 15.1932C8.37366 15.1932 7.30009 16.2668 7.30009 17.5789C7.30009 18.891 8.37366 19.9646 9.6858 19.9646C10.9979 19.9646 12.0715 18.891 12.0715 17.5789C12.0715 16.2668 10.9979 15.1932 9.6858 15.1932ZM16.8429 15.1932C15.5308 15.1932 14.4572 16.2668 14.4572 17.5789C14.4572 18.891 15.5308 19.9646 16.8429 19.9646C18.1551 19.9646 19.2287 18.891 19.2287 17.5789C19.2287 16.2668 18.1551 15.1932 16.8429 15.1932ZM16.8429 8.03605C15.5308 8.03605 14.4572 9.10962 14.4572 10.4218C14.4572 11.7339 15.5308 12.8075 16.8429 12.8075C18.1551 12.8075 19.2287 11.7339 19.2287 10.4218C19.2287 9.10962 18.1551 8.03605 16.8429 8.03605ZM9.6858 8.03605C8.37366 8.03605 7.30009 9.10962 7.30009 10.4218C7.30009 11.7339 8.37366 12.8075 9.6858 12.8075C10.9979 12.8075 12.0715 11.7339 12.0715 10.4218C12.0715 9.10962 10.9979 8.03605 9.6858 8.03605ZM9.6858 0.878906C8.37366 0.878906 7.30009 1.95248 7.30009 3.26462C7.30009 4.57676 8.37366 5.65033 9.6858 5.65033C10.9979 5.65033 12.0715 4.57676 12.0715 3.26462C12.0715 1.95248 10.9979 0.878906 9.6858 0.878906Z" fill="#ABB6C7"/>
                        </svg>                        
                    </div>
                    <div className="child phone-number">
                        <name>Phone Number<span> (Optional)</span></name>
                        <Input />
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.17273 6.64939C8.2443 7.71103 8.42323 8.74882 8.70951 9.73889L7.27808 11.1703C6.78901 9.73889 6.47887 8.22396 6.37151 6.64939H8.17273ZM19.9343 20.9875C20.9482 21.2738 21.986 21.4527 23.0357 21.5243V23.3017C21.4612 23.1943 19.9462 22.8842 18.5029 22.407L19.9343 20.9875ZM9.31787 4.26367H5.14287C4.4868 4.26367 3.95001 4.80046 3.95001 5.45653C3.95001 16.6575 13.0277 25.7351 24.2286 25.7351C24.8847 25.7351 25.4214 25.1983 25.4214 24.5422V20.3792C25.4214 19.7231 24.8847 19.1863 24.2286 19.1863C22.7494 19.1863 21.3061 18.9477 19.9701 18.5064C19.8508 18.4587 19.7196 18.4467 19.6003 18.4467C19.2902 18.4467 18.9919 18.566 18.7534 18.7927L16.1291 21.417C12.7533 19.6873 9.98587 16.9318 8.26816 13.556L10.8924 10.9317C11.2264 10.5977 11.3219 10.1325 11.1907 9.71503C10.7493 8.37903 10.5107 6.9476 10.5107 5.45653C10.5107 4.80046 9.97394 4.26367 9.31787 4.26367Z" fill="#ABB6C7"/>
                        </svg>
                    </div>
                    <div className="child account-holder-name">
                        <name>Account holder name</name>
                        <Input />
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6858 3.07031C8.1012 3.07031 2.7572 8.41431 2.7572 14.9989C2.7572 21.5835 8.1012 26.9275 14.6858 26.9275C21.2703 26.9275 26.6143 21.5835 26.6143 14.9989C26.6143 8.41431 21.2703 3.07031 14.6858 3.07031ZM8.80499 22.49C9.31792 21.4165 12.4432 20.3667 14.6858 20.3667C16.9283 20.3667 20.0656 21.4165 20.5666 22.49C18.9443 23.7783 16.9045 24.5417 14.6858 24.5417C12.4671 24.5417 10.4273 23.7783 8.80499 22.49ZM22.2723 20.7604C20.5666 18.6848 16.4273 17.981 14.6858 17.981C12.9442 17.981 8.80499 18.6848 7.0992 20.7604C5.88249 19.162 5.14292 17.1699 5.14292 14.9989C5.14292 9.73838 9.42527 5.45603 14.6858 5.45603C19.9463 5.45603 24.2286 9.73838 24.2286 14.9989C24.2286 17.1699 23.4891 19.162 22.2723 20.7604ZM14.6858 7.84174C12.3716 7.84174 10.5108 9.7026 10.5108 12.0167C10.5108 14.3309 12.3716 16.1917 14.6858 16.1917C16.9999 16.1917 18.8608 14.3309 18.8608 12.0167C18.8608 9.7026 16.9999 7.84174 14.6858 7.84174ZM14.6858 13.806C13.6957 13.806 12.8965 13.0068 12.8965 12.0167C12.8965 11.0267 13.6957 10.2275 14.6858 10.2275C15.6758 10.2275 16.4751 11.0267 16.4751 12.0167C16.4751 13.0068 15.6758 13.806 14.6858 13.806Z" fill="#ABB6C7"/>
                        </svg>

                    </div>
                    <div className="child bank-name">
                        <name>Bank Name</name>
                        <Input />
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72473 13.306H6.33902V21.656H8.72473V13.306ZM15.8819 13.306H13.4962V21.656H15.8819V13.306ZM26.0212 24.0417H3.35687V26.4275H26.0212V24.0417ZM23.039 13.306H20.6533V21.656H23.039V13.306ZM14.689 5.26617L20.9038 8.5346H8.47423L14.689 5.26617ZM14.689 2.57031L3.35687 8.5346V10.9203H26.0212V8.5346L14.689 2.57031Z" fill="#ABB6C7"/>
                        </svg>

                    </div>
                    <div className="child ifsc">
                        <name>IFSC Code</name>
                        <Input  />
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72143 13.806H6.33572V22.156H8.72143V13.806ZM15.8786 13.806H13.4929V22.156H15.8786V13.806ZM26.0179 24.5417H3.35358V26.9275H26.0179V24.5417ZM23.0357 13.806H20.65V22.156H23.0357V13.806ZM14.6857 5.76617L20.9005 9.0346H8.47093L14.6857 5.76617ZM14.6857 3.07031L3.35358 9.0346V11.4203H26.0179V9.0346L14.6857 3.07031Z" fill="#ABB6C7"/>
                        </svg>
                        <div className="bottom-of-child">
                            <div className="left">
                                Don't know IFSC
                                <Button className="button">click Here</Button>
                            </div>
                            <Button className="button">verify</Button>
                        </div>
                    </div>
                </div>
                <Button className="confirm-button">Confirm</Button>
              </TabsContent>

              <TabsContent className="pay-slip" value="Pay-slip">
                <Form>
                  <label className="label-year" htmlFor="yearSelect">Choose Year:</label>
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
                  
                    <label className="label-month" htmlFor="yearSelect">Choose Month:</label>
                    <select className="select-month" id="yearSelect"
                     // value={selectedYear}
                     // onChange={handleYearChange}
                    >
                    <option value="">Select</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                    </select>

                    <Checkbox className="checkbox" id="terms" />
                      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 label-checkbox" >
                        With attestation
                      </label>
                  <Button className="button" >Download</Button>
                </Form>
              </TabsContent>
              
              <TabsContent className="break-up" value="Break-up">
                <Form>
                <div className="break-up-container">
                  <div className="left">
                  <label htmlFor="yearSelect">Choose Year:</label>
                  <select id="yearSelect"
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
                  </div>
                  <div className="right">
                    <div className="top">
                      <div className="earning-section">
                      <div className="heading">
                        <div>EARNING</div>
                        <div>PERMONTH</div>
                      </div>
                      <div className="content">
                        <div className="earnings">
                              <ul>
                                <li>Basic</li>
                                <li>Dearness Allowance</li>
                                <li>House Rent Allowance</li>
                                <li>Other Allowance</li>
                                <li>All Cash Reimbursements</li>
                                <li>LTA*</li>
                                <li>Medical</li>
                                <li>Arrears</li>
                              </ul>
                            </div>
                            <div className="money">
                            <ul>
                                <li>15,000.00</li>
                                <li>5,000.00</li>
                                <li>10,000.00</li>
                                <li>10,000.00</li>
                                <li>5,000.00</li>
                                <li>800.00</li>
                                <li>800.00</li>
                                <li>0.00</li>
                              </ul>
                            </div>
                          </div>
                      </div>
                      <div className="deduction-section">
                      <div className="heading">
                        <div>DEDUCTION</div>
                        <div>PERMONTH</div>
                      </div>
                      <div className="content">
                      <div className="deduction">
                          <ul>
                              <li>PF</li>
                              <li>ESI</li>
                              <li>Income Tax*</li>
                              <li>Loan and Advance</li>
                              <li>perquisites</li>
                            </ul>
                          </div>
                          <div className="deduction-money">
                          <ul>
                              <li>2,000.00</li>
                              <li>0.00</li>
                              <li>400.00</li>
                              <li>1,600.00</li>
                              <li>3,600.00</li>
                            </ul>
                          </div>
                      </div>
                      </div>
                    </div>
                      {/* <div className="heading">
                        <div>EARNING</div>
                        <div>PERMONTH</div>
                        <div>DEDUCTION</div>
                        <div>PERMONTH</div>
                      </div>
                      <div className="content">
                        <div className="left">
                          <div className="earnings">
                            <ul>
                              <li>Basic</li>
                              <li>Dearness Allowance</li>
                              <li>House Rent Allowance</li>
                              <li>Other Allowance</li>
                              <li>All Cash Reimbursements</li>
                              <li>LTA*</li>
                              <li>Medical</li>
                              <li>Arrears</li>
                            </ul>
                          </div>
                          <div className="money">
                          <ul>
                              <li>15,000.00</li>
                              <li>5,000.00</li>
                              <li>10,000.00</li>
                              <li>10,000.00</li>
                              <li>5,000.00</li>
                              <li>800.00</li>
                              <li>800.00</li>
                              <li>0.00</li>
                            </ul>
                          </div>
                        </div>
                        <div className="right">
                          <div className="deduction">
                          <ul>
                              <li>PF</li>
                              <li>ESI</li>
                              <li>Income Tax*</li>
                              <li>Loan and Advance</li>
                              <li>perquisites</li>
                            </ul>
                          </div>
                          <div className="deduction-money">
                          <ul>
                              <li>2,000.00</li>
                              <li>0.00</li>
                              <li>400.00</li>
                              <li>1,600.00</li>
                              <li>3,600.00</li>
                            </ul>
                          </div>
                        </div>
                      </div> */}

                    <div className="bottom">
                      <div className="left">
                        <div className="gross">
                          <div className="gross-earning">
                            <span>Gross Earning:</span>
                            <span>46,600.00</span>
                          </div>
                          <div className="gross-deduction">
                            <span>Gross Deduction:</span>
                            <span>46,600.00</span>
                          </div>
                        </div>
                        <div className="net-pay">
                            <span>Net Salary Payable</span>
                            <span>38,600.00</span>
                        </div>
                      </div>
                      <div className="right">
                        <Button>Download</Button>
                      </div>
                    </div>

                  </div>
                </div>
                </Form>
              </TabsContent>



              <TabsContent className="taxes" value="Taxes">
                <div className="taxes-container">
                  <div className="left">
                    <Form>
                      <label htmlFor="yearSelect">Choose Tax Regime</label>
                      <select id="yearSelect"
                       // value={selectedYear}
                       // onChange={handleYearChange}
                  > 
                      <option value="">Select</option>
                      <option value="New">New</option>
                      <option value="option-2">2</option>
                      </select>
                      <Button>Submit</Button>
                      <Button>Download Tax Sheet</Button>
                  </Form>
                  </div>
                  <div className="right">
                    <Table>
                      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                      <TableHeader className="tableheader">
                        <TableRow>
                          <TableHead className="tablehead">MONTH</TableHead>
                          <TableHead className="tablehead">NEW TAX REGIME</TableHead>
                          <TableHead className="tablehead">OLD TAX REGIME</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="tablebody">
                        <TableRow className="tablerow">
                          <TableCell className="font-medium">JANUARY</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">FEBRUARY</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">MARCH</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">APRIL</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">MAY</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">JUNE</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">JULY</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">AUGUST</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">SEPTEMBER</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">OCTOBER</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">NOVEMBER</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">DECEMBER</TableCell>
                          <TableCell>6,000.00</TableCell>
                          <TableCell>5,854.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>

              
              <TabsContent className="details" value="Details">
                <div className="details-container">
                  <BankDetails />
                  
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
