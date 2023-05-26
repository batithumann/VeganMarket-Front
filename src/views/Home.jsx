import HeroComponent from "../components/hero-components/HeroComponent";
import "../styles/heroContainer.css"

const Home = () => {
  
  return (
    <div>
        <div className="hero">
            <HeroComponent></HeroComponent>
        </div>
    </div>
  );
};

export default Home;
