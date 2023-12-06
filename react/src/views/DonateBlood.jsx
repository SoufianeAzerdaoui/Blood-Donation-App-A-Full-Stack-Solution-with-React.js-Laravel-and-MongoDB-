import React, { useState } from "react";

function DonateBlood() {
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

            <div className="mt-4">
              <label className="text-sm leading-none text-gray-800">
                Full Name
              </label>
              <input
                type="text"
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
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm leading-none text-gray-800">
                Phone number
              </label>
              <input
                type="text"
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                placeholder="0611223314"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className="text-xl font-medium pr-2 leading-5 text-indigo-800">
              Blood Verification
            </h1>
            <div className="mt-4">
              {/* Add your Step 2 form fields and content here */}
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
