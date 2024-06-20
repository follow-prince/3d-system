import React from 'react';
// @ts-ignore

import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
