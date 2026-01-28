 "use client";

 import { useEffect } from "react";
 
 /**
  * Sets `data-scrolled="true"` on <html> once the user scrolls.
  * Used to toggle header border/shadow visibility at the top of the page.
  */
 export function ScrollHeaderState() {
   useEffect(() => {
     const root = document.documentElement;
 
     const update = () => {
       const scrolled = window.scrollY > 0;
       root.dataset.scrolled = scrolled ? "true" : "false";
     };
 
     update();
     window.addEventListener("scroll", update, { passive: true });
     return () => window.removeEventListener("scroll", update);
   }, []);
 
   return null;
 }

