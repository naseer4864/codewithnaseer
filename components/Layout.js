import Footer from "./Footer";
import Nvabar from "./Navbar";



const Layout = ({children}) => {
    return ( 
        <div>
           <Nvabar/>
           {children}
           <Footer/>
        </div>
     );
}
 
export default Layout;