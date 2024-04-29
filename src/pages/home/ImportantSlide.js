import React from "react";

import "./ImportantSlide.css";
import clamp from "../../utils/Clamp";
import lerp from "../../utils/Lerp";

export default class ImportantSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundText: this.props.backgroundText || "",
            mainText: this.props.mainText || "",
            linesTransition: [],
            scrollBetween: this.props.scrollBetween || [100, 300],
            enterBetween: this.props.enterBetween || [0, 100],
            exitBetween: this.props.exitBetween || [300, 1000],
            id: Math.random() + "-important-slide",
            direction: this.props.direction || "top"
        }

        this.moveBackgroundText = this.moveBackgroundText.bind(this);
    }

    moveBackgroundText(event) {
        //get current scroll
        let scroll = window.scrollY;

        let percentageThrough = clamp((scroll - this.state.scrollBetween[0]) / (this.state.scrollBetween[1] - this.state.scrollBetween[0]), 0, 1);

        let lines = document.getElementsByClassName("Slide-BackgroundLine-" + this.state.id);

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            let transition = this.state.linesTransition[i];

            let b = lerp(transition[0], transition[1], percentageThrough);

            line.style.transform = `translateX(${b}%)`;
        }

        let percentageUp = clamp((scroll - this.state.enterBetween[0]) / (this.state.enterBetween[1] - this.state.enterBetween[0]), 0, 1);

        let mainBody = document.getElementById(this.state.id);

        mainBody.style[this.state.direction] = `${lerp(110, 0, percentageUp)}%`;

        let percentageDown = clamp((scroll - this.state.exitBetween[0]) / (this.state.exitBetween[1] - this.state.exitBetween[0]), 0, 1);

        if (percentageDown > 0) {
            mainBody.style[this.state.direction] = `${lerp(0, -110, percentageDown)}%`;
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", this.moveBackgroundText);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.moveBackgroundText);
    }

    render() {
        const lines = [];

        for (let y = 0; y < document.documentElement.clientHeight; y += 20) {
            let n = Math.floor(Math.random() * (this.state.backgroundText.length / 2));
            let n2 = n + 200;

            let text = this.state.backgroundText.substring(n, n2);

            let b = Math.random() * -50

            this.state.linesTransition.push([b, -(Math.random() * 30)])

            lines.push(
                <>
                <div className={`Slide-BackgroundLine Slide-BackgroundLine-${this.state.id}`} style={
                    {
                        top: y, display: "inline-block",
                        transform: `translateX(${b}%)`,
                        transitionDuration: `${1}s`,
                        WebkitTransitionDuration: `${1}s`,
                    }} 
                    key={Math.random() + "-" + y + "-slidetxtline"}>{text}</div>
                <br key={Math.random() + "-" + y + "br"}/>
                </>
            )
        }

        return (
            <div className="ImportantSlide" id={this.state.id} style={{
                [this.state.direction]: "100%",
                transitionDuration: `${0.1}s`,
            }}>
                <div className="Slide-BackgroundText">
                    {lines}
                </div>
                <div className="Slide-MainText">
                    {this.state.mainText}
                </div>
            </div>
        )
    }
}