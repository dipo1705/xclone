import Trend from "./trend";
import TrendListTitle from "./trendlisttitle";
import ShowMore from "./showmore";


function TrendList() {

  return (
    <div className="trends">
      <TrendListTitle/>
      
        <Trend TrendPays={"turkey"} TrendSujet={"#SQUID"}/>
        <Trend TrendPays={"Korean"} TrendSujet={"#SQUID"}/>
        <Trend TrendPays={"Nederland"} TrendSujet={"#SQUID"}/>
        <Trend TrendPays={"CongoDrc"} TrendSujet={"#SQUID"}/>
        
      <ShowMore/>
    </div>
  )
}
export default TrendList;