import styles from "./Sidebar.module.css";
import {PencilLine} from "@phosphor-icons/react"

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

      <div className={styles.profile}>
        <img className={styles.profileImg} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <strong>João Deziderio</strong>
        <span>web developer</span>
      </div>
      <footer>
        <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
      </footer>
      </aside>
    </>
  );
}
