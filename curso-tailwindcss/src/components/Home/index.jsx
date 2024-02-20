export const Home = () => {
  return (
    <section className='w-full h-2/3 lg:h-[600px]' id='home'>
      <div className='w-full h-auto'>
        <div className='w-full h-dvh flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-44 lg:justify-start'>
          <input
            className='outline-none p-3 px-4 rounded-full shadow-sm transition-all duration-500 focus-within:shadow-sm focus:ring-2 focus:w-11/12 ease-in-out lg:hidden'
            placeholder='San Francisco'
            type='search'
          />
          <div className='hidden h-auto w-2/5 lg:flex pb-6'>
            <p className='text-4xl ml-16 font-semibold text-black'>
              Encuentra más ubicaciones como esta
            </p>
          </div>
          <button className='w-36 p-4 bg-white text-xl text-primary font-semibold rounded-full shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16'>
            Explorar
          </button>
        </div>
        <div className='w-full h-full lg:h-[600px] lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center'>
          <img
            className='lg:hidden'
            src='/images/sanFrancisco.jpg'
            alt='san francisco'
          />
        </div>
      </div>
    </section>
  );
};
