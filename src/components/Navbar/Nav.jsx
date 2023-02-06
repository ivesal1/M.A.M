import './../../assets/Nav.css'
import { Link } from 'react-router-dom'
import AuthNav from './AuthNav'
// import SignIn from '../SignUp/SignIn'

const nav = [
    { text: 'Home', link: '/' },
    { text: 'Movies', link: '/Movies' },
    // { text: 'TVshows', link: '/tvshows' },
    // { text: 'Contact Us', link: '/contact-us' },
]

export default function Nav() {
    return (
        <header className='z-50'>
            <nav>
                <div className='flex items-center'>
                    <div className='logo font-bold'>
                        VES MOVIE
                    </div>
                    <ul className='nav-item'>
                        {nav.map(({ text, link }, i) => {
                            return (
                                <Link key={i} to={link}>
                                    <li>{text}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <AuthNav />
                </div>
            </nav>
        </header>
    )
}