import React, { useState, useEffect } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { ALPHABET_LIST } from '../utils/helper'
import hero from '../assets/images/webp/hero.webp'
import profile from '../assets/images/webp/profile.webp'
import { DownArrow } from '../utils/icons'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const Hero = () => {
    const [activeParams, setActiveParams] = useSearchParams('value')
    const value = activeParams.get('value')?.toUpperCase()
    const [selectId, setSelectId] = useState()
    const navigate = useNavigate()
    const { id = "all" } = useParams()

    const handleChange = (id) => {
        setSelectId(id);
        navigate(`/${id}`);
    };
    
    useEffect(() => {
        setSelectId(id)
    }, [id])

    const getHeading = () =>
    ({
        pop: "Hit Me Hard and Pop",
        rock: "Hit Me Hard and Rock",
        all: "Hit Me Hard and Soft",
        more: "Hit Me Hard and More",
    }[selectId] || "Hit Me Hard and Soft");


    const handleDomainChange = (value) => {
        setActiveParams({ value: value.toLowerCase() })
    }

    return (
        <div className='pt-[10px] pb-10'>
            <Header />
            <div className='max-w-[1160px] mx-auto px-4'>
                <div className='flex items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2'>
                    <div className='flex items-center gap-[5px]'>
                        <CustomButton customOnClick={() => handleChange("all")} myClass={`${selectId === "all" ? "bg-black text-white" : ""} !text-xs px-[13.48px] py-[5.84px] hover:!bg-customBlack hover:text-white`} text="All" />
                        <CustomButton customOnClick={() => handleChange("pop")} myClass={`${selectId === "pop" ? "bg-black text-white" : ""} !text-xs text-customBlack py-[5.84px] px-[11.37px] hover:!bg-customBlack hover:text-white`} text="Pop" />
                        <CustomButton customOnClick={() => handleChange("rock")} myClass={`${selectId === "rock" ? "bg-black text-white" : ""} !text-xs text-customBlack py-[5.84px] px-[11.8px] hover:!bg-customBlack hover:text-white`} text="Rock" />
                        <CustomButton customOnClick={() => handleChange("more")} myClass={`${selectId === "more" ? "bg-black text-white" : ""} !text-xs text-customBlack py-[5.84px] px-[9.2px] hover:!bg-customBlack hover:text-white group flex items-center gap-[5px]`} text="More" icon={<DownArrow myClass={`group-hover:stroke-white transition-all duration-300`} />} />
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        {ALPHABET_LIST.map(function (item, index) {
                            return <p onClick={() => handleDomainChange(item)} key={index} className={`${activeParams.get('value') === item.toLowerCase() ? "bg-black text-white" : ""} flex items-center cursor-pointer hover:bg-customBlack size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px]`}>{item}</p>
                        })}
                    </div>
                </div>
                <div className='bg-customBlack rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
                    <h1 className='font-montserrat text-5xl leading-[58.51px] uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl'>{getHeading()}</h1>
                    <img src={hero} alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none' />
                    <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
                        <img src={profile} alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none' />
                        <div>
                            <p className='font-semibold text-[32px] max-lg:text-2xl leading-[42px] text-white max-sm:text-lg'>Billie Eilish {value}</p>
                            <p className='font-montserrat font-medium text-base leading-5 text-darkGray pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm'>Relesed May 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero