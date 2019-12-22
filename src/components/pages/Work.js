import React from 'react';

const Work = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <h4 className='text-center'>Few projects that I engaged</h4>

      <p className='pt-4 text-justify'>
        The below project was actually I created for a business request. PHP
        used for this and{' '}
        <em>
          <abbr title='click here to visit CakePHP Web site'>
            <a
              href='https://cakephp.org/'
              rel='noopener noreferrer'
              target='_blank'
              className='text-decoration-none'>
              CakePHP
            </a>
          </abbr>
        </em>{' '}
        is the framework I selected to do the project for the backend. In the
        frontend, used{' '}
        <a
          href='https://datatables.net/'
          rel='noopener noreferrer'
          target='_blank'
          className='text-decoration-none'>
          DataTables
        </a>{' '}
        As it filter data quickly throughout the all the pages in paginated data
        table.
      </p>

      <ul>
        <dl>
          <ul>
            <li>
              <em>
                <abbr title='click here to visit Learners Web App'>
                  <a
                    href='http://learners.rf.gd/login'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-decoration-none'>
                    Learners App
                  </a>
                </abbr>
              </em>
            </li>
          </ul>
        </dl>
      </ul>

      <p className='text-justify'>
        It was developed to use for driving teaching schools/institute
        (Learners). The hosted service is a free service.
      </p>

      <details className='pb-2'>
        <summary className='text-secondary'>
          Issues in free hosting Server
        </summary>
        <p className='text-justify font-italic'>
          As the hosting site is free service, when the users reach more than
          the limited capacity per day, server is automatically blocked the web
          site. So web site may suspended for 24h after that. Please note that,
          that is not an error of the web application.
        </p>
        <p className='text-justify font-italic'>
          This is the version 1. It's really difficult to update the code files
          or Database structure modification in this server.
        </p>
      </details>
      <p></p>

      <p>
        I build and designed that entire application myself. It has capabilities
        of
      </p>
      <ul>
        <dl>
          <ul>
            <li>Multi user access</li>
            <li>
              Separate data view for relevant user's data (idividual user get's
              that user's data only){' '}
            </li>
            <li>Admin / User privileges</li>
          </ul>
        </dl>
      </ul>

      <h4 className='pb-4'>Following are created while Following tutorials</h4>

      <ul>
        <li>
          <em>
            <abbr title='click here to visit Advertisement Web App'>
              <a
                href='https://github.com/oshila123/adv-blog-app'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none '>
                Advertisement App . (a Github project)
              </a>
            </abbr>
          </em>
        </li>
        <p className='text-justify'>
          This project was based on the Tutorial{' '}
          <em>
            <abbr title='click here to visit Modern React with Redux [2019 Update] Tutorial'>
              <a
                href='https://www.udemy.com/course/react-redux/'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none text-uppercase '>
                Modern React with Redux [2019 Update]
              </a>
            </abbr>
          </em>{' '}
          with some modification. For that project React JS, Redux, JSON Server
          are the major. Redux used.
        </p>
        <details className=''>
          <summary className='text-secondary'>More Information</summary>
          <p className='text-justify font-italic'>
            {' '}
            Couldn't Deploy this project due to unable to find a hosting service
            which supports JSON Server live with the current situation of the
            project. To Work on it, either clone or download the project. read
            'README.md' file for installation process.{' '}
          </p>
        </details>
        <p></p>

        <li>
          <em>
            <abbr title='click here to visit E-Commerve Web App'>
              <a
                href='https://oshila-ecommerce.herokuapp.com'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                E-Commerce App
              </a>
            </abbr>
          </em>
          <p className='text-justify'>
            This is the biggest project I have done so far. React JS, Firebase
            are the main features used in this project. This is based on the
            tutorial{' '}
            <em>
              <abbr title='click here to visit Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL) Tutorial'>
                <a
                  href='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='text-decoration-none text-uppercase'>
                  Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL) .
                </a>
              </abbr>
            </em>{' '}
            a complete e-commerce web site. But I didn't go through the entire
            course just to save my time as this project is an advanced course. I
            just need the basic level and medium level as I am just new to the
            React JS. Just to prove my capabilities.
          </p>
          <p></p>
        </li>
        <li>
          <em>
            <abbr title='click here to visit Contact Keeper Web App'>
              <a
                href='https://oshila-contact-keeper.herokuapp.com'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Contact Keeper App
              </a>
            </abbr>
          </em>
          <p className='text-justify'>
            This app is based on the tutorial{' '}
            <em>
              <abbr title='click here to visit React Front To Back 2019 Tutorial'>
                <a
                  href='https://www.udemy.com/course/modern-react-front-to-back'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='text-decoration-none text-uppercase'>
                  React Front To Back 2019
                </a>
              </abbr>
            </em>
          </p>
          <p>React Context API used. NodeJS used for the back end</p>
        </li>
      </ul>
    </div>
  );
};

export default Work;
