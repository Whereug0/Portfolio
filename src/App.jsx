import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Skills from "./pages/skills";
import DetailSkill from "./pages/skills/detail";
import Projects from "./pages/projects";
import Experiences from "./pages/experiences";
import DetailExperiences from "./pages/experiences/[slug]";
import Education from "./pages/education";
import Resume from "./pages/resume";
import Search from "./pages/search";
import common from "./assets/styles/common.module.scss"
function App() {
  return (
    <div className={styles.mainLayout}>
      <Header></Header>
      <div className={common.container}>
        <Routes>
          <Route path={"*"} element={<Navigate to="/" replace />} />
          <Route path={"/"} element={<Home />} />
          <Route path="/skills">
            <Route index element={<Skills />} />
            <Route path=":slug" element={<DetailSkill />} />
          </Route>
          <Route path="/projects">
            <Route index element={<Projects />} />
            <Route path=":slug" element={<DetailSkill />} />
          </Route>
          <Route path="/experiences">
            <Route index element={<Experiences />} />
            <Route path=":slug" element={<DetailExperiences />} />
          </Route>
          <Route path="/education">
            <Route index element={<Education />} />
            {/* <Route path=':slug' element={<DetailEducation />}/> */}
          </Route>
          <Route path="/resume">
            <Route index element={<Resume />} />
            {/* <Route path=':slug' element={<DetailResume />}/> */}
          </Route>
          <Route path="/search">
            <Route index element={<Search />} />
            {/* <Route path=':slug' element={<DetailResume />}/> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
