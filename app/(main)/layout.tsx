//'use client'
import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
//import { useRouter } from 'next/navigation'


type Props = { children: React.ReactNode }



const Layout = async (props: Props) => {
  //const router = useRouter()
  const authUser = await currentUser()
  if (!authUser) redirect("/sign-up")
  return (
    <div className="flex overflow-hidden h-screen">
     <Sidebar />
      <div className="w-full">
      <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout