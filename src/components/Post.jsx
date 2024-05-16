import style from "./Post.module.css" 

export function Post(){
  return(
    <article className={style.post}>
      <header>  
        <div className={style.author}>
            <img className={style.avatar} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div className={style.authorInfo}>
              <strong>João Dezidero</strong>
              <span>Web Developer</span>
            </div>
        </div>


        <time title="16 de maio as 9:54"datetime="2024-05-16 09:54:13">Publicado a 1 hora</time>
      </header>
      <div className={style.content}>
       
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais</p> um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        <p><a href=""> jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto </a>
        <a href="">#nlw </a>
        <a href="">#rocketseat</a></p>
        
      </div>
    </article>
  )
}