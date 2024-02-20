import { Card } from '../Card';

export const Recommendation = async () => {
  return (
    <section className='p-6' id='recommendation'>
      <p className='text-3xl font-semibold text-primary dark:text-white'>
        Recomendados
      </p>
      <Card />
    </section>
  );
};
