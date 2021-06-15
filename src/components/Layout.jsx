import React from 'react';

import Header from '../containers/Header';

const Layout = ({children}) =>{
    return (      
        <>
            <header>
                <Header />
            </header>            
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;
