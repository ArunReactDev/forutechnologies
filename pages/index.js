import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>For U Technologies</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <title>For U Technologies</title>
        <meta name="title" content="For U Technologies" />
        <meta name="keywords" content="For U Technologies" />
        <meta name="description" content="For U Technologies" />
        <meta name="apple-mobile-web-app-title" content="For U Technologies" />
        <meta name="application-name" content="For U Technologies" />
        <meta property="og:site_name" content="For U Technologies" />
        <meta property="og:url" content="https://forutechnologies.com/" />
        <link rel="canonical" href="https://forutechnologies.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="For U Technologies" />
        <meta
          property="og:image"
          content="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:title" content="For U Technologies" />
        <meta property="twitter:description" content="For U Technologies" />
        <meta property="twitter:site" content="For U Technologies" />
        <meta
          property="twitter:image"
          content="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div>
        <header className="header" data-header>
          <div className="container">
            <a href="#" className="logo">
              <img
                src="/assets/images/logo.svg"
                width={162}
                height={50}
                alt="EduWeb logo"
              />
            </a>
            <nav className="navbar" data-navbar>
              <div className="wrapper">
                <a href="#" className="logo">
                  <img
                    src="/assets/images/logo.svg"
                    width={162}
                    height={50}
                    alt="EduWeb logo"
                  />
                </a>
                <button
                  className="nav-close-btn"
                  aria-label="close menu"
                  data-nav-toggler
                >
                  <ion-icon name="close-outline" aria-hidden="true" />
                </button>
              </div>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="#home" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#about" className="navbar-link" data-nav-link>
                    About
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#courses" className="navbar-link" data-nav-link>
                    Courses
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#blog" className="navbar-link" data-nav-link>
                    Blog
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-actions">
              <button
                className="header-action-btn"
                aria-label="toggle search"
                title="Search"
              >
                <ion-icon name="search-outline" aria-hidden="true" />
              </button>
              <button
                className="header-action-btn"
                aria-label="cart"
                title="Cart"
              >
                <ion-icon name="cart-outline" aria-hidden="true" />
                <span className="btn-badge">0</span>
              </button>
              <a href="#" className="btn has-before">
                <span className="span">Try for free</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
              <button
                className="header-action-btn"
                aria-label="open menu"
                data-nav-toggler
              >
                <ion-icon name="menu-outline" aria-hidden="true" />
              </button>
            </div>
            <div className="overlay" data-nav-toggler data-overlay />
          </div>
        </header>
        
        <main>
        <article>
          <section className="section hero has-bg-image" id="home" aria-label="home" style={{backgroundImage: 'url("/assets/images/hero-bg.svg")'}}>
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title">
                  The Best Program to <span className="span">Enroll</span> for Exchange
                </h1>
                <p className="hero-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                </p>
                <a href="#" className="btn has-before">
                  <span className="span">Find courses</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                </a>
              </div>
              <figure className="hero-banner">
                <div className="img-holder one" style={{width: 270, height: 300}}>
                  <img src="/assets/images/hero-banner-1.jpg" width={270} height={300} alt="hero banner" className="img-cover" />
                </div>
                <div className="img-holder two" style={{width: 240, height: 370}}>
                  <img src="/assets/images/hero-banner-2.jpg" width={240} height={370} alt="hero banner" className="img-cover" />
                </div>
                <img src="/assets/images/hero-shape-1.svg" width={380} height={190} alt="" className="shape hero-shape-1" />
                <img src="/assets/images/hero-shape-2.png" width={622} height={551} alt="" className="shape hero-shape-2" />
              </figure>
            </div>
          </section>
          {/* 
        - #CATEGORY
      */}
          <section className="section category" aria-label="category">
            <div className="container">
              <p className="section-subtitle">Categories</p>
              <h2 className="h2 section-title">
                Online <span className="span">Classes</span> For Remote Learning.
              </h2>
              <p className="section-text">
                Consectetur adipiscing elit sed do eiusmod tempor.
              </p>
              <ul className="grid-list">
                <li>
                  <div className="category-card category-card1">
                    <div className="card-icon">
                      <img src="/assets/images/category-1.svg" width={40} height={40} loading="lazy" alt="Online Degree Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Online Degree Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">7 Courses</span>
                  </div>
                </li>
                <li>
                  <div className="category-card category-card2">
                    <div className="card-icon">
                      <img src="/assets/images/category-2.svg" width={40} height={40} loading="lazy" alt="Non-Degree Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Non-Degree Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">4 Courses</span>
                  </div>
                </li>
                <li>
                  <div className="category-card category-card3">
                    <div className="card-icon">
                      <img src="/assets/images/category-3.svg" width={40} height={40} loading="lazy" alt="Off-Campus Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Off-Campus Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">8 Courses</span>
                  </div>
                </li>
                <li>
                  <div className="category-card category-card4">
                    <div className="card-icon">
                      <img src="/assets/images/category-4.svg" width={40} height={40} loading="lazy" alt="Hybrid Distance Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Hybrid Distance Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">8 Courses</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
        - #ABOUT
      */}
          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <div className="img-holder" style={{width: 520, height: 370}}>
                  <img src="/assets/images/about-banner.jpg" width={520} height={370} loading="lazy" alt="about banner" className="img-cover" />
                </div>
                <img src="/assets/images/about-shape-1.svg" width={360} height={420} loading="lazy" alt="" className="shape about-shape-1" />
                <img src="/assets/images/about-shape-2.svg" width={371} height={220} loading="lazy" alt="" className="shape about-shape-2" />
                <img src="/assets/images/about-shape-3.png" width={722} height={528} loading="lazy" alt="" className="shape about-shape-3" />
              </figure>
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">
                  Over 10 Years in <span className="span">Distant learning</span> for Skill Development
                </h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
                  aliquaenim ad
                  minim.
                </p>
                <ul className="about-list">
                  <li className="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                    <span className="span">Expert Trainers</span>
                  </li>
                  <li className="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                    <span className="span">Online Remote Learning</span>
                  </li>
                  <li className="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                    <span className="span">Lifetime Access</span>
                  </li>
                </ul>
                <img src="/assets/images/about-shape-4.svg" width={100} height={100} loading="lazy" alt="" className="shape about-shape-4" />
              </div>
            </div>
          </section>
          {/* 
        - #COURSE
      */}
          <section className="section course" id="courses" aria-label="course">
            <div className="container">
              <p className="section-subtitle">Popular Courses</p>
              <h2 className="h2 section-title">Pick A Course To Get Started</h2>
              <ul className="grid-list">
                <li>
                  <div className="course-card">
                    <figure className="card-banner img-holder" style={{width: 370, height: 220}}>
                      <img src="/assets/images/course-1.jpg" width={370} height={220} loading="lazy" alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
                    </figure>
                    <div className="abs-badge">
                      <ion-icon name="time-outline" aria-hidden="true" />
                      <span className="span">3 Weeks</span>
                    </div>
                    <div className="card-content">
                      <span className="badge">Beginner</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">Build Responsive Real- World Websites with HTML and CSS</a>
                      </h3>
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <p className="rating-text">(5.0/7 Rating)</p>
                      </div>
                      <data className="price" value={29}>$29.00</data>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="library-outline" aria-hidden="true" />
                          <span className="span">8 Lessons</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="people-outline" aria-hidden="true" />
                          <span className="span">20 Students</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="course-card">
                    <figure className="card-banner img-holder" style={{width: 370, height: 220}}>
                      <img src="/assets/images/course-2.jpg" width={370} height={220} loading="lazy" alt="Java Programming Masterclass for Software Developers" className="img-cover" />
                    </figure>
                    <div className="abs-badge">
                      <ion-icon name="time-outline" aria-hidden="true" />
                      <span className="span">8 Weeks</span>
                    </div>
                    <div className="card-content">
                      <span className="badge">Advanced</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">Java Programming Masterclass for Software Developers</a>
                      </h3>
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <p className="rating-text">(4.5 /9 Rating)</p>
                      </div>
                      <data className="price" value={49}>$49.00</data>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="library-outline" aria-hidden="true" />
                          <span className="span">15 Lessons</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="people-outline" aria-hidden="true" />
                          <span className="span">35 Students</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="course-card">
                    <figure className="card-banner img-holder" style={{width: 370, height: 220}}>
                      <img src="/assets/images/course-3.jpg" width={370} height={220} loading="lazy" alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
                    </figure>
                    <div className="abs-badge">
                      <ion-icon name="time-outline" aria-hidden="true" />
                      <span className="span">3 Weeks</span>
                    </div>
                    <div className="card-content">
                      <span className="badge">Intermediate</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
                      </h3>
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                        </div>
                        <p className="rating-text">(4.9 /7 Rating)</p>
                      </div>
                      <data className="price" value={35}>$35.00</data>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="library-outline" aria-hidden="true" />
                          <span className="span">13 Lessons</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="people-outline" aria-hidden="true" />
                          <span className="span">18 Students</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn has-before">
                <span className="span">Browse more courses</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </section>
          <section className="video has-bg-image" aria-label="video" style={{backgroundImage: 'url("/assets/images/video-bg.png")'}}>
            <div className="container">
              <div className="video-card">
                <div className="video-banner img-holder has-after" style={{width: '', height: ''}}>
                  <img src="/assets/images/video-banner.jpg" width={970} height={550} loading="lazy" alt="video banner" className="img-cover" />
                  <button className="play-btn" aria-label="play video">
                    <ion-icon name="play" aria-hidden="true" />
                  </button>
                </div>
                <img src="/assets/images/video-shape-1.png" width={1089} height={605} loading="lazy" alt="" className="shape video-shape-1" />
                <img src="/assets/images/video-shape-2.png" width={158} height={174} loading="lazy" alt="" className="shape video-shape-2" />
              </div>
            </div>
          </section>
          {/* 
        - #STATE
      */}
          <section className="section stats" aria-label="stats">
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div className="stats-card stats-card1" style={{color: '170, 75%, 41%'}}>
                    <h3 className="card-title">29.3k</h3>
                    <p className="card-text">Student Enrolled</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card stats-card2" style={{color: '351, 83%, 61%'}}>
                    <h3 className="card-title">32.4K</h3>
                    <p className="card-text">Class Completed</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card stats-card3" style={{color: '260, 100%, 67%'}}>
                    <h3 className="card-title">100%</h3>
                    <p className="card-text">Satisfaction Rate</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card stats-card4" style={{color: '42, 94%, 55%'}}>
                    <h3 className="card-title">354+</h3>
                    <p className="card-text">Top Instructors</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
        - #BLOG
      */}
          <section className="section blog has-bg-image" id="blog" aria-label="blog" style={{backgroundImage: 'url("/assets/images/blog-bg.svg")'}}>
            <div className="container">
              <p className="section-subtitle">Latest Articles</p>
              <h2 className="h2 section-title">Get News With Eduweb</h2>
              <ul className="grid-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-after" style={{width: 370, height: 370}}>
                      <img src="/assets/images/blog-1.jpg" width={370} height={370} loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                      </a>
                      <a href="#" className="card-subtitle">Online</a>
                      <h3 className="h3">
                        <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true" />
                          <span className="span">Oct 10, 2021</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="chatbubbles-outline" aria-hidden="true" />
                          <span className="span">Com 09</span>
                        </li>
                      </ul>
                      <p className="card-text">
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-after" style={{width: 370, height: 370}}>
                      <img src="/assets/images/blog-2.jpg" width={370} height={370} loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                      </a>
                      <a href="#" className="card-subtitle">Online</a>
                      <h3 className="h3">
                        <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true" />
                          <span className="span">Oct 10, 2021</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="chatbubbles-outline" aria-hidden="true" />
                          <span className="span">Com 09</span>
                        </li>
                      </ul>
                      <p className="card-text">
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner img-holder has-after" style={{width: 370, height: 370}}>
                      <img src="/assets/images/blog-3.jpg" width={370} height={370} loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                      </a>
                      <a href="#" className="card-subtitle">Online</a>
                      <h3 className="h3">
                        <a href="#" className="card-title">Become A Better Blogger: Content Planning</a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true" />
                          <span className="span">Oct 10, 2021</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="chatbubbles-outline" aria-hidden="true" />
                          <span className="span">Com 09</span>
                        </li>
                      </ul>
                      <p className="card-text">
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <img src="/assets/images/blog-shape.png" width={186} height={186} loading="lazy" alt="" className="shape blog-shape" />
            </div>
          </section>
        </article>
      </main>

      </div>
    </>
  );
}
