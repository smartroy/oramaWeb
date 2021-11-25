import NavBar from "./components/NavBar";
import InfoWithPic from './components/InfoWithPic'
import InfoCards from './components/InfoCards'
import InfoCardTrans from './components/InfoCardTrans'
import OramaHeader from './components/OramaHeader'
import OramaFooter from './components/OramaFooter'
import ScrollToTop from './components/ScrollToTop'
function App() {
  const navItem = [
    { name: 1, link: "#" },
    { name: 2, link: "#" },
    { name: 3, link: "#" },
    { name: 4, link: "#" },
    { name: 5, link: "#" }
  ]
  const infoContents = [
    {
      pic: {
        url: "/imgs/demo-31.png",
        style: { float: "right", padding: "40px" },
        className: "img-fluid"

      },
      title: "Introducing Orama",
      intro: "A powerful engine that integrates the finest AI technology to effectively produce some of the most impressive, original, novel and high quality artworks",
      list: [
        "Cutting edge AI technology: CAN, GAN and its varieties, etc",
        "The most comprehensive reference library built in, ever",
        "Orama produced artworks minted as NFTs, ownerships can be freely traded, licensed on Orama’s own chain or cross chain",
        "Inference on chain, making it the first ever AI to truly live on a blockchain",
        "Orama is an engine that can connect to different chains"
      ]
    },
    {
      pic: {
        url: "/demo-30.png",
        style: { float: "left", padding: "40px" },
        className: "img-fluid"

      },
      title: "Orama Canvas",

      list: [
        "The killer App, powered by Orama EngineThe brain behind all the master creations, now at the users disposal.",
        "Highly effective production tool for creative professionalsGreatly improve the efficiency of traditional art/design creation process.",
        "No professional skills requiredAmateurs friendly, anyone can use this platform to create amazing work, the engine does the heavy lifting. Billions of potential users.",
        "Synergetic with the rest of Orama ecosystem (Orama Pictures, Orama Studios, etc.)",
      ]
    },
    {
      pic: {
        url: "/rounded-in-photoretrica_1.png",
        style: { float: "right", padding: "40px" },
        className: "img-fluid"

      },
      title: "Orama Ecosystem",
      intro: "More than a Blockchain, a whole Ecosystem",
      list: [
        "Orama’s ecosystem is so much more than an engine powered NFT chain, users can access Orama’s Canvas, Studios and other exciting labs by spending ORA token",
        "A bazaar for NFT trading with a nexus for cross chain.",
        "A game studio producing games utilizing NFT assets produced by Orama",
        "A fashion brand producing line up designed by Orama",
        "The possibilities are endless ",
      ]
    }
  ]
  return (
    <div className="WholeContainer">
      <ScrollToTop></ScrollToTop>
      <OramaHeader navItems={navItem}></OramaHeader>
      <InfoWithPic infoContent={infoContents[0]}></InfoWithPic>
      <InfoWithPic infoContent={infoContents[1]}></InfoWithPic>
      <InfoWithPic infoContent={infoContents[2]}></InfoWithPic>

      <InfoCardTrans></InfoCardTrans>
      <OramaFooter></OramaFooter>
    </div >
  );
}

export default App;
