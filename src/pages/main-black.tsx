import '../styles/main-black.css'
import RealPhoto from '../photos/myphotobg.png'
import MenuAbout from '../vectors/main-menu-about.svg'
import MenuExp from '../vectors/main-menu-exp.svg'
import MenuCont from '../vectors/main-menu-contact.svg'



const MainBlack = () => {
    return (
        <div id='main-black'>
            <div className='main-menu'>
               <a href='#about-black'><img src={MenuAbout} alt='easter egg)'/></a>
                <a href='#experience-black'><img src={MenuExp} alt='easter egg)'/></a>
                <a href='#contact-black'><img src={MenuCont} alt='easter egg)'/></a>
            </div>
            <img src={RealPhoto} className='photo-real' alt=''/>
        </div>
    )
}

export default MainBlack;