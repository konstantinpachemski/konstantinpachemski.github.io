import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Avatar = () => {

    useEffect(() => {
        anime({
          targets: 'img',
          opacity: ['0%', '100%'],
          duration: 1000,
          delay: 1100,
          easing: 'easeOutQuad'
        });
      }, []);

    return (
        <div className='grid place-items-center h-screen'>
        <img src="avatar-hres.jpg" alt="Avatar" className="rounded-full h-[150px] select-none"/>
      </div>
    )
}

export default Avatar;