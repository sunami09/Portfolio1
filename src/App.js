import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Import Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";


function App() {
  return <>

  <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/" component={AboutPage}/>
        <Route exact path="/" component={BlogPage}/>
        <Route exact path="/" component={WorkPage} />
        <Route exact path="/" component={MySkillsPage} />
      </Switch>
    </ThemeProvider>

    </>
    
}

export default App

