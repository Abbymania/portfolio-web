import React from "react";
import Nav from "../../Compoents/Nav/Nav";

import indexCSS from './../Index/Index.module.css'

import heroImg from './../../assets/hero-image.jpg'
import aboutimage from './../../assets/about-hero.png'

import frontend from './../../assets/Frontend.png'
import Backend from './../../assets/Backend.png'
import UiUxDesign from './../../assets/UiUx.png'

import { ReactTyped } from "react-typed";

import projectImg01 from './../../assets/portfolio-image-01.png'
import projectImg02 from './../../assets/portfolio-image-02.png'
import projectImg03 from './../../assets/portfolio-image-03.png'
import projectImg04 from './../../assets/portfolio-image-04.png'

import file from './../../assets/DemoDownload.txt'

function Index() {
    return (
        <div>
            {/* ----------------Header---------------- */}
            <div id="Home" className={indexCSS.headerWrapper}>

                <Nav />

                <div className={indexCSS.headerContainer}>
                    <div className={indexCSS.headerContent}>
                        <h5>Hello I m '</h5>
                        <h1>Anuj A.</h1>
                        <p>A Passionate &nbsp;
                            <span>
                                <ReactTyped
                                    strings={['Minecraft Developer', 'Server Manager', 'Server Staff']}
                                    typeSpeed={40}
                                    loop={true}
                                    backSpeed={40}
                                ></ReactTyped>
                            </span>
                        </p>
                        <p>Hello, I am Anuj known as Anuj45 in minecraft I do a lot of stuff but mostly I fous on guild management,server management/staffing and minecraft developer development.</p>

                        <div className={indexCSS.social}>
                            <a href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-facebook-line"></i>
                            </a>
                            <a href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://x.com/?lang=en"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-github-line"></i>
                            </a>
                        </div>
                        <a href={file} download><button>CV <i className="ri-file-list-3-line"></i> </button></a>
                    </div>
                    <div className={indexCSS.headerImage}>
                        <img src={heroImg} alt="hero-image" />

                        <div className={indexCSS.borderAnimation}></div>
                    </div>
                </div>

            </div>

            <section id="about" className={`${indexCSS.about_wrapper}`}>

                <h2 className="SectionTitle">About Us</h2>

                <div className={indexCSS.about}>
                    <div className={indexCSS.aboutImage}>
                        <img src={aboutimage} alt="" />
                    </div>
                    <div className={indexCSS.aboutContent}>
                        <div className={indexCSS.aboutCard}>
                            <img src={frontend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Minecraft Developer</h3>
                                <p>A passionate developer for making plugins and management of plugins using Skript and YAML files.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={Backend} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Server Manager</h3>
                                <p>An experienced server manager who works towards making the best staff team perfect for the server.</p>
                            </div>
                        </div>
                        <div className={indexCSS.aboutCard}>
                            <img src={UiUxDesign} alt="frondend-image"></img>
                            <div className={indexCSS.aboutCardContent}>
                                <h3>Guild Management </h3>
                                <p>Hanling guilds on a daily basis and will make sure it's the best in the server.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Experience" className={indexCSS.Experience_container}>
                <h2 className="SectionTitle">My Experience</h2>

                <div className={indexCSS.Experience}>
                    <div className={indexCSS.Skils_wrapper}>
                        <h3>My Skils</h3>
                        <p> Here are some of my skills that I use for benefitting your server and myself:</p>
                        <div className={indexCSS.Skils}>
                            <div className={indexCSS.Skill}>
                                <h4>HTML</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_HTML}`} data-value="20%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>CSS3</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_CSS}`} data-value="15%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>JavaScript</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_JS}`} data-value="5%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>Skript</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skils_REACTJS}`} data-value="50%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>Management</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_TAILWIND}`} data-value="95%"></div>
                            </div>
                            <div className={indexCSS.Skill}>
                                <h4>Plugin & Sever Handlation</h4>
                                <div className={`${indexCSS.SkillBar} ${indexCSS.Skill_PHOTOSHOP}`} data-value="90%"></div>
                            </div>
                        </div>

                    </div>
                    <div className={indexCSS.Experience_wrapper}>
                        <div className={indexCSS.Experience_card}>
                            <h3>Head Of Management, Minebeach</h3>
                            <p>Sept 2023 ,  2024 August </p>
                            <ul>
                                <li>Developed multiple features for Minebeach and helped them achieve 100+ players!</li>
                                <li>Collaborated with my managers and made the best Management/Staff Team.</li>
                            </ul>
                        </div>
                        <div className={indexCSS.Experience_card}>
                            <h3>Owner , BlazingMC</h3>
                            <p>Aug 2023  , 2026 Present  </p>
                            <ul>
                                <li>
                                    Designed and developed the server with help of my co-owners and developers
                                </li>
                                <li>
                                    Got investors and helped build the server to its peak height!
                                </li>
                            </ul>

                        </div>
                        <div className={indexCSS.Experience_card}>
                            <h3>Server Staff , Blockfun</h3>
                            <p>Oct 2023  , December 2023  </p>
                            <ul>
                                <li>
                                    Helped with the staffing of the server and maintain the server a peaceful server
                                </li>
                                <li>
                                    In my short time as a staff I reached Head of Junior Staff and managed them
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Projects" className={indexCSS.projects_container}>
                <h2 className="SectionTitle">My Projects</h2>

                <div className={indexCSS.projects}>
                    <div className={indexCSS.project}>
                        <img src={projectImg01} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Minecraft Giveaway Server</h3>
                            <p>Currently working as a staff to provide free minecraft accounts to all!</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg02} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Server Development</h3>
                            <p>Working on BlazingMC revival to make it be the best Prison Server!</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg03} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Plugin Development</h3>
                            <p>Making an upgrade menu plugin to help server owners have a better upgrade menu for tools and etc.</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className={indexCSS.project}>
                        <img src={projectImg04} alt="project-image" />

                        <div className={indexCSS.project_content}>
                            <h3>Profile Development</h3>
                            <p>Looking to work in more big profiled servers for free/paid according to what you guys are working towards.</p>
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>

            </section>

            <section id="contact" className={indexCSS.contact_wrapper}>
                <h3 className="SectionTitle">Get in Touch</h3>

                <div className={indexCSS.contact}>
                    <div className={indexCSS.contact_form}>
                        <h4>Send a Message</h4>

                        <div className={indexCSS.input_wrapper}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>

                        <div className={indexCSS.input_wrapper}>
                            <input type="email" placeholder="Email " />
                            <input type="text" placeholder="Enter phone" />
                        </div>

                        <textarea placeholder="Message"></textarea>

                        <button>Submit</button>

                    </div>
                    <div className={indexCSS.contact_details}>
                        <h4>Contact Info</h4>

                        <div className={indexCSS.info_wrapper}>
                            <i className="ri-phone-line"></i>
                            <span>anuj.goat on discord</span>
                        </div>
                        <div className={indexCSS.info_wrapper}>
                            <i className="ri-mail-line"></i>
                            <span>mastergamerz792@gmail.com</span>
                        </div>
                        <div className={indexCSS.social}>
                            <a href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-facebook-line"></i>
                            </a>
                            <a href="https://x.com/?lang=en"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                            <a href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="ri-youtube-line"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </section>


            <section className={indexCSS.footer}>
                <div className={indexCSS.footerLinks}>
                    <a href="#Home">Home</a>
                    <a href="#about">About</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <p>© Copyright Anuj A. 2026 all rights reserved</p>
            </section>

        </div >
    )
}

export default Index