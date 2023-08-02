import Navbar from "./components/navar/Navbar.tsx";
import Power from "./components/power/Power.tsx";
import Speed from "./components/speed/Speed.tsx";
import Handling from "./components/handling/Handling.tsx";
import Options from "./components/options/Options.tsx";
import Contact from "./components/contact/Contact.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Power/>
            <Speed/>
            <Handling/>
            <Options/>
            <Contact/>
        </>
    )
}

export default App
