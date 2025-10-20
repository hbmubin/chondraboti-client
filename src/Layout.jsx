import Nav from './components/Nav';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import FloatingContactMenu from './components/FloatingContactMenu';

const Layout = () => {
    return (
        <div className='font-mon'>
            <FloatingContactMenu/>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;