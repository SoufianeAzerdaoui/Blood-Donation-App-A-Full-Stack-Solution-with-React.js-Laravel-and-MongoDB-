import React , {useState , useEffect } from 'react';
import axiosClient from '../../axios.js'; // import your axios instance
import SweetPagination from "sweetpagination";
import ReactPaginate from 'react-js-pagination';
import ClipLoader from "react-spinners/ClipLoader";
import { useRef } from 'react'
import Icon from '../../context/pdbBP2GinD.json';
import Lottie from 'lottie-react'


const Excel = () => {

  const [data, setData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  let [loading, setLoading] = useState(true);

  const animationRef = useRef(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axiosClient.get('/data_as_excel?perPage=1000000000');
        setData(response.data.data);
        setTotalItems(response.data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setTimeout(()=>{
      fetchData();
    },5000)

  }, []);

  const onSubmit = () => {

      axiosClient.get('/offers/export', {
        params: {
          key: 'estfbs2024',
        },
        responseType: 'blob',
      }
      )

        .then(({ data }) => {
          const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'offers.xlsx';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

        })
        .catch((error) => {
            console.error(error);
        });
  }


//PAGINATIONS
const itemsPerPage = 1000000000;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    getCurrentPageData(pageNumber);
  };

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPageData(data.slice(startIndex, endIndex));
  };

  useEffect(() => {
    if (data.length > 0) {
      getCurrentPageData(currentPage);
    }
  }, [currentPage, data]);









  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-12/15 xl:mb-0 px-4 mx-auto mt-24 pl-12 pr-12">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">Page of Offers</h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  type= "submit"
                  onClick={onSubmit}
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-bold text-xm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >Get Excel File
                <i className="fa-solid fa-file-excel pl-4 text-xl"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Full Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    email
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Age
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    City
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Phone
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Blood Type
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Created_at
                  </th>
                </tr>
              </thead>

              <tbody>



                  {
                    data.length > 0 ? (
                      currentPageData.map((row) => (
                      <tr
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 "
                        key={row.id}
                      >
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " >{row.full_name}</td>
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " >{row.email}</td>
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " >{row.age}</td>
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " >{row.city}</td>
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " >{row.phone}</td>
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " > {row.type}</td>
                        <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 " >{row.created_at}</td>
                      </tr>
                    ))
                    ): (

                    <tr>
                      <td colSpan={7} className="flex justify-center items-center pl-">
                        <div className="sweet-loading flex items-center justify-center">
                          <Lottie className="w-[20rem]" lottieRef={animationRef} animationData={Icon} />
                        </div>
                      </td>
                    </tr>

                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">



    </div>
      <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">

          </div>
        </div>
      </footer>

      </section>

  );
};

export default Excel;
