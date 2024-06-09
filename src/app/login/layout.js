import Link from 'next/link'
import React from 'react'

function layout({children}) {
  return (
    <div>
          <Link href="/login/studentLogin">Student Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/login/teacherLogin">Teacher Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {children}
    </div>
  )
}

export default layout
