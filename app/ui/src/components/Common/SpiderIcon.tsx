import React from "react";

export const SpiderIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      version="1.1"
      viewBox="0 0 71.682 71.682"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M48.161 33.825l.672.447c-1.121.673-2.912 1.12-5.377 1.567V34.72c2.017-2.017 3.137-4.704 3.137-7.616h1.347v-5.376h-4.033v5.376h1.344c0 2.465-.896 4.479-2.24 6.271l-3.584-4.032H31.81l-3.359 3.81c-1.344-1.568-2.24-3.81-2.24-6.272h1.344v-5.376h-4.031v5.601h1.344c0 2.912 1.12 5.601 3.136 7.616v1.119c-2.24-.447-4.032-.896-5.376-1.567l.672-.447-2.688-4.704-3.584 2.016 2.688 4.704 1.344-.896c1.568 1.119 4.032 1.792 6.944 2.24v2.463c-1.344 1.346-2.464 3.139-2.912 5.151h-1.567v5.375h4.031v-5.149h-.896c.448-1.344 1.12-2.688 2.016-3.81l3.136 3.81h7.617l3.137-3.81c.896 1.119 1.566 2.466 2.017 3.81h-.903v5.377h4.031v-5.377h-1.568c-.447-2.019-1.565-3.81-2.91-5.15v-2.465c2.91-.447 5.375-1.346 6.943-2.241l1.344.896 2.688-4.702-3.584-2.018-2.463 4.478z"></path>
      <path d="M64.96 0H6.72C2.912 0 0 2.912 0 6.721v58.241c0 3.808 2.912 6.72 6.72 6.72h58.24c3.812 0 6.722-2.912 6.722-6.72V6.721C71.68 3.136 68.544 0 64.96 0zM25.088 4.929c1.344 0 2.688 1.119 2.688 2.688 0 1.568-1.12 2.688-2.688 2.688-1.344 0-2.688-1.12-2.688-2.688.001-1.568 1.121-2.688 2.688-2.688zm-7.616 0c1.345 0 2.688 1.119 2.688 2.688 0 1.568-1.12 2.688-2.688 2.688-1.567 0-2.688-1.12-2.688-2.688s1.344-2.688 2.688-2.688zm-7.392 0c1.344 0 2.688 1.119 2.688 2.688 0 1.568-1.12 2.688-2.688 2.688s-2.688-1.12-2.688-2.688 1.12-2.688 2.688-2.688zm53.761 54.432a4.493 4.493 0 01-4.479 4.479H12.321a4.493 4.493 0 01-4.48-4.479v-40.32a4.493 4.493 0 014.48-4.479h19.04c4.256 0 4.479 0 4.479-2.239 0-2.912 2.016-4.48 4.48-4.48h19.039a4.493 4.493 0 014.48 4.48l.002 47.038z"></path>
    </svg>
  );
});