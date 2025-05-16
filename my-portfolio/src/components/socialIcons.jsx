import React, { useState, useEffect } from "react";
import "../styles/SocialIcons.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaGooglePlusG,
  FaLinkedin,
  FaRedditAlien,
  FaExternalLinkAlt,
} from "react-icons/fa";

const socialData = [
  { name: "twitter", icon: <FaTwitter />, bgColor: "#50a8ee", backColor: "#2e80c1" ,href:""},
//   { name: "facebook", icon: <FaFacebookF />, bgColor: "#4662a0", backColor: "#203562" },
  {
    name: "instagram",
    icon: <FaInstagram />,
    bgColor:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
    backColor: "#285aeb", href:""
  },
  { name: "github", icon: <FaGithub />, bgColor: "#2e3034", backColor: "#23252a" ,href:""},
  { name: "google", icon: <FaGooglePlusG />, bgColor: "#d93b2b", backColor: "#c41e0f",href:"" },
  { name: "linkedin", icon: <FaLinkedin />, bgColor: "#007ebb", backColor: "#065a83",href:"" },
//   { name: "reddit", icon: <FaRedditAlien />, bgColor: "#bf2608", backColor: "#f03612" },
];

const SocialIcons = () => {
  const [socialName, setSocialName] = useState("");
  const [paints, setPaints] = useState([]);

  const handleMouseEnter = (e, name, color) => {
    setSocialName(name);
    const newPaint = {
      id: Date.now(),
      left: e.pageX,
      top: e.pageY - 50,
      color,
    };

    setPaints((prev) => [...prev.slice(-5), newPaint]); // Keep max 6 paints
  };

  const handleMouseLeave = () => {
    setSocialName("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPaints((prev) => prev.slice(1));
    }, 1800);
    return () => clearTimeout(timeout);
  }, [paints]);

  return (
    <div className="wrapper">

      <main>
        <div id="overflow">
          {paints.map((paint) => (
            <div
              key={paint.id}
              className="paint hover"
              style={{
                left: paint.left,
                top: paint.top,
                background: paint.color,
              }}
            />
          ))}
        </div>

        <div className="center">
          <span className="follow">
            Follow me: <span id="socialName" className={socialName ? "active" : ""}>{socialName}</span>
          </span>

          <div className="social-buttons">
            {socialData.map((social, index) => (
              <a
                href="#"
                key={index}
                className="scene"
                data-social={social.name}
                onMouseEnter={(e) => handleMouseEnter(e, social.name, social.bgColor)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="cube">
                  <span
                    className="icon icon-front"
                    style={{ background: social.bgColor }}
                  >
                    {social.icon}
                  </span>
                  <span
                    className="icon icon-back"
                    style={{ background: social.backColor }}
                  >
                    <FaExternalLinkAlt />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* <footer>
        
      </footer> */}
    </div>
  );
};

export default SocialIcons;
