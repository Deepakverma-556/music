import React from 'react'
import logo from "../assets/images/png/logo.png"
import CustomButton from './CustomButton'
import { Search } from '../utils/icons'

const Header = () => {
    const handleSubmit = (e) => (
        e.preventDefault()
    )
    return (
        <div id='press' className='max-w-[1160px] mx-auto px-4'>
            <div id='help' className='w-full flex items-center justify-between shadow-[0px_10px_10px_0px] shadow-lightGray rounded-[20px] pl-[38px] pr-3 py-[10px] gap-4 max-md:px-3'>
                <a href="#logo"><img src={logo} alt="logo" className='h-[26.42px] max-sm:h-[22px] pointer-events-none' /></a>
                <form onSubmit={handleSubmit} className='border border-gray max-w-[650px] max-md:hidden max-xl:max-w-[500px] max-lg:max-w-[300px] w-full rounded-full flex items-center pr-[7px] overflow-hidden'>
                    <input type="text" placeholder='What do you feel like listening to right now ?' className='w-[95%] px-[30px] pt-[13px] pb-[14px] outline-none text-sm leading-6' />
                    <CustomButton icon={<Search myClass="transition-all duration-300 group-hover:fill-black" />} myClass="group flex items-center justify-center hover:!bg-white !rounded-full py-[10.34px] px-[10.34px] !bg-customBlack" />
                </form>
                <div className='flex items-center gap-5 max-sm:gap-2'>
                    <CustomButton text="Login" myClass="!border-none text-customBlack !font-normal hover:!text-blue-400" />
                    <CustomButton text="Sign Up" myClass="!bg-customBlack px-[25px] py-[9px] text-white hover:!bg-transparent hover:text-black" />
                </div>
            </div>
            <form onSubmit={handleSubmit} className='border border-gray md:hidden bg-white w-full rounded-full flex items-center pr-[7px] overflow-hidden max-md:mt-1'>
                <input type="text" placeholder='What do you feel like listening to right now ?' className='w-[95%] px-[30px] max-md:px-4 pt-[13px] pb-[14px] max-md:py-3 outline-none text-sm leading-6' />
                <CustomButton icon={<Search myClass="transition-all duration-300 group-hover:fill-black" />} myClass="group flex items-center justify-center hover:!bg-white !rounded-full !p-[10.34px] max-sm:!p-2 !bg-customBlack" />
            </form>
        </div>
    )
}

export default Header