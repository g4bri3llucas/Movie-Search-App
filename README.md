# 🎬 Movie Search App

Aplicação web para busca e descoberta de filmes, desenvolvida em React com integração à API do TMDB.

🔗 **[Acesse o projeto ao vivo](https://movie-search-app-gtv5.vercel.app)**

---

## ✨ Funcionalidades

- 🔥 Listagem de filmes populares
- 🔍 Busca de filmes em tempo real
- 🎬 Página de detalhes com sinopse, gêneros e avaliação
- ❤️ Sistema de favoritos com persistência no localStorage
- ⚡ Indicador de carregamento e tratamento de erros

---

## 🛠️ Tecnologias

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Vercel](https://vercel.com/) — deploy

---

## 📁 Estrutura de pastas

src/
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── SearchBar.jsx
│   ├── Loading.jsx
│   └── ErrorMessage.jsx
├── pages/
│   ├── Home.jsx
│   ├── MovieDetail.jsx
│   └── Favorites.jsx
├── services/
│   └── movieService.js
└── context/
└── FavoritesContext.jsx

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Chave de API do [TMDB](https://www.themoviedb.org/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/movie-search-app.git

# Entre na pasta
cd movie-search-app

# Instale as dependências
npm install
```

### Configurar variável de ambiente

Crie um arquivo `.env` na raiz do projeto:
REACT_APP_TMDB_KEY=sua_chave_aqui

### Rodar o projeto

```bash
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Build para produção

```bash
npm run build
```

---

## 📝 Licença

Este projeto está sob a licença MIT.