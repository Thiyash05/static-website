import image1 from './img/img1.png'
import image2 from './img/img2.jpg'
import image3 from './img/card1.jpeg'
import image4 from './img/card2.jpeg'
import image5 from './img/card3.jpeg'
import image6 from './img/card4.jpeg'
import image7 from './img/card5.jpeg'
import image8 from './img/card6.jpeg'

function Section(){
    return(
    <div>
        <header className="head">
            <div className="container">
                <div className="head-title">
                    <h1>The Balloon Queen</h1>
                </div>
                <div className="head-row">
                    
                    <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Insta</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                   </ul>
                </div>
	
	        </div>

        </header>


       
  
        
        <section className="ban-sec">
            <div className="container">
                <div className="ban-row">
                    <div className="ban-col1">
                        <img src={image1} alt="" />
                    </div>
                    <div className="ban-col2">
                        <h1>High quality balloons <br />at affordable prices</h1>
                        <h3>Local customised balloons for any occasion</h3>
                        <button>FIND OUT MORE</button>
                    </div>
                </div>
            </div>
        </section>


        <section class="service-sec">
            <div class="container">
                <div class="service-row">
                    <div class="service-col1">
                        <h3>Make it special</h3>
                        <h1>Balloon making <span>services</span></h1>
                        <p>We make beautiful bespoke balloons for any occasion,
                        recreating ideas at the customers request. All you need to do is send us a photo of what you want, and we’ll bring it to life adding that personal touch. We pride ourselves on listening to our customers and offering them a genuine and reliable service.</p>
                    
                        <ul>
                            <li>Parties</li>
                            <li>Hen do</li>
                            <li>Weddings</li>
                            <li>Birthdays</li>
                            <li>Christenings</li>
                            <li>Baby showers</li>
                            <li>Any excuse for amazing balloons</li>
                        
                        </ul>
                        
                        <button>GET IN TOUCH</button>
                    
                    </div>
                    <div class="service-col2">
                        <img src={image2} alt="" />
                    </div>
                    
                </div>
            </div>
        </section>

        <section className="card-sec">
            <div className="card-container">
                <div className="card-title">
                    <h4>A few to get you started</h4>
                    <h2>Collections & Prices</h2>
                    <h4>Have an idea in mind? Get in touch!</h4>
                </div>

                <div className="card-row">
                    <div className="card-col">
                        <div className="card-item">
                            <img src={image3} />
                            <h6>Personalised bubble with</h6>
                            <h6>mini balloons</h6>
                        </div>
                    </div>

                    <div className="card-col">
                        <div className="card-item">
                            <img src={image4} />
                            <h6>Personalised bubble with</h6>
                            <h6>mini balloons</h6>
                        </div>
                    </div>

                    <div className="card-col">
                        <div className="card-item">
                            <img src={image5} />
                            <h6>Personalised bubble with</h6>
                            <h6>mini balloons</h6>
                        </div>
                    </div>

                    <div className="card-col">
                        <div className="card-item">
                            <img src={image6} />
                            <h6>Personalised bubble with</h6>
                            <h6>mini balloons</h6>
                        </div>
                    </div>

                    <div className="card-col">
                        <div className="card-item">
                            <img src={image7} />
                            <h6>Personalised bubble with</h6>
                            <h6>mini balloons</h6>
                        </div>
                    </div>

                    <div className="card-col">
                        <div className="card-item">
                            <img src={image8} />
                            <h6>Personalised bubble with</h6>
                            <h6>mini balloons</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>



        <section class="foot-sec">
            <div className="foot-container">
                <div className="foot-row">
                    <div className="foot-col">
                        <h2>Contact</h2>
                        <h3>Let's talk about your idea.</h3>
                        <h1>Free quote. No obligation.</h1>

                        <div className="foot-contact">
                             <h6>theballoonqueenickenham@gmail.com</h6>
                             <h6>07943 674 469</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Section