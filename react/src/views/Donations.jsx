import React from 'react';

const Donations = () => {
  return (
    <div>
        <div className="flex  justify-end mr-20 px-20 py-19 mt-8 mr-5 w-full">
          <form>
            <div className="max-w-xl">
              <div className="flex space-x-1 items-center mb-2">

              </div>
              <div className="flex space-x-4">
                <div className="flex rounded-md overflow-hidden w-full">
                  <input
                    type="text"
                    className="w-full rounded-md rounded-r-none"
                    required
                  />
                  <button className="bg-red-500 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Go</button>
                </div>
                <button className="bg-white px-6 text-lg font-semibold py-4 rounded-md">Clear</button>
              </div>
            </div>
          </form>
        </div>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* Your table rows go here */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donations;
