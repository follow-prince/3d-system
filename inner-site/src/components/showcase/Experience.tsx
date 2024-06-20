import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>Master of Computer Applications - MCA</h2>

                        <h4>Grade: CGPA 7.66</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h4>
                            {' '}
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href={'https://www.drmgrdu.ac.in/'}
                            >
                                Dr MGR Educational and Research Institute
                            </a>
                        </h4>

                        <p> Jul 2022 - Jul 2024</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            🎓 Currently in final year of PG MCA studies, I'm
                            laying a computer science and programming, focusing
                            on Java and Python.
                        </p>
                    </li>
                    <li>
                        <p>
                            🖥️ My curriculum encompasses research methodologies,
                            full stack development, and intellectual property
                            rights.
                        </p>
                    </li>
                    <li>
                        <p>
                            🔧 I'm honing my expertise in object-oriented
                            programming, data structures, and algorithms to
                            craft dependable software systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            📚 Through assignments and projects, I'm gearing up
                            for a triumphant journey in the field of computer
                            science.
                        </p>
                    </li>
                </ul>
            </div>

            {/* ============================== */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>
                            Bachelor of Commerce - BCom, Business/Commerce,
                            General
                        </h2>

                        <h4>Grade: CGPA 6.33</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h4>
                            {' '}
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href={'https://www.unom.ac.in/'}
                            >
                                University Of Madras
                            </a>
                        </h4>

                        <p> Jun 2018 - May 2021</p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                <li>
                        <p>
                            🎓📊 Specializing in accounting and corporate
                            finance during my B.Com degree was a pivotal step. I
                            honed skills like financial analysis, cost
                            accounting, and budgeting.
                        </p>
                    </li> 
                    <li>
                        <p>
                            📉💰 Courses in income tax and business law enriched
                            my grasp of business frameworks. My consistent
                            top-notch performance reflects my commitment and
                            diligence.
                        </p>
                    </li>
                    <li>
                        <p>
                            🌟 Thrilled to apply my acquired expertise for a
                            prosperous journey in the world of accounting and
                            finance. 💼📈
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    drMgrStyle: {
        maxWidth: '20%',
        padding: 12,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8,
        marginTop: 10,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
