import './Home.scss';
import DividerDesktop from '@images/pattern-divider-desktop.svg';
import DividerMobile from '@images/pattern-divider-mobile.svg';
import Dice from '@images/icon-dice.svg';
import { useEffect, useState } from 'react';
const adviceURL = 'https://api.adviceslip.com/advice';

function Home() {
    const [adviceMessage, setAdviceMessage] = useState('');
    const [adviceID, setAdviceID] = useState(0);

    const fetchAdvice = () => {
        fetch(adviceURL)
            .then((response) => response.json())
            .then((data) => {
                setAdviceMessage(data.slip.advice);
                setAdviceID(data.slip.id);
            })
            .catch((error) => console.log(error));
    };

    const handleOnClick = () => {
        fetchAdvice();
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="wrapper">
            <div className="container">
                <h1>ADVICE #{adviceID}</h1>
                <q>{adviceMessage}</q>
                <picture>
                    <source media="(max-width: 600px)" srcSet={DividerMobile} />
                    <img src={DividerDesktop} alt="divider" />
                </picture>
                <button type="button" onClick={handleOnClick}>
                    <img loading="lazy" src={Dice} alt="dice" />
                </button>
            </div>
        </div>
    );
}

export default Home;
