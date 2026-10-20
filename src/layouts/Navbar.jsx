import './Navbar.css'
function Navbar(){
    return (
        <nav className="navbar">
            <p className="logo"><span>O</span>uarda.</p>

            <div className='links'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                
            </div>

            <p className='talk'>Let's Talk</p>
        </nav>
    )
}
export default Navbar;