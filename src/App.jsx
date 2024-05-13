import { Header } from "./components/Header";
import "./globalStyle.css";
import style from "./app.module.css";
import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </>
  );
}

export default App;
