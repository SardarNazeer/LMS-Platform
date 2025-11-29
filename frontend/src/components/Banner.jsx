import React from 'react'
import { bannerStyles } from '../assets/dummyStyles'
import {floatingIcons} from '../assets/dummyBanner'

const Banner = () => {
  return (
    <div className={bannerStyles.container}>
      
      {/* Floating Icons Wrapper */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

    </div>
  )
}

export default Banner
