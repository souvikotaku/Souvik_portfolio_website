import './App.css';
import 'bootstrap';
import './anotherCss.css';
import { Form, Input, Button, notification } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import firebase from './utils/firebase';
import axios from 'axios';
import twinwall from './twinwall.jpg';

const { TextArea } = Input;

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [form] = Form.useForm();

  window.addEventListener('DOMContentLoaded', (event) => {
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  });

  const onFinish = (values) => {
    const formRef = firebase.database().ref('portfolioForm');

    const portfolioform = {
      name,
      email,
      mobile: mobile === '' ? 'NA' : mobile,
      message,
    };

    formRef.push(portfolioform);
    console.log(portfolioform);

    form.resetFields();

    const type = 'success';
    const placement = 'bottomRight';

    const openNotificationWithIcon = () => {
      notification[type]({
        message: 'Form Submitted',
        description: 'Thanks for filling my contact form',
        placement: placement,
      });
    };

    openNotificationWithIcon();

    axios
      .post('https://formsubmit.co/ajax/souvikpunk@gmail.com', portfolioform)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const companyArray = [
    {
      id: 3,
      name: 'KarmaLeague android app',
      img: '/img/portfolio/karmaleague.png',
    },
    { id: 4, name: 'CITIIS', img: '/img/portfolio/citiis.png' },
    { id: 5, name: 'MAARG', img: '/img/portfolio/maarg.png' },
    { id: 6, name: 'MOTHER OF DEMOCRACY', img: '/img/portfolio/mod.png' },
    { id: 7, name: 'SENGOL', img: '/img/portfolio/sengol.png' },
    { id: 8, name: 'SANSAD KI KALA', img: '/img/portfolio/sansad.png' },
    { id: 9, name: 'SANKALA', img: '/img/portfolio/sankala.png' },
    { id: 10, name: 'SENSEZ9', img: '/img/portfolio/sensez.jpg' },
  ];

  const companyModalArray = [
    {
      id: 3,
      name: 'KarmaLeague android app',
      img: '/img/portfolio/karmaleague.png',
      isApp: true,
      description:
        'This is Karma League, a comprehensive social media application similar to Instagram, designed for real-time interaction, content sharing, and user engagement.',
      url: 'https://play.google.com/store/apps/details?id=com.karmaleague.iamversemobileapp',
    },
    {
      id: 4,
      name: 'CITIIS',
      img: '/img/portfolio/citiis.png',
      isApp: false,
      description:
        "This is the website for CITIIS. CITIIS, or the City Investments to Innovate, Integrate and Sustain, is a sub-component of the Government of India's Smart Cities Mission. It is a joint program of the Ministry of Housing and Urban Affairs, Agence Francaise de Development (AFD), the European Union (EU), and the National Institute of Urban Affairs (NIUA).",
      url: 'https://citiis.niua.in/',
    },
    {
      id: 5,
      name: 'MAARG',
      img: '/img/portfolio/maarg.png',
      isApp: false,
      description:
        'This is the website for MAARG. Startup India (MAARG) was launched by Honourable Prime Minister of India, Shri Narendra Modi on 16th January 2016 as a clarion call to the innovators, entrepreneurs, and thinkers of the nation to lead India’s sustainable economic growth and create large-scale employment opportunities. Aimed to make India one of the largest and vigorous startup ecosystems, a 19-point Startup India Action Plan was launched in January 2016, which paved the way for a number of policy initiatives to build a strong, conducive, and growth-oriented environment for Indian startups.',
      url: 'https://maarg.startupindia.gov.in/',
    },
    {
      id: 6,
      name: 'MOTHER OF DEMOCRACY',
      img: '/img/portfolio/mod.png',
      isApp: false,
      description:
        'This is the website for Mother of Democracy. Indian democracy comprises the values of harmony, freedom, acceptability, equality, and inclusivity in society enabling a dignified life for all citizens. As the largest democracy in the world, the people of Bharat institute the central, state, and local governments by means of free and fair elections.',
      url: 'https://bharatmotherofdemocracy.ignca.gov.in/',
    },
    {
      id: 7,
      name: 'SENGOL',
      img: '/img/portfolio/sengol.png',
      isApp: false,
      description:
        'This is the website for Sengol. The Sengol is a sacred symbol to be revered. It represents that the ruler is under the rule of law. It is a reminder that the powers of the ruler are not absolute. The ruler is subject to the higher norm of Dharma. The ruler has to abide by this guiding principle.',
      url: 'https://sengol1947.ignca.gov.in/',
    },
    {
      id: 8,
      name: 'SANSAD KI KALA',
      img: '/img/portfolio/sansad.png',
      isApp: false,
      description:
        'This is the website for Sansad Ki Kala. The Parliament of India is the centre of the collective aspirations of the people of the country. It comprises the Lok Sabha and the Rajya Sabha, and is the assembly of the elected representatives of the people across India.',
      url: 'https://sansadkikala.ignca.gov.in/',
    },
    {
      id: 9,
      name: 'SANKALA',
      img: '/img/portfolio/sankala.png',
      isApp: false,
      description:
        'This is the website for Sankala. The Sankala Foundation is a non-profit organisation registered in 2022 under Section (8) of the Companies Act, 2013 of India. Our primary focus is on further strengthening the knowledge base and promoting dialogue among various stakeholders to foster initiatives that contribute to the sustainability of Planet Earth.',
      url: 'https://sankala.org/',
    },
    {
      id: 10,
      name: 'SENSEZ9',
      img: '/img/portfolio/sensez.jpg',
      isApp: false,
      description:
        'This is the website for Sensez9. Sensez9 is a mission driven company focused on enhancing the care delivery process through technology.',
      url: 'https://sensez9.tech/',
    },
  ];

  const personalArray = [
    {
      id: 3,
      name: 'Movie trailers app',
      img: '/img/portfolio/circus.png',
    },
    {
      id: 5,
      name: 'Ecommerce app (React Native)',
      img: '/img/portfolio/prodappscreen.jpg',
    },
    {
      id: 9,
      name: 'Event listing app',
      img: '/img/portfolio/img8.png',
    },
    {
      id: 10,
      name: 'Pokedex android app (React Native)',
      img: '/img/portfolio/pokeimg1.jpg',
    },
    {
      id: 11,
      name: 'Wikipedia android app (Ionic)',
      img: '/img/portfolio/wiki1.jpg',
    },
    {
      id: 12,
      name: 'News Search android app (React Native)',
      img: '/img/portfolio/news1.jpg',
    },
    {
      id: 13,
      name: 'Silent Hill android app (React Native)',
      img: '/img/portfolio/silenthill1.jpg',
    },
    {
      id: 14,
      name: 'Chat app (React + Firebase)',
      img: '/img/portfolio/chaoschat.png',
    },
    {
      id: 15,
      name: 'Anime simon game app (React)',
      img: '/img/portfolio/simonnew.png',
    },
    {
      id: 16,
      name: 'Car wash/servicing app (React native/node/express/mongo)',
      img: '/img/portfolio/carapp.jpg',
    },
    {
      id: 17,
      name: 'Bwstory clone app (React native/node/express/mongo)',
      img: '/img/portfolio/bwstorythumb.png',
    },
    {
      id: 18,
      name: 'Movie Search Dashboard app (React)',
      img: '/img/portfolio/moviedashback.jpg',
    },
    {
      id: 19,
      name: 'Weather app (React Native)',
      img: '/img/portfolio/weatherthumb.png',
    },
  ];

  const personalModalArray = [
    {
      id: 3,
      name: 'Movie trailers app',
      img: '/img/portfolio/circus.png',
      description:
        "Its a movie search & watch trailers app i made by consuming the API from omdb and youtube. Type the movie name on the search bar, the movie panels would fill out automatically below the search bar. When you hover on the panels you would see the button 'watch trailer', click on the button and then a modal panel would open. On the modal, you can see the youtube video of the trailer.",
      sourceUrl:
        'https://github.com/souvikotaku/movie_search_trailers_app/tree/main/movie_search_trailers_app_code',
      liveUrl: 'https://movie-search-trailers-app.netlify.app/',
    },
    {
      id: 5,
      name: 'Ecommerce app (React Native)',
      img: '/img/portfolio/prodappscreen.jpg',
      description:
        'Its an ecommerce app like amazon that I had made for interview task purpose. The products are coming from a dummy api. Add to cart/Add to favorites functionality working properly. You can download the APK file from the given link and try it out.',
      sourceUrl: 'https://github.com/souvikotaku/product-app',
      liveUrl:
        'https://drive.google.com/file/d/1vmvAFpd4tBzMjvbxOySF583RsSjIN1sB/view?usp=drive_link',
      liveUrlText: 'Apk link',
    },
    {
      id: 9,
      name: 'Event listing app',
      img: '/img/portfolio/img8.png',
      description:
        'Its a simple event listing app i made for interview task purpose. Click on view listing button of any category you like,you would be taken to a listings page with all the events.',
      sourceUrl: 'https://github.com/souvikotaku/simpleReact-eventlisting-app',
      liveUrl: 'https://souvik-event-listing-app.netlify.app/',
    },
    {
      id: 10,
      name: 'Pokedex android app (React Native)',
      img: '/img/portfolio/pokeimg1.jpg',
      description: 'A simple pokedex android app i made using react native.',
      sourceUrl:
        'https://github.com/souvikotaku/souvik_react_native_pokedex_app',
    },
    {
      id: 11,
      name: 'Wikipedia android app (Ionic)',
      img: '/img/portfolio/wiki1.jpg',
      description:
        'Its a wikipedia search android app i created using Ionic framework with react.',
      sourceUrl:
        'https://github.com/souvikotaku/wikisearchandroidapp_ionic_react',
      liveUrl:
        'https://drive.google.com/file/d/1msLIoEYVmjNuyhZRpgJef2vEXTgeqiFo/view?usp=sharing',
      liveUrlText: 'Apk link',
    },
    {
      id: 12,
      name: 'News Search android app (React Native)',
      img: '/img/portfolio/news1.jpg',
      description:
        'Its a news search mobile app i made using Newsapi API with react native. Just enter a topic in the searchbar and click on search articles button to get the news articles.',
      sourceUrl: 'https://github.com/souvikotaku/React-native-newsapp',
    },
    {
      id: 13,
      name: 'Silent Hill android app (React Native)',
      img: '/img/portfolio/silenthill1.jpg',
      description:
        'Its a simple app showing the list and details of various monsters from Silent Hill video game franchise.',
      sourceUrl: 'https://github.com/souvikotaku/silenthillmobileapp',
      liveUrl:
        'https://drive.google.com/file/d/1SF1QVjzxBls6jZqzg09gQrIvnuOunBdy/view?usp=sharing',
      liveUrlText: 'Apk link',
    },
    {
      id: 14,
      name: 'Chat app (React + Firebase)',
      img: '/img/portfolio/chaoschat.png',
      description:
        'Its a simple chat app I made with react on frontend and Firebase on backend. You can login using Google and then join the chat.',
      sourceUrl: 'https://github.com/souvikotaku/chaos-chat-app',
      liveUrl: 'https://chaoschat.netlify.app/',
    },
    {
      id: 15,
      name: 'Anime simon game app (React)',
      img: '/img/portfolio/simonnew.png',
      description:
        'Its a simon game with anime theme that i made for interview purpose.',
      sourceUrl: 'https://github.com/souvikotaku/animesimongame',
      liveUrl: 'https://anime-simon-game.netlify.app/',
    },
    {
      id: 16,
      name: 'Car wash/servicing app (React native/node/express/mongo)',
      img: '/img/portfolio/carapp.jpg',
      description:
        'Its a full stack car wash/servicing app that i made for interview purpose.',
      sourceUrl: 'https://github.com/souvikotaku/carapp',
      liveUrl:
        'https://drive.google.com/file/d/11cU46ol7PsOKnMVbDvAvnJfHga3G1jRp/view?usp=sharing',
      liveUrlText: 'Apk link',
    },
    {
      id: 17,
      name: 'Bwstory clone app (React native/node/express/mongo)',
      img: '/img/portfolio/bwstorythumb.png',
      description:
        'Its a full stack app which is a clone of the bwstory app on play store that i made for interview purpose.',
      sourceUrl: 'https://github.com/souvikotaku/bwstory_clone',
      liveUrl:
        'https://drive.google.com/file/d/1qiP66rhsKWzNkmJ4RMnuKzE5GlRJLgwv/view?usp=drive_link',
      liveUrlText: 'Apk link',
    },
    {
      id: 18,
      name: 'Movie Search Dashboard app (React)',
      img: '/img/portfolio/moviedashback.jpg',
      description:
        'Its a movie search react app which i made for interview purpose.',
      sourceUrl: 'https://github.com/souvikotaku/movienewapp',
      liveUrl: 'https://moviedashboardsearch.netlify.app/',
    },
    {
      id: 19,
      name: 'Weather app (React Native)',
      img: '/img/portfolio/weatherthumb.png',
      description:
        'Its a weather app which i made using react native for interview purpose.',
      sourceUrl: 'https://github.com/souvikotaku/expo-weatherapp',
      liveUrl:
        'https://drive.google.com/file/d/1qWZ3ygD9ZIi2R_b3Q0B0tOm4asrgJTmG/view?usp=sharing',
      liveUrlText: 'Apk link',
    },
  ];

  return (
    <div className='App' style={{ background: '#9ACD32' }}>
      <nav
        className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top'
        id='mainNav'
      >
        <div className='container'>
          <a className='navbar-brand' href='#page-top'>
            Souvik Das
          </a>
          <button
            className='navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu
            <i className='fas fa-bars' />
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded'
                  href='#portfolio'
                >
                  Portfolio
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a className='nav-link py-3 px-0 px-lg-3 rounded' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded'
                  href='#contact'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className='masthead bg-primary text-white text-center'
        style={{ paddingBottom: '0rem', paddingTop: '0rem' }}
      >
        <div
          className='container d-flex align-items-center flex-column'
          style={{
            backgroundImage: `url(${twinwall})`,
            backgroundSize: 'contain',
            maxWidth: '100%',
            paddingBottom: '6rem',
            paddingTop: '8rem',
          }}
        >
          <div
            id='profileDiv'
            style={{
              height: '100%',
              background: '#c31432',
              background: '-webkit-linear-gradient(to right, #240b36, #c31432)',
              background: 'linear-gradient(to right, #240b36, #c31432)',
              boxShadow: '0px 0px 10px rgba(0,0,0,0.7)',
              borderRadius: '10px',
              padding: '10px',
            }}
          >
            <img
              className='masthead-avatar mb-5'
              src='/img/portfolio/mypic.jpg'
              alt='...'
              style={{ borderRadius: '8rem' }}
            />
            <h1
              className='masthead-heading text-uppercase mb-0'
              style={{ color: 'white' }}
            >
              Souvik Das
            </h1>
            <div className='divider-custom divider-light'>
              <div className='divider-custom-line' />
              <div className='divider-custom-icon'>
                <i className='fas fa-skull' />
              </div>
              <div className='divider-custom-line' />
            </div>
            <p
              className='masthead-subheading font-weight-light mb-0'
              style={{ color: 'white' }}
            >
              Web/Javascript/Frontend Developer
            </p>
            <p
              className='masthead-subheading font-weight-light mb-0'
              style={{ color: 'white' }}
            >
              Check out my{' '}
              <a href='https://github.com/souvikotaku'>
                <i>Github</i>
              </a>
            </p>
          </div>
        </div>
      </header>

      <section
        className='page-section portfolio'
        id='portfolio'
        style={{ paddingBottom: '0px' }}
      >
        <div className='container companyprojects'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
            Company Projects
          </h2>
          <div className='divider-custom'>
            <div className='divider-custom-line' />
            <div className='divider-custom-icon'>
              <i className='fas fa-skull-crossbones' />
            </div>
            <div className='divider-custom-line' />
          </div>
          <div
            className='row justify-content-center'
            style={{ height: '650px', overflow: 'scroll', overflowX: 'hidden' }}
          >
            {companyArray?.map((item, index) => (
              <div className='col-md-6 col-lg-4 mb-5' key={index}>
                <div
                  className='portfolio-item mx-auto'
                  data-bs-toggle='modal'
                  data-bs-target={`#portfolioModal${item?.id}company`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                >
                  <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                    <div className='portfolio-item-caption-content text-center text-white'>
                      <p>{item?.name}</p>
                      <i className='fas fa-plus fa-3x' />
                    </div>
                  </div>
                  <img className='img-fluid' src={item?.img} alt='...' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='page-section portfolio' id='portfolio'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
            Personal Projects
          </h2>
          <div className='divider-custom'>
            <div className='divider-custom-line' />
            <div className='divider-custom-icon'>
              <i className='fas fa-skull-crossbones' />
            </div>
            <div className='divider-custom-line' />
          </div>
          <div
            className='row justify-content-center'
            style={{ height: '650px', overflow: 'scroll', overflowX: 'hidden' }}
          >
            {personalArray?.map((item, index) => (
              <div className='col-md-6 col-lg-4 mb-5' key={index}>
                <div
                  className='portfolio-item mx-auto'
                  data-bs-toggle='modal'
                  data-bs-target={`#portfolioModal${item?.id}`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                >
                  <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                    <div className='portfolio-item-caption-content text-center text-white'>
                      <p>{item?.name}</p>
                      <i className='fas fa-plus fa-3x' />
                    </div>
                  </div>
                  <img className='img-fluid' src={item?.img} alt='...' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className='bg-primary text-white mb-0'
        id='about'
        style={{
          background:
            'url(https://www.desktopbackground.org/download/2560x1440/2012/02/14/343740_vector-xray-hipster-characters-jthree-concepts-jared_2560x1600_h.jpg)',
        }}
      >
        <div
          className='container'
          style={{
            background: 'rgba(0,0,0,0.7)',
            maxWidth: '100%',
            height: '100%',
            paddingTop: '7rem',
            paddingBottom: '7rem',
          }}
        >
          <h2 className='page-section-heading text-center text-uppercase text-white'>
            About
          </h2>
          <div className='divider-custom divider-light'>
            <div className='divider-custom-line' />
            <div className='divider-custom-icon'>
              <i className='fas fa-star' />
            </div>
            <div className='divider-custom-line' />
          </div>
          <div className='row'>
            <div className='col-lg-4 ms-auto'>
              <p className='lead'>
                I am a react/frontend developer with more than 5 years of
                experience.
              </p>
            </div>
            <div className='col-lg-4 me-auto'>
              <p className='lead'>
                I can work with UI logic and frontend design
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='page-section' id='contact'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
            Contact Me
          </h2>
          <div className='divider-custom'>
            <div className='divider-custom-line' />
            <div className='divider-custom-icon'>
              <i className='fas fa-star' />
            </div>
            <div className='divider-custom-line' />
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-xl-7'>
              <Form
                form={form}
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name='name'
                  rules={[
                    { required: true, message: 'Please enter your name!' },
                  ]}
                >
                  <Input
                    placeholder='Name'
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    style={{ height: '4rem', fontSize: '33px' }}
                  />
                </Form.Item>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your email!',
                      type: 'email',
                    },
                  ]}
                >
                  <Input
                    placeholder='Email'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    style={{ height: '4rem', fontSize: '33px' }}
                  />
                </Form.Item>
                <Form.Item
                  name='phonenumber'
                  rules={[{ message: 'Please enter your mobile number!' }]}
                >
                  <Input
                    placeholder='Mobile No. (Optional)'
                    onChange={(event) => setMobile(event.target.value)}
                    value={mobile}
                    style={{ height: '4rem', fontSize: '33px' }}
                  />
                </Form.Item>
                <Form.Item
                  name='message'
                  rules={[
                    { required: true, message: 'Please enter your message!' },
                  ]}
                >
                  <TextArea
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    placeholder='Message'
                    style={{ height: '10rem', fontSize: '33px' }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    size={'large'}
                    style={{ height: '4rem', fontSize: '33px', width: '100%' }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Location</h4>
              <p className='lead mb-0'>Kolkata, West Bengal</p>
            </div>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Around the Web</h4>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://www.facebook.com/souviksvartblod/'
                target='_blank'
              >
                <i className='fab fa-fw fa-facebook-f' />
              </a>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://github.com/souvikotaku'
                target='_blank'
              >
                <i className='fab fa-fw fa-github' />
              </a>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://www.linkedin.com/in/souvik-das-42139220/'
                target='_blank'
              >
                <i className='fab fa-fw fa-linkedin-in' />
              </a>
              <a
                className='btn btn-outline-light btn-social mx-1'
                href='https://www.instagram.com/souvikotaku/'
                target='_blank'
              >
                <i className='fab fa-fw fa-instagram' />
              </a>
            </div>
            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>About Souvik</h4>
              <p className='lead mb-0'>
                Frontend/javascript developer
                <br />
                <i className='fa fa-envelope' /> souvikpunk@gmail.com
                <br />
                <i className='fa fa-phone' /> 9123332112
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className='copyright py-4 text-center text-white'>
        <div className='container'>
          <small>Copyright © Souvik Das 2021</small>
        </div>
      </div>

      {companyModalArray?.map((item, index) => (
        <div
          className='portfolio-modal modal fade'
          id={`portfolioModal${item?.id}company`}
          tabIndex={-1}
          aria-labelledby={`portfolioModal${item?.id}company`}
          aria-hidden='true'
          key={index}
        >
          <div className='modal-dialog modal-xl'>
            <div className='modal-content'>
              <div className='modal-header border-0'>
                <button
                  className='btn-close'
                  type='button'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body text-center pb-5'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        {item?.name}
                      </h2>
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star' />
                        </div>
                        <div className='divider-custom-line' />
                      </div>
                      <img
                        className='img-fluid rounded mb-5 detailsimg'
                        src={item?.img}
                        alt='...'
                      />
                      <p
                        className='mb-4'
                        style={{ fontSize: '20px', lineHeight: 1.5 }}
                      >
                        {item?.description}
                      </p>
                      <div className='btn-group'>
                        <a
                          href={item?.url}
                          className='btn btn-secondary btn-lg'
                          role='button'
                          target='_blank'
                        >
                          {item?.isApp
                            ? 'Play Store link'
                            : 'Live website link'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {personalModalArray?.map((item, index) => (
        <div
          className='portfolio-modal modal fade'
          id={`portfolioModal${item?.id}`}
          tabIndex={-1}
          aria-labelledby={`portfolioModal${item?.id}`}
          aria-hidden='true'
          key={index}
        >
          <div className='modal-dialog modal-xl'>
            <div className='modal-content'>
              <div className='modal-header border-0'>
                <button
                  className='btn-close'
                  type='button'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body text-center pb-5'>
                <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                      <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                        {item?.name}
                      </h2>
                      <div className='divider-custom'>
                        <div className='divider-custom-line' />
                        <div className='divider-custom-icon'>
                          <i className='fas fa-star' />
                        </div>
                        <div className='divider-custom-line' />
                      </div>
                      <img
                        className='img-fluid rounded mb-5 detailsimg'
                        src={item?.img}
                        alt='...'
                      />
                      <p
                        className='mb-4'
                        style={{ fontSize: '20px', lineHeight: 1.5 }}
                      >
                        {item?.description}
                      </p>
                      <div className='btn-group'>
                        <a
                          href={item?.sourceUrl}
                          className='btn btn-primary btn-lg'
                          role='button'
                          target='_blank'
                        >
                          Source Code
                        </a>
                        {item?.liveUrl && (
                          <a
                            href={item?.liveUrl}
                            className='btn btn-secondary btn-lg'
                            role='button'
                            target='_blank'
                          >
                            {item?.liveUrlText || 'Live app link'}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
