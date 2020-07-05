import React, { memo } from 'react';

import './index.scss';

const Holder = ({className = '', children, ...rest}) => {

    return (
        <div className={`holder ${className}`} {...rest}>{children}</div>
    )
}

export default memo(Holder);