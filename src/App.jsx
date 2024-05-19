import './app.css'
import Navbar from './Navbar'
import AashirImg from './assets/Aashir.jpg';
import Resume from './assets/static/Resume.pdf'
import Festino from './assets/Festino.png'
import Movies from './assets/Movies.png'
import Us_Search from './assets/Us_Search.png'
import Products from './assets/Products.png'
import background from './assets/background.jpg'
function App() {
 

  return (
    <>
      
<div className="container-fluid gx-0">
    <Navbar></Navbar>
    <div className="figure-img position-fixed">
        <img src={background} />
    </div>
    <div className="card-img-overlay">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center fw-bolder mt-5">
                        <img className="mt-3"    src={AashirImg} style={{maxWidth:'8rem' , borderRadius:'80%'}} />
                        
                        <h5 className="mt-2">Hello i'm</h5>
                        <h2 className="fw-bold">Muhammad Aashir</h2>
                        <div className="typed-out" style={{color:'white'}}>Full Stack Web Developer</div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 d-flex justify-content-center justify-content-md-end mt-4">
                    <a href={Resume} download={Resume} className="btn btn-outline-primary btn-lg">Download CV</a>
                </div>
                <div className="col-md-6 d-flex justify-content-center justify-content-md-start mt-4">
                    <div className="btn btn-primary btn-lg">Let's Talk</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h5>Get To Know</h5>
                    <h2 className="fw-bold" style={{color:'#4dB5FF'}}>ABOUT ME</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 p-3">
                    <div className="card">
                        <div className="card-body" style={{color:'white'}}>
                            <div className="text-center">
                                <h2 style={{color:'#4dB5FF'}}>Backend Development</h2>
                            </div>
                            <div className="text-center">
                                <h3>.NET</h3>
                                <h3>C#</h3>
                                <h3>SQL</h3>
                                <h3>ASP.NET</h3>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-3">
                    <div className="card">
                        <div className="card-body" style={{color:'white'}}>
                            <div className="text-center">
                                <h2 style={{color:'#4dB5FF'}}>Frontend Development</h2>
                            </div>
                            <div className="text-center">
                                <h3>HTML</h3>
                                <h3>CSS</h3>
                                <h3>BOOTSTRAP</h3>
                                <h3>JAVASCRIPT</h3>
                                <h3>BLAZOR</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h1 className="fw-bolder" style={{color:'#4dB5FF'}}>OTHER SKILLS</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body" style={{color:'white'}}>
                            <div className="text-center">
                                <h2 style={{color:"#4dB5FF"}}>OTHERS</h2>
                            </div>
                            <div className="text-center">
                                <h3>GIT</h3>
                                <h3>GITHUB</h3>
                                <h3>AWS</h3>
                                <h3>PYTHON</h3>
                                <h3>BASH</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>


            <div className="row mt-5 mb-5">
                <div className="col-md-12 text-center">
                    <h4 className="fw-bolder">My Recent Work</h4>
                    <h2 className="fw-bolder" style={{color:"#4dB5FF"}}>Portfolio</h2>
                </div>
            </div>


            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="card">
                        <img src={Festino} className="card-img-top" alt="..." style={{maxWidth:'310px',maxHeight:'200px', borderRadius:'20px' ,padding:'10px'}}/>
                        <div className="card-body">
                            <h2 className="card-text fw-bold">FESTINO</h2>
                            <h4>Booking a weeding Hall</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={Movies} className="card-img-top" alt="..."style={{maxWidth:'310px',maxHeight:'200px', borderRadius:'20px' ,padding:'10px'}} />
                        <div className="card-body">
                            <h2 className="card-text fw-bold">Movies</h2>
                            <h4>Watch a movie</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={Products}className="card-img-top" alt="..." style={{maxWidth:'310px',maxHeight:'200px', borderRadius:'20px' ,padding:'10px'}}/>
                        <div className="card-body">
                            <h2 className="card-text fw-bold">PRODUCT</h2>
                            <h4>Buy A Product</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 mt-5">
                    <div className="card">
                        <img src={Us_Search} className="card-img-top" alt="..." style={{maxWidth:'310px',maxHeight:'200px', borderRadius:'20px' ,padding:'10px'}}/>
                        <div className="card-body">
                            <h2 className="card-text fw-bold">Search Person</h2>
                            <h4>Search through Vpn a US person</h4>
                        </div>
                    </div>
                </div>

            </div>



            <div className="row mt-5 mb-5">
                <div className="col-md-12 text-center">
                    <h4 className="fw-bolder">Get In Touch</h4>
                    <h2 style={{color:'#4dB5FF'}}>Contact ME</h2>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body" style={{color:'white'}}>
                            <div className="text-center">
                                <h2 style={{color:"#4dB5FF"}}>EMAIL</h2>
                                <p>aashirzubair84@gmaill.com</p>
                            </div>
                            <div className="text-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-7">
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" placeholder="Your Full Name" className="form-control form-control-lg  border-primary" style={{backgroundColor:'transparent',color:"white"}} />

                    </div>



                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body" style={{color:'white'}}>
                            <div className="text-center">
                                <h2 style={{color:"#4dB5FF"}}>GITHUB</h2>
                                <p>https://github.com/aashirzubair999</p>
                            </div>
                            <div className="text-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" placeholder="Your Email" className="form-control form-control-lg  border-primary" style={{backgroundColor:"transparent" }}/>

                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body" style={{color:"white"}}>
                            <div className="text-center">
                                <h2 style={{color:"#4dB5FF"}}>Whatsapp</h2>
                                <p>03335293875</p>
                            </div>
                            <div className="text-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
                <div className="col-md-7">
                    <textarea placeholder="Your Message" className="form-control form-control-lg  border-primary" rows="4" cols="5"></textarea>
                </div>


            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-2">
                    <div className="btn btn-primary">Send Message</div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default App
