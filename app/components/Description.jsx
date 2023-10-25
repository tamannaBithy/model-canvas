import React from 'react';

const Description = ({className, children}) => {
    return (
        <p className={`${className} text-muted lg:text-base text-sm`}>{children}</p>
    );
};

export default Description;