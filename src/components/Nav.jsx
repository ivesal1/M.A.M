import './../assets/Nav.css'
const nav = [
    'Home','Movies','TVshows','Contact Us'
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
                        {nav.map((item,i) => {
                            return <li key={i}>{item}</li>
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