import React from "react";
import {
  footerStyles,
  footerBackgroundStyles,
  contactIconGradients,
  iconColors,
  footerCustomStyles,
} from "../assets/dummyStyles";
import { socialIcons, supportLinks, contactInfo } from "../assets/dummyFooter";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerBackgroundStyles.backgroundContainer}>
        <div className={footerBackgroundStyles.floatingOrb1}></div>
        <div className={footerBackgroundStyles.floatingOrb2}></div>
        <div className={footerBackgroundStyles.floatingOrb3}></div>
        <div className={footerBackgroundStyles.floatingOrb4}></div>

        {/* subtle grid overlay, reduce opacity on small screens */}
        <div className={footerBackgroundStyles.gridOverlay}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className={footerStyles.container}>
          <div className={footerStyles.grid}>
            <div className={footerStyles.brandSection}>
              <div className={footerStyles.brandTransform}>
                <div className={footerStyles.brandContainer}>
                  <div className={footerStyles.brandGradient}></div>

                  <div className="relative font-serif flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-12 h-12" />
                    <h3 className={footerStyles.brandTitle}>SkillIT</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
