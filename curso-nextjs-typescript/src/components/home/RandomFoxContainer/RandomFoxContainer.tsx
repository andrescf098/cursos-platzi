'use client';

import { useState } from 'react';
import { LazyImage } from '../RandomFox';
import type { MouseEventHandler } from 'react';

type ImageItems = {
  id: string;
  alt: string;
  url: string;
};

export function RandomFoxContainer() {
  const random = (): number => Math.floor(Math.random() * 123) + 1;
  const idGenerator = (): number => Date.now() + random();
  const [images, setImages] = useState<Array<ImageItems>>([]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImageItem: ImageItems = {
      id: `${idGenerator()}`,
      alt: `fox-4`,
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };
  return (
    <div className='p-4 flex flex-col gap-3'>
      <button className='bg-slate-500 rounded-xl w-56' onClick={addNewFox}>
        add new fox
      </button>
      {images?.map((image, index) => (
        <LazyImage
          key={image.id}
          className='h-auto rounded-md object-cover'
          image={image.url}
          alt={image.alt}
          width={320}
          height={500}
          onClick={() => console.log('Alo!')}
        />
      ))}
    </div>
  );
}
