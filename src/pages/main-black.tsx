import '../styles/main-black.css'
import RealPhoto from '../photos/myphotobg.png'
import MenuAbout from '../vectors/main-menu-about.svg'
import MenuExp from '../vectors/main-menu-exp.svg'
import MenuCont from '../vectors/main-menu-contact.svg'
import Darya from '../vectors/DARYA.svg'
import Stepanova from '../vectors/STEPANOVA.svg'
import Designer from '../vectors/DESIGNER.svg'
import Programmer from '../vectors/PROGRAMMER.svg'
import CtMe from '../vectors/CONTACT ME.svg'
import Pattern1 from '../vectors/main-black-bg.svg'
import Pattern2 from '../vectors/main-black-bg-right.svg'
import Pattern3 from '../vectors/main-black-bg-corner.svg'
import TextCorner from '../vectors/switch-text.svg'
import {motion} from 'framer-motion';


const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.8, // чуть длиннее задержка между элементами
            type: 'spring',
            stiffness: 350,  // мягче прыжок
            damping: 25,     // чуть больше затухание
        },
    }),
};



const MainBlack = () => {
    return (
        <motion.div
            id='main-black'
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -50 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
        >
            <motion.ul className='main-menu' variants={fadeUp} custom={0}>
                <li><a href='#about-black'><img src={MenuAbout} alt='easter egg)' /></a></li>
                <li><a href='#experience-black'><img src={MenuExp} alt='easter egg)' /></a></li>
                <li><a href='#contact-black'><img src={MenuCont} alt='easter egg)' /></a></li>
            </motion.ul>

            {/* Паттерны */}
            <motion.img src={Pattern1} className='bg-pattern-left' variants={fadeUp} custom={0.1} />
            <motion.img src={Pattern2} className='bg-pattern-right' variants={fadeUp} custom={0.2} />
            <motion.img src={Pattern3} className='bg-pattern-corner' variants={fadeUp} custom={0.3} />
            <motion.img src={TextCorner} className='bg-pattern-corner-text' variants={fadeUp} custom={0.4} />

            {/* Фото */}
            <motion.img src={RealPhoto} className='photo-real' alt='' variants={fadeUp} custom={0.5} />

            {/* Имя + Фамилия */}
            <motion.div className='name-surname-wrapper' variants={fadeUp} custom={0.6}>
                <motion.img src={Darya} className='name' alt='' />
                <motion.img src={Stepanova} className='surname' alt='' />
            </motion.div>

            {/* Дизайнер + Программист */}
            <motion.div className='occupation-wrapper' variants={fadeUp} custom={0.7}>
                <motion.img src={Designer} className='designer' alt='' />
                <motion.img src={Programmer} className='programmer' alt='' />
            </motion.div>

            {/* Кнопка */}
            <motion.button className='contact-me-btn' variants={fadeUp} custom={0.8}>
                <img src={CtMe} className='' alt='' />
            </motion.button>
        </motion.div>
    )
}


export default MainBlack;