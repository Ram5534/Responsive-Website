import {Component} from 'react'
import './index.css'

class Header extends Component{
    render(){
        return (
            <>
                <div className='header-container'>
                    <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756569520/SVG_ldhoff.png' alt='ham-icon' className='ham-image' />
                   <div> <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756569633/Link_SVG_i4mhyu.png' alt='logo-image' className='logo'/></div>
                   <div className='image'>
                    <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756570626/Vector_hv55k2.png' alt='profile' className='img' />
                    <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756570593/Link_SVG_cwfnwx.png' alt='search' className='img' />
                    <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756570538/Link_oqi8bi.png' alt='cart' className='img' />
                    </div>
                </div>
                <div className='desktop-header'>
                    <div className='desk-header'> 
                        <div className='desk-header-details'>
                            <input type='search' placeholder='WHICH MANUKA IS FOR ME?' className='desk-input'/>
                            <p className="links">Shop</p>
                            <p className="links">Explore</p>
                        </div>
                            <div className='desk-logo'> <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756569633/Link_SVG_i4mhyu.png' alt='logo-image' className='desk-icon'/></div>
                        <div className='desk-details'>
                            <p className="links">About</p>
                            <p className="links">Rewards</p>
                            <p className='links'>Contact</p>
                        </div>
                        <div className='desk-image'>
                            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756570626/Vector_hv55k2.png' alt='profile' className='desk-img' />
                            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756570593/Link_SVG_cwfnwx.png' alt='search' className='desk-img' />
                            <img src='https://res.cloudinary.com/dfdpixkle/image/upload/v1756570538/Link_oqi8bi.png' alt='cart' className='desk-img' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header