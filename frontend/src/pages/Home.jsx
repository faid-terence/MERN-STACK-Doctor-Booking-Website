import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
export const Home = () => {
  return (
    <>
      {/**hero section start */}

        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life
                  </h1>
                  <p className="text_para">
                    Welcome to our website, where we make booking doctors easy
                    and hassle-free. Take control of your health by scheduling
                    appointments with top-notch healthcare professionals in just
                    a few clicks. With our user-friendly platform and real-time
                    availability updates, finding the right doctor has never
                    been simpler. Experience the convenience of accessing
                    quality healthcare at your fingertips and embark on your
                    journey to a healthier, happier life today.{" "}
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                    <p className="text_para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                    <p className="text_para">Clinic Locations</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                    <p className="text_para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/**hero Content */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img src={heroImg01} className='w-full' alt="" />
                </div>
                <div className='mt-[30px]'>
                  <img src={heroImg02} className='w-full mb-[30px]' alt="" />
                  <img src={heroImg03} className='w-full' alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**hero section end */}
    </>
  );
};
