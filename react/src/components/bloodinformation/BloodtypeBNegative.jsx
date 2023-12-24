import React from 'react';
import { Link } from 'react-router-dom';
import typeBNegative from '../../../images/negativeofBBBb.png'



const BloodtypeA = () => {
  return (
    <div>
      <div className=''>
      <header className="bg-white  shadow">

      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
        <ul className="flex">
          <li className="mr-3">
            <a
              className="inline-block border
                border-4 border-red-200 border-b-red-900 rounded py-4
                px-5 bg-red-500 text-white
                font-semibold"
                href="#">
              Informations About Blood Types
            </a>
          </li>
        </ul>

      </div>

    </header>


      </div>
      <div className='flex'>
          <Link to='/' className='text-red-700 pl-3 pr-1'>
            /Acceuil
          </Link>
          <p className='text-gray-400'>/B negative blood type </p>
      </div>
        <h3 className="flex items-center text-5xl font-semibold  pl-10 pt-6">
          B negative blood type

            <span
              className="bg-blue-100 text-black-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-black ms-2">
                B-</span>
        </h3>

        <div  className='pl-10 pt-8'>
          <p className='py-3'>
            Your blood type is determined by genes inherited from your parents
          </p>
          <p className='py-3'>
            Whether your blood type is rare, common or somewhere in between, your donations are vital in helping save and improve lives.
          </p>

          You can <Link to="/healthcheck"  className='text-red-700 py-3'>register online to give blood. </Link>




          <h3
            className=''
            style={{ paddingTop: '', paddingBottom: '' }}
          >

          </h3>

          <h2 class="mb-4 pt-10 text-4xl font-semibold leading-none tracking-tight  md:text-5xl lg:text-6xl ">How  <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">rare</mark> is B negative blood ?</h2>
          <p class="text-lg font-normal text-black lg:text-xl dark:text-gray-400">

          </p>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5 items-center '>

            <p className='text-gray-500 '>
            B negative blood is one of the rarest blood types as just 2% of our blood donors have it.

            In comparison, 36% of donors have O positive blood which is the most common type.



            </p>
            <img
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMzQwLWZlbGl4MTQwNy5qcGc.jpg"
              alt="typeA"
              className='rounded-md duration-200 hover:scale-105'
            />
          </div>

        </div>

        <div>

            <h3
              class="mb-4  pt-12  text-2xl font-semibold leading-none tracking-tight
                md:text-5xl lg:text-6xl "
            >
            Who can receive

              <span
                class="underline underline-offset-3 decoration-8
                decoration-blue-400 dark:decoration-blue-600 pl-1"
              >
              B Nagative blood?
              </span>
            </h3>
            <p class="text-lg font-bold text-gray-700 lg:text-xl dark:text-gray-700 pl-6 pt-5">
            Group B and AB people


            </p>
            <p class="text-lg font-bold text-gray-700 lg:text-xl dark:text-gray-700 pl-6 pt-5">
            B negative blood can help people who are:

            <ul class="max-w-md ml-12 space-y-1 text-gray-700  pt-5 list-disc dark:text-gray-500">
            <li>
            B negative
            </li>
            <li>
                B positive

            </li>
            <li>
            AB negative

            </li>
            <li>
            AB positive

            </li>
          </ul>

            </p>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5 items-center'>
            <img
            src={typeBNegative}
            alt="agivetoab"
            className=' rounded-md duration-200 hover:scale-105  pl-10 pt-8  '

            />
            </div>
        </div>

    </div>
  );
}

export default BloodtypeA;
