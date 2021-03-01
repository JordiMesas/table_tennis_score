import React from 'react';

import Header from './Header';
import Main from './Main';

const Layout = () =>{
    return (      
        <>
            <header>
                <Header />
            </header>

            <main>
                <Main />
            </main>
        </>
    );
}

export default Layout;
