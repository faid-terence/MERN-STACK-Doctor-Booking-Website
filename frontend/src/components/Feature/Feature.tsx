import React from 'react'
import {Link} from 'react-router-dom'

export const Feature = () => {
  return (
    <section>
        <div className="container">
            <div className='flex items-center justify-between flex-col lg:flex-row'>
                <div className='xl:w-[670px]'>
                    <h2 className='heading'>Get Virtual treatment <br/>anytime.</h2>
                    <ul className='pl-4'>
                        <li className='text_para'>1.Schedule the appointment directly.</li>
                        <li className='text_para'>2. Search for your physcian here, and contact their office.</li>
                        <li className='text_para'>3. View our physcians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
                        <Link to='/'><button className='btn'>Learn More</button></Link>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
