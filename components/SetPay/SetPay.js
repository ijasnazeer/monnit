import React from "react";
import "./style.css";

import { Button } from "@/components/ui/button";
export default function SetPay() {
  return (
    <div className="setpay-component">
        <div className="top">
          <div className="earning-section">
            <div className="earning-defination">
              <span>Earning Defination</span>
              <Button>Add New</Button>
            </div>
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
          <div className="deduction-defination">
              <span>Deduction Defination</span>
              <div>
                <Button>Show Taxes</Button>
                <Button>Add New</Button>
              </div>
            </div>
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

        <div className="bottom">
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
    </div>
  );
}
