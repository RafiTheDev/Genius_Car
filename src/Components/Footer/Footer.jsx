import { Link } from 'react-router-dom';
import logo from '../../assets/Desktop-1 icons/logo.svg.png';

const Footer = () => {
  return (
    <div className="pt-5">
      <footer className="footer text-white bg-black h-[477px] flex flex-col md:flex-row justify-evenly items-center">
        <aside className="text-center md:text-left">
          <Link to={'/'}>
            <img src={logo} alt="Genius logo" className="mb-4" />
          </Link>
          <p className="text-white">
            Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial entrepreneur.
          </p>
        </aside>
        
        <nav className="mt-4 md:mt-0">
          <h6 className="footer-title text-white">About</h6>
          <Link to="/" className="link link-hover text-white" aria-label="Home">Home</Link>
          <Link to="/service" className="link link-hover text-white" aria-label="Service">Service</Link>
          <Link to="/contact" className="link link-hover text-white" aria-label="Contact">Contact</Link>
        </nav>
        
        <nav className="mt-4 md:mt-0">
          <h6 className="footer-title text-white">Company</h6>
          <Link to="/why-car-doctor" className="link link-hover text-white" aria-label="Why Car Doctor">Why Car Doctor</Link>
          <Link to="/about" className="link link-hover text-white" aria-label="About">About</Link>
        </nav>
        
        <nav className="mt-4 md:mt-0">
          <h6 className="footer-title text-white">Support</h6>
          <Link to="/support-center" className="link link-hover text-white" aria-label="Support Center">Support Center</Link>
          <Link to="/feedback" className="link link-hover text-white" aria-label="Feedback">Feedback</Link>
          <Link to="/accessibility" className="link link-hover text-white" aria-label="Accessibility">Accessibility</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
