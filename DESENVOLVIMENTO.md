# Guia de Desenvolvimento - VS Code

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- VS Code
- Git

### Passos para rodar no VS Code

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd nome-do-projeto
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   - O projeto será executado em: `http://localhost:5173`

## 🔧 Extensões Recomendadas

As seguintes extensões serão sugeridas automaticamente ao abrir o projeto:

- **Prettier** - Formatação de código
- **ESLint** - Linting
- **Tailwind CSS IntelliSense** - Autocomplete para classes CSS
- **TypeScript** - Suporte avançado ao TypeScript
- **Auto Rename Tag** - Renomeia tags HTML automaticamente
- **Error Lens** - Mostra erros inline
- **Path Intellisense** - Autocomplete para caminhos de arquivos

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx      # Cabeçalho
│   ├── HeroSection.tsx # Seção hero
│   └── ...
├── pages/              # Páginas da aplicação
├── lib/                # Utilitários
├── hooks/              # Custom hooks
└── assets/             # Imagens e arquivos estáticos
```

## 🎨 Sistema de Design

- **Cores**: Definidas no `src/index.css` usando variáveis CSS
- **Componentes**: Baseados no shadcn/ui
- **Estilização**: Tailwind CSS com tokens semânticos

## 🐛 Solução de Problemas

### Erro de importação
Se houver erros de importação, verifique:
- Se o arquivo existe no caminho correto
- Se está usando o alias `@/` para imports relativos à pasta `src/`

### Problemas com Tailwind
- Verifique se as classes estão corretas
- Use o IntelliSense do Tailwind para autocomplete
- Consulte as variáveis CSS em `src/index.css`

### TypeScript
- O projeto usa configuração permissiva
- Erros de tipo não impedem a compilação
- Use `// @ts-ignore` se necessário (temporariamente)

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o ESLint

## 🔍 Debugging

- Use as Developer Tools do Chrome
- Configure breakpoints no VS Code
- Use `console.log()` para debug rápido
- Verifique o terminal do VS Code para erros de compilação