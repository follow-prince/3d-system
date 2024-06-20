import React from 'react';
import printer from '../../assets/resume/printer.gif';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                <a rel="noreferrer" target="_blank" href="https://elavarasan.me/resume.pdf">
                    <p>Click here to download it!</p>
                </a>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 1,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 156,
        height: 135,
        paddingRight: 10,
        paddingLeft: 10,
        filter: "saturate(200%) contrast(110%) brightness(100%) ",
        
        
    },
};

export default ResumeDownload;
