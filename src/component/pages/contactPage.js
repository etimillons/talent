import React from 'react'

const ContactPage = () => {
  return (
    <div className='contpage'>
        <div className='contrect'>
        <h1>Let’s talk about your next hire</h1>
        </div>
        <div className='contgrid'>
        <div className='gridboxes'>
            <h3>Admin</h3>
            <p><span>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus</span> </p>
            <p><b>Admin@talentpool.com</b></p>
        </div>

        <div className='gridboxes'>
            <h3>Head of Interns</h3>
            <p><span>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus </span></p>
            <p><b>Admin@talentpool.com</b></p>
        </div>

        <div className='gridboxes'>
            <h3>Our Office</h3>
            <p><span>Opening soon</span></p>
            
        </div>
        </div>
        <div className=' contouterform'>
            <h4>Feel free to say hello!</h4>
            </div>
           <div className='contform'>
           <form>
            <input type='text' placeholder='Your  Name*' className='forminput'></input>
            <br></br>
            <br></br>
            <input type='email' placeholder='Your  Email*' className='forminput'></input>
            <br></br>
             <br></br>
            <input type='text' placeholder='Subject' className='forminput'></input>
            <br></br>
            <br></br>
            <textarea placeholder='Message' rows={10} className='forminput'></textarea>
            </form>
            <button className='sendmessage'>Send Message</button>
           </div> 
    </div>
  )
}

export default ContactPage