import '../styles/contact-me-styles.css';
import React, {useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import TextMain from "../vectors/main-menu-contact.svg";
import PatternCorner from "../vectors/secondary-corner.svg";
import RightCorner from "../vectors/secondary-right.svg";
import TG from "../vectors/tg.svg";
import GIT from "../vectors/git.svg";
import FIG from "../vectors/figma.svg";

const levitate = {
    y: [0, -10, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const ContactMe: React.FC = () => {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [inViewRef, inView] = useInView({triggerOnce: true, threshold: 0.3});

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);


    return (
        <div
            id='contact-black'
            ref={el => {
                containerRef.current = el;
                inViewRef(el);
            }}
        >
            <img src={PatternCorner} className='pattern-secondary-corner' alt="easter egg:)"/>
            <img src={RightCorner} className='pattern-secondary-right' alt="easter egg:)"/>
            <motion.img
                src={TextMain}
                className="text-contact"
                alt="easter egg:)"
                initial={{opacity: 0, y: 50}}
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {duration: 0.6}
                    }
                }}
            />

            {/* CIRCLE 1 */}
            <a href="https://t.me/darriyano">

                <motion.div
                    className="circle pos1"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={controls}
                    variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {delay: 0.3, duration: 0.6}
                        }
                    }}
                    whileHover={{scale: 1.05}}
                >
                    <motion.img src={TG} alt="TG" animate={levitate}/>
                </motion.div>
            </a>


            {/* CIRCLE 2 */}
            <a href="https://github.com/Darriyano">
                <motion.div
                    className="circle pos2"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={controls}
                    variants={{
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {delay: 0.5, duration: 0.6}
                        }
                    }}
                    whileHover={{scale: 1.05}}
                >
                    <motion.img src={GIT} alt="GitHub" animate={levitate}/>
                </motion.div>
            </a>

            {/* CIRCLE 3 */}
            <motion.div
                className="circle pos3"
                initial={{opacity: 0, scale: 0.8}}
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {delay: 0.7, duration: 0.6}
                    }
                }}
                whileHover={{scale: 1.05}}
            >
                <motion.img src={FIG} alt="Figma" animate={levitate}/>
            </motion.div>
        </div>
    );
};

export default ContactMe;
