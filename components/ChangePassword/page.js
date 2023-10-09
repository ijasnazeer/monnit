"use client"

import './style.css';
import * as React from 'react';
import { Input } from '@/components/ui/input'; 
import { Button } from '../ui/button';





export default function page() {

  return (
    <div className='container'>
        
        <div className='head'>
            <div className='change-password'>Change Password</div>
            <div className='note-1'>New passwords must meet the rules of the password policy.</div>
            <div className='note-2'>(One Number, One Special Character (from &*#$ only), No Space, At least 8 characters)</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0002 0.333344C5.5485 0.333344 0.333496 5.54834 0.333496 12C0.333496 18.4517 5.5485 23.6667 12.0002 23.6667C18.4518 23.6667 23.6668 18.4517 23.6668 12C23.6668 5.54834 18.4518 0.333344 12.0002 0.333344ZM12.0002 21.3333C6.85516 21.3333 2.66683 17.145 2.66683 12C2.66683 6.85501 6.85516 2.66668 12.0002 2.66668C17.1452 2.66668 21.3335 6.85501 21.3335 12C21.3335 17.145 17.1452 21.3333 12.0002 21.3333ZM16.1885 6.16668L12.0002 10.355L7.81183 6.16668L6.16683 7.81168L10.3552 12L6.16683 16.1883L7.81183 17.8333L12.0002 13.645L16.1885 17.8333L17.8335 16.1883L13.6452 12L17.8335 7.81168L16.1885 6.16668Z" fill="#848D96"/>
            </svg>
        </div>

        <div className='main'>
            <div className='password'>
                Enter old password
                <Input type="password" placeholder="old password" />
            </div>
            <div className='password'>
                Enter a new password
                <Input type="password" placeholder="new password" />
            </div>
            <div className='password'>
                Confirm a new password
                <Input type="password" placeholder="confirm password" />
            </div>
            <div className='buttons'>
                <Button>Save</Button>
                <Button>Cancel</Button>
            </div>
        </div>
    </div>
  )
}
