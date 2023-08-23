import React from 'react';
import ReactDOM from 'react-dom/client';
import './mystyle.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MenuLink(props) {
  let active = '';
  if (props.active !== undefined)
    active = 'active';
  return (<li className="nav-item">
    <a className={"nav-link fs-4 " + active} href={props.link}>{props.text}</a>
  </li>)
}
function SliderButton(props) {
  return (<button type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide-to={props.position} />);
}
function SliderItem(props) {
  let active = '';
  if (props.active !== undefined)
    active = 'active';
  return (<div className={"carousel-item " + active}>
    <img src={props.image} className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h5>{props.heading}</h5>
      <p>{props.text}</p>
    </div>
  </div>)
}
function AccordionItem(props) {
  return (<div className="accordion-item">
    <h2 className="accordion-header" id={props.id}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.target} aria-expanded="false" aria-controls={props.target}>
        {props.title}
      </button>
    </h2>
    <div id={props.target} className="accordion-collapse collapse show" aria-labelledby={props.id} data-bs-parent="#accordionBasic">
      <div className="accordion-body">
        {props.detail}
      </div>
    </div>
  </div>);
}
function ProgramItem(props) {
 

  return ( <div className="col-lg-4">
  <div className="card program-card shadow-lg text-bg-danger">
    <div className="card-header text-bg-danger">
      <h3 className="text-uppercase fw-bold">{props.title}</h3>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item text-bg-danger">{props.detail}</li>
    </ul>
    <ul className="list-group list-group-flush">
      <li className="list-group-item text-bg-danger">{props.points}</li>
    </ul>
  </div>
</div>);
}
function Site() {
  return (<div>
    {/* banner (responsive menu) */}
    <nav className="navbar navbar-expand-xl bg-warning shadow fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white h3" href="#">
          <img src="images/logo.png" height="70px" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show justify-content-end" id="navbarDark">
          <ul className="navbar-nav mb-2 mb-xl-0">
            <MenuLink link='#slide' text='Home' active='active' />
            <MenuLink link='#aboutus' text='About us' />
            <MenuLink link='#program' text='Program' />
            <MenuLink link='#testimonials' text='Testimonials' />
            <MenuLink link='#gallary' text='Gallary' />
            <MenuLink link='#video' text='Videos' />
            <MenuLink link='#admission' text='admission' />
            <MenuLink link='#footer' text='Contact us' />
          </ul>
        </div>
      </div>
    </nav>
    {/* banner (responsive menu) */}
    {/* slider */}
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" />
        <SliderButton position='1' />
        <SliderButton position='2' />
        <SliderButton position='3' />
      </div>
      <div class="carousel-inner">
        <SliderItem image="images/slider-1.jpg" heading='first slide label' text='Some representative placeholder content for the first slide.' active='active' />
        <SliderItem image="images/slider-2.jpg" heading='second slide label' text='Some representative placeholder content for the second slide.' />
        <SliderItem image="images/slider-3.jpg" heading='third slide label' text='Some representative placeholder content for the third slide.' />
        <SliderItem image="images/slider-4.jpg" heading='fourth slide label' text='Some representative placeholder content for the fourth slide.' />
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* slider */}
    <div className="container">
      {/* about us */}
      <div className="row py-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 fs-5">
                  <h3 className="border-bottom pb-3">About us</h3>
                  At Khelaghar, we believe in providing a warm and stimulating environment where children can
                  embark on a journey of growth, learning, and exploration. With a team of dedicated educators and
                  a child-centric approach. We strive to create a foundation that will support your child's
                  holistic development.
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-8">
                  <div className="accordion" id="accordionBasic">
                    <AccordionItem id="headingOne" target="collapseOne" title="Our Philosophy: " detail=" We understand that every child is unique and possesses their own set of talents, abilities, and interests. Our philosophy is rooted in fostering a love for learning while nurturing each child's individuality. We believe in creating an inclusive and joyful space where children can develop socially, emotionally physically, and intellectually." />

                    <AccordionItem id="headingTwo" target="collapseTwo" title=" Holistic Development:" detail=" At Khelaghar, we emphasize holistic development by providing a balanced curriculum that addresses all aspects of a child's growth. Our programs focus on enhancing social skills, cognitive development, creativity, physical well-being, and language proficiency. Through  engaging activities and play-based learning, we aim to ignite curiosity, critical thinking, and a lifelong love for learning in each child." />
                    <AccordionItem id="headingThree" target="collapseThree" title=" Qualified and Caring Educators:" detail=" Our passionate and experienced educators are dedicated to creating a safe and supportive environment for your child. They foster positive relationships, ensuring that each child feels
                    valued and respected. Our educators are trained in early childhood education methodologies and strive to provide individualized attention to meet the unique needs of every child." />
                    <AccordionItem id="headingFour" target="collapseFour" title=" Engaging Curriculum:" detail="  We have carefully designed our curriculum to provide a rich and diverse learning experience. curriculum incorporates a blend of structured activities, interactive play, and hands-on         experiences that encourage exploration and discovery. We integrate various subjects, including language development, numeracy, science, arts, and music, to create a well-rounded educational" />
                    <AccordionItem id="headingFive" target="collapseFive" title="            Safe and Stimulating Environment:" detail=" At Khelaghar, we prioritize the safety and well-being of your child. Our premises are equipped with child-friendly facilities, age-appropriate resources, and secure outdoor spaces where children can engage in physical activities and develop gross motor skills. We maintain high standards of hygiene and adhere to safety protocols to ensure a healthy environment for  all." />
                    <AccordionItem id="headingsix" target="collapsesix" title="Parent Partnership:" detail="We believe that parents play an essential role in their child's education. We encourage open communication and value the partnership between parents and educators. We provide regular
                    updates on your child's progress and conduct parent-teacher meetings, workshops, and events to  foster collaboration and support your child's development holistically. Join us at Khelaghar and give your child a joyful and enriching start to their educational journey. Together, let's nurture their potential, celebrate their achievements, and create  memories that will last a lifetime.Contact us today to schedule a visit and discover the wonders awaiting your child at Khelaghar." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-fluid bg-light p-4 shadow">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-uppercase my-3 fw-bold">Programs</h3>
        </div>
      </div>
      {/* program */}
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <ProgramItem title='Nursery' detail='At the nursery level, children participate in school preparation and theme-based activities designed to cultivate reading, writing, counting, number recognition, and problem-solving skills. These engaging activities are carried out in a enjoyable yet purposeful manner.' 
            points={[<ul><li>'Age Group'</li><li>'2.5 - 3.5 Years*'</li><li>'Duration'</li><li>'2 hours 45 minutes/day'</li></ul>]} />
           
            <div className="col-lg-4">
              <div className="card program-card shadow-lg text-bg-success">
                <div className="card-header text-bg-success">
                  <h3 className="text-uppercase fw-bold"></h3>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-bg-success"></li>
                  <li className="list-group-item text-bg-success fw-bold"></li>
                  <li className="list-group-item text-bg-success"> </li>
                  <li className="list-group-item text-bg-success fw-bold"> </li>
                  <li className="list-group-item text-bg-success">  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card program-card shadow-lg text-bg-primary">
                <div className="card-header text-bg-primary">
                  <h3 className="text-uppercase fw-bold">Kindergarden</h3>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-bg-primary">Kindergarten is a preschool educational approach based on playing, singing, practical activities such as drawing, and social interaction as part of the transition from home to school. </li>
                  <li className="list-group-item text-bg-primary fw-bold">Age Group</li>
                  <li className="list-group-item text-bg-primary fw-bold"> Junior K.G.*</li>
                  <li className="list-group-item text-bg-primary">3.5 - 4.5 Years*</li>
                  <li className="list-group-item text-bg-primary fw-bold"> Senior K.G.</li>
                  <li className="list-group-item text-bg-primary">4.5 - 5.5 </li>
                  <li className="list-group-item text-bg-primary fw-bold"> Duration</li>
                  <li className="list-group-item text-bg-primary"> 2 hours 45 minutes/day </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center text-uppercase my-3 fw-bold">testimonials</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="container ">
      <section id="testim" className="testim">
        <div className="testim-cover">
          <div className="wrap">
            <span id="right-arrow" className="arrow right fa fa-chevron-right" />
            <span id="left-arrow" className="arrow left fa fa-chevron-left " />
            <ul id="testim-dots" className="dots">
              <li className="dot active" />{/*
                            */}
              <li className="dot" />{/*
                            */}
              <li className="dot" />{/*
                            */}
              <li className="dot" />{/*
                            */}
              <li className="dot" />
            </ul>
            <div id="testim-content" className="cont">
              <div className="active">
                <div className="img">
                  <img src="images/client-1.jpg" alt /></div>
                <h2>Ramkumar Patel</h2>
                <p>"Sending our baby girl to the kids nursery has been an absolute blessing. The caring and nurturing environment provided by the teachers and staff have made her feel right at home. We've witnessed tremendous growth in her social skills, creativity, and overall confidence. We couldn't be happier with our decision to enroll her in this wonderful nursery."</p>
              </div>
              <div>
                <div className="img"><img src="images/client-2.jpg" alt /></div>
                <h2>Mrs. Laxmi Mehta</h2>
                <p> "We couldn't have asked for a better place for our little princess to start her educational journey. The kids nursery has created a safe and stimulating environment where our daughter has thrived. The teachers go above and beyond to ensure she receives personalized attention and guidance. It's truly heartwarming to see her excitement and love for learning blossom every day."</p>
              </div>
              <div>
                <div className="img"><img src="images/client-3.jpg" alt /></div>
                <h2>Mrs. kamla sinha</h2>
                <p>"The kids nursery has been a magical place for our grand child. The dedicated teachers have a genuine passion for early childhood education, and it shows in the way they engage and inspire the children. Our grand child has developed a love for reading, counting, and exploring the world around her. We're grateful for the wonderful foundation this nursery has provided for her future academic success."</p>
              </div>
              <div>
                <div className="img"><img src="images/client-4.jpg" alt /></div>
                <h2>Mr Bahadursinh chavda</h2>
                <p>"As grandparents, we were initially worried about finding the perfect nursery for our little grand child. However, from the moment we stepped into the kids nursery, all our concerns vanished. The friendly atmosphere, well-designed curriculum, and emphasis on both academic and emotional development have exceeded our expectations. Our grand child is thriving, making friends, and building a strong educational foundation, thanks to the dedicated team at this nursery." </p>
              </div>
              <div>
                <div className="img"><img src="images/client-2.jpg" alt /></div>
                <h2>Mrs. Neela shah</h2>
                <p> "We couldn't have asked for a better place for our little princess to start her educational journey. The kids nursery has created a safe and stimulating environment where our daughter has thrived. The teachers go above and beyond to ensure she receives personalized attention and guidance. It's truly heartwarming to see her excitement and love for learning blossom every day."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="container-fluid bg-light p-4 shadow">
      <div className="row">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center text-uppercase my-3 fw-bold">Video</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <iframe src="https://www.youtube.com/embed/5EYwLRCOMBM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={500} height={315} frameBorder={0} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <iframe src="https://www.youtube.com/embed/5EYwLRCOMBM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={500} height={315} frameBorder={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mb-3 py-5">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-uppercase my-3 fw-bold">Inquiry Form</h3>
        </div>
      </div>
      <form className="row row-cols-lg-auto">
        <div className="col-12">
          <input type="text" className="form-control" id="fullname" name="fullname" placeholder="surname name fathername" required />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" id="childname" name="childname" placeholder="Child name" required />
        </div>
        <div className="col-12">
          <input type="date" className="form-control" id="dob" name="dob" placeholder="Date of birth" required />
        </div>
        <div className="col-12">
          <input type="number" className="form-control" id="mobile" name="mobile" placeholder="Mobile" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-warning">submit</button>
        </div>
      </form>
    </div>
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-10 offset-1 py-5">
          <div className="row">
            <div className="col-lg-3 text-white">
              <h4>Address &amp; Timing</h4>
              <h5 className="fw-bolder">Khelaghar</h5>
              105 - Eva surbhi, opp aksharwadi <br />
              Waghawadi road, <br /> Bhavnagar - 364001 <br />
              08:00 AM to 04:00 PM
            </div>
            <div className="col-lg-3 text-white">
              <h4>Contact Detail</h4>
              9662512857, 9328419274 <br />
              theeasylearn@gmail.com <br />
            </div>
            <div className="col-lg-6">
              <iframe scrolling="no" marginHeight={0} marginWidth={0} src="https://www.openstreetmap.org/export/embed.html?bbox=72.13937391622852%2C21.76110398791978%2C72.14311828001331%2C21.763575106784945&layer=mapnik" style={{ "width": "100%", "height": "300px", "border": "1px solid black" }} frameBorder={0} /><br /><small>
              </small></div><small>
            </small></div><small>
          </small></div><small>
        </small></div><small>
      </small></div><small>
    </small></div>
  );
}
root.render(<Site />);