import './Hero.css'


function Hero(){

    return(
        <div className='container'>
            <h1 className='title'>
              Hi, I'm <span>Ouarda Zahim</span>
            </h1>
            <h2 className='secondtitle'>Frontend Developer</h2>
            <p  className='paragraph'>I am a Front-End Developer responsible for designing and developing the visual <br/> and interactive parts of websites.
             I use HTML, CSS, and JavaScript to create attractive, <br /> 
             responsive,  and user-friendly websites that work on different devices. I also use <br/> 
             frameworks such as React to build modern web applications, collaborate with <br/>
              designers and back-end developers, test and debug code, and ensure that <br/>
               websites function correctly and provide a great user experience.</p>

               

            <div className='containerbtn'>
                <p className="hire">Hire Me</p>
                <p className="see">See Projects</p>
            </div>
        </div>
       

        
    )
}
export default Hero;