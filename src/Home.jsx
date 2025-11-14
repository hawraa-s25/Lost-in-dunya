import spiritualContent from "./spiritualContent.json"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){

    const [reminder, setReminder] = useState(null)
    const [fadeClass, setFadeClass] = useState("")

    const navigate = useNavigate();

    function giveReminder() {
        setFadeClass(""); // remove animation class instantly

        const randomIndex = Math.floor(Math.random() * spiritualContent.length);
        const next = spiritualContent[randomIndex];

        // small delay so React re-renders before applying fade class
        setTimeout(() => {
            setReminder(next);
            setFadeClass("fade-in");
        }, 10);
    }



    return(
        <div className="home">
            <div className="header">
                <h3>When You Feel Lost in Dunya</h3>
                <p>To Tia - My Best Friend<br/>
                If you're here, perhaps your heart feels heavy.<br/>
                Perhaps the world feels too loud, too much.<br/>
                Perhaps you've forgotten how close He really is.</p>
                <div className="header-verse">
                    <p>
                    وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا۟ لِى وَلْيُؤْمِنُوا۟ بِى لَعَلَّهُمْ يَرْشُدُونَ ١٨٦
                    </p>
                </div>
                <p>You are not alone. He hears you. He sees you.<br/>
                Take a breath. Stay a while.</p>
            </div>

            <div className="spiritual-box">
                <div className="reminder-title">
                    Words for Your Soul
                </div>

                {!reminder && (
                    <button onClick={giveReminder} className="start-reminder-button">
                        Give me a reminder
                    </button>
                )}

                {reminder && (
                    <div className={`reminder-card ${fadeClass}`}>

                        <p className="reminder-text">"{reminder.text}"</p>

                        <p className="reminder-ref">— {reminder.reference}</p>

                        <div className="reminder-divider"></div>

                        <p className="reminder-reflection">{reminder.reflection}</p>

                        <button className="reminder-btn" onClick={giveReminder}>
                            Receive Another
                        </button>
                    </div>
                )}
            </div>

            <div className="letters-home-container" 
                onClick={() => navigate("/letters")}
                style={{ cursor: "pointer" }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                <div className="text-content">
                    <h4>Letters for the Heart</h4>
                    <p>Personal messages for when you feel tired, far from Allah, or when life feels heavy</p>
                </div>            
            </div>

        </div>
    )
}
