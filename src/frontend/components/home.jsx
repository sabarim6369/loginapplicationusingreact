import React from 'react'

function Home() {
  const email=localStorage.getItem("email")
  return (
   <>
   <h1>Home page</h1>
   <p>
    This is a home page of { email}
   </p>
   </>
  )
}

export default Home