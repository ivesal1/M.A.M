import './../assets/Nav.css'
import { Link } from 'react-router-dom'

const nav = [
    { text: 'Home', link: '/' },
    { text: 'Movies', link: '/Movies' },
    { text: 'TVshows', link: '/tvshows' },
    { text: 'Contact Us', link: '/contact-us' },
]

export default function Nav() {
    return (
        <header>
            <nav>
                <div>
                    <div className='logo'>
                        LOGO
                    </div>
                    <ul className='nav-item'>
                        {nav.map(({ text, link }, i) => {
                            return (
                                <Link to={link}>
                                    <li key={i}>{text}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div className='user-search-bar'>
                    <div>Search</div>
                    <div style={{backgroundColor:'gray',width:30,height:30,borderRadius:'50%',marginRight:5}}></div>
                    <div>Salam Chetori</div>
                </div>
            </nav>
        </header>
    )
}