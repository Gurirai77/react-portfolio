import "../style/Home.css"

import loginpage from "../assets/loginpage.jpeg"
import theguri from "../assets/theguri.jpeg"

export default function Work() {
    return (
        <>

            <div id="work">
                <div className="work">
                    <div className="workc1">
                        <h1>🚀 Recent Projects</h1>
                    </div>
                    <div className="workc2">
                        <div className="wcard1">
                            <div className="cardimg">
                                <img src={loginpage} alt="not found"/>
                            </div>
                            <div className="cardtext">
                                <h4>Login Page Design</h4>
                                <p>Created a responsive login form with hover effects and shadows.</p>
                                <p>Practiced input styling, alignment, and clean modern layout.</p>
                                <div className="cardlang">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                </div>
                                <div className="View">
                                    <a href="./HTML & CSS/Login.html" target="_blank">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="wcard1">
                            <div className="cardimg" >
                                <img src={theguri} alt="not found"/>
                            </div>
                            <div className="cardtext">
                                <h4>Responsive Portfolio website</h4>
                                <p>Created a fully responsive personal Portfolio website.</p>
                                <p>Includes smooth layout, modern UI, and interactive hover effects for professional design</p>
                                <div className="cardlang">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                </div>
                                <div class="vv2">
                                    <a href="./TheGuri.css" target="_blank">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}