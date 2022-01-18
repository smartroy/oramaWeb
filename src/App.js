import NavBar from "./components/NavBar";
import InfoWithPic from './components/InfoWithPic'
import InfoCards from './components/InfoCards'
import InfoCardTrans from './components/InfoCardTrans'
import OramaHeader from './components/OramaHeader'
import OramaFooter from './components/OramaFooter'
import ScrollToTop from './components/ScrollToTop'
import OramaTimeline from './components/OramaTimeline'
import OramaTimeline2 from './components/OramaTimeline2'
import SlidingCards from './components/SlidingCards'
import TextOverPic from './components/TextOverPic'
import PicGrid from './components/PicGrid'
import OramaNews from './components/OramaNews'
import { infoContents } from './pageContent/infoContents'
import { techInfo } from './pageContent/techInfo'
import { ecoInfos } from './pageContent/oramaEco'
import { timelineContents } from './pageContent/timelineContent'
import { newsContent } from './pageContent/newsContents'


function App() {
  const navItem = [

    { name: "Vision", link: "#vision" },
    { name: "Eco-System", link: "#ecosystem" },
    { name: "Contact", link: "#contact" }
  ]

  const headerData = {
    title: "Orama",
    paragraph: "The Future of NTFs'"
  }
  const textOverPicData = {
    title: "We Love Art, AI and Blockchain",
    text: "We are an innovative and creative team of veterans in blockchain development that also happen to be savvy in AI and its related infrastructure, with proven big corporation track record"
  }
  return (
    <div className="wholeContainer">
      <ScrollToTop></ScrollToTop>
      <NavBar navItems={navItem}></NavBar>
      <OramaHeader navItems={navItem} data={headerData}></OramaHeader>
      <InfoWithPic infoContent={infoContents[0]}></InfoWithPic>
      <InfoWithPic infoContent={infoContents[1]}></InfoWithPic>
      <InfoWithPic infoContent={infoContents[2]}></InfoWithPic>
      {/* <SlidingCards></SlidingCards> */}
      <InfoCards cardsInfo={ecoInfos}></InfoCards>
      <TextOverPic data={textOverPicData}></TextOverPic>
      <InfoCards cardsInfo={techInfo}></InfoCards>

      <OramaTimeline timelineInfo={timelineContents}></OramaTimeline>
      <OramaNews news={newsContent}></OramaNews>
      <PicGrid></PicGrid>

      <OramaFooter></OramaFooter>
    </div >
  );
}

export default App;
