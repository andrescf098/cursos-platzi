export const FeaturedRentals = () => {
  return (
    <section className='px-6 h-auto w-full lg:p-6' id='featured-rentals'>
      <p className='text-3xl text-primary font-semibold pb-6 mt-2 dark:text-white'>
        Rentas destacadas
      </p>
      <article className='w-full h-auto flex flex-col gap-4 items-center justify-center'>
        <div className='w-full h-96 min-h-96 bg-chicago bg-cover rounded-xl lg:bg-center'>
          <p className='CardTitle lg:text-black'>Chicago</p>
          <p className='CardDescription text-white'>
            2 habitaciones, baño y cocina
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:flex-row lg:h-full lg:w-full '>
          <div className='w-full h-96 min-h-96 bg-LA bg-cover rounded-xl lg:h-auto'>
            <p className='CardTitle'>Los Angeles</p>
            <p className='CardDescription text-white'>
              4 habitaciones, baño y piscina
            </p>
          </div>
          <div className='flex flex-col gap-4 lg:h-full lg:w-full'>
            <div className='w-full h-96 min-h-96 bg-miami bg-cover rounded-xl'>
              <p className='CardTitle'>Miami</p>
              <p className='CardDescription text-white'>
                3 habitaciones, 3 baños, cocina y excelente vista al mar
              </p>
            </div>
            <div className='w-full h-96 min-h-96 bg-bali bg-cover rounded-xl'>
              <p className='CardTitle'>Bali</p>
              <p className='CardDescription text-white'>
                2 habitaciones, baños, cocina y piscina
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
