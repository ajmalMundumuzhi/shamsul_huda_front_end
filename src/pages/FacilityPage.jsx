import Facility from "../components/Facility";

function FacilityPage () {

  const title = "Masjid"
  const detail = "the 4000 square feet spaced building of kmo masjid is located adjacent to academic block of the institution. the two storied masjid could comprise around 1000 people for prayer along with the facilities for taking ablution and separate toilet building set up near to masjid."

    return (
        <>
        <Facility
        title = "Masjid"
        detail = "the 4000 square feet spaced building of kmo masjid is located adjacent to academic block of the institution. the two storied masjid could comprise around 1000 people for prayer along with the facilities for taking ablution and separate toilet building set up near to masjid."
        url = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        />
        <Facility 
        title = ""
        detail = ""
        />
        </>
    )
}

export default FacilityPage;