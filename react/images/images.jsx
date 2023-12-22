import React from 'react';

export function ImageGrid() {
   const items = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'link here',
    },
  ];
  return (
    <>
      <div
        name=''
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left'
      >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
Title            </p>
            <p className='py-6'>subtitle</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
              >
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => window.open(link, '_blank')}
                  >
                    button
                  </button>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => window.open(link, '_blank')}
                  >
                    button
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
