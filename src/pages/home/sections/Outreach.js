import teamData from "../../../data/Team";


export default function Outreach() {
    return (
        <div className="section" id="section-outreach">
            <h1 className="section-title">Outreach</h1>
            <div className="section-paragraph">
                <p className="section-text-block">
                    As outreach is an integral part of our team and the philosophy of FIRST, we are always looking for ways to give back to our community.
                    We have worked both within our school community and with other organizations to spread the message of FIRST and inspire others to pursue their interests in STEM.
                </p>
            </div>
            <img src="" alt="outreach event 1" />
            <h4>Outreach at ?</h4>
            <div className="section-paragraph">
                <p className="section-text-block">
                    Outreach is also not alone in physical events, as we have also worked on digital outreach projects.
                    These projects have allowed us to reach a wider audience and spread our message to people around the world, for example, through our social media platforms.
                    We are always looking for new ways to reach out to others and share our passion for technology and innovation.
                    Currently, you can subscribe to us on <a href={teamData.links.youtube}>YouTube</a> or follow us on <a href={teamData.links.instagram}>Instagram</a> to hear more about our team and our projects.
                </p>
            </div>
        </div>
    )
}