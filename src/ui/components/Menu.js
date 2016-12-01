import React from 'react';
import {Link} from 'react-router'

const Menu = (props) => {
    return (
        <ul>
            {
                props.menu.map((item, index) => <li key={index}><Link to={item.key}>{item.value}</Link></li>)
            }
        </ul>
    );
};

export default Menu;