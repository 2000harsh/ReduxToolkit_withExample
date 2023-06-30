import React, { Fragment } from 'react';
import '../css/navbar.css';

function Navbar()
{
    const navbar = [{id:0, title:'Home'},{id:1, title:'News'},{id:3 ,title:'Contact'},{id:4, title:'About'}]
    return(
        <Fragment>
            <nav>
                <ul className='ul2'>
                    {navbar.map((item)=>(<li  key={item.id}> <a href='https://redux-toolkit.js.org/introduction/getting-started' target='_blank'>{item.title}</a></li>))}
                </ul>
            </nav>
        </Fragment>
   
      );
}

export default Navbar;