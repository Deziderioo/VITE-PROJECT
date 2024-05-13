import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </aside>
    </>
  );
}
