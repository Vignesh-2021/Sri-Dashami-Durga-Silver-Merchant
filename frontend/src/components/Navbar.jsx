import React, { useState } from 'react';
import './Navbar.css';
import { assets } from './../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartPage from './CartPage';
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setiscartOpen] = useState(false);
  const [showRates, setShowRates] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();

  // Dropdown menu state
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // Admin dropdown menu items
  const adminDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add New Post", path: "/dashboard/add-new-post" },
  ];

  // User dropdown menu items
  const userDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus]

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

   

  const handleCartToggle = () => {
    setiscartOpen(!isCartOpen);
  };

  const toggleRates = () => {
    setShowRates(!showRates);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchingCategory = categories.find(category => category.name.toLowerCase() === lowerQuery);
    if (matchingCategory) {
      navigate(`/categories/${matchingCategory.path}`);
    } else {
      alert('No matching category found!');
    }
    setSearchQuery(''); 
  };

  const categories = [
    { name: 'Earrings', path: 'earrings' },
    { name: 'Chains', path: 'chains' },
    { name: 'Bangles', path: 'bangles' },
    { name: 'Mangalsutras', path: 'mangalsutras' },
    { name: 'Lockets', path: 'lockets' },
    { name: 'Silver', path: 'silver' },
    { name: 'Gold Rate', path: '' }
  ];

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Earrings, Chains, Bangles..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <div className="search-button" onClick={handleSearch}>
            <i className="ri-search-line"></i>
          </div>
        </div>
        <ul className="menu">
          <li>
            <button>
              <Link to="/"><i className="ri-heart-3-line"></i></Link>
              <span>Wish</span>
            </button>
          </li>
          <li>
            <button className="hover:t-primary rel" onClick={handleCartToggle}>
              <i className="ri-shopping-cart-line"></i>
              <sup className="t-sm iblock px-sm t-white bg-primary r-full t-center">{products.length}</sup>
              <span>Cart</span>
            </button>
          </li>
        </ul>
        {user ? (
          <>
            <img 
              onClick={handleDropDownToggle}
              src={user?.profileImage || assets.avatarImg} 
              alt=""  
              className='avt-img'
            />
            {isDropDownOpen && (
              <div className='drop-down-main'>
                <ul>
                  {dropdownMenus.map((menu, index) => (
                    <li key={index}>
                      <Link onClick={() => setIsDropDownOpen(false)} className='dropdown-items' to={menu.path}>
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link onClick={handleLogout} className="dropdown-items">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link to="login"><button className="sign">Sign in</button></Link>
        )}
      </nav>

      <div className="top-bar">
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              {category.name === 'Gold Rate' ? (
                <button onClick={toggleRates} className="gold-rate-btn">
                  {category.name}
                </button>
              ) : (
                <Link to={`/categories/${category.path}`}>
                  {category.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {showRates && (
        <div className="rates-box">
          <h3>Today's Rates</h3>
          <p>Gold Rate: 78,850</p>
          <p>Old Gold Rate: 91,360</p>
          <p>Silver Rate: 930</p>
          <button onClick={toggleRates} className="close-btn">Close</button>
        </div>
      )}

      {isCartOpen && <CartPage products={products} isOpen={isCartOpen} onClose={handleCartToggle} />}
    </>
  );
};

export default Navbar;
