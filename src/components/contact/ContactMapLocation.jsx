
import bg5 from "../../assets/backgrounds/bg5.png";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.943578387371!2d83.37558270000002!3d26.798270100000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b795d2cae9%3A0x98b3202d1e49fd25!2sHeyDay%20Realty%20Private%20Limited!5e1!3m2!1sen!2sin!4v1783921158449!5m2!1sen!2sin";

export default function ContactMapLocation() {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat w-full py-6"
      style={{
        backgroundImage: `url(${bg5})`,
      }}
    >
      <div className="mx-auto h-[400px] w-[70%] min-w-[280px] overflow-hidden rounded-lg ">
        <iframe
          src={mapSrc}
          title="HeyDay Realty Private Limited Location"
          className="h-full w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
