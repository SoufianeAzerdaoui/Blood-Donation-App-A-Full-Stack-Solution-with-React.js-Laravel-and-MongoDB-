import React from 'react';
import { Link } from 'react-router-dom';
import typeONegative from '../../../images/onegative.png';
import typeABgive  from '../../../images/onegative.png';
import image2 from '../../../images/whocanreceiveblood_chart_bloodtypedistributionchart_outlined.jpg';
import '../../components/CSS/BloodTypeA.css';
import { motion, useScroll } from "framer-motion";



const BloodtypeA = () => {
  const { scrollYProgress } = useScroll();

  return (





    <div className=''>

    <div className=''>

    <header className="dashbord shadow p-5">
    <div className=" dmx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className=" flex items-center justify-center text-3xl font-bold tracking-tight text-white">
        Blood Type O-
      </h1>
    </div>
  </header>

  <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
      />




    <div  className='flex'>
      <Link to='/' className='text-red-700 pl-3 pr-1'>
          /Acceuil
      </Link>
      <p className='text-gray-400 '>/O negative blood type </p>
      </div>
    </div>
      <h3 className="flex items-center text-5xl font-bold  pl-10 pt-6">
          O negative blood type

          <span
            className="bg-blue-100 text-black-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-black ms-2">
              O-</span>
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

        <h2 class="mb-4 pt-10 text-5xl font-bold leading-none tracking-tight  md:text-5xl lg:text-6xl ">How  <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">rare</mark> is O negative blood ?</h2>
        <p class="text-lg font-normal text-black lg:text-xl dark:text-gray-400">

        </p>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:px-5 items-center pl-[15rem]  '>
        <div className=''>
        <h1 className='text-gray-600 font-bold text-2xl'>
        Blood Type Rarity


        </h1>
        <p className='text-gray-500 pt-5  font-semibold text-m'>
        The most common blood types are type O+ (39% if the U.S. population) and type A+ (30% of the population). But certain blood types are extremely rare!

        </p>
        <ul class="list-disc list-inside pl-10 pt-5">
          <li class="mb-2">1% of the population has AB- blood type
          </li>
          <li class="mb-2">2% of the population has B- blood type.
          </li>
          <li class="mb-2">6% of the population has A- blood type
          </li>
          <li class="mb-2">9% of the population has O- blood type. The universal type that can be transfused for any need.

          </li>
        </ul>

      </div>
<div className='pl-5 w-full  pt-5 w-[35rem] '><img
        src={image2}
        alt="typeA"
        className='rounded-md duration-200 hover:scale-105   '
      />
</div>

        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:px-5 items-center pl-[10rem]  pb-[5rem] '>
        <div className='pl-5 w-full  pt-5  w-[26rem]  pt-[10rem]'><img
        src={typeABgive}
        alt="typeA"
        className='rounded-md duration-200 hover:scale-105   '
      />
</div>

        <div className='pt-[10rem]'>
        <h1 className='text-gray-600 font-bold text-2xl'>
        Who can receive O negative blood?



        </h1>
        <p className='text-gray-500 pt-5  font-semibold text-m'>
        A positive donors carry the potential to provide red blood cells, while AB positive donors offer a broader spectrum by contributing red blood cells, plasma, and platelets. This versatility makes you crucial contributors to the well-being of patients facing various medical challenges.

        Every drop of blood you generously share has the power to bring relief, healing, and comfort to someone in their time of need. Your act of kindness can create a ripple effect, touching not only the lives of recipients but also inspiring others to join the noble cause of blood donation.


        </p>
        <ul class="list-disc list-inside pl-10 pt-5">
          <li class="mb-2 font-bold"> Everyone can receive O negative red blood cells
          Your blood type is determined by genes inherited from your parents.

          Whether your blood type is rare, common or somewhere in between, your donations are vital in helping save and improve lives.


          </li>

        </ul>

      </div>


        </div>


      </div>




        <div className='bg-white ' >

          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:px-5 items-center '>

            <p className='font-bold text-2xl text-gray-800 pt-[5rem] pl-[8rem] '>
            Ready to schedule your donation?

            </p>
            <div className='pt-[5rem] pl-[8rem]s'>

            <Link to='/healthcheck' className="inline-flex items-center px-[6rem]  py-3 text-white font-bold text-2xl  bg-red-700 rounded-md hover:bg-orange-600 hover:text-white">
              MAKE APPOINTMENT NOW
            </Link>



            </div>
<p className='text-gray-500 italic pl-[8rem] pt-[10px] '>
            *Not all donation types are available at all locations. Final eligibility for any blood donation is determined on the day of donation.


            </p>

          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:px-5 items-center '>

            <p className='font-bold text-2xl text-gray-800 pt-[5rem] pl-[8rem] '>

            </p>
            <div className=''>


            </div>


          </div>


        </div>





        </div>



  );
}

export default BloodtypeA;
