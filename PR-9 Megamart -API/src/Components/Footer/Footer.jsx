import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerData = [
    {
      title: 'TOP CATEGORIES',
      items: ['Men', 'Women', 'Kids', 'Footwear', 'Innerwear', 'Accessories'],
    },
    {
      title: 'TOP BRANDS',
      items: [
        'U.S. Polo Assn.',
        'Arrow',
        'Flying Machine',
        'Tommy Hilfiger',
        'Calvin Klein',
        'AD By Arvind',
      ],
    },
    {
      title: 'USEFUL LINKS',
      items: [
        'About us',
        'Privacy Policy',
        'Terms and Conditions',
        'Returns and Cancellation Policy',
        'Help and FAQ\'s',
        'Delivery and Shipping Policy',
      ],
    },
    {
      title: 'CONTACT US',
      items: [
        '+91-1234567899',
        'care@megamartfashion.com',
        'Message Us',
      ],
    },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {footerData.map((section, index) => (
            <div key={index} className="col-6 col-md-3 footer-col">
              <h5>{section.title}</h5>
              <ul className="footer-list ps-0">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to="#" className="footer-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom text-center mt-4">
          <p> 2025 Megamart Fashion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
