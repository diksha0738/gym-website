
import {Check} from 'lucide-react'
import { Link } from 'react-router-dom';

import React from 'react'

const Pricing = () => {
  const  pricing = [
    {
      imageurl: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "QUARTERLY",
      price: 18000,
      length:3 
    },
    {
      imageurl: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6
    },
    {
      imageurl: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "YEARLY",
      price: 67000,
      length: 12
    },
  ]
  return (
    <section className='pricing'>
      <h1>ELITE EDGE FITNESS PLAN</h1>
      <div className='wrapper'>
        {
          pricing.map(element =>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imageurl} alt="{element.title}"/>
                <div className='title'>
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} Months</p> 
              </div>
              <div className='description'>
                <p>
                  <Check/> Equipment
                </p>
                <p>
                  <Check/> All Day free Training
                </p>
                <p>
                  <Check/> 27/7 Skilled Support
                </p>
                <p>
                  <Check/> 20 Days Frezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
              </div>
            )
          })
        }
      </div>
    </section>
    
  )
}

export default Pricing
