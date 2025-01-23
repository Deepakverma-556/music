import React from 'react'
import { FOOTER_ARTIST_LIST, FOOTER_FOLLOW_US_LIST, FOOTER_LYRICS_LIST, FOOTER_SONGS_LIST } from '../utils/helper'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='pt-[91px] max-md:pt-20 max-sm:pt-[60px]'>
      <div className='max-w-[1160px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3 justify-between'>
          <div className='w-[64%] max-sm:w-full px-3'>
            <div className='flex flex-wrap -mx-3'>
              <div className='w-1/3 px-3'>
                <ul>
                  <li className='font-semibold text-sm leading-6 text-customBlack pb-[37px] max-md:pb-5 max-sm:pb-3'>Lyrics Web</li>
                  {FOOTER_LYRICS_LIST.map(function (item, i) {
                    return <li key={i} className='pb-6 max-md:pb-4 max-sm:pb-2'><a href={item.link} className='text-sm max-sm:text-xs leading-6 text-customBlack hover:text-blue-400 transition-all duration-300'>{item.title}</a></li>
                  })}
                </ul>
              </div>
              <div className='w-1/3 sm:px-3'>
                <ul>
                  <li className='font-semibold text-sm leading-6 text-customBlack pb-[37px] max-md:pb-5 max-sm:pb-3'>Songs</li>
                  {FOOTER_SONGS_LIST.map(function (item, i) {
                    return <li key={i} className='pb-6 max-md:pb-4 max-sm:pb-2'><a href={item.link} className='text-sm max-sm:text-xs leading-6 text-customBlack hover:text-blue-400 transition-all duration-300'>{item.title}</a></li>
                  })}
                </ul>
              </div>
              <div className='w-1/3 px-3'>
                <ul>
                  <li className='font-semibold text-sm leading-6 text-customBlack pb-[37px] max-md:pb-5 max-sm:pb-3'>Artist</li>
                  {FOOTER_ARTIST_LIST.map(function (item, i) {
                    return <li key={i} className='pb-6 max-md:pb-4 max-sm:pb-2'><a href={item.link} className='text-sm max-sm:text-xs leading-6 text-customBlack hover:text-blue-400 transition-all duration-300'>{item.title}</a></li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='w-[31.5%] max-sm:w-1/2 max-[500px]:w-2/3 px-3 lg:pr-[39px] lg:-mt-4 max-sm:pt-6'>
            <p className='font-semibold text-sm leading-6 text-customBlack pb-[26px] max-md:pb-5 max-sm:pb-3'>Follow us</p>
            <ul className='max-sm:flex gap-4'>
              {FOOTER_FOLLOW_US_LIST.map(function (item, i) {
                return <li key={i} className='pb-[14px] max-sm:pb-2'><a target='blank' href={item.link} className='flex items-center group w-full font-semibold text-sm leading-6 text-customBlack max-sm:max-w-max justify-between sm:pt-[11px] sm:pb-3 sm:pr-[14.46px] sm:pl-[25px] rounded-[10px] sm:bg-white'><span className='group-hover:text-blue-400 transition-all duration-300 max-sm:hidden'>{item.title}</span><span>{item.icon}</span></a></li>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-gray mt-[75px] max-md:mt-14 max-sm:mt-9'></div>
      <div className='max-w-[1160px] px-4 mx-auto flex max-sm:flex-wrap sm:gap-5 justify-between items-center pt-[31px] pb-[30px] max-md:py-6 max-sm:py-4'>
        <p className='text-sm leading-6 max-sm:text-center max-sm:w-full text-customBlack max-sm:text-xs'>All rights reserved to Global Media Holdings Ltd. {year}</p>
        <div className='flex items-center gap-[41px] max-md:gap-5 max-sm:pt-2 max-sm:mx-auto'>
          <a href="#privacy" className='text-sm leading-6 text-customBlack max-sm:text-xs hover:text-blue-400 transition-all duration-300'>Privacy Policy</a>
          <a href="#privacy" className='text-sm leading-6 text-customBlack max-sm:text-xs hover:text-blue-400 transition-all duration-300'>Terms of Use</a>
        </div>
      </div>
    </div>
  )
}

export default Footer