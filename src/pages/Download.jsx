import '../download.css'

export default function Download() {
  return (
    <>
      <h1>Downloads Oficiais da Microsoft</h1>
      <p>Utilize os links abaixo para baixar as ferramentas necessárias diretamente dos servidores oficiais da Microsoft.</p>

      {/* Seção SQL Server 2022 Express */}
      <div className="download-section">
        <span className="product-name">Microsoft SQL Server 2022 Express</span>
        <p>Edição gratuita do SQL Server, ideal para aprendizado, desenvolvimento e pequenas aplicações Web ou de desktop.</p>
        <a
          href="https://download.microsoft.com/download/5/1/4/5145fe04-4d30-4b85-b0d1-39533663a2f1/SQL2022-SSEI-Expr.exe"
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixar no microsoft.com
        </a>
      </div>

      {/* Seção Azure DevOps Server Express */}
      <div className="download-section">
        <span className="product-name">Microsoft Azure DevOps Server 2022 Express</span>
        <p>Solução gratuita para colaboração em equipe de até 5 usuários ativos, abrangendo todo o ciclo de vida da aplicação.</p>
        <a
          href="https://go.microsoft.com/fwlink/?LinkId=2269947"
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Centro de Download
        </a>
      </div>

      {/* Rodapé Legal Obrigatório */}
      <footer className="legal-note">
        <p>Informações de Licenciamento: O Azure DevOps Server Express é limitado a 5 usuários ativos. O SQL Server Express possui limite de 10GB por banco de dados.</p>
        <p><em>Microsoft, Azure e SQL Server são marcas registradas do grupo de empresas Microsoft. Esta página fornece apenas links de redirecionamento para o conteúdo oficial.</em></p>
      </footer>
    </>
  )
}
