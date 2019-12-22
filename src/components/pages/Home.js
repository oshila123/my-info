import React from 'react';

const Home = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div className='text-center'>
        <h1>Welcome</h1>
        <p>I am Oshila IShitha Gunerathne. 26 years old.</p>
        <p className='lead '>
          Innovative BSc. (Hons) in Computer Science Graduated from{' '}
          <em>
            <abbr title='click here to visit UCD Web site'>
              <a
                href='http://www.ucd.ie/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none '>
                {' '}
                University College Dublin, Ireland{' '}
              </a>
            </abbr>
          </em>{' '}
          with Second Class Honours of 2.98 GPA.
        </p>

        <p>
          This website is build with the simple <u>React JS</u> with Bootstrap.
        </p>
        {/* <img src='cover.jpg' alt='cover pic' className='img-fluid' /> */}

        <h4 className='pb-4'>Working Experince</h4>

        <h4>
          Web Designer @{' '}
          <abbr title='click here to visit Lanka Bell Web site'>
            <a
              href='https://www.lankabell.com/'
              rel='noopener noreferrer'
              target='_blank'
              className='text-decoration-none'>
              Lanke Bell Limited.
            </a>
          </abbr>
        </h4>
      </div>
      <p className='text-justify'>
        I was the Web Desinger for Lanka Bell Limited during the time period of
        2018 October - 2019 July.
      </p>
      <p>During that period, I was responsible for following projects.</p>

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
            <li>Upcoming Universal (4G / CDMA ) Portal.</li>
            <li>Internal Website called Intranet.</li>
          </ul>
        </dl>
      </ul>
      <p className='text-justify'>
        And more with day today activities. All the projects that I have
        invloved in Lanka Bell were Frontend only.
      </p>

      <h4 className='text-center'>
        Software Engineer (Intern) @{' '}
        <abbr title='click here to visit TWC Web site'>
          <a
            href='https://twcinnovations.com/'
            rel='noopener noreferrer'
            target='_blank'
            className='text-decoration-none'>
            TWC Innovations (Pvt) Ltd.
          </a>
        </abbr>
      </h4>
      <p className='text-justify'>
        I was a Software Engineer (Intern) in the TWC Innovations during the
        time period of 2017 December - 2018 July.
      </p>
      <p>
        Following were the few projects that I was responsible during the time
        in TWC Innovations.
      </p>
      <ul>
        <dl>
          <ul>
            <li>
              <em>
                <abbr title='click here to visit Hundai Lanka Web site'>
                  <a
                    href='http://www.hyundai.lk/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-decoration-none'>
                    Hyundai Lanka Web Site.
                  </a>
                </abbr>
              </em>
            </li>
            <li>
              <em>
                <abbr title='click here to visit Three Sinha Web site'>
                  <a
                    href='http://www.threesinha.lk/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-decoration-none'>
                    Three Sinha Web Site.
                  </a>
                </abbr>
              </em>
            </li>
            <li>
              <em>
                <abbr title='click here to visit Venora Group Web site'>
                  <a
                    href='http://www.venoragroup.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-decoration-none'>
                    Venora Group Web Site.
                  </a>
                </abbr>
              </em>{' '}
              And It's Sub company web sites.
            </li>
            <li>
              <em>
                <abbr title='click here to visit FSLGA Web site'>
                  <a
                    href='http://fslga.lk/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-decoration-none'>
                    Federation of Sri Lankan Local Government Authorities.
                  </a>
                </abbr>
              </em>
            </li>
            <li>
              <em>
                <abbr title='click here to visit Cartec Web site'>
                  <a
                    href='http://cartec.lk/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-decoration-none'>
                    Cartec Trading Web Site.
                  </a>
                </abbr>
              </em>
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
