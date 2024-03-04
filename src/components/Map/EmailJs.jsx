
"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const EmailJs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log('Form Data:', new FormData(form.current));

    emailjs.sendForm('service_1w87xf5', 'template_8phqn19', form.current, 'rMe4d4OK_Ji8YFpcd')
      .then((result) => {
          console.log('Email Sent:', result.text);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
      }, (error) => {
          console.error('Error Sending Email:', error.text);
      });
  };

  return (
    <div className='max-w-7xl mx-auto my-8 px-8 flex gap-4 flex-col lg:flex-row  items-center justify-center '>
     <div className='flex-1'>
     <h1 className='text-5xl my-8'> If you have any query? <br /> Contact with us.</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
  className='rounded-sm w-[500px] p-2 border border-gray-300 focus:outline-none'
  type="text"
  name="from_name"
  placeholder='Name'
  onFocus={(e) => e.target.style.borderColor = 'green'}
  onBlur={(e) => e.target.style.borderColor = ''}
/>
      <label className="label">
            <span className="label-text  ">Email</span>
          </label>
      <input
  className='rounded-sm w-[500px] p-2 border border-gray-300 focus:outline-none'
  type="Email"
  name="from_name"
  placeholder='Email'
  onFocus={(e) => e.target.style.borderColor = 'green'}
  onBlur={(e) => e.target.style.borderColor = ''}
/> <br />

      <label className="label">
            <span className="label-text ">Message</span>
          </label>
      <textarea className='rounded-sm w-[500px] p-2 resize-none border border-gray-300 focus:outline-none'  style={{ maxHeight: 'calc(1.5em * 10)', minHeight: 'calc(1.5em * 10)' }} name="message" placeholder='Message...'
      onFocus={(e) => e.target.style.borderColor = 'green'}
      onBlur={(e) => e.target.style.borderColor = ''}/> <br />
      <input className='my-4 btn w-[500px] text-xl  font-bold  bg-primary '  type="submit" value="Send" 
       />
      </form>
     </div>

   
     <div  className="  flex-1 w-[500px] h-[700px] bg-green-900  text-white" 
        >
        <h1 className='text-5xl text-primary ml-16 mt-16'>Phone:</h1>
        <p className='ml-16 mt-4'>(+880)1701965079</p>
        <p className='ml-16'>(+880)1773713834 </p>
        <h1 className='text-5xl text-primary ml-16 mt-16'>Email:</h1>
        <p className='ml-16 mt-4'>mdsohelrana85238960@gmail.com</p>
        <p className='ml-16'>   reduanulhaque13@gmail.com  </p>
        <h1 className='text-5xl text-primary ml-16 mt-16'>Address:</h1>
        <p className='ml-16 mt-4'>Haripur,Thakurgoan</p>
        <p className='ml-16 pb-16 lg:pb-0'>California(CA), 92583</p>

        
     </div>




    </div>
  );
};
