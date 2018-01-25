import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "-10px",
        right: "10px"
      }}
    >
      <footer>
        <p
          style={{
            color: "RGB(31,31,31)",
            backgroundColor: "RGBa(255, 255, 255, .6)",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            borderBottomLeftRadius: "5px"
          }}
        >
          &copy; 2017 Dick Ward |{" "}
          <a
            style={{ color: "RGB(14,14,14)" }}
            href="mailto:thedickward@gmail.com"
          >
            TheDickWard@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
