import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface ClanguageProps extends WindowAppProps {}

const Clanguage: React.FC<ClanguageProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={600}
            height={400}
            windowBarIcon="clang"
            windowTitle="Turbo_C"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://www.windows93.net/d/programs/dosbox/?soft=Turbo_C"
                    title="clanguage"
                    width="100%"
                    height="100%"
                />

            </div>
        </Window>
    );
};

export default Clanguage;
