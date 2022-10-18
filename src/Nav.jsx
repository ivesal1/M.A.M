import './Nav.css'
const nav = [
    'Home','Movies','TVshows','Contact Us'
]

export default function Nav() {
    return (
        <nav>
            <div>
                LOGO
            </div>
            <ul>
                <li>
                    {nav.map((item) => {
                        return item
                    })}
                </li>
            </ul>
        </nav>
    )
}