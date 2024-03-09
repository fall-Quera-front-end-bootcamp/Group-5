import LogoutIcon from '@mui/icons-material/Logout';
const ExitButton = () => {
  return (
    <div className='flex'>
      <LogoutIcon style={{width:"24px", height:"24px"}} />
      <p>خروج</p>
    </div>
  )
}

export default ExitButton
