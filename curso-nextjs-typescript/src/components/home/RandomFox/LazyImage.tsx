'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface LazyImageProps {
  image: string;
  alt: string;
}
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

export function LazyImage({ image, alt, ...imgProps }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null);
  const urlBase =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCABzAL8DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQH/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECERIxE//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+YgAEGwFRcTIuQVsVCRUiDGt43gJYrhwEMq+MsBzqa6WJsEc6mulibFEDbGAAAAAAAKzEumYKrMdJE5jpIg2RsjZFSAzhxfDiCOHF8OA52JsdeMsUcrE2OtiLAcrE2OtiLFHOxNdLE2AgaAwAAAQn11y5z664RXTMdJE5dMoNkXIyKgpI3jY0E8OK4CIsTYusoOdibHSpqjlYmx0qKDnYiulRQRWKqRRjQRgCo2fXbDjPrrhNV2y6Rzy6RB0ioiKgqmsaAB0RlTVWpoJqaqpqiKmqqKCaiqqKCalVSKAAwBWSfXXNcl5qarvmukrjmukqDrKuVylVNA6St65+m+gX06j0zoKtZam1loNtTay1Nqham1lqbQLUWlqbQLWDAAFAAQbKwB0mlzTj1s0kV6JpU088232iPR6b6ef2e1K9Hpnpw/Rn6BXf0y6cPbLsHa6TdOV0z0o6XSbpHQG2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=';
  const [src, setSrc] = useState(urlBase);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });
    if (node.current) observer.observe(node.current);
    return () => {
      observer.disconnect();
    };
  }, [image]);
  return (
    <Image
      ref={node}
      src={src}
      alt={alt}
      placeholder='blur'
      blurDataURL={urlBase}
      {...imgProps}
    />
  );
}
