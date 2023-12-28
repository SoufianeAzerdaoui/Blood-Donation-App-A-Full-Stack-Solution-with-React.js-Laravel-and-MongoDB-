import React, { useState } from 'react';
import axiosClient from "../axios"


const Donations = () => {





  const [city, setCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error , setError] = useState({__html: ''});

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const clearChange = () => {
    setCity([]);
  };

  const handleCitySearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.get(`search/${city}`);
      const responseData = response.data;

      console.log('Response Data:', responseData);

      if (Array.isArray(responseData)) {
        setSearchResults(responseData);
        setError(null);
      } else {
        console.error('Invalid data format received:', responseData);
        setSearchResults([]);
        setError('Invalid data format received');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], []);
        console.log('API Error:', finalErrors);
        setError({ __html: finalErrors.join('<br>') });
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-end mr-20 px-20 py-19 mt-8 mr-5 w-full">

        <form onSubmit={handleCitySearch}>
          <div className="max-w-xl">
            <div className="flex space-x-1 items-center mb-2"></div>
            <div className="flex space-x-4">
              <div className="flex rounded-md overflow-hidden w-full">
                <input
                  type="text"
                  name="city"
                  onChange={handleCityChange}
                  value={city}
                  className="w-full rounded-md rounded-r-none"
                  placeholder='Enter City'
                  required
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
                >
                  <i className="fa-brands fa-searchengin fa-lg"></i>
                </button>
              </div>
              <button
                type="button"
                onClick={clearChange}
                className="bg-white px-6 text-lg font-semibold py-4 rounded-md"
              >
                CLEAR
              </button>
            </div>
          </div>
        </form>
      </div>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase "
                >
                  <th className=" px-4 py-3">FullName</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Blood Type</th>
                  <th className="px-4 py-3">Date offer</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Array.isArray(searchResults) ? (
                  searchResults.map((donation) => (
                    <tr className="text-md  tracking-wide text-left text-gray-700 bg-gray-100 uppercase hover:bg-red-100"
                      key={donation._id}
                    >
                      <td className="border-b-2 border-dashed  border-gray-300 px-4 py-3">{donation.full_name}</td>
                      <td className="border-b-2 border-dashed  border-gray-300 px-4 py-3">{donation.city}</td>
                      <td className="border-b-2 border-dashed  border-gray-300 px-4 py-3">{donation.phone}</td>
                      <td className="border-b-2 border-dashed  border-gray-300 px-4 py-3">{donation.type}</td>
                      <td className="border-b-2 border-dashed  border-gray-300 px-4 py-3">{donation.created_at}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">{error || 'No results found'}</td>
                  </tr>
                )}
              </tbody>


            </table>
          </div>
        </div>
      </section>
    </div>



  //   <>

  //   <div className="flex flex-wrap -mx-3 mb-5">
  //   <div className="flex justify-end mr-20 px-20 py-19 mt-8 mr-5 w-full">
  //   <form onSubmit={handleCitySearch}>
  //     <div className="max-w-xl">
  //       <div className="flex space-x-1 items-center mb-2"></div>
  //       <div className="flex space-x-4">
  //         <div className="flex rounded-md overflow-hidden w-full">
  //           <input
  //             type="text"
  //             name="city"
  //             onChange={handleCityChange}
  //             value={city}
  //             className="w-full rounded-md rounded-r-none"
  //             placeholder='Enter City'
  //             required
  //           />
  //           <button
  //             type="submit"
  //             className="bg-red-500 text-white px-6 text-lg font-semibold py-4 rounded-r-md"
  //           >
  //             Go
  //           </button>
  //         </div>
  //         <button
  //           type="button"
  //           onClick={clearChange}
  //           className="bg-white px-6 text-lg font-semibold py-4 rounded-md"
  //         >
  //           Clear
  //         </button>
  //       </div>
  //     </div>
  //   </form>
  // </div>
  //     <div className="w-full max-w-full px-3 mb-6 mx-auto">
  //       <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
  //         <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">

  //           <div className="flex-auto block py-8 pt-6 px-9">
  //             <div className="overflow-x-auto">
  //               <table className="w-full my-0 align-middle text-dark border-neutral-200">
  //                 <thead className="align-bottom">
  //                   <tr className="font-semibold text-[0.95rem] text-secondary-dark">
  //                     <th className="pb-3 text-start min-w-[175px]">Full Name</th>
  //                     <th className="pb-3 text-end min-w-[100px]">City</th>
  //                     <th className="pb-3 text-end min-w-[100px]">Phone</th>
  //                     <th className="pb-3 pr-12 text-end min-w-[175px]">Blood Type</th>
  //                     <th className="pb-3 pr-12 text-end min-w-[100px]">Date Offer</th>
  //                     <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                 {Array.isArray(searchResults) ? (
  //                         searchResults.map((donation) => (
  //                                 <tr className="font-semibold text-[0.95rem] text-secondary-dark" key={donation._id}>
  //                                     <td  className="pb-3 text-start min-w-[175px]" >{donation.full_name}</td>
  //                                     <td  className="pb-3 text-end min-w-[100px]">{donation.city}</td>
  //                                     <td  className="pb-3 text-end min-w-[100px]">{donation.phone}</td>
  //                                     <td  className="pb-3 pr-12 text-end min-w-[175px]">{donation.type}</td>
  //                                     <td  className="pb-3 text-end min-w-[50px]">{donation.created_at}</td>
  //                                   </tr>
  //                                 ))
  //                               ) : (
  //                                 <tr>
  //                                   <td colSpan="2">{error || 'No results found'}</td>
  //                                 </tr>
  //                               )}
  //                 </tbody>
  //               </table>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="flex flex-wrap -mx-3 mb-5">
  //   </div>
  // </>
  );
};

export default Donations;

