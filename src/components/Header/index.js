import { Zoom } from "react-awesome-reveal";

const Header = () => {
    return (
        <header className="hero">
            <Zoom 
            duration={2000}>
                <h1>Computer Science Student Association</h1>
                <p>- From Algorithm to Action -</p>
            </Zoom>
        </header>
    )
};

export default Header;
