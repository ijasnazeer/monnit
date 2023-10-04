"use client";
import "./style.css";

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

function BankDetails() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(8); // Default limit
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`http://localhost:3004/comments?_page=1&_limit=${limit}`);
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(`http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`);
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    const commentsFromServer = await fetchComments(currentPage);
    setItems(commentsFromServer);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Adjust the limit for mobile view (e.g., 5 items per page)
        setLimit(7);
        setIsMobileView(true); // Set to true for mobile view
      } else {
        // Default limit for larger screens
        setLimit(8);
        setIsMobileView(false); // Set to false for larger screens
      }
    };

    // Add an event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial limit setup
    handleResize();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="details-container">
      <div>
        <Table className="table">
          <TableHeader className="TableHeader">
            <TableRow className="TableRow">
                <TableHead className="TableHead">EMPLOYEE</TableHead>
                <TableHead className="TableHead">ACCOUNT NUMBER</TableHead>
                {!isMobileView && <TableHead className="TableHead">IFSC CODE</TableHead>}
              {!isMobileView && <TableHead className="TableHead">BANK NAME</TableHead>}
              {!isMobileView && <TableHead className="TableHead">PHONE NUMBER</TableHead>}
                <TableHead className="TableHead">ADDED ON</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {items.map((item) => {
            return (
            <TableRow className="TableRow">
              <TableCell className="TableCell">
                <Avatar className='avatar'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  {item.name}
                  <div className="position">{item.position}</div>
                </div>
              </TableCell>
              {/* <TableCell>{item.position}</TableCell> */}
              <TableCell>{item.accountNumber}</TableCell>
                {!isMobileView && <TableCell>{item.ifsc}</TableCell>}
                {!isMobileView && <TableCell>{item.bank}</TableCell>}
                {!isMobileView && <TableCell>{item.phone}</TableCell>}
              <TableCell>{item.date}</TableCell>
              
            </TableRow>
            );
            })}
          </TableBody>
        </Table>
      </div>

      {/* <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <div>Id :{item.id} </div>
                  <div>{item.name}</div>
                  <div>{item.position}</div>
                  <div>{item.accountNumber}</div>
                  <div>{item.ifsc}</div>
                  <div>{item.bank}</div>
                  <div>{item.phone}</div>
                  <div>{item.date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="report-download-section">
          <Form>
                  <select className="select" id="yearSelect"
                     // value={selectedYear}
                     // onChange={handleYearChange}
                  >
                    <option value="">Select Year</option>
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
                  
                    <select className="select" id="yearSelect"
                     // value={selectedYear}
                     // onChange={handleYearChange}
                    >
                    <option value="">Select Month</option>
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
                  <Button className="button-download-report" >
                    Download Report<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.344727 17.5H14.3447V15.5H0.344727V17.5ZM14.3447 6.5H10.3447V0.5H4.34473V6.5H0.344727L7.34473 13.5L14.3447 6.5Z" fill="white"/>
                            </svg>
                  </Button>
                </Form>
        </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"pages"}
        // pageLinkClassName={"page-link"}
        // previousClassName={"page-item"}
        // previousLinkClassName={"page-link"}
        // nextClassName={"page-item"}
        // nextLinkClassName={"page-link"}
        // breakClassName={"page-item"}
        // breakLinkClassName={"page-link"}
        activeClassName={"active-of-pagination"}
      />
    </div>
  );
}

export default BankDetails;
