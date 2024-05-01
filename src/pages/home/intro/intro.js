
import "./intro.css";

export default function Intro() {
    let initDelay = 500;
    let animation = [
        [100, 1],
        [150, 2],
        [200, 3],
        [250, 4],
        [250, 1],
        [300, 5],
        [300, 2],
        [350, 3],
        [400, 4],
        [450, 5],

        [700, 3],
        [750, 3],
        [790, 3],
        [800, 3],
        [810, 3],
        
        [820, 1],
        [850, 1],
        [870, 1],
        [890, 1],
        [900, 1],

        [870, 5],
        [890, 5],
        [910, 5],
        [920, 5],
        [940, 5],

        [920, 2],
        [940, 2],
        [960, 2],
        [970, 2],
        [1000, 2],

        [970, 4],
        [1000, 4],
        [1020, 4],
        [1050, 4],
        [1060, 4],

        [1050, 3],
        [1070, 3],

        ["trigger", "leave", 1500],
        ["trigger", "end", 3000],
        ["trigger", "hang-down", 4000]

    ];

    let hids = {}

    for (let step of animation) {
        let [time, number] = step;
        if (time == "trigger") {

            if (number == "leave") {
                setTimeout(() => {
                    //start the twentythrees moving down
                    let twentythrees = document.querySelectorAll(".twentythree");

                    for (let i = 0; i < twentythrees.length; i++) {
                        setTimeout(() => {
                            twentythrees[i].classList.add("move-down");
                        }, 100 * (4 - (i*2)) - 50);
                    }

                    //start the nfourteens moving up
                    let nfourteens = document.querySelectorAll(".nfourteen");
                    for (let i = 0; i < nfourteens.length; i++) {
                        setTimeout(() => {
                            nfourteens[i].classList.add("move-up");
                        }, 100 * i*2)
                    }
                }, step[2] + initDelay)
            } else if (number == "end") {
                setTimeout(() => {
                    document.querySelector(".numbers-container").classList.add("hidden");
                }, step[2] + initDelay)
            } else if (number == "hang-down") {
                setTimeout(() => {
                    document.querySelector(".hanging-thing").classList.remove("hanging-thing-up");
                    window.scrollTo({
                        top: 500,
                        left: 0,
                        behavior: "smooth",
                    });
                }, step[2] + initDelay)
            }

            continue;
        }
        setTimeout(() => {
            if (hids[number - 1]) {
                document.querySelector(`.numbers`).children[number - 1].classList.remove("hidden");
            } else {
                document.querySelector(`.numbers`).children[number - 1].classList.add("hidden");
            }
            hids[number - 1] = !hids[number - 1];
        }, time + initDelay);
    }

    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            document.querySelector(`.numbers`).children[i].classList.add("hidden");
            hids[i] = true;
        }
        document.querySelector(`.numbers`).classList.remove("hidden");
    }, 100)

    return (
        <div>
            <div className="numbers-container">
            <div className="numbers hidden">
                <span><span className="twentythree">23</span><span className="nfourteen">014</span></span>
                <span><span className="twentythree">23</span><span className="nfourteen">014</span></span>
                <span className="main-number">
                <span className="twentythree">23</span><span className="nfourteen">014</span>
                </span>
                <span><span className="twentythree">23</span><span className="nfourteen">014</span></span>
                <span><span className="twentythree">23</span><span className="nfourteen">014</span></span>
            </div>
            </div>
        </div>
    )
}