import { useEffect, useState } from 'react';

export default function SubmarineAnimation() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="sea">
      <div className="circle-wrapper">
        <div className="bubble"></div>
        <div className="submarine-wrapper">
          <div className="submarine-body">
            <div className="window"></div>
            <div className="engine"></div>
            <div className="light"></div>
          </div>
          <div className="helix"></div>
          <div className="hat">
            <div className="leds-wrapper">
              <div className="periscope"></div>
              <div className="leds"></div>
            </div>
          </div>
        </div>
        <div className="heading-skills">SKILLS</div>
        
      </div>
      
      {/* Link to original creator's website */}
   
      <style jsx>{`
        /* Colors (converted from SCSS variables) */
        
        .sea {
          margin: 40px auto 0 auto;
          overflow: hidden;

        }
        
        *, *:before, *:after {
          box-sizing: border-box;
        }
        .heading-skills{
            color:#000;
            z-index: 200;
        }
        
       
        .bubble {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #70b5ce;
          opacity: 0.9;
          animation: bubble1-h-movement 1s ease-in infinite, 
                    bubble1-v-movement 300ms ease-in-out infinite alternate, 
                    bubble-scale-movement 300ms ease-in-out infinite alternate;
        }
        
        .bubble:after {
          position: absolute;
          content: "";
          top: -20px;
          left: 100px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #70b5ce;
          opacity: 0.9;
        }
        
        .circle-wrapper {
          position: relative;
          background: linear-gradient(#2d6780, #265569);
          width: 300px;
          height: 300px;
          margin: 10px auto 0 auto;
          overflow: hidden;
          z-index: 0;
          border-radius: 50%;
          padding: 0 50px 0 50px;
          border: 6px solid #3c89aa;
        }
        
        .submarine-wrapper {
          height: 300px;
          width: 300px;
          padding: 30px 50px 30px 150px;
          margin: 0 auto 0 auto;
          animation: diving 3s ease-in-out infinite, diving-rotate 3s ease-in-out infinite;
        }
        
        .submarine-body {
          width: 150px;
          height: 80px;
          position: absolute;
          margin-top: 50px;
          left: 25px;
          border-radius: 40px;
          background: linear-gradient(#D93A54, #b0314b);
        }
        
        .light {
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 40px 150px 40px;
          border-color: transparent transparent #32738c transparent;
          transform: rotate(-50deg);
          top: 40px;
          left: 99%;
        }
        
        .light:after {
          content: "";
          position: absolute;
          width: 20px;
          height: 13px;
          border-radius: 5px;
          background-color: #c9344f;
          margin-left: -10px;
        }
        
        .window {
          width: 37px;
          height: 37px;
          position: absolute;
          margin-top: 23px;
          right: 18px;
          background: linear-gradient(#1d4152, #16323f);
          border-radius: 50%;
          border: 3px solid #D93A54;
        }
        
        .window:after {
          content: "";
          position: absolute;
          margin-top: 3px;
          margin-left: 3px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: transparent;
          opacity: 0.8;
          border-top: 3px solid white;
          transform: rotate(-45deg);
        }
        
        .engine {
          width: 30px;
          height: 30px;
          position: absolute;
          margin-top: 32px;
          left: 53px;
          background-color: #b0314b;
          border-radius: 50%;
          border: 5px solid #D93A54;
        }
        
        .engine:after, .engine:before {
          position: absolute;
          content: "";
          border-radius: 2px;
          background-color: white;
          animation: spin 900ms linear infinite;
          opacity: 0.8;
        }
        
        .engine:after {
          top: 8px;
          width: 20px;
          height: 4px;
        }
        
        .engine:before {
          left: 8px;
          width: 4px;
          height: 20px;
        }
        
        .helix {
          width: 30px;
          height: 70px;
          position: absolute;
          margin-top: 55px;
          left: 0;
          border-radius: 7px;
          background: linear-gradient(#D93A54, #b0314b);
        }
        
        .helix:after {
          content: "";
          position: absolute;
          margin-top: 5px;
          margin-left: 7px;
          width: 17px;
          height: 60px;
          border-radius: 3px;
          background-color: transparent;
          opacity: 0.8;
          background: linear-gradient(
            to bottom,
            #D93A54,
            #D93A54 50%,
            #ee5f76 50%,
            #ee5f76
          );
          background-size: 100% 20px;
          animation: helix-movement 110ms linear infinite;
        }
        
        .hat {
          width: 65px;
          height: 25px;
          position: absolute;
          margin-top: 26px;
          left: 70px;
          border-radius: 10px 10px 0 0;
          background: linear-gradient(#D93A54, #d13650);
        }
        
        .periscope {
          position: absolute;
          width: 7px;
          height: 20px;
          background-color: #D93A54;
          margin-top: -27px;
          margin-left: 32px;
          border-radius: 5px 5px 0 0;
        }
        
        .periscope:after, .periscope:before {
          content: "";
          position: absolute;
          width: 15px;
          height: 7px;
          border-radius: 5px;
          background-color: #D93A54;
        }
        
        .leds-wrapper {
          width: 53px;
          height: 13px;
          position: relative;
          top: 7px;
          left: 7px;
          border-radius: 10px;
          background: linear-gradient(#992a3a, #852431);
        }
        
        .leds {
          position: absolute;
          margin-top: 4px;
          margin-left: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: white;
          animation: leds-off 500ms linear infinite;
        }
        
        .leds:after, .leds:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: white;
        }
        
        .leds:after {
          margin-top: 0px;
          margin-left: 17px;
        }
        
        .leds:before {
          margin-top: 0px;
          margin-left: 34px;
        }
        
        /* Animations */
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes leds-off {
          100% {
            opacity: 0.3;
          }
        }
        
        @keyframes helix-movement {
          100% {
            background: linear-gradient(
              to bottom,
              #ee5f76 50%,
              #ee5f76,
              #D93A54,
              #D93A54 50%
            );
            background-size: 100% 20px;
          }
        }
        
        @keyframes diving {
          0% {
            margin-top: 5px;
          }
          50% {
            margin-top: 15px;
          }
          100% {
            margin-top: 5px;
          }
        }
        
        @keyframes diving-rotate {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-2deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        @keyframes bubble1-h-movement {
          0% {
            margin-left: 80%;
          }
          100% {
            margin-left: -100%;
          }
        }
        
        @keyframes bubble2-h-movement {
          0% {
            margin-left: 65%;
          }
          100% {
            margin-left: -5%;
          }
        }
        
        @keyframes bubble1-v-movement {
          0% {
            margin-top: 115px;
          }
          100% {
            margin-top: 160px;
          }
        }
        
        @keyframes bubble2-v-movement {
          0% {
            margin-top: 115px;
          }
          100% {
            margin-top: 90px;
          }
        }
        
        @keyframes bubble-scale-movement {
          0% {
            transform: scale(1.4);
          }
          100% {
            transform: scale(0.9);
          }
        }
        
        @keyframes light-movement {
          0% {
            transform: rotate(-40deg);
          }
          50% {
            transform: rotate(-70deg);
          }
          100% {
            transform: rotate(-40deg);
          }
        }
      `}</style>
    </div>
  );
}