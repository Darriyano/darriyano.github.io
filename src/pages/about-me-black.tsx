import '../styles/about-me-styles.css';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import React, {useEffect} from 'react';

import PatternCorner from '../vectors/secondary-corner.svg';
import RightCorner from '../vectors/secondary-right.svg';
import First from '../vectors/firstquality.svg';
import Second from '../vectors/secondquality.svg';
import Third from '../vectors/thirdquality.svg';
import GH from '../vectors/GH.svg';
import FM from '../vectors/FM.svg';

const fadeLeft = {
    hidden: {opacity: 0, x: -80},
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            type: 'spring',
            stiffness: 400,
            damping: 30,
        },
    }),
};

const fadeRight = {
    hidden: {opacity: 0, x: 80},
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            type: 'spring',
            stiffness: 400,
            damping: 30,
        },
    }),
};

const AboutMeBlackPage: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.6});

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    return (
        <div id='about-black' ref={ref}>
            <img src={PatternCorner} className='pattern-secondary-corner'/>
            <img src={RightCorner} className='pattern-secondary-right'/>

            <div className='container-about'>
                <motion.div
                    className='aligner-left'
                    variants={fadeLeft}
                    initial="hidden"
                    animate={controls}
                    custom={0}
                >
                    <img src={First}/>
                </motion.div>

                <motion.div
                    className='aligner-right'
                    variants={fadeRight}
                    initial="hidden"
                    animate={controls}
                    custom={1}
                >
                    <div><img src={Second}/></div>
                    <div>
                        <button className='explore-btn align-to-right'><img src={GH}/></button>
                    </div>
                </motion.div>

                <motion.div
                    className='aligner-left'
                    variants={fadeLeft}
                    initial="hidden"
                    animate={controls}
                    custom={2}
                >
                    <div><img src={Third}/></div>
                    <div>
                        <button className='explore-btn align-to-left'><img src={FM}/></button>
                    </div>
                </motion.div>
            </div>

            <div id='my-key-dates'></div>
        </div>
    );
};

export default AboutMeBlackPage;
