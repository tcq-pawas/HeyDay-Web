import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="pt-40 min-h-screen">
        <h1 className="text-center text-5xl font-bold">
          About Us Page
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;