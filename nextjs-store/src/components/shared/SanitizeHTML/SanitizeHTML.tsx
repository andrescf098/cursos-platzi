import React from 'react';
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function SanitizeHTML({ tag, children, ...rest }: SanitizeHTMLProps) {
  const sanitizedHtml = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  });
  return React.createElement(tag, { ...rest }, sanitizedHtml);
}
