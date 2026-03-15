export default function Privacidade() {
  return (
    <div className="privacidade-page">
      <style>{`
        .privacidade-page { font-family: sans-serif; line-height: 1.6; color: #333; width: 100%; min-height: 100vh; margin: 0; padding: 40px clamp(20px, 5vw, 72px); }
        .privacidade-page h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        .privacidade-page h2 { color: #2980b9; margin-top: 30px; }
        .privacidade-page footer { margin-top: 50px; font-size: 0.9em; color: #7f8c8d; text-align: center; }
      `}</style>

      <h1>Política de Privacidade</h1>
      <p>A sua privacidade é importante para nós. É política do <strong>Trilha DevOps Academy Workshop</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>

      <h2>1. Coleta de Dados</h2>
      <p>Solicitamos informações pessoais (como nome e e-mail) apenas quando realmente precisamos delas para lhe fornecer o acesso ao workshop, materiais didáticos ou comunicações importantes sobre o evento.</p>

      <h2>2. Uso das Informações</h2>
      <p>As informações coletadas são utilizadas exclusivamente para:</p>
      <ul>
        <li>Garantir sua inscrição e acesso às aulas;</li>
        <li>Enviar links de transmissão e materiais de apoio;</li>
        <li>Informar sobre futuras turmas ou conteúdos relevantes de DevOps.</li>
      </ul>

      <h2>3. Retenção de Dados</h2>
      <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

      <h2>4. Compartilhamento</h2>
      <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para plataformas de automação de e-mail necessárias para a entrega do conteúdo.</p>

      <h2>5. Seus Direitos</h2>
      <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.</p>

      <h2>6. Contato</h2>
      <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail de suporte do workshop.</p>

      <footer>
        <p>&copy;2026 Trilha DevOps Workshop. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
