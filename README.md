# Curriculo Online DS881

Projeto individual da disciplina DS881 para publicacao de um curriculo/portfolio estatico com Docker, GitHub Actions, GitHub Pages e fluxo de trabalho baseado em Pull Requests.

## Site em producao

Link do GitHub Pages:

```txt
https://pompssss.github.io/ds881-curriculo-GRR20240994/
```

Este link ficara disponivel depois que o deploy no GitHub Pages for executado com sucesso.

## Stack utilizada

- Vite
- HTML, CSS e JavaScript
- Docker e Docker Compose
- GitHub Actions
- GitHub Pages

## Como executar localmente com Docker

O projeto foi configurado para rodar sem instalar Node.js diretamente no sistema operacional hospedeiro.

1. Clone o repositorio:

```powershell
git clone https://github.com/pompssss/ds881-curriculo-GRR20240994.git
```

2. Entre na pasta do projeto:

```powershell
cd ds881-curriculo-GRR20240994
```

3. Suba o ambiente de desenvolvimento:

```powershell
docker compose up
```

4. Acesse no navegador:

```txt
http://localhost:8080
```

O `docker-compose.yml` usa bind mount para mapear o codigo local dentro do container. Assim, ao salvar alteracoes nos arquivos do projeto, o Vite atualiza a pagina automaticamente.

## Comandos uteis

Instalar dependencias localmente, caso queira rodar sem Docker:

```powershell
npm install
```

Rodar linter:

```powershell
npm run lint
```

Gerar build de producao:

```powershell
npm run build
```

## CI/CD

O workflow `.github/workflows/main.yml` executa:

1. Lint/static analysis com ESLint.
2. Build da aplicacao com Vite.
3. Deploy automatico para GitHub Pages quando houver merge na branch `main`.

## Fluxo de trabalho com Git

Este projeto deve seguir o fluxo:

1. Criar uma branch a partir da `main`.
2. Fazer commits seguindo Conventional Commits.
3. Abrir Pull Request para integrar na `main`.
4. Fazer merge apenas apos o pipeline de CI passar com sucesso.

Exemplo:

```powershell
git checkout -b feat/configuracao-inicial
git add .
git commit -m "feat: configura curriculo online"
git push -u origin feat/configuracao-inicial
```

Depois, abra um Pull Request no GitHub da branch `feat/configuracao-inicial` para `main`.

## Protecao da branch main

A branch `main` foi configurada como protegida no GitHub com a regra:

- Exigir Pull Request antes do merge.
- Bloquear push direto na `main`.
- Exigir status checks apos o primeiro workflow ficar disponivel.


### Evidencia

<img width="914" height="813" alt="image" src="https://github.com/user-attachments/assets/fffadf70-b53a-43f8-ba5a-8bae7950befc" />
<img width="684" height="913" alt="image" src="https://github.com/user-attachments/assets/8354b070-a150-4c97-a0a4-a9145434dced" />


