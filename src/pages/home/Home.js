import React, { useState, useEffect } from "react";
import Space from "../../utils/Space";
import TextBlurbs from "../../utils/TextBlurbs";
import ImportantSlide from "./ImportantSlide";
import Intro from "./intro/intro";
import Footer from "./sections/Footer";

import WhoAreWe from "./sections/WhoAreWe";
import Sponsors from "./sections/Sponsors";
import OurTeam from "./sections/OurTeam";
import Outreach from "./sections/Outreach";
import TopMenu from "./sections/Menu";
import teamData from "../../data/Team";

const introEnabled = false;

function isOnMobile() {
  return window.innerWidth <= 800;
}

export default function Home() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = 2800; // Adjust this value based on where you want the TopMenu to stick
      if (window.scrollY >= stickyPoint) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle scrolling with offset
  function scrollToWithOffset(id) {
    return function () {
      const element = document.getElementById(id);
      const yOffset = -80; // Adjust this value to control the gap above the section
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    };
  }

  return (
    <>
      {introEnabled ? <Intro /> : null}

      {/* Animation content */}
      <div>
        <ImportantSlide
          backgroundText={TextBlurbs.firstTechBlurb}
          mainText="We're 23014"
          enterBetween={[100, 300]}
          scrollBetween={[300, 1000]}
          exitBetween={[1000, 3000]}
        />
        {/* Top Menu appears immediately after the sliding animation */}

        <ImportantSlide
          mainText="Sponsors"
          enterBetween={[3500, 4000]}
          scrollBetween={[4100, 4700]}
          exitBetween={[5000, 5500]}
          direction="left"
        />

        <ImportantSlide
          mainText="Our Team"
          enterBetween={[6650, 6950]}
          scrollBetween={[6850, 7300]}
          exitBetween={[7700, 8000]}
        />

        <ImportantSlide
          mainText="Outreach"
          enterBetween={[9800, 10000]}
          scrollBetween={[10100, 10300]}
          exitBetween={[10700, 11000]}
          direction="left"
        />
      </div>

      {/* Non-animation content */}
      <div>
        <div
          className={`hanging-thing hanging-thing-up ${
            isSticky ? "hidden" : ""
          }`}
        >
          <p className="scroll-down">scroll down!</p>
          <div className="hang-line1"></div>
          <div className="hang-line2"></div>
        </div>

        <Space lines={13} />
        <div className={`top-menu-container ${isSticky ? "sticky" : ""}`}>
          <TopMenu scrollToWithOffset={scrollToWithOffset} />
        </div>

        <Space lines={isOnMobile() ? 140 : 160} />

        <WhoAreWe />

        <Space lines={125} />

        <Sponsors />

        <Space lines={110} />

        <OurTeam />

        <Space lines={120} />

        <Outreach />

        <Space lines={10} />

        <Footer />
      </div>
    </>
  );
}
