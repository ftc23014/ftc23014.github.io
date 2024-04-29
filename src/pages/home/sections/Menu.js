
import "./Menu.css";

export default function TopMenu() {
    function scrollTo(id) {
        return function() {
            let element = document.getElementById(id);
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className="menu">
            <h3 onClick={scrollTo("section-whoarewe")}>Who Are We</h3>
            <h3 onClick={scrollTo("section-sponsors")}>Sponsors</h3>
            <h3 onClick={scrollTo("section-ourteam")}>Our Team</h3>
            <h3 onClick={scrollTo("section-outreach")}>Outreach</h3>
        </div>
    )
}