import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'
import './nav.css'

const Nav = () => {


    useEffect(() => {
        const menu = document.getElementsByClassName("links")[0];
        const menu_height = menu.clientHeight;
        const bar_item = document.getElementsByClassName("bar-item");

        if (document.body.clientWidth <= 1200) {
            menu.style.height = "0px";
            menu.style.padding = "0px";
        }
        for (let i = 0; i < document.getElementsByClassName('links')[0].childElementCount; i++) {
            document.getElementsByClassName("link-item")[i].childElementCount >= 2 ? document.getElementsByClassName("link-item")[i].classList.add("nested-menu", "close") : document.getElementsByClassName("link-item")[i].classList.remove("mystyle");
        }
        const list_height = document.getElementsByClassName("link-item")[0].clientHeight;
        for (let i = 0; i < document.querySelectorAll('.nested-menu').length; i++) {
            document.getElementsByClassName("nested-menu")[i].addEventListener("click", () => {
                if (document.getElementsByClassName("nested-menu")[i].classList.contains("close")) {
                    document.getElementsByClassName("nested-menu")[i].style.height = list_height + document.querySelectorAll(".nested-menu ul")[i].clientHeight + "px";
                    document.getElementsByClassName("nested-menu")[i].classList.remove("close");
                } else {
                    document.getElementsByClassName("nested-menu")[i].style.height = list_height + "px"
                    document.getElementsByClassName("nested-menu")[i].classList.add("close")
                }
            })
        }
        for (let i = 0; i < document.getElementsByClassName('links')[0].childElementCount; i++) {
            document.getElementsByClassName("link-item")[i].classList.contains("nested-menu") ? document.getElementsByClassName("link-item")[i].style.height = list_height + "px" : document.getElementsByClassName("link-item")[i].style.height = list_height + "px"
        }
        document.getElementsByClassName("bars")[0].addEventListener("click", () => {
            if (menu.clientHeight == 0) {
                menu.style.height = "auto";
                menu.style.padding = "20px";
                bar_item[0].style.transform = "rotate(45deg)"
                bar_item[1].style.transform = "rotate(-45deg)"
                bar_item[1].style.position = "absolute";
                bar_item[2].style.display = "none";
                document.getElementsByClassName("bars")[0].style.top = "10px";
            } else {
                menu.style.height = "0px";
                menu.style.padding = "0px";
                bar_item[0].style.transform = "rotate(0deg)"
                bar_item[1].style.transform = "rotate(0deg)"
                bar_item[1].style.position = "relative";
                bar_item[2].style.display = "block";
                document.getElementsByClassName("bars")[0].style.top = "0px";
            }
        })
    }, [])


    return (
        <nav className="container">
            <div className="logo">
                <img src="https://brandexponents.com/exponent-lite/corporate/wp-content/uploads/sites/2/2018/12/exp-logo-light.svg" alt="Logo" />
                <div className="bars">
                    <div className="bar-item"></div>
                    <div className="bar-item"></div>
                    <div className="bar-item"></div>
                </div>
            </div>
            <ul className="links">
                <li className="link-item">
                    <Link to="/">home</Link>
                </li>
                <li className="link-item">
                    <Link to="/company">company</Link>
                </li>
                <li className="link-item">
                    <Link to="/leadership">leadership</Link>
                </li>
                <li className="link-item">
                    <Link to="/services">services</Link>
                    <ul>
                        <li>services details</li>
                    </ul>
                </li>
                <li className="link-item">
                    <Link to="/products">products</Link>
                    <ul>
                        <li>product page</li>
                    </ul>
                </li>
                <li className="link-item">
                    <Link to="/blog">blog</Link>
                </li>
                <li className="link-item">
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
            <button className="get-a-quote">Get a Quote</button>
        </nav>
    )
}
export default Nav