import React, { useState ,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axiosClient from "../axios.js";
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function DonateBlood() {

  const [city , setCity ] = useState('')
  const [age , setAge] = useState('')
  const [full_name , setFull_name ] = useState('')
  const [phone , setPhone ] = useState('')
  const [description , setDescritpion ] = useState('')
  const [email ,setEmail] = useState('')
  const [error , setError] = useState({__html: ''});


  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [successAlertContent, setSuccessAlertContent] = useState("");



  const [isList, setIsList] = useState(false);
  const [isSubList, setIsSubList] = useState(3);

  const navigate = useNavigate();

  const [caseNumber, setCaseNumber] = useState(1);

  const [currentStep, setCurrentStep] = useState(1);


  const [type, setType] = useState({

    typeAPositive: false,
    typeANegative: false,
    typeBPositive: false,
    typeBNegative: false,
    typeABPositive: false,
    typeABNegative: false,
    typeOPositive: false,
    typeONegative: false,

  });






  const formattedBloodTypes = Object.keys(type)
  .filter((bloodType) => type[bloodType])
  .map((selectedType) => {
    switch (selectedType) {
      case 'typeAPositive':
        return 'A+';
      case 'typeANegative':
        return 'A-';
      case 'typeBPositive':
        return 'B+';
      case 'typeBNegative':
        return 'B-';
      case 'typeABPositive':
        return 'AB+';
      case 'typeABNegative':
        return 'AB-';
      case 'typeOPositive':
        return 'O+';
      case 'typeONegative':
        return 'O-';
      default:
        return null;
    }
  });


    const handleCheckboxChange = (checkboxName) => {
      setType((prevOptions) => ({
        ...prevOptions,
        [checkboxName]: !prevOptions[checkboxName],
      }));
    };


    const onSubmit = (ev) => {
      ev.preventDefault();
      axiosClient.post('/donateblood', {
        full_name,
        email,
        age,
        city,
        phone,
        type : formattedBloodTypes ,
        description,
      })
        .then(({ data }) => {
          console.log(data);
          setSuccessAlertContent("Vous êtes Bien Enregistrer  Tu peux aller a l'etape suivant .");
          setTimeout(() => {
            setShowSuccessAlert(false);
            setSuccessAlertContent('');
            setCaseNumber(2);
          }, 3000);
          setShowSuccessAlert(true);
          setFull_name('');
          setEmail('');
          setAge('');
          setCity('');
          setPhone('');
          navigate ('/confirmationdonation')

          setType({
              typeAPositive: false,
              typeANegative: false,
              typeBPositive: false,
              typeBNegative: false,
              typeABPositive: false,
              typeABNegative: false,
              typeOPositive: false,
              typeONegative: false,
          });

          setDescritpion('');

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



};


  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderForm = () => {
    switch (caseNumber) {
      case 1:
        return (
          <div>

          <div className="flex">
  {showSuccessAlert && (
    <div className="absolute top-4 right-4">
      <div className="flex w-96 shadow-lg rounded-lg">
        <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white fill-current"
            viewBox="0 0 16 16"
            width="20"
            height="20"
          >
            <path
              fill-rule="evenodd"
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            ></path>
          </svg>
        </div>
        <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
          <div>{successAlertContent}</div>
          <button onClick={() => setShowSuccessAlert(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-gray-700"
              viewBox="0 0 16 16"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )}
          </div>
          {/*steps*/}



          {
            error.__html && ( <div className="bg-red-500 rounded py-2 px-3 text-white "
            dangerouslySetInnerHTML={error}
            >
            </div> )
          }

            <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
              Personal Information
            </h1>




          <form
            onSubmit={onSubmit}
            method="post"
            action="#"
          >


          <div className="mt-4 ">
          <label className="text-sm leading-none text-gray-800">
            Full Name
          </label>
          <div className="flex items-center">
              <input
                type="text"
                value={full_name}
                onChange={(ev) => setFull_name(ev.target.value)}
                className="w-full p-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800 ml-2"
                placeholder="Full Name"
              />
            </div>
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
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange = {(ev)=>setAge(ev.target.value)}
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="Your Age"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm leading-none text-gray-800">
                Phone
              </label>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                defaultCountry="MA"
                // onChange = {(ev) => setPhone(ev.target.value)}
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="Number Phone"

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
                                        checked={type.typeANegative}
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
                                            checked={type.typeBPositive}
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
                                            checked={type.typeBNegative}
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
                                            checked={type.typeABPositive}
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
                                            checked={type.typeABNegative}
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
                                            checked={type.typeOPositive}
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
                                            checked={type.typeONegative}
                                            onChange={() => handleCheckboxChange('typeONegative')}
                                            name="type"
                                          />
                                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                              <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M5 12l5 5l10 -10" />
                                              </svg>
                                          </div>
                                      </div>
                                      <p className="text-sm leading-normal ml-2 text-gray-800">O-</p>
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

        <div className="max-w-2xl">

          <label className="text-sm leading-none text-black  ">
            Descritpion About yourself <span className=" mb-2 text-sm font-medium text-black dark:text-black"> (Optional) </span> <br/>
          </label>

          <textarea
            id="message"
            name='description'
            value={description}
            onChange ={(ev)=>setDescritpion(ev.target.value)}
            rows="4"
            className=" w-full text-sm text-black-900 bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message......"
          >
          </textarea>
        </div>
            <br/>
            <button
              type="submit"
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-red-400 hover:bg-red-300 hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>

      </form>

          </div>
        );
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
                className=""
              >

              </button>
            )}
            {currentStep < 3 && (
              <button
                type="submit"
                onClick={nextStep}
                className=""
              >

              </button>
            )
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateBlood;
