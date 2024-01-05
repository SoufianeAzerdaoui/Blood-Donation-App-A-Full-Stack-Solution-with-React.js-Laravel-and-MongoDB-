import React from 'react';
import '../../CSS/BloodTypeA.css';
import { Link } from 'react-router-dom';
import image from '../../../../images/First-Time-donor-image-(1).jpg';
import image1 from '../../../../images/testimonial1.jpg';
import image2 from '../../../../images/testimonial2.png';
import image3 from '../../../../images/testimonial3.jpg';
import Wave from '../../Footer/Footer'
import { motion, useScroll } from "framer-motion";
import '../../../views/requirements/Requirements.css';


const FirstTime = () => {


  const { scrollYProgress } = useScroll();

  return (
    <div>
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />

        <header className="dashbord shadow p-5">
          <div className=" dmx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className=" flex items-center justify-center text-3xl font-bold tracking-tight text-white">
              Learn
            </h1>
          </div>
        </header>
        <div  className='flex'>
          <Link to='/' className='text-red-700  pr-1'>
              /Acceuil
          </Link>
          <p className='text-gray-400 '>/first time give blood </p>
        </div>




      <div className='pl-[13rem]'>
      <h1 className='text-2xl font-bold text-4xl text-gray-700 pt-[3rem] pr-[25rem] pb-2'> Welcome, First Time Blood Donors    </h1>
      <img src={image} alt="" />
      </div>

      <h1 className='text-2xl font-bold text-4xl text-red-700 pt-[5rem] pl-[13rem] pb-2'>
        Why Donate Your Blood?
      </h1>

      <p className='font-m text-gray-500 text-xl pt-5 pl-[13rem]  pr-[13rem] '>

        There are different reasons people decide to give blood,
        all of them important. In fact, in the time it takes you to read this,
        someone in timport { Wave } from 'react-wavify';
he Morocco needs blood – EVERY 2 SECONDS of every day a patient receives a
        blood or platelet transfusion. And that blood can only come from volunteer donors like you.


      </p>

      <p className='font-m text-gray-500 text-xl pt-5 pl-[13rem]  pr-[13rem] '>
        Whatever your motivation, when you donate blood you are giving hope to hospital patients – and their family and friends. You’re making sure a child doesn’t grow up without a parent, a husband doesn’t become a widower,
        a young woman’s father can walk her down the aisle at her wedding, and many more.
      </p>

      <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-4 sm:px-5 items-center pl-[23rem]  pt-[5rem]' >

          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />

      </div>


      <h1 className='text-2xl font-bold text-4xl text-red-700 pt-[5rem] pl-[13rem] pb-2'>
          The Benefits of Donating Blood
      </h1>

      <p className='font-m text-gray-500 text-xl pt-5 pl-[13rem]  pr-[13rem] '>
      Did you know that when you give blood, there are benefits for you, too? We conduct a pre-donation screening that ensures your safety and the safety of the blood supply for patients – and as a bonus, provides you with valuable health information:


      </p>
      <ul className="list-disc list-inside pl-[18rem] pt-5 pr-[18rem]">
            <li className="mb-2 text-gray-500 font-semibold ">
            One donation can save up to 3 lives!
            </li>
            <li className="mb-2 text-gray-500 font-semibold">
            Find out your blood type.

            </li>
            <li className="mb-2 text-gray-500 font-semibold">
            Get a mini-physical: We take your temperature, pulse and blood pressure and check your hemoglobin level every time you come to donate.
            </li>
            <li className="mb-2 text-gray-500 font-semibold">
            We screen each completed donation for more than a dozen infectious diseases. If your donation tests positive, we will confidentially let you know.
            </li>
            <li className="mb-2 text-gray-500 font-semibold">
            Completed donations are checked for cholesterol levels. And occasionally we offer additional screenings such as COVID-19 antibodies.
            </li>
            <li className="mb-2 text-gray-500 font-semibold">
            Be sure to join our recognition program, you start receiving points for every donation you make, which can go toward free gift cards to your favorite restaurants and retailers. In addition, Vitalant periodically offers special thank-you gifts including gift cards, T-shirts and other giveaways.
            </li>
          </ul>

          <Wave />
    </div>
  );
}

export default FirstTime;
