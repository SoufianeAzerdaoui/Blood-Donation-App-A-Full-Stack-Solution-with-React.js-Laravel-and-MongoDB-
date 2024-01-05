import React , {useRef} from 'react';
import router from './../router';
import { Link } from 'react-router-dom';
import '../components/CSS/thanks.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Icon from '../context/Animation - 1704396793513.json';
import Lottie from 'lottie-react'


const ConfirmationDonation = () => {

  const { width, height } = useWindowSize()
  const animationRef = useRef(null);

  return (
    <div>



    <div class="flex items-center justify-center h-screen">
      <p
        className='wavyf font-semibold text-m text-gray-800'
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 , left:530, top : 110   }}>
          <Lottie  className="w-[20rem]" lottieRef={animationRef} animationData= {Icon} />
      </p>

    <Confetti
      width={width}
      height={height}
      tweenDuration={5000}
  />
      <div class="p-1 rounded shadow-lg bg-gradient-to-r from-red-900 via-red-500 to-blue-500">
        <div class="flex flex-col items-center p-6 space-y-2 bg-white ">
          <svg xmlns="http://www.wg" class="text-600 w-0 h-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 class="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"></h1>
          <p>We extend our heartfelt gratitude to you for your generous donation! Your support plays a crucial role , and it is truly appreciated.
          <p>
            Your dedication to making a positive impact reflects a shared commitment to [cause or mission]. With supporters like you.
          </p>
          <p>
            thank you for your contributions and your unwavering interest in our cause. Together, we can continue making a meaningful difference.
          </p>
          </p>
          <a
            class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <Link class="text-sm font-medium"
              to ='/dashboard'>Home
            </Link>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ConfirmationDonation;
