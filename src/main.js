import './styles.css';

const profile = {
  name: 'Seu Nome',
  role: 'Estudante de Tecnologia',
  location: 'Curitiba, PR',
  email: 'seu.email@exemplo.com',
  github: 'https://github.com/SEU_USUARIO',
  linkedin: 'https://www.linkedin.com/in/SEU_USUARIO',
  summary:
    'Curriculo online criado para demonstrar conhecimentos em desenvolvimento web, conteinerizacao, automacao de CI/CD e governanca de codigo.',
  skills: ['HTML', 'CSS', 'JavaScript', 'Docker', 'GitHub Actions', 'Git'],
  experiences: [
    {
      title: 'Projeto DS881 - Curriculo Online',
      period: '2026',
      description:
        'Aplicacao estatica publicada com GitHub Pages, ambiente Docker e pipeline automatizado de lint, build e deploy.',
    },
    {
      title: 'Formacao Academica',
      period: 'Atual',
      description:
        'Estudos em tecnologias emergentes, desenvolvimento de software, automacao e boas praticas de engenharia.',
    },
  ],
  projects: [
    {
      name: 'Curriculo Online DS881',
      description:
        'Portfolio estatico com Vite, Docker, GitHub Actions e deploy continuo no GitHub Pages.',
    },
    {
      name: 'Portfolio pessoal',
      description:
        'Espaco para apresentar projetos academicos, habilidades tecnicas e experiencias profissionais.',
    },
  ],
};

const listItems = (items) => items.map((item) => `<li>${item}</li>`).join('');

document.querySelector('#app').innerHTML = `
  <main class="page-shell">
    <section class="hero" aria-labelledby="profile-name">
      <div>
        <p class="eyebrow">Curriculo Online DS881</p>
        <h1 id="profile-name">${profile.name}</h1>
        <p class="role">${profile.role}</p>
        <p class="summary">${profile.summary}</p>
      </div>
      <aside class="contact-panel" aria-label="Informacoes de contato">
        <span>${profile.location}</span>
        <a href="mailto:${profile.email}">${profile.email}</a>
        <a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a>
        <a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      </aside>
    </section>

    <section class="content-grid" aria-label="Informacoes profissionais">
      <article class="section-block">
        <h2>Competencias</h2>
        <ul class="skill-list">
          ${listItems(profile.skills)}
        </ul>
      </article>

      <article class="section-block">
        <h2>Experiencias</h2>
        <div class="timeline">
          ${profile.experiences
            .map(
              (experience) => `
                <section>
                  <div>
                    <h3>${experience.title}</h3>
                    <span>${experience.period}</span>
                  </div>
                  <p>${experience.description}</p>
                </section>
              `,
            )
            .join('')}
        </div>
      </article>

      <article class="section-block">
        <h2>Projetos</h2>
        <div class="project-list">
          ${profile.projects
            .map(
              (project) => `
                <section>
                  <h3>${project.name}</h3>
                  <p>${project.description}</p>
                </section>
              `,
            )
            .join('')}
        </div>
      </article>
    </section>
  </main>
`;
