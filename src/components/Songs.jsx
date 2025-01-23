import React, { useState } from 'react'
import { TABLE_DATA_LIST, TABLE_HEADING_LIST } from '../utils/helper'
import { useSearchParams } from 'react-router-dom'
import { ALPHABET_LIST } from '../utils/helper'

const Songs = () => {
    const [images, setImages] = useState('')
    const handleChange = (e) => {
        setImages(URL.createObjectURL(e.target.files[0]))
    }
    function deleteImage() {
        setImages('')
    }

    const [activeParams, setActiveParams] = useSearchParams('value')
    const value = activeParams.get('value')?.toUpperCase()
    const handleDomainChange = (value) => {
        setActiveParams({ value: value.toLowerCase() })
    }
    return (
        <div id='top' className='pt-[60px] max-sm:pt-5'>
            <div id='playlist' className='max-w-[1160px] mx-auto px-4 flex gap-[51px] max-md:gap-6 items-center max-md:flex-wrap'>
                <div id='about' className='w-full'>
                    <h2 className='font-semibold text-5xl leading-[58.45px] pb-[29px] max-lg:text-4xl max-sm:text-3xl'>Songs</h2>
                    <div className='overflow-x-auto'>
                        <table className='w-full max-[460px]:min-w-[427px] min-w-[427px] overflow-x-auto'>
                            <thead>
                                <tr>
                                    {TABLE_HEADING_LIST.map(function (heading, index) {
                                        return <th key={index} className={`${index === 3 ? "text-right" : "text-left"} font-semibold text-sm leading-6 pb-[33px] max-md:pb-5`}>{heading}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_DATA_LIST.map(function (data, index) {
                                    return <tr key={index}>
                                        <td className='text-sm leading-6 text-customGray pb-11 max-md:pb-6 max-lg:pr-1'>0{index + 1}</td>
                                        <td className='font-semibold text-sm leading-6 pb-11 max-md:pb-6 lg:w-7/12 max-lg:w-5/12'>{data.song}</td>
                                        <td className='text-customLightGray text-xs leading-6 pb-11 max-md:pb-6'>Nov 4, 2023</td>
                                        <td className='text-customLightGray text-xs leading-6 text-right pb-11 max-md:pb-6'>{data.timesPlayed}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <input multiple accept='image/*' hidden onChange={handleChange} type="file" id='image' />
                <div className='md:min-h-[600px] max-md:h-[400px] max-sm:h-[300px] relative max-w-[300px] w-full overflow-hidden bg-sky rounded-[20px] flex justify-center items-center mx-auto'>
                    {images ? <div><img src={images} alt="images" /><button onClick={deleteImage} className='absolute top-4 right-4 text-white'>X</button></div> : <label className='cursor-pointer absolute flex justify-center items-center w-full h-full text-center rounded-[20px] text-sm leading-6 bg-sky text-white ' htmlFor="image">Add Place</label>}
                </div>
            </div>
            <div id='latest-news' className='border-t border-gray border-b pt-[42px] pb-[37px] flex mt-[30px] overflow-x-auto max-md:py-5 max-sm:py-3'>
                <div className='flex gap-[2px] mx-auto'>
                    {ALPHABET_LIST.map(function (item, index) {
                        return <p onClick={() => handleDomainChange(item)} key={index} className={`${activeParams.get('value') === item.toLowerCase() ? "bg-black text-white" : ""} flex items-center cursor-pointer hover:bg-customBlack size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-[18px]`}>{item}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Songs