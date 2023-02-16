import random from "./media/avatar.jpg";
import linkedin from "./media/linkedin.png"
import github from "./media/github.png"
const About=()=>{
    return(
        <div className="bg-success-subtle">
        <h1 className="text-center">ABOUT US</h1>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 rounded float-start" style={{textAlign:"center"}}>
          <div>
            <img src={random} alt="no se carga" className="border border-dark border-2 rounded-circle"  />
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga"  className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga"  className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga"  className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga"  className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga"  className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga"  className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
          <div>
            <img src={random} alt="no se carga" className="border border-dark border-2 rounded-circle"/>
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={linkedin} alt="" style={{width:"50px"}} /> </a>
            <a href="https://github.com/emijhernandez"><img src={github} alt="" style={{width:"50px"}}/> </a>
          </div>
        </div>
        <h1 className="text-center">Team</h1>
      </div>
    )
}

export default About