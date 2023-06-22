
import "./Home.module.css"

const Home = () => {
  return (
    <div className="home">
   
      <header>
        <h1>Bienvenido a mi portafolio</h1>
        <p>
          Soy un desarrollador de software apasionado por la creación de
          aplicaciones web.
        </p>
      </header>

      <section className="projects">
        <h2>Proyectos Destacados</h2>
        {/* Aquí puedes agregar una lista de tus proyectos destacados */}
      </section>

      <section className="about">
        <h2>Sobre Mí</h2>
        <p>
          Soy un desarrollador de software con experiencia en el desarrollo de
          aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, y
          varios frameworks populares como React y Node.js. Me encanta resolver
          problemas desafiantes y aprender nuevas tecnologías.
        </p>
        <p>
          En mi tiempo libre, contribuyo a proyectos de código abierto y sigo
          aprendiendo sobre las últimas tendencias en desarrollo web. Estoy
          siempre en busca de oportunidades emocionantes para colaborar en
          proyectos interesantes.
        </p>
      </section>

      <section className="contact">
        <h2>Contacto</h2>
        <p>
          ¡Si estás interesado en trabajar juntos o simplemente quieres decir
          hola, no dudes en contactarme!
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="google-icon">&#xE87C;</span> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="google-icon">&#xE0E1;</span> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="google-icon">&#xE0E2;</span> Twitter
            </a>
          </li>
        </ul>
      </section>

      <footer>
        <p>© 2023 Tu Nombre</p>
      </footer>
    </div>
  );
};

export default Home;
