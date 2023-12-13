import React, { useState } from 'react';
import axiosClient from "../axios.js";



const HealthCheckForm = () => {
  const [checkboxData, setCheckboxData] = useState({
    fever: false,
    cough: false,
    shortnessOfBreath: false,
    fatigue: false,
    headache: false,
    soreThroat: false,
    lossOfTasteSmell: false,
  });
  const [error , setError] = useState({__html: ''});


  const handleCheckboxChange = (checkboxName) => {
    setCheckboxData((prevData) => ({
      ...prevData,
      [checkboxName]: !prevData[checkboxName],
    }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    axiosClient.post('/healthcheck', {
      situation : checkboxData
    })
      .then(({ data }) => {
        console.log(data);
        setCheckboxData({
          fever: false,
          cough: false,
          shortnessOfBreath: false,
          fatigue: false,
          headache: false,
          soreThroat: false,
          lossOfTasteSmell: false,
        })

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

  return (

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
          method='POST'
          onSubmit={onSubmit}
        >
          <div className="space-y-4 f">


            <div className="flex items-center justify-content pb-3 pl-8">
              <input
                    type="checkbox"
                    name='situation'
                    checked={checkboxData.headache}
                    onChange={() => handleCheckboxChange('headache')}

                    className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                                transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                                before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                                before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                                checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                    id="teal"
              />
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
                Avez-vous des difficultés respiratoires ?
            </label>

            </div>

            <div className="flex items-center pb-3 pl-8">

                <input
                  type="checkbox"
                  name='situation'
                  checked={checkboxData.fatigue}
                  onChange={() => handleCheckboxChange('fatigue')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
              Ressentez-vous une fatigue importante ?
            </label>
            </div>

            <div className="flex items-center pb-3 pl-8">



                <input
                  type="checkbox"
                  name='situation'
                  checked={checkboxData.fever}
                  onChange={() => handleCheckboxChange('fever')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />

              <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4  mr-11">
                Avez-vous de la fièvre ?
              </label>
            </div>
            <div className="flex items-center  pb-3 pl-8">
                <input
                  name='situation'
                  checked={checkboxData.cough}
                  onChange={() => handleCheckboxChange('cough')}
                  type="checkbox"
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
              Avez-vous des maux de gorge ?
            </label>

            </div>

            <div className="flex items-center  pb-3 pl-8">

                <input
                  name='situation'
                  checked={checkboxData.shortnessOfBreath}
                  onChange={() => handleCheckboxChange('shortnessOfBreath')}
                  type="checkbox"
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />

            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
            Avez-vous perdu le goût ou l'odorat ?
          </label>
            </div>


            <div className="flex items-center  pb-3 pl-8">


            <input
              type="checkbox"
              name='situation'
              checked={checkboxData.lossOfTasteSmell}
              onChange={() => handleCheckboxChange('lossOfTasteSmell')}
              className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
              id="teal"
            />
            <label htmlFor="coughCheckbox" className="ml-4 text-gray-700 pl-4">
                  Avez-vous eu des contacts avec une personne atteinte de la COVID-19 récemment ?
                </label>

            </div>

            <div className="flex items-center pb-3 pl-8">
                <input
                  type="checkbox"
                  name='situation'
                  checked={checkboxData.soreThroat}
                  onChange={() => handleCheckboxChange('soreThroat')}
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-teal-gray-200
                              transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12
                              before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-500
                              before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500
                              checked:before:bg-teal-500 hover:before:opacity-10 ml-3"
                  id="teal"
            />
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


  );
};

export default HealthCheckForm;