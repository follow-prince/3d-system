import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface ThisComputerProps extends WindowAppProps {}

const ThisComputerApp: React.FC<ThisComputerProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={600}
            height={400}
            windowBarIcon="computerSmall"
            windowTitle="W W W . G O O G L E . C O M"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://oldgoogle.neocities.org/1998/"
                    title="google"
                    width="100%"
                    height="100%"
                />

            </div>
        </Window>
    );
};

export default ThisComputerApp;
