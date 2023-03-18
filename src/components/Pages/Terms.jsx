import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Terms.css'

function Terms() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div className='terms-container'>
                <h1>Just one question WHY!</h1>
                <div className="images">
                    <img src="./memes/one.jpeg" alt="memes" />
                    <img src="./memes/two.jpg" alt="memes" />
                    <img src="./memes/three.jpeg" alt="memes" />
                    <img src="./memes/four.jpeg" alt="memes" />
                </div>
                <div className="fun">
                    <p>Seriously? You clicked on THIS link? On THIS website? Don't worry. I won't judge you... okay.
                        maybe just a little. I'm flattered. but also a little concerned for your mental health.

                        Never in your life have you ever clicked on a single TnC or Privacy policy link, but no, this time you had to do it, isn’t it? How does it feel? It’s because of mortals like you that I have to design this modal.

                        If you’re here, you’re either very curious, or you’re overly concerned about privacy. If it’s the latter, then I’d like to inform that by using this website, you agree to let me steal your identity and use your credit card to buy a bunch of useless stuff. Just kidding, I wouldn't do that (I don't even know how).

                        So is this section the TnC or the Privacy Policy? It’s neither. I made this section just to waste your time, it’s my way of taking revenge for clicking on the link. If you start to feel a sense of dread, panic, or existential crisis, just close your browser and walk away slowly. Nothing much to see here.  </p>
                    <br />
                    <button onClick={goBack}>Close&#128514;</button>
                </div>
            </div>
        </>
    )
}

export default Terms