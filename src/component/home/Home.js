import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Carousel from 'react-bootstrap/Carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './home.css';
const Home = () => {
    return (
        <div className="home">
            <header>
                <div className="header-contect container">
                    <div className="header-text">
                        <p className="title">Delight your customers</p>
                        <p className="add">from where ever you are</p>
                        <p className="description">Our products help your sales, marketing, support, IT, and HR teams deliver the best customer experiences.</p>
                        <button className="get-started">get started</button>
                    </div>
                    <div className="header-banner">
                        <img src="./assets/banner_img-2.png" alt="Banner" />
                    </div>
                </div>
            </header>
            <div className="products">
                <div className="container">
                    <p className="sec-head">Refreshing business software that your teams will love</p>
                    <div className="head-dot"></div>
                    <p className="sec-description">Exponent WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating. On top of a great tool is even better customer support.</p>
                    <div className="product">
                        <div className="product-item">
                            <p className="product-head"><img src="http://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/logo.svg" alt="Product Icon" /> Expodesk</p>
                            <p className="product-description">Exponent WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating. </p>
                            <div className="product-action">
                                <button className="start">start trial</button>
                                <button className="learn">learn more</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <p className="product-head"><img src="http://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/dochat.svg" alt="Product Icon" /> Expochat</p>
                            <p className="product-description">Exponent WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating. </p>
                            <div className="product-action">
                                <button className="start">start trial</button>
                                <button className="learn">learn more</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <p className="product-head"><img src="http://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/dosales.svg" alt="Product Icon" /> Exposales</p>
                            <p className="product-description">Exponent WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating. </p>
                            <div className="product-action">
                                <button className="start">start trial</button>
                                <button className="learn">learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="all-products">
                        <button className="button">all products</button>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="container">
                    <div className="img">
                        <img src="./assets/img_02-1.png" alt="Integrated HR" />
                    </div>
                    <div className="contect">
                        <p className="sec-head">Fully Integrated HR and Payroll Solutions</p>
                        <div className="head-dot"></div>
                        <p className="sec-description">
                            There are hundreds of vendors you deal with, who may promise you a thousand things. Wondering how we’re different?
                        </p>
                        <button className="button">read more</button>
                    </div>
                </div>
            </div>
            <div className="companies">
                <div className="container">
                    <p className="sec-head">
                        Trusted by over 40,000 customers around the world
                    </p>
                    <OwlCarousel items="5" autoplay nav dots className="owl-theme">
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-193.svg" alt="Company" />
                        </div>
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-194.svg" alt="Company" />
                        </div>
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-195.svg" alt="Company" />
                        </div>
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-196.svg" alt="Compant" />
                        </div>
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-197.svg" alt="Company" />
                        </div>
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-198.svg" alt="Company" />
                        </div>
                        <div className='item'>
                            <img src="https://brandexponents.com/exponent-lite/software-firm/wp-content/uploads/sites/38/2020/10/Group-193.svg" alt="Company" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="video">
                <div className="container">
                    <p>HR Management Software</p>
                    <div className="video-icon">
                        <i className="fas fa-play"></i>
                    </div>
                </div>
            </div>
            <div className="customers">
                <div className="container">
                    <p className="sec-head">
                        Here's what our customers have been saying about us
                        <div className="head-dot"></div>
                    </p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="customer-img"
                                src="./assets/avatar.png"
                                alt="First slide"
                            />
                            <p className="sec-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint rem itaque. Fugiat, incidunt facilis assumenda voluptatibus inventore facere animi molestiae sint reiciendis aut, consequatur dicta autem illo at cumque.</p>
                            <p className="customer-name">oleo bone</p>
                            <p className="customer-job">marketing manager</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="customer-img"
                                src="./assets/avatar.png"
                                alt="Second slide"
                            />
                            <p className="sec-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint rem itaque. Fugiat, incidunt facilis assumenda voluptatibus inventore facere animi molestiae sint reiciendis aut, consequatur dicta autem illo at cumque.</p>
                            <p className="customer-name">oleo bone</p>
                            <p className="customer-job">marketing manager</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="customer-img"
                                src="./assets/avatar.png"
                                alt="Third slide"
                            />
                            <p className="sec-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint rem itaque. Fugiat, incidunt facilis assumenda voluptatibus inventore facere animi molestiae sint reiciendis aut, consequatur dicta autem illo at cumque.</p>
                            <p className="customer-name">oleo bone</p>
                            <p className="customer-job">marketing manager</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="numbers">
                <div className="container">
                    <div className="number-item">
                        <div className="num-title">
                            <p>experience</p>
                            <i className="fas fa-home"></i>
                        </div>
                        <p><span>16</span>Year of experience</p>
                    </div>
                    <div className="number-item">
                        <div className="num-title">
                            <p>software</p>
                            <i className="fas fa-home"></i>
                        </div>
                        <p><span>06</span>Our Business Software</p>
                    </div>
                    <div className="number-item">
                        <div className="num-title">
                            <p>employee</p>
                            <i className="fas fa-home"></i>
                        </div>
                        <p><span>680</span>Our Total Employee</p>
                    </div>
                    <div className="number-item">
                        <div className="num-title">
                            <p>users</p>
                            <i className="fas fa-home"></i>
                        </div>
                        <p><span>+9620</span>Happy Users</p>
                    </div>
                </div>
            </div>
            <div className="freshworks">
                <div className="container">
                    <p className="sec-head">Inside Freshworks</p>
                    <div className="head-dot"></div>
                    <div className="sec-description">We specialize in a wide array of medical fields and have some of the best facilities and doctors to take care of you.</div>
                    <div className="freshworks-items">
                        <div>
                            <img src="./assets/fresh-1.jpg" alt="Inside Freshworks" />
                            <div className="fresh-tag">Lifestyle , Travel</div>
                            <div className="fresh-title">Four places you need to visit if you are nature lover</div>
                        </div>
                        <div>
                            <img src="./assets/fresh-2.jpg" alt="Inside Freshworks" />
                            <div className="fresh-tag">Misc , Tips</div>
                            <div className="fresh-title">Why you should hire a lawyer to prepare your privacy policy</div>
                        </div>
                        <div>
                            <img src="./assets/fresh-3.jpg" alt="Inside Freshworks" />
                            <div className="fresh-tag">Reviews , Tech</div>
                            <div className="fresh-title">A fully visual way to build websites using WordPress</div>
                        </div>
                    </div>
                    <button className="view-more">view more</button>
                </div>
            </div>
        </div>
    )
}
export default Home