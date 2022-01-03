import React, { Component } from 'react'
import './HTMLCSS.css'

class HTMLCSS extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             toggle:false,
        }
    }
    
    togglebutton = () =>{
        this.setState({
            toggle: this.state.toggle === true? false:true,
        })
        

    }
    render() {
        console.log(this.state.toggle);
        return (
            <div className="Main">
                <nav className="Container">
                    <div className="Nav_Container">
                        <div className="flex">
                           <div className = "header-image">
                            <img src="logo.svg"></img>
                            </div>
                            <button className = "hamburger" onClick = {this.togglebutton}> <img src = {this.state.toggle=== true?'icon-hamburger.svg':'icon-close.svg'}></img> </button>
                           
                            <ul className = {this.state.toggle=== false?'toggleclass':'toggleclass1'}>
                                <li><a href="#">How we work</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="#" className="btn btn1">View  plans</a></li>
                            </ul>
                                                                                    
                            
                        </div>
                    </div>
                </nav>
                <header>
                    <div className="Container">
                        <div className="flex align-start reverse">
                            <div>
                                <h1>
                                    Humanizing your insurance.
                                </h1>
                                <p>
                                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected
                                </p>
                                <button className="btn">
                                    Viewe plans
                                </button>
                            </div>
                            <div className = "image-div">
                                <img src="image-intro-desktop.jpg" className = "image1"></img>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="Container">
                    <h2 className = "line-voilet">
                        We’re different
                    </h2>
                    <div className="flex">
                        <div className = "margin-top">
                            <img src="icon-snappy-process.svg">

                            </img>
                            <h3>
                                Snappy Process
                            </h3>
                            <p>
                                Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
                            </p>
                        </div>


                        <div className = "margin-top">
                            <img src="icon-affordable-prices.svg">

                            </img>
                            <h3>
                                Affordable Prices
                            </h3>
                            <p>
                                We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
                            </p>
                        </div>


                        <div className = "margin-top">
                            <img src="icon-people-first.svg">

                            </img>
                            <h3>
                                People First
                            </h3>
                            <p>
                                Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
                            </p>
                        </div>


                    </div>

                </section>
                <section className="Container bg-voilet">
                    <div className="flex">
                        <div>
                            <h2>
                                Find out more about how we work
                            </h2>
                        </div>
                       
                            <button className="btn">
                                How we work
                            </button>
                        

                    </div>
                </section>

                <footer>
                    <div className="Container">
                        <div className="flex border-bottom">
                            <div>
                                <img src="logo.svg"></img>
                            </div>
                            
                                <ul className = "flex">
                                <li><a href="#"><img src="icon-facebook.svg"></img></a></li>
                                <li><a href="#"><img src="icon-twitter.svg"></img></a></li>
                                <li><a href="#"><img src="icon-pinterest.svg"></img></a></li>
                                <li><a href="#"><img src="icon-instagram.svg"></img></a></li>
                                </ul>
                            
                        </div>
                        <div className="flex align-start">
                            <div>
                                <h4>Our company</h4>
                                <ul>
                                    <li><a href="#">How we work</a></li>
                                    <li><a href="#">Why insure?</a></li>
                                    <li><a href="#">view plans</a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Help ma</h4>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Cookies</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Contact</h4>
                                <ul>
                                    <li><a href="#">Sales</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Live chat</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Others</h4>
                                <ul>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Licences</a></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}

export default HTMLCSS
