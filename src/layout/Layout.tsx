import Navbar from '../components/Navbar';
import './Layout.css';

const Layout = ({children}: any) => {
    return (
        <div>
          <Navbar />
          <div className="content">{children}</div>
        </div>
      );
}

export default Layout;