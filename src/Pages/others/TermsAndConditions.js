import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>this is the terms and condition</h1>
            <p>go back to: <Link to='/register'>register</Link></p>
        </div>
    );
};

export default TermsAndConditions;