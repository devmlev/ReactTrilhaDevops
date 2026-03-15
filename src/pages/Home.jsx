import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Header/Navigation */}
      <header>
        <nav>
          <div className="logo">🚀 Trilha DevOps Academy Workshop</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2 className="workshop-gratuito">Workshop gratuito!</h2>
          <h1>GitHub + Azure DevOps</h1>
          <h2 className="whiteH3"> Primeiros passos para automatizar build, testes e deploy.</h2>
          <h3 className="tituloH3">Aprenda, na prática, como automatizar etapas essenciais do desenvolvimento usando
            GitHub e
            Azure DevOps.</h3>
          <button className="cta-button">Inscreva-se Agora</button>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section scroll-reveal" id="sobre">
        <div className="container">
          <div className="about-section">
            <h2>Bem-vindo à Trilha DevOps Academy</h2>
            <div className="about-text">
              <h3 className="antesH3">Para quem é este workshop?</h3>
              <p>Este workshop é ideal para:</p>
              <ul>
                <li><strong>Desenvolvedores</strong> que querem aprender sobre automação de build e deploy</li>
                <li><strong>Engenheiros</strong> interessados em práticas DevOps e CI/CD</li>
                <li><strong>Iniciantes</strong> em automação que desejam conhecer ferramentas profissionais como
                  GitHub Actions e Azure DevOps</li>
                <li><strong>Times</strong> que buscam melhorar o processo de desenvolvimento e entrega de
                  software</li>
                <li>Qualquer pessoa com conhecimento básico de desenvolvimento que quer evoluir na carreira</li>
              </ul>
            </div>
          </div>
          <div className="about-section">
            <div className="about-text">
              <h3 className="antesH3">O que você vai aprender</h3>
              <p>Durante este workshop, você terá contato prático com:</p>
              <ul>
                <li>Conceitos fundamentais de DevOps e CI/CD (Continuous Integration/Continuous Deployment)</li>
                <li>Como configurar pipelines de automação com <strong>GitHub Actions</strong></li>
                <li>Automação de testes e validação de código</li>
                <li>Deploy automatizado com <strong>Azure DevOps</strong></li>
                <li>Boas práticas para build e release automático</li>
                <li>Exemplos práticos e hands-on que você pode aplicar imediatamente</li>
                <li>Dicas de carreira em DevOps e automação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section className="section scroll-reveal" id="recursos">
        <div className="container">
          <h2>Recursos Inclusos</h2>
          <div className="features">
            <div className="feature-item">
              <div className="icon">📚</div>
              <h4>Aula Prática</h4>
              <p>Conteúdo prático e direto ao ponto</p>
            </div>

            <div className="feature-item">
              <div className="icon">⏱️</div>
              <h4>Duração</h4>
              <p>1 hora</p>
            </div>

            <div className="feature-item">
              <div className="icon">💻</div>
              <h4>Formato</h4>
              <p>Online e gratuito</p>
            </div>

            <div className="feature-item">
              <div className="icon">🎫</div>
              <h4>Vagas</h4>
              <p>Limitadas</p>
            </div>

            <div className="feature-item">
              <div className="icon">📅</div>
              <h4>Data</h4>
              <p>A definir</p>
            </div>

            <div className="feature-item">
              <div className="icon">🏆</div>
              <h4>Certificado</h4>
              <p>Certificado de conclusão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="section scroll-reveal" id="contato">
        <div className="container">
          <h2>Entre em Contato</h2>
          <div className="grid">
            <div className="card">
              <h3>📧 Email</h3>
              <p><a href="mailto:contato.trilhadevops@gmail.com" className="contact-link">contato.trilhadevops@gmail.com</a>
              </p>
            </div>
            <div className="card">
              <h3>🌐 Redes Sociais</h3>
              <p><a href="#" className="contact-link">@DevOpsWorkshop</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <h4>Sobre o Curso</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/mlevinspuhl">Instrutor (Marcel Levinspuhl)</a></li>
            </ul>
          </div>
          <div>
            <h4>Recursos para o curso</h4>
            <ul>
              <li><a href="https://github.com/devmlev/ReactAppCurso">Github</a></li>
              <li><Link to="/download">Microsoft Downloads</Link></li>
            </ul>
          </div>
          <div>
            <h4>Política</h4>
            <ul>
              <li><Link to="/privacidade">Privacidade</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Informações de Licenciamento: O Azure DevOps Server Express é limitado a 5 usuários ativos. O SQL Server Express possui limite de 10GB por banco de dados.</p>
          <p><em>Microsoft, Azure e SQL Server são marcas registradas do grupo de empresas Microsoft. Esta página fornece apenas links de redirecionamento para o conteúdo oficial.</em></p>
          <p>&copy; 2026 Trilha DevOps Workshop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}
