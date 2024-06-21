import React from 'react';
import { Link } from '../general';
import HiImage from '../../assets/gif/hi.gif'

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div style={styles.page}>
            <div style={styles.buttons}>
                <img src={HiImage} width={'60%'} alt="" />
                <h1 style={styles.Welcome}>Welcome to my website!</h1>

            </div>

            <div style={styles.header}>
                <h1 style={styles.name}> <span style={styles.nameSpan}>I'm </span>ELAVARASAN</h1>
                <h2 style={styles.jobrole}>Creative Developer</h2>
            </div>

            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EDUCATION"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    nameSpan:{
            fontSize:55
    },
    Welcome: {
        fontSize: 44,
        letterSpacing: 2,
        color: 'black',
        textShadow: '0 0 5px #737373',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 200,
    },
    CardProfile: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 50,
    },
    jobrole: {
        fontSize: 24,
        letterSpacing: 2,
        color: 'black',
        textShadow: '0 0 10px #737373',
    },

    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'white',
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
        textDecoration: 'none',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
        border: '1px solid white',
        borderRadius: 4,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        marginLeft: 40,
        filter: 'drop-shadow(0 0 10px black)',
        letterSpacing: 2,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 14,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 102,
        marginBottom: 0,
        lineHeight: 1,
        letterSpacing: 2,
        color: 'black',
        textShadow: '0 0 10px   #484848',
    },
};

export default Home;
