const registrationUrl = "https://forms.gle/15zNEB56RkPeBTQY9";

const workshopContent = {
  pt: {
    ids: {
      topbar: "inicio",
      audience: "conteudo",
      learning: "aprender",
      instructor: "instrutor",
      expectations: "certificado",
      contact: "contato",
    },
    header: {
      brandAriaLabel: "Logo do workshop",
      brandAlt: "Logo do workshop",
      brandText: "Workshop GitHub + Azure DevOps",
      languageSwitcherAria: "Seletor de idioma",
      ptTitle: "Versao em Portugues",
      enTitle: "English version",
      ptLabel: "BR PT",
      enLabel: "US EN",
    },
    hero: {
      ariaLabel: "Apresentacao principal",
      eyebrow: "WORKSHOP GRATUITO + CERTIFICADO",
      title: "GitHub + Azure DevOps para automatizar builds, testes e deploy",
      description:
        "Veja na pratica como estruturar pipelines de CI/CD com clareza, reduzindo tarefas manuais e acelerando entregas.",
      quote:
        "Em apenas 1 hora, veja como estruturar um pipeline real de build, testes e deploy usando Azure DevOps Express com repositorio GitHub.",
      imageAlt: "Workshop GitHub e Azure DevOps",
      ctaHref: registrationUrl,
      ctaText: "Garantir minha vaga gratuitamente",
    },
    audience: {
      title: "Para quem e este workshop?",
      description:
        "Este workshop e ideal para profissionais e equipes que querem elevar o nivel de automacao no ciclo de desenvolvimento.",
      items: [
        {
          title: "Desenvolvedores",
          description: "Querem aprender a automatizar build e deploy com ferramentas usadas no mercado.",
        },
        {
          title: "Engenheiros de software",
          description: "Possuem interesse em DevOps e CI/CD para tornar o processo de entrega mais confiavel.",
        },
        {
          title: "Iniciantes em automacao",
          description: "Querem conhecer GitHub Actions e Azure DevOps de forma objetiva e aplicada.",
        },
        {
          title: "Times de tecnologia",
          description: "Buscam melhorar o fluxo de desenvolvimento, testes e entrega de software.",
        },
        {
          title: "Profissionais com base em desenvolvimento",
          description: "Desejam evoluir na carreira e ampliar repertorio em praticas modernas de engenharia.",
        },
      ],
    },
    learning: {
      title: "O que voce vai aprender",
      description:
        "Durante o workshop, voce tera contato pratico com os pilares da automacao e boas praticas de CI/CD.",
      columns: [
        [
          { text: "Conceitos fundamentais de DevOps e CI/CD" },
          { text: "Automacao de testes e validacao de codigo" },
          { text: "Dicas de carreira em DevOps e automacao" },
        ],
        [
          { text: "Deploy automatizado com Azure DevOps" },
          { text: "Boas praticas para build e release automaticos" },
          {
            text: "Exemplos praticos:",
            children: [
              "Como instalar e configurar Azure Devops Express",
              "Como instalar e configurar SqlServer Express",
              "Como integrar Github repositorio com Azure Devops Express",
            ],
          },
        ],
      ],
    },
    instructor: {
      title: "Com quem vou aprender",
      profileUrl: "https://www.linkedin.com/in/mlevinspuhl",
      profileName: "Marcel Levinspuhl",
      introParagraph:
        " e um profissional de tecnologia com mais de 20 anos de experiencia em desenvolvimento de software, engenharia e automacao de ambientes. Atuou no mercado brasileiro em empresas de tecnologia e hoje trabalha no mercado irlandes com foco em praticas modernas de DevOps, automacao e cloud.",
      secondParagraph:
        "Com solida experiencia em Java e .NET, construiu uma carreira que une conhecimento tecnico profundo, visao pratica do ciclo completo de desenvolvimento de software e forte capacidade de transformar processos complexos em fluxos mais ageis, organizados e eficientes.",
      thirdParagraph:
        "No workshop, ele compartilha essa experiencia de forma aplicada, mostrando como ferramentas como GitHub e Azure DevOps podem ser usadas na pratica para automatizar etapas essenciais do desenvolvimento.",
    },
    expectations: {
      title: "O que esperar do workshop",
      items: [
        { title: "Aula pratica", description: "Conteudo direto ao ponto, com foco em execucao." },
        { title: "Duracao", description: "1 hora de imersao orientada para aplicacao real." },
        { title: "Formato", description: "Evento on-line, ao vivo, via Teams." },
        { title: "Vagas", description: "Limitadas para manter a dinamica do encontro." },
        { title: "Data", description: "Sera definida em breve. Garanta sua vaga gratuita e inscreva-se ja!" },
        {
          title: "Certificado",
          description: "Emitido ao final do curso. Gratuito e valido internacionalmente.",
        },
      ],
    },
    finalCta: {
      ariaLabel: "Chamada final para inscricao",
      title: "Garanta sua vaga no workshop",
      description:
        "Em apenas 1 hora, veja como estruturar um pipeline real de build, testes e deploy usando Azure DevOps Express com repositorio GitHub.",
      ctaHref: registrationUrl,
      ctaText: "Garantir minha vaga gratuitamente",
    },
  },
  en: {
    ids: {
      topbar: "start",
      audience: "audience",
      learning: "learn",
      instructor: "instructor",
      expectations: "certificate",
      contact: "contact",
    },
    header: {
      brandAriaLabel: "Workshop logo",
      brandAlt: "Workshop logo",
      brandText: "Workshop GitHub + Azure DevOps",
      languageSwitcherAria: "Language switcher",
      ptTitle: "Versao em Portugues",
      enTitle: "English version",
      ptLabel: "BR PT",
      enLabel: "US EN",
    },
    hero: {
      ariaLabel: "Main presentation",
      eyebrow: "FREE WORKSHOP + CERTIFICATE",
      title: "GitHub + Azure DevOps to automate builds, tests and deployments",
      description:
        "See in practice how to structure CI/CD pipelines with clarity, reducing manual tasks and accelerating deliveries.",
      quote:
        "In just 1 hour, see how to structure a real build, test and deploy pipeline using Azure DevOps Express with a GitHub repository.",
      imageAlt: "GitHub and Azure DevOps Workshop",
      ctaHref: registrationUrl,
      ctaText: "Reserve my free spot",
    },
    audience: {
      title: "Who is this workshop for?",
      description:
        "This workshop is ideal for professionals and teams who want to raise the level of automation in the development cycle.",
      items: [
        {
          title: "Developers",
          description: "Who want to learn how to automate build and deploy with industry-standard tools.",
        },
        {
          title: "Software Engineers",
          description: "Interested in DevOps and CI/CD to make the delivery process more reliable.",
        },
        {
          title: "Automation Beginners",
          description: "Who want to learn GitHub Actions and Azure DevOps in an objective and practical way.",
        },
        {
          title: "Technology Teams",
          description: "Looking to improve the development, testing and software delivery workflow.",
        },
        {
          title: "Development-Background Professionals",
          description: "Who want to grow in their career and expand their knowledge of modern engineering practices.",
        },
      ],
    },
    learning: {
      title: "What you will learn",
      description:
        "During the workshop, you will have hands-on contact with the pillars of automation and CI/CD best practices.",
      columns: [
        [
          { text: "Core concepts of DevOps and CI/CD" },
          { text: "Automated testing and code validation" },
          { text: "DevOps and automation career tips" },
        ],
        [
          { text: "Automated deployment with Azure DevOps" },
          { text: "Best practices for automated build and release" },
          {
            text: "Practical examples:",
            children: [
              "How to install and configure Azure DevOps Express",
              "How to install and configure SQL Server Express",
              "How to integrate a GitHub repository with Azure DevOps Express",
            ],
          },
        ],
      ],
    },
    instructor: {
      title: "Who will teach you",
      profileUrl: "https://www.linkedin.com/in/mlevinspuhl",
      profileName: "Marcel Levinspuhl",
      introParagraph:
        " is a technology professional with over 20 years of experience in software development, engineering and environment automation. He worked in the Brazilian market at technology companies and today works in the Irish market focused on modern DevOps practices, automation and cloud.",
      secondParagraph:
        "With solid experience in Java and .NET, he built a career that combines deep technical knowledge, a practical vision of the full software development lifecycle and a strong ability to transform complex processes into more agile, organised and efficient workflows.",
      thirdParagraph:
        "In the workshop, he shares that experience in an applied way, showing how tools such as GitHub and Azure DevOps can be used in practice to automate essential stages of development.",
    },
    expectations: {
      title: "What to expect from the workshop",
      items: [
        { title: "Hands-on class", description: "Straight-to-the-point content, focused on execution." },
        { title: "Duration", description: "1 hour of immersive, application-oriented session." },
        { title: "Format", description: "Online live event, via Teams." },
        { title: "Spots", description: "Limited to keep the session dynamic." },
        { title: "Date", description: "To be announced soon. Secure your free spot and register now!" },
        { title: "Certificate", description: "Issued at the end of the course. Free and internationally valid." },
      ],
    },
    finalCta: {
      ariaLabel: "Final call to registration",
      title: "Reserve your spot in the workshop",
      description:
        "In just 1 hour, see how to structure a real build, test and deploy pipeline using Azure DevOps Express with a GitHub repository.",
      ctaHref: registrationUrl,
      ctaText: "Reserve my free spot",
    },
  },
};

export default workshopContent;