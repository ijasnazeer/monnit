import React, { useEffect } from 'react';
import "./style.css";

import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
import { Avatar, AvatarImage } from '@/components/ui/avatar';



export default function Performance() {

  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        data: [15, 65,],
        backgroundColor: ["#F3F5F9", "#0A68FF"],
        borderColor: "rgba(0, 0, 0, 0)",
        // hoverBackgroundColor: 'red'
      },
    ],
  };
  
  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 0,
        bottom: 80,
        left: 40,
        right: 90
      },
  },
  rotation: 90,
  };
  return (
    <div className='performance-container'>
        <div className='left'>
                <div className='image'>
                    <Avatar className="avatar">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <svg width="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#0A68FF"/>
                        <path d="M26.0588 21.02L26.9788 21.94L17.9188 31H16.9988V30.08L26.0588 21.02ZM29.6588 15C29.4088 15 29.1488 15.1 28.9588 15.29L27.1288 17.12L30.8788 20.87L32.7088 19.04C33.0988 18.65 33.0988 18.02 32.7088 17.63L30.3688 15.29C30.1688 15.09 29.9188 15 29.6588 15ZM26.0588 18.19L14.9988 29.25V33H18.7488L29.8088 21.94L26.0588 18.19Z" fill="white"/>
                    </svg>

                </div>
                <div className='name'>Abhishek sahoo</div>
                <div className='position'>Software developer</div>
                <div className='rating'>
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0.394531L10.4246 4.55734L15.1329 5.5769L11.9231 9.16923L12.4084 13.9622L8 12.0195L3.59161 13.9622L4.07689 9.16923L0.867076 5.5769L5.57539 4.55734L8 0.394531Z" fill="white"/>
                  </svg>
                  8.5
                </div>
            </div>
        
        <div className='right'>
          <span>Employee’s Attendance (In Percentage)</span>
          <Pie data={data} options={options} />
          <div className='label'>
            <div className='present'>
              <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17.5" r="17" fill="#0A68FF"/>
              </svg> Present
            </div>
            <div className='absent'>
              <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17.5" r="16.5" fill="#F3F5F9" stroke="#0A68FF"/>
              </svg> Absent
            </div>
          </div>
          <div className='paging'>
            <left>
              <svg width="40" height="31" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="0.5" width="40" height="40" rx="8" fill="#0A68FF"/> <path d="M23.0005 25.7902C23.3905 25.4002 23.3905 24.7702 23.0005 24.3802L19.1205 20.5002L23.0005 16.6202C23.3905 16.2302 23.3905 15.6002 23.0005 15.2102C22.6105 14.8202 21.9805 14.8202 21.5905 15.2102L17.0005 19.8002C16.6105 20.1902 16.6105 20.8202 17.0005 21.2102L21.5905 25.8002C21.9705 26.1802 22.6105 26.1802 23.0005 25.7902Z" fill="white"/> </svg>
            </left>
            June 2022
            <right>
            <svg width="40" height="31" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="0.5" width="40" height="40" rx="8" fill="#0A68FF"/> <path d="M16.9995 15.2098C16.6095 15.5998 16.6095 16.2298 16.9995 16.6198L20.8795 20.4998L16.9995 24.3798C16.6095 24.7698 16.6095 25.3998 16.9995 25.7898C17.3895 26.1798 18.0195 26.1798 18.4095 25.7898L22.9995 21.1998C23.3895 20.8098 23.3895 20.1798 22.9995 19.7898L18.4095 15.1998C18.0295 14.8198 17.3895 14.8198 16.9995 15.2098Z" fill="white"/> </svg>
            </right>
          </div>
        </div>
    </div>
  )
}

