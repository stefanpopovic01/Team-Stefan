import './Header.css'
import logo from "../../assets/logo.png";
import { useState } from 'react';

function Header() {

  const [downloadMenu, setDownloadMenu] = useState(false);

  function menuOpen(){
    setDownloadMenu(!downloadMenu);
  }

  return (
    <>
        <div className='header-containter'>
            <div className='header-frame'>
                <div className='header-h1'>
                    <div className='h1-frame'>
                        <div className='header-logo'><img src={logo}/></div>
                        <div className='header-try'><a href='#'>Try now</a></div>
                        <div className='header-download'>
                            <a href='#'>Download <i className={downloadMenu ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} onClick={menuOpen}></i> </a>
                            {downloadMenu && (
                                <div className='download-menu'>
                                    <div className='download-ios'><a href='#'>App Store</a></div>
                                    <div className='download-google'><a href='#'>Google Play</a></div>
                                    <div className='download-mac'><a href='#'>Mac App Store</a></div>
                                </div>
                            )}
                        </div>
                        <div className='header-blog'><a href='#'>Blog</a></div>
                    </div>
                </div>
                <div className='header-h2'>
                    <div className='header-signUp'><button className='sign-b'>Sign Up <i className="fa-solid fa-chevron-right"></i> </button></div>
                    <div className='header-signUp'><button className='sign-l'>Log in</button></div>
                </div>
            </div>
        </div>
    </>
  )

}

export default Header
