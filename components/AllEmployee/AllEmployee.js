"use client";
import "./style.css";

import Link from 'next/link';
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
import { Button } from "@/components/ui/button";

function AllEmployee() {
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
    <div className="AllEmployee-container">
      <Table>
      <TableBody>
          {/* {items.map((item) => {
            return ( */}

            <TableRow className="TableRow">
              <TableCell className="TableCell-left">
                <Avatar className='avatar'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  Abhishek saho
                  <div className="position">Frontend developer</div>
                </div>
              </TableCell>
              {/* <TableCell>{item.position}</TableCell> */}
              <TableCell className="TableCell-right">
                <Button className="reset-button">Reset Password</Button>
                <Link href="Employee/profilepage"><Button className="profile">Profile</Button></Link>
                <Button className="deactivate">Deactivate</Button>
              </TableCell>
            </TableRow>
            <TableRow className="TableRow">
              <TableCell className="TableCell-left">
                <Avatar className='avatar'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  Abhishek saho
                  <div className="position">Frontend developer</div>
                </div>
              </TableCell>
              {/* <TableCell>{item.position}</TableCell> */}
              <TableCell className="TableCell-right">
                <Button className="reset-button">Reset Password</Button>
                <Link href="Employee/profilepage"><Button className="profile">Profile</Button></Link>
                <Button className="activate">Activate</Button>
              </TableCell>
            </TableRow>

            
            {/* );
            })} */}
          </TableBody>
        </Table>

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

export default AllEmployee;
