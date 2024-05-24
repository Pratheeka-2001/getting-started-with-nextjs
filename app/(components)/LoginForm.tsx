'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'

const LoginForm = () => {  
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)

  const onsubmitGithub = async() =>{
    const result = await signIn("github", {
      redirect: true,
      callbackUrl: '/dashboard'
    })
  }

  return (
    <>
    <div className='loginForm'>
      <h1 className='p-6'>
        Hello
      </h1>
        <form>
            <label>Native User</label>
            <input type="checkbox" onClick={handleClick} checked={checked} className="toggle toggle-success" />
            <label>SSO User</label>
        </form>
        <button>Forgot Password ?</button>
        <div>
          <p>Don't have an account ? <button>Register</button></p>
        </div>
        <div className='flex items-center justify-left gap-1 mr-auto'>
        <button className='btn bg-gray-200 text-blue-400'><Link href="">Sign In With Google</Link></button>
        <button className='btn bg-gray-300 text-pretty text-blue-400' onClick={onsubmitGithub}>Sign In With Github</button>
        </div>
    </div>
    </>
  )
}

export default LoginForm
