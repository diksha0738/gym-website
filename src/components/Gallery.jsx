import React from 'react'

const Gallery = () => {
  const gallery = [
    "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     "https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/35987/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/4761790/pexels-photo-4761790.jpeg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600",
     "https://images.pexels.com/photos/4753890/pexels-photo-4753890.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]
  return ( 
  <section className='gallery'>
    <h1> BETTER BEATS BEST</h1>
    <div className='images'>
      <div>
        
          {gallery.slice(0,3).map((element , index) =>  (
            <img key={index} src={element} alt= "galleryImage"></img>
          ))}
        
      </div>
      <div>
        
          {gallery.slice(3,6).map((element , index) =>  (
            <img key={index} src={element} alt= "galleryImage"></img>
          ))}
        
      </div>
      <div>
        
          {gallery.slice(6,9).map((element , index) =>  (
            <img key={index} src={element} alt= "galleryImage"></img>
          ))}
        
      </div>
    </div>
  </section>
 )  ; 
};

export default Gallery;
