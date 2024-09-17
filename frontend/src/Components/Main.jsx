import './Main.css';
import NavbarWithTimer from "./Timer"
import React,{useState} from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";

const data = [
  {
    platform: 'WazirX',
    lastPrice: '₹25,72,612',
    buyPrice: '₹25,72,610',
    sellPrice: '₹25,72,612',
    difference: '-3.14%',
    savings: '₹83,498',
  },
  {
    platform: 'Bitbns',
    lastPrice: '₹28,83,906',
    buyPrice: '₹28,56,164',
    sellPrice: '₹28,82,157',
    difference: '8.58%',
    savings: '₹2,27,796',
  },
  {
    platform: 'Colodax',
    lastPrice: '₹25,46,035',
    buyPrice: '₹25,33,304',
    sellPrice: '₹28,51,559',
    difference: '-4.14%',
    savings: '₹1,10,074',
  },
  {
    platform: 'Zebpay',
    lastPrice: '₹26,50,000',
    buyPrice: '₹26,49,999',
    sellPrice: '₹26,21,000',
    difference: '-0.23%',
    savings: '₹6,110',
  },
  {
    platform: 'WazirX',
    lastPrice: '₹25,72,612',
    buyPrice: '₹25,72,610',
    sellPrice: '₹25,72,612',
    difference: '-3.14%',
    savings: '₹83,498',
  },
  {
    platform: 'Bitbns',
    lastPrice: '₹28,83,906',
    buyPrice: '₹28,56,164',
    sellPrice: '₹28,82,157',
    difference: '8.58%',
    savings: '₹2,27,796',
  },
  // {
  //   platform: 'Colodax',
  //   lastPrice: '₹25,46,035',
  //   buyPrice: '₹25,33,304',
  //   sellPrice: '₹28,51,559',
  //   difference: '-4.14%',
  //   savings: '₹1,10,074',
  // },
  // {
  //   platform: 'Zebpay',
  //   lastPrice: '₹26,50,000',
  //   buyPrice: '₹26,49,999',
  //   sellPrice: '₹26,21,000',
  //   difference: '-0.23%',
  //   savings: '₹6,110',
  // },
];

function App() {

    const [darkMode, setDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
  return (
    <div className="app">
      {/* Navbar */}
      <nav className={` nav-links justify-between navbar ${darkMode ? 'dark' : 'light'} flex`}>
            <div className="logo-container ">
                {/* <img src={logo} alt="Hodlinfo" className="logo" /> */}
                <h1 className="text-blue-300 ml-4  text-5xl">HODLINFO</h1>
            </div>

            <div className="flex">
                <div className="catalog rounded-md">
                    <button className="buy-button rounded-md">INR</button>
                </div>

                <div className="catalog rounded-md">
                        <button className="buy-button rounded-md flex" onClick={toggleDropdown}>
                         <span>ETH</span>
                        <IoMdArrowDropdown /> </button>
                        {dropdownOpen && (
                        <div className="dropdown rounded-md bg-gray-500">
                        <a href="#option1">BTC</a>
                        <a href="#option2">UTH</a>
                        <a href="#option3">BTT</a>
                        <a href="#option4">ZEC</a>
                        </div>
                    )}
                </div>

                <button className="buy-button">Buy BTC</button>
            </div>
            <div className="flex">
                            
                <div>
                    <NavbarWithTimer/>
                </div>
                <div className="nav-links">
                    <button className="connect-button flex">
                        <LiaTelegram className="mt-1"/>
                        <a className="rounde-md" href="https://t.me/yourTelegram" target="_blank" rel="noopener noreferrer">
                        Connect Telegram
                        </a>
                    </button>
                </div>
                <div className="toggle-mode rounded-md flex">
                    <button onClick={toggleDarkMode} className="bg-gray-700 mt-1 p-3 rounded-md flex">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                   
                    <LiaToggleOnSolid className="mt-1 ml-2"/>
                    </button>
                </div>
            </div>
      </nav>

      {/* Top Bar Section */}
      <div className="top-bar mt-7">
        <div className="percentage text-blue-400 text-3xl">0.1% <span>5 Mins</span></div>
        <div className="percentage text-blue-400 text-3xl">0.96% <span>1 Hour</span></div>
        <div>
            <h1 className="best-price text-gray-400">Best Price to Trade</h1>
            <div className="price">₹26,56,110</div>
            <h3 className="text-gray-400">Average BTC/INR net price including commission</h3>
        </div>
        <div className="percentage text-blue-400 text-3xl">2.73% <span>1 Day</span></div>
        <div className="percentage text-blue-400 text-3xl">7.51% <span>7 Days</span></div>
      </div>

      {/* Platform Table Section */}
      <table className="platform-table sm:ml-11 ">
        <thead className="text-gray-400 text-2xl font-bold  ">
          <tr>
            <td>#</td>
            <td>Platform</td>
            <td>Last Traded Price</td>
            <td>Buy / Sell Price</td>
            <td>Difference</td>
            <td>Savings</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.platform}</td>
              <td>{item.lastPrice}</td>
              <td>{item.buyPrice} / {item.sellPrice}</td>
              <td >{item.difference}</td>
              <td>{item.savings}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Add button to home screen */}

      <div className="mt-5 w-155 h-10">
        <button className="bg-gray-800 rounded-md border-blue-500 border p-3">
            <h1 className="text-blue-500">Add Hodlinfo To Home Screen</h1>
        </button>
      </div>

      
    </div>
  );
}

export default App;
