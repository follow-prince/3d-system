import React from 'react';
import Window from '../os/Window';

export interface NotePadProps extends WindowAppProps {}

const NotePad: React.FC<NotePadProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={600}
            height={400}
            windowBarIcon="notepad"
            windowTitle="NotePad"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://98.js.org/programs/notepad/index.html"
                    title="notepad"
                    width="100%"
                    height="100%"
                />

            </div>
        </Window>
    );
};

export default NotePad;
