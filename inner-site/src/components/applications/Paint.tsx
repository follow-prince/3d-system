import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface PaintProps extends WindowAppProps {}

const Paint: React.FC<PaintProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={600}
            height={400}
            windowBarIcon="paint"
            windowTitle="Paint"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://98.js.org/programs/jspaint/index"
                    title="paint"
                    width="100%"
                    height="100%"
                />

            </div>
        </Window>
    );
};

export default Paint;
