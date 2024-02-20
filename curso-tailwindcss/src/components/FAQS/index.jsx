export const FAQS = () => {
  return (
    <section className='w-full h-auto mb-8' id='faqs'>
      <article className='w-full h-full px-6 flex flex-col gap-4 dark:text-white'>
        <p className='text-3xl text-primary font-semibold mt-6 dark:text-white'>
          FAQS
        </p>
        <div>
          <p className='text-xl font-medium text-primary dark:text-white'>
            Política de cancelación
          </p>
          <p className='text-md'>
            Para estancias menores a una semana es importante avisar con 3 días
            de anticipación, de caso contario será sancionado.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium text-primary dark:text-white'>
            Métodos de pago
          </p>
          <p className='text-md'>
            Aceptamos distintos métodos de pago: VISA, MasterCard, American
            Express, Paypal y Binance.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium text-primary dark:text-white'>
            Mascotas
          </p>
          <p className='text-md'>
            El tema de las mascotas dependerá directamente del anfitrión.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium text-primary dark:text-white'>
            Información de Seguridad
          </p>
          <p className='text-md'>
            Todas nuestras estancias cuentan con seguro en caso de accidentes.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium text-primary dark:text-white'>
            Estancias Largas
          </p>
          <p className='text-md'>
            Contamos con estancias de hasta 3 meses, en este caso es requerido
            un anticipo con un monto del 50% del valor de la renta.
          </p>
        </div>
      </article>
    </section>
  );
};
