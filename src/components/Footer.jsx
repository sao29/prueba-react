import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5container-fluid bg-primary bg-gradient text-white' style={{minHeight: "12rem"}}>
        <div className='row pt-4 text-center'>
            {/* create 3 column */}
            <div className='col-lg-4 col-md-4 col-sm-12 '>
                <h4>links</h4>
                <div className='d-flex mb-2 flex-column align-items-evenly  '>
                    <a href='/' className='text-white p-1'>About</a>
                    <a href='/' className='text-white p-1'>Our post</a>
                    <a href='/' className='text-white p-1'>Our team</a>
                    <a href='/' className='text-white p-1'>contact</a>
                </div>
            </div>
            <div className='mb-2 col-lg-4 col-md-4 col-sm-12 '>
            <h4>Newsletter</h4>
            <div style={{minHeight: "8rem"}} className='d-flex flex-column justify-content-around  '>
                   <input placeholder='subscibre to the newsletter' type="text" className='form-control'></input>
                   <button className='btn btn-warning'>Subscribe</button>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 '>
            <h4>Contact Adress</h4>
            <div className='d-flex flex-column'>
                <p><i class="px-1 fa-solid fa-location-dot"> </i> Pról, Av. Alvaro Obregon</p>
                <p>Nogales, Sonora</p>
                <p>Mexico , 84066 </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer