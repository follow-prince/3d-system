import React from 'react';
import { Link } from '../general';
import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                
                <h1  style={styles.name}>ELAVARASAN</h1>
                <h2 style={styles.jobrole}>Software Developer</h2>
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




            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                
             
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
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
        marginBottom: 94,
        marginTop: 4,

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
