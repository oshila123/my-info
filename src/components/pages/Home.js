import React from 'react';

const Home = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div className='text-center'>
        <h1>Welcome</h1>
        <p>I am Oshila IShitha Gunerathne. 26 years old.</p>
        <p className='lead '>
          Innovative BSc. (Hons) in Computer Science Graduated from University
          College Dublin, Ireland with Second Class Honours of 2.98 GPA.
        </p>

        <p>
          This website is build with the simple <u>React JS</u> with Bootstrap.
        </p>
        {/* <img src='cover.jpg' alt='cover pic' className='img-fluid' /> */}

        <h4 className='pb-4'>Working Experince</h4>

        <h4>
          Web Designer @{' '}
          <a
            href='https://www.lankabell.com/'
            rel='noopener noreferrer'
            target='_blank'
            className='text-decoration-none'>
            Lanke Bell Limited.
          </a>
        </h4>
      </div>
      <p className='text-justify'>
        I was the Web Desinger for Lanka Bell Limited during the time period of
        2018 October - 2019 July.
      </p>
      <p>During that period, I have involved with the following projects.</p>

      <ul>
        <dl>
          <ul>
            <li>
              <a
                href='https://www.lankabell.com/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Lanka Bell Cooperate Web Site.
              </a>
            </li>
            <li className=''>Upcoming SMS Portal.</li>
            <li>Upcoming Universal (4G / CDMA / SMS) Portal.</li>
            <li>Internal Website called Intranet.</li>
          </ul>
        </dl>
      </ul>
      <p className='text-justify'>
        And Several other. All the projects that I have invloved in Lanka Bell
        by Front End only.
      </p>

      <h4 className='text-center'>
        Software Engineer (Intern) @{' '}
        <a
          href='https://twcinnovations.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='text-decoration-none'>
          TWC Innovations (Pvt) Ltd.
        </a>
      </h4>
      <p className='text-justify'>
        I was a Software Engineer (Intern) in the TWC Innovations during the
        time period of 2017 December - 2018 July.
      </p>
      <p>
        Following are few projects that I involved during the time in TWC
        Innovations.
      </p>
      <ul>
        <dl>
          <ul>
            <li>
              <a
                href='http://www.hyundai.lk/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Hyundai Lanka Web Site.
              </a>
            </li>
            <li>
              <a
                href='http://www.threesinha.lk/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Three Sinha Web Site.
              </a>
            </li>
            <li>
              <a
                href='http://www.venoragroup.com/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Venora Group Web Site.
              </a>
            </li>
            <li>
              <a
                href='http://fslga.lk/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Federation of Sri Lankan Local Government Authorities.
              </a>
            </li>
            <li>
              <a
                href='http://cartec.lk/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Cartec Trading Web Site
              </a>
            </li>
          </ul>
        </dl>
      </ul>
      <p className='text-justify'>
        And several other web sites. Full Stack web development, both Frontend
        and Backend.
      </p>
    </div>
  );
};

export default Home;
