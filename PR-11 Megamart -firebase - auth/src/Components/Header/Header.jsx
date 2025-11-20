import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutAsync } from '../Services/Action/authaction';

const Header = () => {
  const menuItems = [
    { name: 'Men', path: '/Men', hasDropdown: true },
    { name: 'Women', path: '#' },
    { name: 'Kids', path: '#' },
    { name: 'Footwear', path: '#' },
    { name: 'Innerwear', path: '#' },
    { name: 'Accessories', path: '#' },
    { name: 'Brands', path: '#' },
  ];

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);
  const handleLogout = () => {
    dispatch(signOutAsync())
  }

  return (
    <>
      <Navbar expand="lg" className="header-navbar shadow-sm py-2">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="/src/image/mega-logo.png" alt="MegaMart Logo" className="mega-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center gap-3">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <Link to="/add" className="btn add-btn">
              ADD
            </Link>

            <Navbar.Text>
              {!user ? <Link className='btn btn-warning' to={"/signIn"}>SignIN</Link> : <div><Link>{user.email}</Link> <button onClick={handleLogout}>Logout</button></div>}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="header-nav">
        <div className="container-fluid">
          <nav className="menu d-flex justify-content-center align-items-center">
            <ul className="d-flex flex-wrap justify-content-center gap-4 mb-0 p-0">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`menu-item ${item.hasDropdown ? 'mega-menu' : ''}`}
                >
                  <Link to={item.path} className="nav-link">
                    {item.name}
                  </Link>


                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
