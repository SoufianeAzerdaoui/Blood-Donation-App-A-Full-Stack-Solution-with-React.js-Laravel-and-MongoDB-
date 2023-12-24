import React from 'react';

import typeA from '../../images/A+.jpg'
import typeANegative from '../../images/a-.jpg'

import typeB from '../../images/B+.jpg';
import typeBNegative from '../../images/b-.jpg';



import typeO from '../../images/o+.jpg'
import typeONagative from '../../images/o-.jpg'

import typeAB from '../../images/ab+.jpg';
import typeABNegative from '../../images/ab-.jpg';


import { Link } from 'react-router-dom';


const BloodTypes = () => {


  return (
    <div>
    <div
    name=''
    className='bg-gradient-to-b  w-full  md:h-screen text-center md:text-left'
    style={{ paddingTop: '', paddingBottom: '450px' }}
  >
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-red-300'>
        Blood types
        </p>
        <p className='py-6'>What are the rarest blood types?
        There are eight main blood types but some are rarer than others. The list below shows the percentage of donors with each blood type:
          <ul class="max-w-md ml-12 space-y-1 text-gray-700  pt-5 list-disc dark:text-gray-500">
            <li>
                O positive: 35%
            </li>
            <li>
                O negative: 13%
            </li>
            <li>
                B positive: 8%
            </li>
            <li>
              B negative: 2%
            </li>
            <li>
              A positive: 30%
            </li>
            <li>
              A negative: 8%
            </li>
            <li>
              AB positive: 2%
            </li>
            <li>
              AB negative: 1%

            </li>
          </ul>


        </p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
      <div

            key=''
            className='shadow-md
              shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
              rounded-lg overflow-hidden
            '

          >
            <img
              src={typeA}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/typeA' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read More About Type A</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md
            shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]

            rounded-lg
            overflow-hidden'
          >
            <img
              src={typeB}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/typeB' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read more about B+</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md               shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
            rounded-lg overflow-hidden'
          >
            <img
              src={typeAB}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/typeAB' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read more About AB+</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md               shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
            rounded-lg overflow-hidden'
          >
            <img
              src={typeABNegative}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/typeABnegative' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read more About AB-</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md               shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
            rounded-lg overflow-hidden'
          >
            <img
              src={typeBNegative}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/BloodtypeBNegative' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read more about B-</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md               shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
            rounded-lg overflow-hidden'
          >
            <img
              src={typeO}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/BloodtypeO' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read more about O+</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md               shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
            rounded-lg overflow-hidden'
          >
            <img
              src={typeONagative}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/BloodtypeONegative' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read more about O-</span>
            </Link>

            </div>
      </div>
      <div
            key=''
            className='shadow-md
            shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
            rounded-lg overflow-hidden'
          >
            <img
              src={typeANegative}
              alt=''
              className='rounded-md duration-200 hover:scale-105'
            />
            <div className='flex items-center justify-center'>
            <Link to='/information/BloodtypeANegative' class="relative inline-flex items-center justify-start py-3 pl-3 pr-10 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read More About Type A -</span>
            </Link>

            </div>
      </div>

      </div>
    </div>
  </div>
    </div>
  );
}

export default BloodTypes;
