import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import teamData from "../../../data/Team";

import "./ourteam.css";

const geoUrl =
  "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"

export default function OurTeam() {
    return (
        <div className="section" id="section-ourteam">
            <h1 className='section-title'>Our Team</h1>
            <div className="section-paragraph">
                <p className="section-text-block">
                    Our team is represented by a diverse group of students from the American School of The Hague.
                    In total, there are {teamData.student_count} students on our team, representing a total of {teamData.countries_representation.length} countries.
                    By working together and sharing our unique perspectives, we are able to constantly innovate and push the boundaries of our capabilities.
                </p>
            </div>
            <h3 className='section-title'>We are from...</h3>
            {/* map with the countries */}
            <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                <ComposableMap
                className='team-map'
                style={{ display: "inline-block"}}
                viewBox='10 65 800 470'
                >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map((geo) => {
                        //for some reason, bermuda is ** and takes up the whole map so we need to skip it
                        //sorry bermuda
                        if (geo.properties.name == "Bermuda") return;

                        return (<Geography className={
                            teamData.countries_representation.includes(geo.properties.name) ?
                            "team-country" : "team-country-inactive"
                        } name={geo.properties.name} key={geo.rsmKey} geography={geo} />)
                    })
                    }
                </Geographies>
                </ComposableMap>
            </div>
            <div className="section-paragraph">
                <p className="section-text-block">
                    Something else about being from different countries and working together (idk)
                </p>
            </div>
        </div>
    )
}