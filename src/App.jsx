
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";


import style from "./app.module.css";
import "./globalStyle.css";


function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post/>
        </main>
      </div>
    </>
  );
}

export default App;
