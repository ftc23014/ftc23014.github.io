import "./Sponsors.css";

export default function Sponsors() {
    function redirect(to) {
        return () => {
            //open in new tab
            window.open(to, "_blank");
        }
    }

    return (
        <div className="section sponsors" id="section-sponsors">
            <h1>Our Sponsors</h1>
            <div className="sponsors-logos">
                <img src="/images/sponsors/ash_logo.png" onClick={redirect("https://ash.nl")} className="ash-logo" width="435px" height="129px" />
                <img src="/images/sponsors/touchcast.webp" onClick={redirect("https://touchcast.com/")} className="touchcast-logo" width="690px" height="362px" />
            </div>
        </div>
    );
}