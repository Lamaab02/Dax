import { useState } from 'react'
import '../carousel/carousel.css'

export default function Carousel({images}) {
  const [current, setCurrent] = useState(0)
  const slideright = ()=>{
    setCurrent(current === images.length-1 ? 0 : current+1);

  }
  const slideleft = ()=>{
    setCurrent(current === 0 ? images.length-1 : current-1)

  }
  return (  
    <div className='carousel'>
      <div className="carousel_warpper">
        {images.map((image, index)=>{
          return(
            <div key={index} className={index==current ? "carousel_card carousel_card-active" :"carousel_card"}>
                <img src={image.image} alt="" />
            </div>
          ) 
        })}
        <div className="carousel_left_arrow" onClick={slideleft}>&lsaquo;</div>
        <div className="carousel_right_arrow" onClick={slideright}>&rsaquo;</div>
      </div>
    </div>

  )
}
