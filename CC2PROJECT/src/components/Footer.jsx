import "./FooterStyles.css";
const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>FlightVerse</h1>
                    <p>Choose ur fav flight</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-square"></i> 
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram-square"></i> 
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i> 
                    </a>
                    <a href="https://twitter.com/i/flow/login">
                        <i className="fa-brands fa-twitter-square"></i> 
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">Allversion</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">Allversion</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Customer Care</a>
                    <a href="/">Status</a>
                    <a href="/">Help-Line</a>
                    <a href="/">Allversion</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms and Condition</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">FAQ</a>
                    <a href="/">Allversion</a>
                </div>
            </div>
        </div>
    )
}
export default Footer