import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MediaHero from "../components/media/MediaHero";
import PropertyFilters from "../components/media/PropertyFilters";
import PropertyGallery from "../components/media/PropertyGallery";
import MediaCTA from "../components/media/MediaCTA";

const MediaPage = () => {
  return (
    <>
      <Navbar />

      <MediaHero />

      <PropertyGallery />


      <Footer />
    </>
  );
};

export default MediaPage;