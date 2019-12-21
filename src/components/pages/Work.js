import React from 'react';

const Work = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <h4 className='text-center'>Projects that I have worked my self</h4>

      <p className='pt-4 text-justify'>
        The below project was actually I created for a business request. PHP
        used for this and{' '}
        <a
          href='https://cakephp.org/'
          rel='noopener noreferrer'
          target='_blank'
          className='text-decoration-none'>
          CakePHP
        </a>{' '}
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
        table
      </p>

      <ul>
        <dl>
          <ul>
            <li>
              <a
                href='http://learners.rf.gd/login'
                rel='noopener noreferrer'
                target='_blank'
                className='text-decoration-none'>
                Learners App
              </a>
            </li>
          </ul>
        </dl>
      </ul>

      <p className='text-justify'>
        It was developed to use for driving teaching schools/institute
        (Learners). The hosted service is a free service.
      </p>

      <details className='d-inline-flex'>
        <summary className='text-secondary'>
          Issues in free hosting Server
        </summary>
        <p className='text-justify'>
          As the hosting site is free service, when the users reach more than
          the limited capacity per day, server is automatically blocked the web
          site. So web site may suspended for 24h after that. Please note that,
          that is not an error of the web application.
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
          <a
            href='https://github.com/oshila123/adv-blog-app'
            rel='noopener noreferrer'
            target='_blank'
            className='text-decoration-none '>
            Advertisement App . (a Github project)
          </a>
        </li>
        <p className='text-justify'>
          This project was based on the Tutorial{' '}
          <a
            href='https://www.udemy.com/course/react-redux/'
            rel='noopener noreferrer'
            target='_blank'
            className='text-decoration-none text-uppercase '>
            Modern React with Redux [2019 Update]
          </a>{' '}
          with some modification. For that project React JS, Redux, JSON Server
          are the major. Redux used. Couldn't Deploy this project due to unable
          to find a hosting service which supports JSON Server live with the
          current situation of the project.
        </p>
        <details className='d-inline-flex'>
          <summary className='text-secondary'>More Information</summary>
          <p className='text-justify'>
            {' '}
            To Work on it, either clone or download the project. read
            'README.md' file for installation process.{' '}
            <i>
              Usually I am not creating public projects in Github. This is
              because I couldn't deploy it.{' '}
            </i>
          </p>
        </details>
        <p></p>

        <li>
          <a
            href='https://oshila-ecommerce.herokuapp.com'
            rel='noopener noreferrer'
            target='_blank'
            className='text-decoration-none'>
            E-Commerce App
          </a>
          <p className='text-justify'>
            This is the biggest project I have done so far. React JS, Firebase
            are the main features used in this project. This is based on the
            tutorial{' '}
            <a
              href='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'
              rel='noopener noreferrer'
              target='_blank'
              className='text-decoration-none text-uppercase'>
              Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL) .
            </a>{' '}
            a complete e-commerce web site. But unfortunately I didn't complete
            the entire course just to save my time. This is an advanced course.
            I just need the basic level and medium level as I am just new to the
            React JS.
          </p>
          <p></p>
        </li>
        <li>
          <a
            href='https://oshila-contact-keeper.herokuapp.com'
            rel='noopener noreferrer'
            target='_blank'
            className='text-decoration-none'>
            Contact Keeper App
          </a>
          <p className='text-justify'>
            This app is based on the tutorial{' '}
            <a
              href='https://www.udemy.com/course/modern-react-front-to-back'
              rel='noopener noreferrer'
              target='_blank'
              className='text-decoration-none text-uppercase'>
              React Front To Back 2019
            </a>
          </p>
          <p>React Context API used. NodeJS used for the back end</p>
        </li>
      </ul>
    </div>
  );
};

export default Work;
