import React from "react";

export const  ref = React.createRef<HTMLDivElement>()
const nav = navigator.userAgent
export const isMobile = nav.match(/Mobile/i)?true:false;
export const  mobileWidth = window.matchMedia("(max-width: 768px)").matches; 
