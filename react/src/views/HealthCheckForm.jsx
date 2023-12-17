import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthCheckForm = () => {

  const [checkboxData, setCheckboxData] = useState({
    respiratoires : 'non',
    fatigue : 'non',
    fièvre : 'non',
    gorge : 'non',
    goût : 'non',
    covid : 'non',
    maladies : 'non',
    goût : 'non',
  });
  const navigate = useNavigate();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [successAlertContent, setSuccessAlertContent] = useState("");
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [failureAlertContent, setFailureAlertContent] = useState("");

  const [error , setError] = useState({__html: ''});

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxData((prevData) => ({
      ...prevData,
      [checkboxName]: prevData[checkboxName] === 'oui' ? 'non' : 'oui',
    }));
  };



  const onSubmit = (ev) => {
    ev.preventDefault();

    if (
      checkboxData.respiratoires === "non" ||
      checkboxData.fatigue === "non" ||
      checkboxData.fièvre === "non" ||
      checkboxData.gorge === "non" ||
      checkboxData.goût === "non" ||
      checkboxData.covid === "non" ||
      checkboxData.maladies === "non" &&
      checkboxData.goût === "non"
    ) {
      setFailureAlertContent("Vous n'êtes pas comptabilisé pour donner du sang.");
      setShowFailureAlert(true);
      setTimeout(() => {
        setShowFailureAlert(false);
        setFailureAlertContent('');
        navigate('/dashboard');
      }, 3000);
    } else {
      setSuccessAlertContent("Vous êtes compatible de donner le sang.");
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        setSuccessAlertContent("");
        navigate('/donateblood');
      }, 3000);
    }

  };

  return (

<div >
{failureAlertContent  &&(
<div class="absolute top-12 right-4 px-8 py-6 bg-red-400 text-white flex justify-between rounded">
    <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-6" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
        <p>Vous ne remplissez pas les critères requis pour donner du sang.</p>
    </div>
    <button class="text-red-100 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>

)}

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
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-0 sm:p-12  ">

      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl  ">
        <h1 className="text-2xl font-bold mb-8 text-center">Health Check Form</h1>

        {
          error.__html && ( <div className="bg-red-500 rounded py-2 px-3 text-white "
          dangerouslySetInnerHTML={error}
          >
          </div> )
        }

        <form
          id="healthCheckForm"
          noValidate
          method='post'
          onSubmit={onSubmit}
        >
          <div className="space-y-4 f">


            <div className="flex items-center justify-content pb-3 pl-8">
              <input
                    type="checkbox"
                    name='oui'
                    checked={checkboxData.respiratoires === 'oui'}
                    onChange={() => handleCheckboxChange('respiratoires')}
                    required
                    className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                                transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                                before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                                before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                                checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                    id="teal"
              /> Oui
              <input
                    type="checkbox"
                    name='non'
                    checked={checkboxData.respiratoires === 'non'}
                    onChange={() => handleCheckboxChange('respiratoires')}
                    required
                    className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                                transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                                before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                                before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                                checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                    id="teal"
              />Non
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
                Avez-vous des difficultés respiratoires ?
            </label>

            </div>

            <div className="flex items-center pb-3 pl-8">

                <input
                  type="checkbox"
                  name='oui'
                  required
                  onChange={() => handleCheckboxChange('fatigue')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Oui
                <input
                  type="checkbox"
                  name='non'
                  required
                  onChange={() => handleCheckboxChange('fatigue')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Non
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
              Ressentez-vous une fatigue importante ?
            </label>


            </div>

            <div className="flex items-center pb-3 pl-8">
                <input
                  type="checkbox"
                  name='oui'
                  onChange={() => handleCheckboxChange('fièvre')}
                  required
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Oui
                <input
                  type="checkbox"
                  name='non'
                  required
                  onChange={() => handleCheckboxChange('fièvre')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Non

              <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4  mr-11">
                Avez-vous de la fièvre ?
              </label>
            </div>



            <div className="flex items-center  pb-3 pl-8">
                <input
                  name='oui'
                  type="checkbox"
                  onChange={() => handleCheckboxChange('gorge')}
                  required
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Oui
                <input
                  name='non'
                  type="checkbox"
                  onChange={() => handleCheckboxChange('gorge')}
                  required
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Non
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
              Avez-vous des maux de gorge ?
            </label>

            </div>

            <div className="flex items-center  pb-3 pl-8">

                <input
                  name='oui'
                  type="checkbox"
                  onChange={() => handleCheckboxChange('goût')}
                  required
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />oui
                <input
                  name='non'
                  type="checkbox"
                  onChange={() => handleCheckboxChange('goût')}
                  required
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Non

            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
            Avez-vous perdu le goût ou l'odorat ?
          </label>
            </div>


            <div className="flex items-center  pb-3 pl-8">


            <input
              type="checkbox"
              required
              name='oui'
              onChange={() => handleCheckboxChange('covid')}
              className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
              id="teal"
            />Oui
            <input
              type="checkbox"
              name='non'
              required
              onChange={() => handleCheckboxChange('covid')}
              className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
              id="teal"
            />Non
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
                  Avez-vous eu des contacts avec une personne atteinte de la COVID-19 récemment ?
                </label>

            </div>

            <div className="flex items-center pb-3 pl-8">
                <input
                  type="checkbox"
                  name='oui'
                  onChange={() => handleCheckboxChange('maladies')}
                  required
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Oui
                <input
                  type="checkbox"
                  required
                  name='non'
                  onChange={() => handleCheckboxChange('maladies')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />Non
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4  ">
              Avez-vous des antécédents de maladies respiratoires ?
            </label>

            </div>

          </div>

            <button
              type="submit"
              onClick={() => console.log('Health Check Data:', checkboxData)}
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-red-400 hover:bg-red-300 hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
        </form>
      </div>



  </div>


</div>
  );
};

export default HealthCheckForm;
