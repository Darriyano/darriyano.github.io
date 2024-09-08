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



const MainBlack = () => {
    return (
        <div id='main-black'>
            <div className='main-menu'>
                <a href='#about-black'><img src={MenuAbout} alt='easter egg)'/></a>
                <a href='#experience-black'><img src={MenuExp} alt='easter egg)'/></a>
                <a href='#contact-black'><img src={MenuCont} alt='easter egg)'/></a>
            </div>

            <img src={Pattern1} className='bg-pattern-left'></img>
            <img src={Pattern2} className='bg-pattern-right'></img>
            <img src={Pattern3} className='bg-pattern-corner'></img>


            <img src={RealPhoto} className='photo-real' alt=''/>
            <div className='name-surname-wrapper'>
                <img src={Darya} className='name' alt=''/>
                <img src={Stepanova} className='surname' alt=''/>
            </div>

            <div className='occupation-wrapper'>
                <img src={Designer} className='designer' alt=''/>
                <img src={Programmer} className='programmer' alt=''/>
            </div>

            <button className='contact-me-btn'><img src={CtMe} className='' alt=''/>
            </button>
        </div>
    )
}

export default MainBlack;