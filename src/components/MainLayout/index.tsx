
import Sidebar from '../Sidebar/MySideBar'
import SidebarHeader  from '../Sidebar/SidebarHeader'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  Displayheader: boolean;
}
const MainLayout = ({Displayheader} : MainLayoutProps) => {

  return (
    <div className='flex flex-wrap gap-s'>
      <Sidebar  className="w-96 h-12"/>
      {Displayheader && <><SidebarHeader className='grow h-1/6 ml-[40px] mt-[41px]' />  
      <div className='basis-[100%] h-5/6'></div> </>}
      
      <div className='mr-[400px] pb-5'>
        <Outlet />
      </div>
    </div>
  )
} 

export default MainLayout
