import Managers from "../components/Managers";
import Footer from "../components/Footer";

function ManagementPage() {
  return (
    <>
    <div className="flex flex-wrap justify-center md:justify-start">
      <Managers
        Name="Saleem Haji"
        Role="Secretary"
        Profile="/images/sec.JPEG.jpg"
        Whatsapp="https://wa.me/1234567890"
        Email="mailto:johndoe@example.com"
      />
      <Managers
        Name="Penkattil Ahmed Haji"
        Role="President"
        Profile="/images/president.jpg"
        Whatsapp="https://wa.me/9876543210"
        Email="mailto:janesmith@example.com"
      />
      <Managers
        Name="Yusuf Haji"
        Role="Treasurer"
        Profile="/images/trus.jpg"
        Whatsapp=""
        Email=""
      />
    </div>
    <Footer />
    </>

  );
}

export default ManagementPage;
