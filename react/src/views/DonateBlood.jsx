import React, { useState } from "react";
import axiosClient from "../axios.js";
import HealthCheckForm from "./HealthCheckForm.jsx";


function DonateBlood() {

  const [city , setCity ] = useState('')
  const [type , setType ] = useState('')
  const [full_name , setFull_name ] = useState('')
  const [phone , setPhone ] = useState('')
  const [description , setDescritpion ] = useState('')
  const [email ,setEmail] = useState('')
  const [error , setError] = useState({__html: ''});


  const [isList, setIsList] = useState(false);
  const [isSubList, setIsSubList] = useState(3);


  const [bloodTypeOptions, setBloodTypeOptions] = useState({

    typeAPositive: false,
    typeANegative: false,
    typeBPositive: false,
    typeBNegative: false,
    typeABPositive: false,
    typeABNegative: false,
    typeOPositive: false,
    typeONegative: false,

});


    const handleCheckboxChange = (checkboxName) => {
      setBloodTypeOptions((prevOptions) => ({
        ...prevOptions,
        [checkboxName]: !prevOptions[checkboxName],
      }));
    };

    const handleSubmit = () => {
      const selectedBloodTypes = Object.keys(bloodTypeOptions).filter(
        (type) => bloodTypeOptions[type]
      );

      console.log('Selected Blood Types:', selectedBloodTypes);
    };




    const onSubmit = (ev) => {
      ev.preventDefault();

      axiosClient.post('/donateblood', {
        full_name,
        email,
        city,
        phone,
      })
        .then(({ data }) => {
          console.log(data);
          setFull_name('');
          setEmail('');
          setCity('');
          setPhone('');
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.errors) {
            const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], []);
            console.log(finalErrors);
            setError({ __html: finalErrors.join('<br>') });
          } else {
            console.error(error);
          }
        });

        const selectedBloodTypes = Object.keys(bloodTypeOptions).filter(
          (type) => bloodTypeOptions[type]
        );

        console.log('Selected Blood Types:', selectedBloodTypes);

    };



  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
          {/*steps*/}
          <div class="bg-gray-100 py-12 flex flex-wrap items-center justify-center">

          <div class="w-52 h-16 relative md:mt-0 mt-4">
              <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" class="w-full h-full" />
                  <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                    <p class="w-full text-sm font-medium leading-4 text-white">Sign Up</p>
                    <p class="w-full text-xs mt-1 leading-none text-white">description of step 1</p>
          </div>
          </div>
          <div class="w-52 h-16 relative md:mt-0 mt-4">
          <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" class="w-full h-full" />
          <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
              <p class="w-full text-sm font-medium leading-4 text-indigo-800">About you</p>
              <p class="w-full text-xs mt-1 leading-none text-indigo-800">Some info about you</p>
          </div>
      </div>
      <div class="w-52 h-16 relative lg:mt-0 mt-4">
                            <img src="https://i.ibb.co/XCdjrhm/Steps4.png" alt="step4" class="w-full h-full" />
                            <div class="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p class="w-full text-sm font-medium leading-4 text-gray-700">Getting Started</p>
                                <p class="w-full text-xs mt-1 leading-none text-gray-500">Resources to begin</p>
                            </div>
                        </div>
      </div>
            <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
              Personal Information
            </h1>

            {
              error.__html && ( <div className="bg-red-500 rounded py-2 px-3 text-white"
              dangerouslySetInnerHTML={error}
              >
              </div> )
            }


          <form
            onSubmit={onSubmit}
            method="post"
            action="#"
            >

            <div className="mt-4">

              <label className="text-sm leading-none text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                value={full_name}
                onChange = {(ev)=>setFull_name(ev.target.value)}
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="Full Name"
              />
            </div>


            <div className="mt-4">
              <label className="text-sm leading-none text-gray-800">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange = {(ev)=>setEmail(ev.target.value)}
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm leading-none text-gray-800">
                Phone number
              </label>
              <input
                value={phone}
                onChange = {(ev)=>setPhone(ev.target.value)}
                type="text"
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="0611223314"
              />
            </div>

            <div className="mt-5 ">

              <label className="text-sm leading-none text-gray-800 m-">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange = {(ev)=>setCity(ev.target.value)}
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="City"
              />

          </div>

          <br/>


          <div>
          <label className="text-sm leading-none text-gray-800 mb-4 pb-5">
          Choose You Blood Type <br/>
          </label>
          <br/>
          <label className="text-sm leading-none text-gray-800 ">
          </label>
          <div onClick={() => setIsList(!isList)} className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
              Blood Type
              <div>
                  {isList ? (
                      <div>

                      </div>
                  ) : (
                      <div>
                          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                          </svg>
                      </div>
                  )}
              </div>
          </div>
          {isList && (
              <div className="w-64 mt-2 p-4 bg-white shadow rounded">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center">
                          <svg onClick={() => setIsSubList(1)} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.5 3L7.5 6L4.5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="pl-4 flex items-center">
                              <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                  <input
                                    name="type"
                                    className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                  <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                      <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M5 12l5 5l10 -10" />
                                      </svg>
                                  </div>
                              </div>
                              <p className="text-sm leading-normal ml-2 text-gray-800">Type A </p>
                          </div>
                      </div>
                  </div>
                  {isSubList === 1 && (
                      <div className="pl-8 pt-5">
                          <div className="flex items-center justify-between">
                              <div className="pl-4 flex items-center">
                                  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                      <input
                                          type="checkbox"
                                          name="type"
                                          className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                          checked={bloodTypeOptions.typeAPositive}
                                          onChange={() => handleCheckboxChange('typeAPositive')}

                                    />
                                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                          <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" />
                                              <path d="M5 12l5 5l10 -10" />
                                          </svg>
                                      </div>
                                  </div>
                                  <p className="text-sm leading-normal ml-2 text-gray-800">A+</p>
                              </div>
                          </div>
                          <div className="flex pt-4 items-center justify-between">
                              <div className="pl-4 flex items-center">
                                  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                      <input type="checkbox"
                                        className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                        checked={bloodTypeOptions.typeANegative}
                                        onChange={() => handleCheckboxChange('typeANegative')}
                                        name="type"

                                        />
                                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                        <i className="fa-solid fa-droplet text-white text-xl"></i>
                                      </div>
                                  </div>
                                  <p className="text-sm leading-normal ml-2 text-gray-800">A-</p>
                              </div>
                          </div>
                      </div>
                  )}


                  <div>
                      <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                              <svg onClick={() => setIsSubList(2)} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.5 3L7.5 6L4.5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <div className="pl-4 flex items-center">
                                  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                      <input type="" className=" opacity-0 absolute cursor-pointer w-full h-full" />
                                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                          <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" />
                                              <path d="M5 12l5 5l10 -10" />
                                          </svg>
                                      </div>
                                  </div>
                                  <p className="text-sm leading-normal ml-2 text-gray-800">Type B</p>
                              </div>
                          </div>
                      </div>
                      {isSubList === 2 && (
                          <div className="pl-8 pt-5">
                              <div className="flex items-center justify-between">
                                  <div className="pl-4 flex items-center">
                                      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                          <input
                                            type="checkbox"
                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                            checked={bloodTypeOptions.typeBPositive}
                                            onChange={() => handleCheckboxChange('typeBPositive')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">B+</p>
                                  </div>
                              </div>
                              <div className="flex pt-4 items-center justify-between">
                                  <div className="pl-4 flex items-center">
                                      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                          <input
                                            type="checkbox"
                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                            checked={bloodTypeOptions.typeBNegative}
                                            onChange={() => handleCheckboxChange('typeBNegative')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">B-</p>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>

                  <div>
                      <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                              <svg onClick={() => setIsSubList(2)} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.5 3L7.5 6L4.5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <div className="pl-4 flex items-center">
                                  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                      <input type="" className=" opacity-0 absolute cursor-pointer w-full h-full" />
                                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                          <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" />
                                              <path d="M5 12l5 5l10 -10" />
                                          </svg>
                                      </div>
                                  </div>
                                  <p className="text-sm leading-normal ml-2 text-gray-800">Type AB</p>
                              </div>
                          </div>
                      </div>
                      {isSubList === 2 && (
                          <div className="pl-8 pt-5">
                              <div className="flex items-center justify-between">
                                  <div className="pl-4 flex items-center">
                                      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                          <input
                                            type="checkbox"
                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                            checked={bloodTypeOptions.typeABPositive}
                                            onChange={() => handleCheckboxChange('typeABPositive')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">AB+</p>
                                  </div>
                              </div>
                              <div className="flex pt-4 items-center justify-between">
                                  <div className="pl-4 flex items-center">
                                      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                          <input
                                            type="checkbox"
                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                            checked={bloodTypeOptions.typeABNegative}
                                            onChange={() => handleCheckboxChange('typeABNegative')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">AB-</p>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>


                  <div>
                      <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                              <svg onClick={() => setIsSubList(3)} width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.5 3L7.5 6L4.5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <div className="pl-4 flex items-center">
                                  <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                      <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                          <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" />
                                              <path d="M5 12l5 5l10 -10" />
                                          </svg>
                                      </div>
                                  </div>
                                  <p className="text-sm leading-normal ml-2 text-gray-800">Type O</p>
                              </div>
                          </div>
                      </div>
                      {isSubList === 3 && (
                          <div className="pl-8 pt-5">
                              <div className="flex items-center justify-between">
                                  <div className="pl-4 flex items-center">
                                      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                          <input
                                            type="checkbox"
                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                            checked={bloodTypeOptions.typeOPositive}
                                            onChange={() => handleCheckboxChange('typeOPositive')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">O+</p>
                                  </div>
                              </div>
                              <div className="flex pt-4 items-center justify-between">
                                  <div className="pl-4 flex items-center">
                                      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                                          <input
                                            type="checkbox"
                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                            checked={bloodTypeOptions.typeOPositive}
                                            onChange={() => handleCheckboxChange('typeOPositive')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">O -</p>
                                  </div>
                              </div>
                          </div>
                      )}{" "}
                  </div>
              </div>
          )}
          <style>
              {` .checkbox:checked + .check-icon {
              display: flex;
          }`}
          </style>


          </div>

      <br/>

        <div className="max-w-2xl mx-auto">

          <label className="text-sm leading-none text-gray-800 mb-4 pb-5">
            Descritpion About yourself <span className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> (Optional) </span> <br/>
          </label>

          <textarea
            id="message"
            value={description}
            onChange ={(ev)=>setDescritpion(ev.target.value)}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          >
          </textarea>
        </div>
            <br/>
        <button
          type="submit"
          className="bg-gray-200 px-4 py-2 rounded text-gray-800"
        >Submit
        </button>

      </form>

    </div>
        );
      case 2:
        return (
          <div>
            <h1 className="text-xl font-medium pr-2 leading-5 text-indigo-800">
              HEALTH CHECK
            </h1>
            <div className="mt-4">
                <HealthCheckForm />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className="text-xl font-medium pr-2 leading-5 text-gray-700">
              Confirm Your Donation
            </h1>
            <div className="mt-4">
              {/* Add your Step 3 form fields and content here */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="xl:w-10/12 w-full px-8">
        <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
          {/* Step indicator */}
          <div className="w-52 h-16 relative md:mt-0 mt-4">
            {/* Add your step indicator content here */}
          </div>
          {/* Form content */}
          <div className="w-full lg:flex justify-between border-b border-gray-200 pb-16">
            <div className="lg:w-3/4 xl:px-24">
              {renderForm()}
            </div>
            <div className="lg:w-1/4">
              {/* Navigation buttons */}
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="bg-gray-200 px-4 py-2 rounded text-gray-800"
                >
                  Previous
                </button>
              )}
              {currentStep < 3 && (
                <button
                  onClick={nextStep}
                  className="bg-indigo-600 px-4 py-2 rounded text-white ml-4"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateBlood;
