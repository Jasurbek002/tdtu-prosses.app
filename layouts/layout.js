import Footer from "./footer";
import Navbar from "./navbar";
import Topbar from "./topbar";
import styles from './../public/assets/settings.module.scss'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
          <Topbar />
          <Navbar />
          {
            children
          }  
          <Footer />
        </div>
    );
}

export default Layout;
