import { useState, useEffect } from 'react';

export default function DominoSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="spinner relative w-16 h-16 flex justify-center items-center rounded-full">
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
        <span className="absolute top-1/2 w-9 h-2 bg-white shadow-md"></span>
      </div>
      <style jsx>{`
        .spinner span {
          box-shadow: 2px 2px 3px 0px black;
        }
        .spinner span:nth-child(1) {
          left: 80px;
          animation-delay: 0.125s;
        }
        .spinner span:nth-child(2) {
          left: 70px;
          animation-delay: 0.3s;
        }
        .spinner span:nth-child(3) {
          left: 60px;
          animation-delay: 0.425s;
        }
        .spinner span:nth-child(4) {
          left: 50px;
          animation-delay: 0.54s;
        }
        .spinner span:nth-child(5) {
          left: 40px;
          animation-delay: 0.665s;
        }
        .spinner span:nth-child(6) {
          left: 30px;
          animation-delay: 0.79s;
        }
        .spinner span:nth-child(7) {
          left: 20px;
          animation-delay: 0.915s;
        }
        .spinner span:nth-child(8) {
          left: 10px;
        }
        .spinner span {
          position: absolute;
          top: 50%;
          width: 35px;
          height: 7px;
          background: #ffffff;
          animation: dominos 1s ease infinite;
        }
        @keyframes dominos {
          50% {
            opacity: 0.7;
          }
          75% {
            transform: rotate(90deg);
          }
          80% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}