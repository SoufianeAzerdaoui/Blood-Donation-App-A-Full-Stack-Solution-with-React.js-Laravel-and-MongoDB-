import zIndex from '@mui/material/styles/zIndex';
import React from 'react';
import Wave from 'react-wavify'
import '../components/Footer/Footer.css';
import { Link } from 'react-router-dom';
const Wavey = () => {
  return (

    <div>


    <div style={{ position: 'relative' }}>
      {/* The Wave component for the wave effect */}
      <Wave
        fill='#f87171'
        paused={false}
        style={{ display: 'flex', height: '28rem', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
      />

      <h1 className='wavyf font-bold text-4xl text-gray-800' style={{ position: 'absolute', top: 0, zIndex: 1 , left:220 , top : 150 }}>Your role matters.</h1>

        <p className='wavyf font-semibold text-m text-gray-800'
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 200 }}>
        Every two seconds, someone in the U.S. needs blood.
        </p>
                <p className='wavyf font-semibold text-m text-gray-800' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 230 }}>
                          This could be a little girl in the ICU or a mother with Stage 3
        </p>
                  <p className='wavyf font-semibold text-m text-gray-800' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 260 }}>
                            leukemia. If you’re worried about needles,don’t be—most
        </p>
        <p className='wavyf font-semibold text-m text-gray-800' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 290 }}>
                  blood donors compare the experience to a mild, split-
        </p>
        <p className='wavyf font-semibold text-m text-gray-800' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 320 }}>
                  second pinch! The entire process is very
        </p>
        <p className='wavyf font-semibold text-m text-gray-800' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 350 }}>
                  safe and very fast, and you will feel amazing knowing you potentially
        </p>
        <p className='wavyf font-semibold text-m text-gray-800' style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:220, top : 380 }}>
                  saved up to three people.
        </p>


        <Link to='/healthcheck'
        class="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:420, top : 390 }}>

                  Donate Now
      </Link>


        <div className='pl-[65rem] pr-12 '>
        <img src="../../images/role-image.jpg" alt="..."

              className="shadow rounded-full   align-middle border-none "

                style={{ position: 'absolute', zIndex: 1, width: '350px', height: 'auto' , right : 220,top : 77 }}/>

        </div>


    </div>

    </div>
  );
}

export default Wavey;
