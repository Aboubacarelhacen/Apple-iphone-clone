import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { heroVideo, smallHeroVideo} from '../utils'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ?smallHeroVideo: heroVideo)

  const handleVideoSize = ()=> {
    if(window.innerWidth <760)
    {
      setVideoSrc(smallHeroVideo);
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleVideoSize);

    return ()=> { 
      window.removeEventListener('resize', handleVideoSize);
    }
  }, [])

  useGSAP(
    gsap.to("#hero", {opacity:1, delay:1.5})
    
  , [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 flex-center flex-col'>
        <p id='hero' className='hero-title'>Iphone 15 pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
      
      </div>
    </section>
  )
}

export default Hero