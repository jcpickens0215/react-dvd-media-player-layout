import Header from "./components/header";
import PathView from "./components/pathView";
import FolderView from "./components/folderView";
import Details from "./components/details";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div id="container">
        <div id="template">
          <img id="bg" src="../assets/images/Template.jpg" alt="" />
          <div id="mainPanel">
            <Header/>
            <PathView/>
            <div id="centerPanel">
              <FolderView/>
              <Details/>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
