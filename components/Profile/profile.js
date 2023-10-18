"use client"

import './style.css';
import * as React from 'react';
import { Avatar , AvatarImage } from '@/components/ui/avatar'; 
import { Input } from '@/components/ui/input'; 





export default function profile() {

  return (
    <div className='profile-container'>
        
        <div className='head'>
            <div className='profile'>Profile</div>
            <div className='note'>Note: To do any changes please contact admin</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0002 0.333344C5.5485 0.333344 0.333496 5.54834 0.333496 12C0.333496 18.4517 5.5485 23.6667 12.0002 23.6667C18.4518 23.6667 23.6668 18.4517 23.6668 12C23.6668 5.54834 18.4518 0.333344 12.0002 0.333344ZM12.0002 21.3333C6.85516 21.3333 2.66683 17.145 2.66683 12C2.66683 6.85501 6.85516 2.66668 12.0002 2.66668C17.1452 2.66668 21.3335 6.85501 21.3335 12C21.3335 17.145 17.1452 21.3333 12.0002 21.3333ZM16.1885 6.16668L12.0002 10.355L7.81183 6.16668L6.16683 7.81168L10.3552 12L6.16683 16.1883L7.81183 17.8333L12.0002 13.645L16.1885 17.8333L17.8335 16.1883L13.6452 12L17.8335 7.81168L16.1885 6.16668Z" fill="#848D96"/>
            </svg>
        </div>

        <div className='main'>
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
                <div className='position'>Manager</div>
            </div>
            <div className='right'>
                <div className='detail'>
                    <div className='caption'>Employee ID
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 6.08333H11.6668V4.41667C11.6668 2.11667 9.80016 0.25 7.50016 0.25C5.20016 0.25 3.3335 2.11667 3.3335 4.41667V6.08333H2.50016C1.5835 6.08333 0.833496 6.83333 0.833496 7.75V16.0833C0.833496 17 1.5835 17.75 2.50016 17.75H12.5002C13.4168 17.75 14.1668 17 14.1668 16.0833V7.75C14.1668 6.83333 13.4168 6.08333 12.5002 6.08333ZM5.00016 4.41667C5.00016 3.03333 6.11683 1.91667 7.50016 1.91667C8.8835 1.91667 10.0002 3.03333 10.0002 4.41667V6.08333H5.00016V4.41667ZM12.5002 16.0833H2.50016V7.75H12.5002V16.0833ZM7.50016 13.5833C8.41683 13.5833 9.16683 12.8333 9.16683 11.9167C9.16683 11 8.41683 10.25 7.50016 10.25C6.5835 10.25 5.8335 11 5.8335 11.9167C5.8335 12.8333 6.5835 13.5833 7.50016 13.5833Z" fill="#DCDCDC"/>
                        </svg>
                    </div>
                    <Input disabled type="email" placeholder="1901106374" />
                </div>
                <div className='detail'>
                    <div className='caption'>Designation
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 6.08333H11.6668V4.41667C11.6668 2.11667 9.80016 0.25 7.50016 0.25C5.20016 0.25 3.3335 2.11667 3.3335 4.41667V6.08333H2.50016C1.5835 6.08333 0.833496 6.83333 0.833496 7.75V16.0833C0.833496 17 1.5835 17.75 2.50016 17.75H12.5002C13.4168 17.75 14.1668 17 14.1668 16.0833V7.75C14.1668 6.83333 13.4168 6.08333 12.5002 6.08333ZM5.00016 4.41667C5.00016 3.03333 6.11683 1.91667 7.50016 1.91667C8.8835 1.91667 10.0002 3.03333 10.0002 4.41667V6.08333H5.00016V4.41667ZM12.5002 16.0833H2.50016V7.75H12.5002V16.0833ZM7.50016 13.5833C8.41683 13.5833 9.16683 12.8333 9.16683 11.9167C9.16683 11 8.41683 10.25 7.50016 10.25C6.5835 10.25 5.8335 11 5.8335 11.9167C5.8335 12.8333 6.5835 13.5833 7.50016 13.5833Z" fill="#DCDCDC"/>
                        </svg>
                    </div>
                    <Input disabled type="email" placeholder="Software Engineers" />
                </div>
                <div className='detail'>
                    <div className='caption'>Date of joining
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 6.08333H11.6668V4.41667C11.6668 2.11667 9.80016 0.25 7.50016 0.25C5.20016 0.25 3.3335 2.11667 3.3335 4.41667V6.08333H2.50016C1.5835 6.08333 0.833496 6.83333 0.833496 7.75V16.0833C0.833496 17 1.5835 17.75 2.50016 17.75H12.5002C13.4168 17.75 14.1668 17 14.1668 16.0833V7.75C14.1668 6.83333 13.4168 6.08333 12.5002 6.08333ZM5.00016 4.41667C5.00016 3.03333 6.11683 1.91667 7.50016 1.91667C8.8835 1.91667 10.0002 3.03333 10.0002 4.41667V6.08333H5.00016V4.41667ZM12.5002 16.0833H2.50016V7.75H12.5002V16.0833ZM7.50016 13.5833C8.41683 13.5833 9.16683 12.8333 9.16683 11.9167C9.16683 11 8.41683 10.25 7.50016 10.25C6.5835 10.25 5.8335 11 5.8335 11.9167C5.8335 12.8333 6.5835 13.5833 7.50016 13.5833Z" fill="#DCDCDC"/>
                        </svg>
                    </div>
                    <Input disabled type="email" placeholder="01/12/2018" />
                </div>
                <div className='detail'>
                    <div className='caption'>Date of Birth
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 6.08333H11.6668V4.41667C11.6668 2.11667 9.80016 0.25 7.50016 0.25C5.20016 0.25 3.3335 2.11667 3.3335 4.41667V6.08333H2.50016C1.5835 6.08333 0.833496 6.83333 0.833496 7.75V16.0833C0.833496 17 1.5835 17.75 2.50016 17.75H12.5002C13.4168 17.75 14.1668 17 14.1668 16.0833V7.75C14.1668 6.83333 13.4168 6.08333 12.5002 6.08333ZM5.00016 4.41667C5.00016 3.03333 6.11683 1.91667 7.50016 1.91667C8.8835 1.91667 10.0002 3.03333 10.0002 4.41667V6.08333H5.00016V4.41667ZM12.5002 16.0833H2.50016V7.75H12.5002V16.0833ZM7.50016 13.5833C8.41683 13.5833 9.16683 12.8333 9.16683 11.9167C9.16683 11 8.41683 10.25 7.50016 10.25C6.5835 10.25 5.8335 11 5.8335 11.9167C5.8335 12.8333 6.5835 13.5833 7.50016 13.5833Z" fill="#DCDCDC"/>
                        </svg>
                    </div>
                    <Input disabled type="email" placeholder="08/10/2001" />
                </div>
                <div className='detail'>
                    <div className='caption'>Official Email Address
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 6.08333H11.6668V4.41667C11.6668 2.11667 9.80016 0.25 7.50016 0.25C5.20016 0.25 3.3335 2.11667 3.3335 4.41667V6.08333H2.50016C1.5835 6.08333 0.833496 6.83333 0.833496 7.75V16.0833C0.833496 17 1.5835 17.75 2.50016 17.75H12.5002C13.4168 17.75 14.1668 17 14.1668 16.0833V7.75C14.1668 6.83333 13.4168 6.08333 12.5002 6.08333ZM5.00016 4.41667C5.00016 3.03333 6.11683 1.91667 7.50016 1.91667C8.8835 1.91667 10.0002 3.03333 10.0002 4.41667V6.08333H5.00016V4.41667ZM12.5002 16.0833H2.50016V7.75H12.5002V16.0833ZM7.50016 13.5833C8.41683 13.5833 9.16683 12.8333 9.16683 11.9167C9.16683 11 8.41683 10.25 7.50016 10.25C6.5835 10.25 5.8335 11 5.8335 11.9167C5.8335 12.8333 6.5835 13.5833 7.50016 13.5833Z" fill="#DCDCDC"/>
                        </svg>
                    </div>
                    <Input disabled type="email" placeholder="xyz@company.in" />
                </div>
                <div className='detail'>
                    <div className='caption'>Personal Email Address
                        
                    </div>
                    <Input disabled type="email" placeholder="xyz@company.in" />
                </div>
                <div className='detail'>
                    <div className='caption'>Phone Number
                        
                    </div>
                    <Input disabled type="email" placeholder="9344789362" />
                </div>
                <div className='detail'>
                    <div className='caption'>Reporting Person Name
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 6.08333H11.6668V4.41667C11.6668 2.11667 9.80016 0.25 7.50016 0.25C5.20016 0.25 3.3335 2.11667 3.3335 4.41667V6.08333H2.50016C1.5835 6.08333 0.833496 6.83333 0.833496 7.75V16.0833C0.833496 17 1.5835 17.75 2.50016 17.75H12.5002C13.4168 17.75 14.1668 17 14.1668 16.0833V7.75C14.1668 6.83333 13.4168 6.08333 12.5002 6.08333ZM5.00016 4.41667C5.00016 3.03333 6.11683 1.91667 7.50016 1.91667C8.8835 1.91667 10.0002 3.03333 10.0002 4.41667V6.08333H5.00016V4.41667ZM12.5002 16.0833H2.50016V7.75H12.5002V16.0833ZM7.50016 13.5833C8.41683 13.5833 9.16683 12.8333 9.16683 11.9167C9.16683 11 8.41683 10.25 7.50016 10.25C6.5835 10.25 5.8335 11 5.8335 11.9167C5.8335 12.8333 6.5835 13.5833 7.50016 13.5833Z" fill="#DCDCDC"/>
                        </svg>
                    </div>
                    <Input disabled type="email" placeholder="Anjan Naik" />
                </div>
                <div className='detail'>
                    <div className='caption'>Tax Regime
                        
                    </div>
                    <Input disabled type="email" placeholder="New Regime" />
                </div>
                <div className='detail'>
                    <div className='caption'>Base Location
                        
                    </div>
                    <Input disabled type="email" placeholder="Kolkata" />
                </div>


            </div>
        </div>
    </div>
  )
}