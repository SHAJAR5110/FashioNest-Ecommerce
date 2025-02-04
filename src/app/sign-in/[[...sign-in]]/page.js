


import { SignIn } from '@clerk/nextjs';

export default function Signin() {
    
    return (
       <div className='flex flex-col items-center h-[90vh] w-full'>
             
            <SignIn />
        </div>
    );
}
