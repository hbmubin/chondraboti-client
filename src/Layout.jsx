import Nav from './components/Nav';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import { UtiContext } from './provider/UtiProvider';

const Layout = () => {
    return (
        <div className='font-mon'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;