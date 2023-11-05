import React, { useEffect, useState } from "react";
import './style.css'
import { Calendar } from "@/components/ui/calendar"


export default function Attendance() {  
    const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Load employee data from the specified URL
    fetch('http://localhost:3006/employees')
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data);
        setLoading(false);
        console.log(data[0].name) //last
      })
      .catch((error) => {
        console.error('Error loading employee data:', error);
        setLoading(false);
      });
  }, []);
    
    return (
    <div className='attendance-component'>
        <div className='head'>
            <div>
                <span>Attendance record</span>
                    <div className='page-balls'>
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13.5" r="13" fill="#05A24D"/>
                        <path d="M7.51944 19.5V9.1L8.43144 10.044H5.15144V8.3H9.59944V19.5H7.51944ZM11.6612 16.956V15.516L17.1812 8.3H19.4052L13.9652 15.516L12.9252 15.196H21.8052V16.956H11.6612ZM17.8052 19.5V16.956L17.8692 15.196V12.94H19.8212V19.5H17.8052Z" fill="white"/>
                        </svg>

                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13.5" r="13" fill="#F75B4F"/>
                        <path d="M7.90375 19.5V18.108L12.3518 13.884C12.7251 13.532 13.0024 13.2227 13.1838 12.956C13.3651 12.6893 13.4824 12.444 13.5358 12.22C13.5998 11.9853 13.6318 11.7667 13.6318 11.564C13.6318 11.052 13.4558 10.6573 13.1038 10.38C12.7518 10.092 12.2344 9.948 11.5518 9.948C11.0078 9.948 10.5118 10.044 10.0638 10.236C9.62642 10.428 9.24775 10.7213 8.92775 11.116L7.47175 9.996C7.90908 9.40933 8.49575 8.956 9.23175 8.636C9.97842 8.30533 10.8104 8.14 11.7278 8.14C12.5384 8.14 13.2424 8.27333 13.8398 8.54C14.4478 8.796 14.9118 9.164 15.2318 9.644C15.5624 10.124 15.7278 10.6947 15.7278 11.356C15.7278 11.7187 15.6798 12.0813 15.5838 12.444C15.4878 12.796 15.3064 13.1693 15.0398 13.564C14.7731 13.9587 14.3838 14.4013 13.8718 14.892L10.0478 18.524L9.61575 17.74H16.1597V19.5H7.90375Z" fill="white"/>
                        </svg>

                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13.5" r="13" fill="#FFC107"/>
                        <path d="M10.7088 19.5L15.3328 9.132L15.8768 10.06H9.52481L10.5168 9.052V11.964H8.58081V8.3H17.2848V9.692L12.9328 19.5H10.7088Z" fill="white"/>
                        </svg>

                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13.5" r="13" fill="#FF8D07"/>
                        <path d="M13.4932 19.66C12.6079 19.66 11.8079 19.436 11.0932 18.988C10.3892 18.54 9.83452 17.8893 9.42919 17.036C9.02385 16.172 8.82119 15.1267 8.82119 13.9C8.82119 12.6733 9.02385 11.6333 9.42919 10.78C9.83452 9.916 10.3892 9.26 11.0932 8.812C11.8079 8.364 12.6079 8.14 13.4932 8.14C14.3892 8.14 15.1892 8.364 15.8932 8.812C16.5972 9.26 17.1519 9.916 17.5572 10.78C17.9732 11.6333 18.1812 12.6733 18.1812 13.9C18.1812 15.1267 17.9732 16.172 17.5572 17.036C17.1519 17.8893 16.5972 18.54 15.8932 18.988C15.1892 19.436 14.3892 19.66 13.4932 19.66ZM13.4932 17.852C14.0159 17.852 14.4692 17.7133 14.8532 17.436C15.2372 17.148 15.5359 16.7107 15.7492 16.124C15.9732 15.5373 16.0852 14.796 16.0852 13.9C16.0852 12.9933 15.9732 12.252 15.7492 11.676C15.5359 11.0893 15.2372 10.6573 14.8532 10.38C14.4692 10.092 14.0159 9.948 13.4932 9.948C12.9919 9.948 12.5439 10.092 12.1492 10.38C11.7652 10.6573 11.4612 11.0893 11.2372 11.676C11.0239 12.252 10.9172 12.9933 10.9172 13.9C10.9172 14.796 11.0239 15.5373 11.2372 16.124C11.4612 16.7107 11.7652 17.148 12.1492 17.436C12.5439 17.7133 12.9919 17.852 13.4932 17.852Z" fill="white"/>
                        </svg>

                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13.5" r="13" fill="#F4F8FB"/>
                        <path d="M13.4813 19.66C12.5533 19.66 11.7479 19.5213 11.0653 19.244C10.3826 18.9667 9.85458 18.5773 9.48125 18.076C9.10792 17.564 8.92125 16.9667 8.92125 16.284C8.92125 15.6013 9.10258 15.0253 9.46525 14.556C9.82792 14.0867 10.3506 13.7293 11.0333 13.484C11.7159 13.2387 12.5319 13.116 13.4813 13.116C14.4306 13.116 15.2466 13.2387 15.9293 13.484C16.6226 13.7293 17.1506 14.092 17.5133 14.572C17.8866 15.0413 18.0733 15.612 18.0733 16.284C18.0733 16.9667 17.8813 17.564 17.4973 18.076C17.1239 18.5773 16.5906 18.9667 15.8973 19.244C15.2146 19.5213 14.4093 19.66 13.4813 19.66ZM13.4813 18.028C14.2493 18.028 14.8573 17.868 15.3053 17.548C15.7533 17.228 15.9773 16.7853 15.9773 16.22C15.9773 15.6653 15.7533 15.228 15.3053 14.908C14.8573 14.588 14.2493 14.428 13.4813 14.428C12.7133 14.428 12.1106 14.588 11.6733 14.908C11.2359 15.228 11.0173 15.6653 11.0173 16.22C11.0173 16.7853 11.2359 17.228 11.6733 17.548C12.1106 17.868 12.7133 18.028 13.4813 18.028ZM13.4813 14.204C12.6173 14.204 11.8759 14.092 11.2573 13.868C10.6386 13.6333 10.1586 13.2973 9.81725 12.86C9.48658 12.412 9.32125 11.8787 9.32125 11.26C9.32125 10.62 9.49192 10.0707 9.83325 9.612C10.1853 9.14267 10.6759 8.78 11.3053 8.524C11.9346 8.268 12.6599 8.14 13.4813 8.14C14.3133 8.14 15.0439 8.268 15.6733 8.524C16.3026 8.78 16.7933 9.14267 17.1453 9.612C17.4973 10.0707 17.6733 10.62 17.6733 11.26C17.6733 11.8787 17.5026 12.412 17.1613 12.86C16.8306 13.2973 16.3506 13.6333 15.7213 13.868C15.0919 14.092 14.3453 14.204 13.4813 14.204ZM13.4813 12.924C14.1426 12.924 14.6653 12.7853 15.0493 12.508C15.4333 12.22 15.6253 11.836 15.6253 11.356C15.6253 10.8547 15.4279 10.4653 15.0333 10.188C14.6386 9.91067 14.1213 9.772 13.4813 9.772C12.8413 9.772 12.3293 9.91067 11.9453 10.188C11.5613 10.4653 11.3693 10.8547 11.3693 11.356C11.3693 11.836 11.5559 12.22 11.9293 12.508C12.3133 12.7853 12.8306 12.924 13.4813 12.924Z" fill="#000F28"/>
                        </svg>
                    </div>
            </div>
        </div>



        <div className='body'>

          {loading ? (
          // Display a loading indicator if data is still loading
          <p>Loading...</p>
        ) : (
          // Render the Calendar component with the loaded employee data
          <Calendar
            mode="single"
            // Pass employeeData to the Calendar component
            data={employeeData}
            className="rounded-md border calender"
          />
        )}

<div className="sasi">
  <h2>Employee Data</h2>
  {employeeData && employeeData.employees && employeeData.employees.length > 0 ? (
    employeeData.employees.map((employee, index) => (
      <div key={employee.employee_id}>
        <p>Employee ID: {employee.employee_id}</p>
        <p>Name: {employee.name}</p>
        <p>Attendance:</p>
        <ul>
          {employee.attendance.map((attendanceEntry, entryIndex) => (
            <li key={entryIndex}>
              Date: {attendanceEntry.date}, Status: {attendanceEntry.status}
            </li>
          ))}
        </ul>
      </div>
    ))
  ) : (
    <p>No employee data available....</p>
  )}
</div>


        </div>
    </div>
  )
}
