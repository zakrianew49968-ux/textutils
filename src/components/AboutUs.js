import React, { useState } from 'react'

export default function AboutUs() {
    const [myStyle, setMyStyle] = useState({
          color: 'black',
          backgroundColor: 'white'
    })
    const [btntext, setBtnText] = useState("Enable dark Mode")
   const toggleStyle=() =>{
        if(myStyle.color ==='black') {
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
        else 
        {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div>
      <div className="container mt-3" style={myStyle}>
      <h2>About Us</h2>
       <div id="accordion">
       <div className="card">
      <div className="card-header"style={myStyle}>
        <a className="btn" data-bs-toggle="collapse" href="#collapseOne"style={myStyle}>
          Collapsible Group Item #1
        </a>
      </div>
      <div id="collapseOne" className="collapse show"style={myStyle} data-bs-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header"style={myStyle}>
        <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo"style={myStyle}>
        Collapsible Group Item #2
      </a>
      </div>
      <div id="collapseTwo"style={myStyle} className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header"style={myStyle}>
        <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree"style={myStyle}>
          Collapsible Group Item #3
        </a>
      </div>
      <div id="collapseThree"style={myStyle} className="collapse" data-bs-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
  <button type='button' onClick={toggleStyle} className='btn btn-primary my-2'>{btntext}</button>
</div>
    
    </div>
  )
}
