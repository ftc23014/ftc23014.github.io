import Space from "../../utils/Space";
import TextBlurbs from "../../utils/TextBlurbs";
import ImportantSlide from "./ImportantSlide";
import Intro from "./intro/intro";
import Footer from "./sections/Footer";

import MultiplyText from "../../utils/MultiplyText";

import WhoAreWe from "./sections/WhoAreWe";
import Sponsors from "./sections/Sponsors";
import OurTeam from "./sections/OurTeam";
import Outreach from "./sections/Outreach";
import TopMenu from "./sections/Menu";
import teamData from "../../data/Team";

const introEnabled = false;

export default function Home() {
    return (
        <>
        {introEnabled ? (<Intro></Intro>) : null}
        {/*animation content */}
        <div>
            <ImportantSlide
                backgroundText={TextBlurbs.firstTechBlurb}
                mainText="We're 23014"
                enterBetween={[0, 300]}
                scrollBetween={[300, 1500]}
                exitBetween={[2000, 3000]}
            ></ImportantSlide>

            <ImportantSlide
                backgroundText={TextBlurbs.sponsors.multiply(100)}
                mainText="Sponsors"
                enterBetween={[3500, 4000]}
                scrollBetween={[4100, 4700]}
                exitBetween={[5000, 5500]}
                direction="left"
            ></ImportantSlide>

            <ImportantSlide
                backgroundText={(teamData.countries_representation.join(" FROM ") + " FROM ").multiply(100)}
                mainText="Our Team"
                enterBetween={[6250, 6750]}
                scrollBetween={[6850, 7300]}
                exitBetween={[7500, 8000]}
            ></ImportantSlide>

            <ImportantSlide
                backgroundText={TextBlurbs.outreach}
                mainText="Outreach"
                enterBetween={[9400, 9900]}
                scrollBetween={[10000, 10300]}
                exitBetween={[10500, 11000]}
                direction="left"
            ></ImportantSlide>
        </div>
        {/*non-animation content */}
        <div>
            <div className="hanging-thing hanging-thing-up">
                <p className="scroll-down">scroll down!</p>
                <div className="hang-line1"></div>
                <div className="hang-line2"></div>
            </div>

            <Space lines={13} />

            <TopMenu />

            <Space lines={160} />
            
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
    )
}

