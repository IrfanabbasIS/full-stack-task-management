import React from 'react'
import { Link } from 'react-router-dom'


export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{ "width": "100%", "height":"vw-50"}}> 
    <div className="carousel-item active">
      <img className="d-block" src='httpsmages.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=&q=80' alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block " src="https:/.bing.com/th/id/R.4767cac6947cce049a33fb03e33c5a19?rik=XSwe%2bCSv3AK1bA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1504674500247-0877df9cc836%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=ty84Uk0XrZlhUIruPPMcAfanCiIt5T1pP%2fXwZ6jtdO8%3d&risl=&pid=ImgRaw&r=0"  alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block " src="https://g.com/th/id/OIP.1BEosPN_1PkZ6OnLHLWBagHaE8?w=1080&h=720&rs=1&pid=ImgDetMain"  alt="Third slide"/>
    </div>
  </div>
  <Link className="carousel-control-prev" to="/" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </Link>
  <Link className="carousel-control-next" to="/" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </Link>
</div>
        </div>
  )
}
