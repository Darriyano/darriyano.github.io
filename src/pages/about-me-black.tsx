import '../styles/about-me-styles.css'
import PatternCorner from '../vectors/secondary-corner.svg'
import RightCorner from '../vectors/secondary-right.svg'
import First from '../vectors/firstquality.svg'
import Second from '../vectors/secondquality.svg'
import Third from '../vectors/thirdquality.svg'
import GH from '../vectors/GH.svg'
import FM from '../vectors/FM.svg'



import {useEffect, useRef} from "react";


const AboutMeBlackPage = () => {
    const secondBlockRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add the 'visible' class when in view
                } else {
                    entry.target.classList.remove('visible'); // Remove the class when out of view
                }
            });
        });

        if (secondBlockRef.current) {
            observer.observe(secondBlockRef.current); // Start observing the secondBlock
        }

        return () => {
            if (secondBlockRef.current) {
                observer.unobserve(secondBlockRef.current); // Cleanup the observer when the component unmounts
            }
        };
    }, []);

    return (
        <div className='about-black' ref={secondBlockRef}>
            <img src={PatternCorner} className='pattern-secondary-corner'/>
            <img src={RightCorner} className='pattern-secondary-right'/>
            <div className='container-about'>
                <img src={First} className='aligner-left'/>
                <div className='aligner-right'>
                    <div><img src={Second}/></div>
                    <div>
                        <button className='explore-btn align-to-right'><img src={GH}/></button>
                    </div>
                </div>

                <div className='aligner-left'>
                    <div><img src={Third}/></div>
                    <div>
                        <button className='explore-btn align-to-left'><img src={FM}/></button>
                    </div>
                </div>
            </div>

            <div ref={secondBlockRef} className='secondBlock'></div>

        </div>
    )
}

export default AboutMeBlackPage;