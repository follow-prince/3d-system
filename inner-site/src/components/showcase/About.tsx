import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm ELAVARASAN</h3>
            <br />
            <div className="text-block">
                <p>
                    I am a software developer, recently done MCA at Dr. MGR
                    University, and in 2021, I graduated with a B.Com degree
                    from the University of Madras.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:contact@elavarasan.me">
                        contact@elavarasan.me
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                {/* this first image */}
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>About Me</h3>
                        <br />
                        <p>
                            Since I was young, I've always been super curious
                            about how stuff works. Even when I was a kid,
                            messing around with little tech gadgets got me
                            really excited. I grew up in Chennai, India, and I
                            was really eager about my education, even though it
                            wasn't always easy.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={me} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> A real photo of me in young
                                age.
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    {' '}
                    When I was in school at Govt.Hr.Sec School, I faced some
                    tough times because I wasn't great at English. But I didn't
                    let that stop me. I kept going because I loved Tamil, my
                    native language. I worked hard, and even though my grades
                    were just okay, I finished school and decided to dive into
                    the worlds of business and computer science.
                </p>
                <br />
                <br />
                <p>
                    After I finished school, I accidentally chose to study for a
                    B.Com degree at the University of Madras. I really wished I
                    hadn't, even though I wasn't very interested in the subject.
                    I worked hard, but I was really passionate about technology.
                    When I got my Bachelor of Commerce degree, I wasn't sure
                    what to do next. Then, COVID-19 happened and changed
                    everything. I decided to focus more on technology, where I
                    found my true passion. With only my newfound love for tech
                    and a lot of determination, I started learning about
                    software development. I didn't have much money, but I used
                    online resources and taught myself as much as I could. As I
                    got better, I wanted to learn even more.
                </p>

                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <p>
                            I went to Dr. MGR University to get my Master's in
                            Computer Applications (MCA), where I could learn
                            formally about something I'd grown to love. While
                            studying, I also got hands-on experience by solving
                            problems on Coding Ninjas and practicing data stuff
                            on platforms like LeetCode and HackerRank. My
                            journey has been all about learning and adapting,
                            always trying to get better and find new ways to do
                            things. Now, I work as a software developer,
                            specializing in Java, ReactJs, and making the
                            front-end of websites. I'm really committed to
                            pushing boundaries and making cool stuff. But I'm
                            not just a developer. I'm always learning, solving
                            problems, and working with others. Every line of
                            code I write is a chance to make a difference and
                            help shape the future of technology.
                            <br />
                            <br />
                            <b>
                                Let's connect and go on this journey together,
                                making cool stuff and changing the digital world
                                for the better.
                            </b>
                        </p>
                    </div>

                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Jun, 2024
                            </sub>
                        </p>
                    </div>
                </div>

                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/elavarasa003"
                    >
                        @elavarasa003
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:elavarasa.003@gmail.com">
                        elavarasa.003@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        maxWidth: '300px',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,

        flex: 0.8,
        maxWidth: '300px',
        alignItems: 'center',
        marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
