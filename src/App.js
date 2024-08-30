import './App.css';
import './styles.css';
import CustomNavbar from './components/Navbar';
import TextToVideoSection from './components/TextToVideoSection';
import BrandLogoSlider from './components/BrandLogoSlider';
import IdeateGenerateSection from './components/IdeateGenerateSection';
import BenefitsSection from './components/BenefitsSection';



function App() {
  return (
    <div>
      <CustomNavbar />
      <TextToVideoSection />
      <BrandLogoSlider />
      <IdeateGenerateSection />
      <BenefitsSection />

    </div>
  );
}

export default App;
