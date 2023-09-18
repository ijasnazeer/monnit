import './style.css'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


const Topbar = () => {
  return (
    <div className="topbar">
        <div className='input-div div'>
            <Input className='input' type="text" placeholder="Search people..." />
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4292 17.9482H18.4869L18.1529 17.6262C19.5843 15.9562 20.3239 13.6778 19.9183 11.2563C19.3576 7.94015 16.5902 5.29201 13.2502 4.88644C8.20444 4.26615 3.95786 8.51272 4.57815 13.5585C4.98372 16.8985 7.63187 19.6659 10.948 20.2266C13.3695 20.6322 15.6479 19.8926 17.3179 18.4612L17.6399 18.7952V19.7375L22.7096 24.8072C23.1987 25.2962 23.9979 25.2962 24.4869 24.8072C24.976 24.3181 24.976 23.5189 24.4869 23.0298L19.4292 17.9482ZM12.2721 17.9482C9.30186 17.9482 6.90422 15.5506 6.90422 12.5804C6.90422 9.61015 9.30186 7.21251 12.2721 7.21251C15.2423 7.21251 17.6399 9.61015 17.6399 12.5804C17.6399 15.5506 15.2423 17.9482 12.2721 17.9482Z" fill="#ABB6C7"/>
            </svg>
        </div>
        
        <div className='div'>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5052 19.88L21.0002 18.375V12.5417C21.0002 8.96 19.0869 5.96167 15.7502 5.16833V4.375C15.7502 3.40667 14.9685 2.625 14.0002 2.625C13.0319 2.625 12.2502 3.40667 12.2502 4.375V5.16833C8.90188 5.96167 7.00021 8.94833 7.00021 12.5417V18.375L5.49521 19.88C4.76021 20.615 5.27355 21.875 6.31188 21.875H21.6769C22.7269 21.875 23.2402 20.615 22.5052 19.88ZM18.6669 19.5417H9.33355V12.5417C9.33355 9.64833 11.0952 7.29167 14.0002 7.29167C16.9052 7.29167 18.6669 9.64833 18.6669 12.5417V19.5417ZM14.0002 25.375C15.2835 25.375 16.3335 24.325 16.3335 23.0417H11.6669C11.6669 24.325 12.7052 25.375 14.0002 25.375Z" fill="#000F28"/>
            <circle cx="20" cy="8" r="7" fill="#0A68FF"/>
            <path d="M19.64 12.1C19.1467 12.1 18.6633 12.03 18.19 11.89C17.7233 11.7433 17.33 11.5433 17.01 11.29L17.57 10.28C17.8233 10.4867 18.13 10.6533 18.49 10.78C18.85 10.9067 19.2267 10.97 19.62 10.97C20.0867 10.97 20.45 10.8767 20.71 10.69C20.97 10.4967 21.1 10.2367 21.1 9.91C21.1 9.59 20.98 9.33667 20.74 9.15C20.5 8.96333 20.1133 8.87 19.58 8.87H18.94V7.98L20.94 5.6L21.11 6.09H17.35V5H22.12V5.87L20.12 8.25L19.44 7.85H19.83C20.69 7.85 21.3333 8.04333 21.76 8.43C22.1933 8.81 22.41 9.3 22.41 9.9C22.41 10.2933 22.31 10.6567 22.11 10.99C21.91 11.3233 21.6033 11.5933 21.19 11.8C20.7833 12 20.2667 12.1 19.64 12.1Z" fill="white"/>
            </svg>
        </div>

        <div className='avatar-div'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className='avatar'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2894 1.00002C10.8994 0.61002 10.2694 0.610019 9.87937 1.00002L5.99937 4.88002L2.11937 1.00002C1.72937 0.610019 1.09937 0.610019 0.709367 1.00002C0.319366 1.39002 0.319366 2.02002 0.709367 2.41002L5.29937 7.00002C5.68937 7.39002 6.31937 7.39002 6.70937 7.00002L11.2994 2.41002C11.6794 2.03002 11.6794 1.39002 11.2894 1.00002Z" fill="#ABB6C7"/>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>drop-2</DropdownMenuItem>
                <DropdownMenuItem>drop-3</DropdownMenuItem>
                <DropdownMenuItem>drop-4</DropdownMenuItem>
                <DropdownMenuItem>drop-5</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>

    </div>
  );
};

export default Topbar;