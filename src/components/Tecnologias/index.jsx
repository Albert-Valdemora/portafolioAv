import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Titulo } from "../titulo/Titulo";
import styled from "styled-components";

const GridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem; 
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  max-width: 32rem; 
  gap: 2rem 2rem;

 

  @media (min-width: 1024px) {
    margin-left: 0;
    max-width: none; 
    grid-template-columns: repeat(5, 1fr); 
  }
  @media (max-width: 500px) {
    width: 50%;
    margin: 0 auto;
    gap: 1rem 1rem;
   
  }
`;

const index = () => {
  return (
    <section className="h-screen">
      <div className="h-screen content-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
           <Titulo title='Tecnologías' />
            {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-14 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> */}
            <GridContainer>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 28L4 3H28L26 28L16 31L6 28Z"
                    fill="#E44D26"
                  ></path>{" "}
                  <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path>{" "}
                  <path
                    d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 28L4 3H28L26 28L16 31L6 28Z"
                    fill="#1172B8"
                  ></path>{" "}
                  <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path>{" "}
                  <path
                    d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    fill="#FFCA28"
                  ></rect>{" "}
                  <path
                    d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                    fill="#3E3E3E"
                  ></path>{" "}
                  <path
                    d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                    fill="#3E3E3E"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>file_type_sass</title>
                  <path
                    d="M26.11,17.572a5.8,5.8,0,0,0-2.537.588,5.345,5.345,0,0,1-.568-1.314,3.53,3.53,0,0,1-.051-1.1,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256a6.171,6.171,0,0,0-.235.834,19.686,19.686,0,0,1-1.713,3.294,3.186,3.186,0,0,1-.44-2.066,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256-.118.5-.235.834-1.483,3.386-1.841,4.173c-.184.4-.343.726-.455.946h0a.233.233,0,0,1-.02.041c-.1.189-.153.292-.153.292v.005c-.077.138-.159.266-.2.266a1.711,1.711,0,0,1,.01-.869c.2-1.059.69-2.705.685-2.762,0-.031.092-.317-.317-.465a.508.508,0,0,0-.578.1c-.036,0-.061.087-.061.087s.445-1.851-.849-1.851a3.855,3.855,0,0,0-2.475,1.683c-.348.189-1.089.593-1.882,1.028-.3.169-.614.338-.905.5-.02-.02-.041-.046-.061-.066C6.87,17.6,3.975,16.416,4.1,14.171c.046-.818.327-2.966,5.559-5.575,4.306-2.122,7.733-1.534,8.326-.23.849,1.862-1.836,5.319-6.285,5.82a3.351,3.351,0,0,1-2.813-.711c-.235-.256-.271-.271-.358-.22-.143.077-.051.307,0,.44a2.626,2.626,0,0,0,1.606,1.263,8.55,8.55,0,0,0,5.217-.517c2.7-1.043,4.8-3.943,4.184-6.372-.619-2.465-4.71-3.278-8.582-1.9A19.5,19.5,0,0,0,4.359,9.952c-2.133,1.995-2.47,3.728-2.332,4.455.5,2.578,4.051,4.255,5.472,5.5-.072.041-.138.077-.194.107-.711.353-3.421,1.77-4.1,3.268-.767,1.7.123,2.915.711,3.079a4.374,4.374,0,0,0,4.71-1.908A4.725,4.725,0,0,0,9.049,20.1a.107.107,0,0,0-.02-.031l.557-.327c.363-.215.721-.414,1.028-.578a6.74,6.74,0,0,0-.363,1.862,3.886,3.886,0,0,0,.834,2.7.921.921,0,0,0,.675.22c.6,0,.875-.5,1.176-1.094.368-.726.7-1.57.7-1.57s-.414,2.281.711,2.281c.409,0,.823-.532,1.008-.8v.005s.01-.015.031-.051l.066-.107v-.01c.164-.286.532-.936,1.079-2.015.706-1.391,1.386-3.13,1.386-3.13a8.888,8.888,0,0,0,.271,1.13,10.643,10.643,0,0,0,.583,1.309c-.164.23-.266.358-.266.358l.005.005c-.133.174-.276.363-.435.547a16.3,16.3,0,0,0-1.314,1.647.447.447,0,0,0,.123.6,1.116,1.116,0,0,0,.685.113,3.147,3.147,0,0,0,1.028-.235,3.45,3.45,0,0,0,.885-.465,1.98,1.98,0,0,0,.849-1.744,3.521,3.521,0,0,0-.322-1.233c.051-.072.1-.143.148-.215a23.428,23.428,0,0,0,1.534-2.649,8.888,8.888,0,0,0,.271,1.13,7.57,7.57,0,0,0,.5,1.125A4.861,4.861,0,0,0,20.965,20.8c-.322.931-.072,1.35.4,1.447a1.425,1.425,0,0,0,.747-.153,3.4,3.4,0,0,0,.946-.486,2.126,2.126,0,0,0,1.043-1.729,3.268,3.268,0,0,0-.235-1.023,5.356,5.356,0,0,1,2.716-.312c2.434.286,2.915,1.805,2.823,2.445a1.618,1.618,0,0,1-.772,1.094c-.169.107-.225.143-.21.22.02.113.1.107.245.087A1.9,1.9,0,0,0,30,20.7c.077-1.5-1.355-3.145-3.887-3.13ZM7.33,23.9c-.808.88-1.933,1.212-2.419.931-.522-.3-.317-1.6.675-2.532a12.884,12.884,0,0,1,1.9-1.417c.118-.072.292-.174.5-.3l.056-.031h0l.123-.077A3.493,3.493,0,0,1,7.33,23.9Zm5.881-4c-.281.685-.869,2.44-1.227,2.342-.307-.082-.5-1.412-.061-2.726a6.193,6.193,0,0,1,.956-1.754c.44-.491.926-.655,1.043-.455a9.062,9.062,0,0,1-.711,2.593Zm4.853,2.322c-.118.061-.23.1-.281.072-.036-.02.051-.1.051-.1s.609-.655.849-.951c.138-.174.3-.378.476-.609V20.7c0,.782-.757,1.309-1.094,1.524Zm3.744-.854c-.087-.061-.072-.266.22-.905a3.408,3.408,0,0,1,.834-1.074,1.448,1.448,0,0,1,.082.471,1.547,1.547,0,0,1-1.135,1.509Z"
                    style={{ fill: "#cd6799" }}
                  ></path>
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z"
                    fill="#563D7C"
                  ></path>
                  <path
                    d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z"
                    fill="#FFF"
                  ></path>
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>file_type_tailwind</title>
                  <path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    style={{ fill: "#44a8b3" }}
                  ></path>
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z"
                    fill="#EE513B"
                  ></path>{" "}
                  <path
                    d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github</title>{" "}
                  <rect width="24" height="24" fill="none"></rect>{" "}
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>{" "}
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                    fill="#53C1DE"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                    fill="#53C1DE"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                fill="#000000"
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Next.js icon</title>
                  <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"></path>
                </g>
              </svg>
              <svg
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M0 10V20H9V22H16V20H32V10H0Z"
                    fill="#CB3837"
                  ></path>{" "}
                  <path
                    d="M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>

              <svg
                fill="#000000"
                width="90px"
                height="90px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>dotnet</title>{" "}
                  <path d="M3.175 20.551c-0.001 0.289-0.123 0.549-0.318 0.733l-0.001 0c-0.2 0.188-0.47 0.303-0.767 0.303s-0.568-0.116-0.769-0.304l0.001 0.001c-0.195-0.184-0.317-0.444-0.317-0.732s0.122-0.549 0.318-0.732l0.001-0c0.2-0.188 0.47-0.303 0.767-0.303s0.567 0.115 0.768 0.304l-0.001-0.001c0.195 0.184 0.317 0.444 0.318 0.733v0zM14.051 21.417h-1.947l-5.126-8.088c-0.118-0.182-0.227-0.392-0.314-0.613l-0.009-0.024h-0.045c0.041 0.365 0.064 0.787 0.064 1.215 0 0.104-0.001 0.208-0.004 0.312l0-0.015v7.213h-1.721v-11.003h2.073l4.955 7.898c0.209 0.326 0.344 0.552 0.404 0.675h0.030c-0.050-0.374-0.078-0.806-0.078-1.245 0-0.083 0.001-0.165 0.003-0.248l-0 0.012v-7.093h1.715zM22.433 21.417h-6.025v-11.003h5.786v1.55h-4.005v3.117h3.69v1.542h-3.69v3.254h4.244zM30.996 11.964h-3.084v9.454h-1.781v-9.454h-3.077v-1.55h7.941z"></path>{" "}
                </g>
              </svg>

              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                width="90px"
                height="90px"
                viewBox="0 0 548.29 548.291"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M276.043,244.216c-24.575,0-38.741,24.087-38.741,53.862c-0.241,30.228,14.407,53.382,38.5,53.382 c24.323,0,38.512-22.92,38.512-54.091C314.313,268.303,300.604,244.216,276.043,244.216z"></path>{" "}
                      <path d="M486.2,196.116h-13.164V132.59c0-0.399-0.064-0.795-0.116-1.2c-0.021-2.52-0.824-4.997-2.551-6.96L364.656,3.677 c-0.031-0.031-0.064-0.044-0.085-0.075c-0.629-0.704-1.364-1.29-2.141-1.796c-0.231-0.154-0.462-0.283-0.704-0.419 c-0.672-0.365-1.386-0.672-2.121-0.893c-0.199-0.052-0.377-0.134-0.576-0.186C358.229,0.118,357.4,0,356.562,0H96.757 C84.893,0,75.256,9.649,75.256,21.502v174.613H62.093c-16.967,0-30.733,13.756-30.733,30.733v159.812 c0,16.961,13.766,30.731,30.733,30.731h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777 c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.977,0,30.729-13.771,30.729-30.731V226.849 C516.93,209.872,503.177,196.116,486.2,196.116z M96.757,21.502h249.053v110.006c0,5.943,4.818,10.751,10.751,10.751h94.973 v53.861H96.757V21.502z M353.033,376.96l-10.394,27.884c-22.666-6.619-41.565-13.479-62.828-22.445 c-3.527-1.418-7.317-2.132-11.094-2.362c-35.909-2.352-69.449-28.819-69.449-80.778c0-47.711,30.236-83.623,77.71-83.623 c48.675,0,75.351,36.854,75.351,80.317c0,36.142-16.766,61.638-37.785,71.091v0.945 C326.828,371.528,340.519,374.367,353.033,376.96z M72.912,370.116l7.328-29.764c9.69,4.96,24.554,9.915,39.917,9.915 c16.525,0,25.271-6.84,25.271-17.228c0-9.928-7.56-15.597-26.691-22.442c-26.457-9.217-43.696-23.858-43.696-47.014 c0-27.163,22.68-47.948,60.231-47.948c17.954,0,31.184,3.791,40.623,8.03l-8.021,29.061c-6.375-3.076-17.711-7.564-33.3-7.564 c-15.599,0-23.163,7.079-23.163,15.357c0,10.15,8.977,14.646,29.533,22.447c28.108,10.394,41.332,25.023,41.332,47.464 c0,26.699-20.557,49.365-64.253,49.365C99.844,379.785,81.899,375.06,72.912,370.116z M451.534,520.962H96.757v-103.57h354.777 V520.962z M475.387,377.428h-99.455V218.231h36.158v128.97h63.297V377.428z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>

              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="90px"
                height="90px"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>file_type_astro</title>
                  <path
                    d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z"
                    style={{ fill: "#ff5d01" }}
                  ></path>
                </g>
              </svg>

              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="90px"
                height="90px"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z"
                    fill="url(#paint0_linear_87_8101)"
                  ></path>{" "}
                  <path
                    d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z"
                    fill="url(#paint1_linear_87_8101)"
                  ></path>{" "}
                  <path
                    d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z"
                    fill="url(#paint2_linear_87_8101)"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_87_8101"
                      x1="23.79"
                      y1="2"
                      x2="23.79"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#32B5F1"></stop>{" "}
                      <stop offset="1" stop-color="#2B9FED"></stop>{" "}
                    </linearGradient>{" "}
                    <linearGradient
                      id="paint1_linear_87_8101"
                      x1="21.0018"
                      y1="5.53398"
                      x2="1.0217"
                      y2="22.3051"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#0F6FB3"></stop>{" "}
                      <stop offset="0.270551" stop-color="#1279B7"></stop>{" "}
                      <stop offset="0.421376" stop-color="#1176B5"></stop>{" "}
                      <stop offset="0.618197" stop-color="#0E69AC"></stop>{" "}
                      <stop offset="0.855344" stop-color="#0F70AF"></stop>{" "}
                      <stop offset="1" stop-color="#0F6DAD"></stop>{" "}
                    </linearGradient>{" "}
                    <linearGradient
                      id="paint2_linear_87_8101"
                      x1="1.15522"
                      y1="9.98389"
                      x2="21.0791"
                      y2="26.4808"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#1791D2"></stop>{" "}
                      <stop offset="1" stop-color="#1173C5"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </GridContainer>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default index;
