
import Sidebar from '../Sidebar/MySideBar'
import SidebarHeader  from '../Sidebar/SidebarHeader'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
      <div className='flex flex-wrap gap-s'>
      <Sidebar  className="w-[380px] h-12"/>
      <SidebarHeader className='grow h-1/6 ml-[40px] mt-[41px]' />
      <div className='basis-[100%] h-5/6'></div>
      <div className='mr-[400px]  mt-[20px]'>
        <Outlet />
      </div>
    </div>
  )
} 

export default MainLayout
