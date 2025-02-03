import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
          <img onClick={()=>{navigate('/'); scrollTo(0,0)}} className='cursor-pointer mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* center section */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='cursor-pointer hover:text-black' onClick={()=>{navigate('/'); scrollTo(0,0)}}>Home</li>
            <li className='cursor-pointer hover:text-black' onClick={()=>{navigate('/about'); scrollTo(0,0)}}>About Us</li>
            <li className='cursor-pointer hover:text-black' onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>Contact Us</li>
            <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='cursor-pointer hover:text-black'>+91-7667991277</li>
            <li className='cursor-pointer hover:text-black'>rounakdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <hr />
      <p className='py-5 text-sm text-center'>Copyright © 2024 rounakdev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
