import './MenuBar.css';

const MenuBarComponent = () => {

    return (
        <header>
            <div className="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="7" x2="15" y2="7" />
                    <line x1="7" y1="12" x2="17" y2="12" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
                POP<span>Text</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default MenuBarComponent;