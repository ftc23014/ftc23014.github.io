import Icon from '@mdi/react';
import { mdiGithub, mdiInstagram, mdiYoutube } from '@mdi/js';
import { useEffect } from 'react';

export default function Footer() {

    function redirect(link) {
        return () => {
            window.open(link, '_blank');
        }
    }

    return (
        <div className="section">
            <h3 className="section-stylized-graffiti no-bottom-padding h-with-icons">
                © The Flying Dutchman 2024
                <div onClick={redirect("https://www.instagram.com/ash_roboticsftc/")}><Icon path={mdiInstagram} size={1} id='instagram-link' /></div>
                <div onClick={redirect("https://github.com/ftc23014")}><Icon path={mdiGithub} size={1} id='github-link' /></div>
                <div onClick={redirect("https://www.youtube.com/@TheFlyingDutchmanFTC")}><Icon path={mdiYoutube} size={1} id='youtube-link' /></div>
            </h3>
            <h3>
                <span className="section-stylized-handwriting">Website designed by</span>&nbsp;&nbsp;
                <a href="https://github.com/JaidenAGrimminck" target="_blank" className="section-stylized-graffiti white-link">Jaiden Grimminck</a>
            </h3>
        </div>
    )
}