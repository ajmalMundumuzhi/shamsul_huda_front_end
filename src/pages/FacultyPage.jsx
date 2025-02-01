import Faculties from "../components/Faculties"
import Footer from "../components/Footer"

function FacultyPage() {
  return (
    <>
      <div className="container mx-auto m-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Faculty 1 */}
          <Faculties
            Name="Unais Hudawi"
            Role="Principal"
            Profile="/images/princi.jpg"
            Whatsapp=""
            Email=""
          />

          {/* Faculty 2 */}
          <Faculties
            Name="Sahad Hudawi"
            Role="Vice Principal"
            Profile="/images/sahad.jpg"
            Whatsapp=""
            Email=""
          />

          {/* Faculty 3 */}
          <Faculties
            Name="Suhail KP Hudawi"
            Role="Head of Department"
            Profile="/images/suhail.jpg"
            Whatsapp=""
            Email=""
          />

          {/* Faculty 4 */}
          <Faculties
            Name="Simsar Hudawi"
            Role="Academic Coordinator"
            Profile="/images/simsar.jpg"
            Whatsapp=""
            Email=""
          />

          {/* Faculty 5 */}
          <Faculties
            Name="Sayyid Mashoor Hudawi"
            Role="Staff Faculty"
            Profile="/images/mashoor.jpg"
            Whatsapp=""
            Email=""
          />
                    <Faculties
            Name="Zainul Abid Hudawi"
            Role="Staff Faculty"
            Profile="/images/zain.JPEG.jpg"
            Whatsapp=""
            Email=""
          />
                    <Faculties
            Name="Muhammed Hudawi"
            Role="Staff Faculty"
            Profile="/images/muhammed.jpg"
            Whatsapp=""
            Email=""
          />
                    <Faculties
            Name="Abdusathar Wafy"
            Role="Staff Faculty"
            Profile="/images/wafy.jpg"
            Whatsapp=""
            Email=""
          />
                    <Faculties
            Name="Fazil Haitami"
            Role="Staff Faculty"
            Profile="/images/haitami.jpg"
            Whatsapp=""
            Email=""
          />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default FacultyPage

