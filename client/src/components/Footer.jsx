import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Footer() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return (
        <>
            <footer className="bg-white py-5 lg:px-20 px-8 gap-4 w-full flex flex-col md:flex-row lg:flex-row justify-between items-center">
                <span className='lg:text-lg md:text-lg  text-slate-600'>Copyright @{currentYear} All rights reserved</span>
                <section className='flex items-center justify-center gap-5 text-2xl text-slate-400'>
                    <Link to="#" target='_blank' className='cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300'><BsFacebook /></Link>
                    <Link to='#' target='_blank' className='cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300'><BsLinkedin /></Link>
                    <Link to='#' target='_blank' className='cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300'><BsGithub /></Link>
                    <Link to='#' target='_blank' className='cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300'><BsTwitter /></Link>
                </section>
            </footer>
        </>
    )
}

export default Footer