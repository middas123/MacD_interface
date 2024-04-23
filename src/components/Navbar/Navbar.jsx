import React from 'react';
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Menu = [
    {
       id: 1,
       name: "Burgers",
       link:"#"
    },
    {
        id: 2,
        name: "Meals",
        link:"#"
     },
     {
        id: 3,
        name: "Drinks",
        link:"#"
     },
     {
        id: 4,
        name: "Ice Creams",
        link:"#"
     },
     {
        id: 4,
        name: "Kiddies Meals",
        link:"#"
     },
];

const Navbar = () => {
  const [open, SetOpen] = React.useState(false);

  const handleOpen = () => {
    SetOpen(!open);
  }
    return (
        <>
          <div className='bg-lightYellow'>
            <div className='container py-2'>
                <div className="flex justify-between items-center">
                    {/*Logo section */}
                    <div>
                        <a href="#">
                            <img src={Logo} alt="Logo" 
                            className="w-36"/>
                        </a>
                    </div>

                    {/*Link section*/} 
                    <div className='hidden lg:flex justify-between items-center gap-4'>
                        <ul className='hidden lg:flex justify-between items-center gap-4'>
                         {Menu.map((menu) => (
                            <li key={menu.id}>
                              <a href={menu.link}
                              className='inline-block text-xl'>
                                {menu.name}
                                </a>
                            </li>
                           ))
                         }
                        </ul>
                    </div>

                   {/*Responsive  Menu for Mobile Device*/}
                   <div className='lg:hidden'>
                     <button onClick={handleOpen}>
                       <FaBars className="text-3xl"/> 
                     </button>
                     
                    {/* Dropdown Menu */}
                        {open && ( // Conditionally render the dropdown menu if 'open' is true
                        <div>
                            <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
                                {Menu.map((menu) =>( // Map over the 'Menu' array to render list items
                                    <li key={menu.id}>
                                        <a 
                                        href={menu.link}
                                        className='inline-block text-xl p-4 hover:bg-primary hover:text-white w-full' // Apply CSS classes
                                        >
                                            {menu.name} {/* Render the name of the menu item */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        )}

                   </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default Navbar;