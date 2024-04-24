import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Skills from "./pages/skills";
import DetailSkill from "./pages/skills/detail";
import Projects from "./pages/projects";
import Experiences from "./pages/experiences";
import Education from "./pages/education";
import Resume from "./pages/resume";
import Search from "./pages/search";
import common from "./assets/styles/common.module.scss"
import DetailProject from "./pages/projects/detail";
import { useSelector } from "react-redux";
import { clsx } from "clsx";


function App() {
  const theme = useSelector((state) => state.theme);

  const mainLayoutClasses = clsx(styles["main-layout"], {
    [styles["main-layout-dark-bg"]]: theme === "dark",
  });

  return (
      <div className={mainLayoutClasses}>
        <div
          className={
            theme === "dark" ? styles["header-dark"] : styles["header"]
          }
        >
          <div className={common.container}>
            <Header />
          </div>
        </div>
        <div className={common.container}>
          <div className={styles["page-indent"]}>
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/skills"}>
                <Route index element={<Skills />} />
                <Route path={":slug"} element={<DetailSkill />} />
              </Route>
              <Route path={"/projects"}>
                <Route index element={<Projects />} />
                <Route path={":id"} element={<DetailProject />} />
              </Route>
              <Route path={"/experiences"}>
                <Route index element={<Experiences />} />
                {/* <Route path={":slug"} element={<DetailExperience />} /> */}
              </Route>
              <Route path={"/search"} element={<Search />} />
              <Route path={"/resume"} element={<Resume />} />
              <Route path={"/education"} element={<Education />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
