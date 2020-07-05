import React, { memo } from 'react';

import './index.scss';

const Inputfield = ({containerClass = '', ...rest}) => {

    return (
        <div className={`inputfield ${containerClass}`}>
            <input {...rest} />
        </div>
    )
}

export default memo(Inputfield);