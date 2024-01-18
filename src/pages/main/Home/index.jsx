import DiscoverSection from "../../../components/Home/DiscoverSection"
import NewRecipeSection from "../../../components/Home/NewRecipeSection"
import PopularSection from "../../../components/Home/PopularSection"
import SuggestionSection from "../../../components/Home/SuggestionSection"
import "../../../styles/landing.css"

const Home = () => {
  return (
    <div className="container-fluid">

      <DiscoverSection/>
      <SuggestionSection/>
      <NewRecipeSection/>
      <br/>
      <PopularSection/>

    </div>
  )
}

export default Home