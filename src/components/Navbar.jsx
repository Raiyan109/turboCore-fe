import { Link } from "react-router-dom";
import logo from '../assets/turbocore-logo.jpg'
import { MdMenu } from 'react-icons/md'
import { FaFireAlt } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";

const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'Categories',
        link: '/'
    },
    {
        id: 3,
        title: 'Blog',
        link: '/'
    },
    {
        id: 4,
        title: 'About',
        link: '/'
    }
]

const Navbar = () => {
    return (
        <>
            <div className="bg-brandDark text-white py-4 font-varela">
                <nav className="flex justify-between items-center container">
                    {/* Logo */}
                    <div>
                        <UpdateFollower mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference'
                        }}>
                            <Link to='/' className="text-xl font-bold uppercase">
                                <img src={logo} alt="" className="w-10 h-10 object-contain rounded-full" />
                            </Link>
                        </UpdateFollower>
                    </div>
                    {/* Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <UpdateFollower mouseOptions={{
                                        backgroundColor: 'white',
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        scale: 5,
                                        mixBlendMode: 'difference'
                                    }}>
                                        <Link to={item.link} className="inline-block text-sm py-2 px-3 uppercase">{item.title}</Link>
                                    </UpdateFollower>
                                </li>
                            ))}
                            <UpdateFollower mouseOptions={{
                                backgroundColor: 'white',
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 5,
                                mixBlendMode: 'difference'
                            }}>
                                <button className="text-xl px-14">
                                    <FaFireAlt />
                                </button>
                            </UpdateFollower>
                        </ul>
                    </div>
                    {/* Mobile hamburger section */}
                    <div className="md:hidden">
                        <MdMenu className="text-4xl" />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;