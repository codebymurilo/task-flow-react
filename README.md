# Estudo de React

Projeto de estudo para praticar a criação e a composição de componentes em React. A aplicação implementa um gerenciador simples de tarefas, com criação, conclusão, remoção e visualização de detalhes.

## Funcionalidades

- Adicionar tarefas com título e descrição.
- Marcar tarefas como concluídas ou reabri-las.
- Remover tarefas da lista.
- Abrir uma página com os detalhes de cada tarefa.
- Salvar a lista no `localStorage` do navegador para mantê-la após recarregar a página.

> Os dados ficam armazenados somente no navegador atual. O projeto não utiliza backend nem sincroniza tarefas entre dispositivos.

## Tecnologias

- React 18
- Vite
- React Router
- Tailwind CSS
- Lucide React
- UUID

## Como executar

Você precisa ter Node.js e npm instalados.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra no navegador o endereço informado pelo Vite (normalmente `http://localhost:5173`).

## Estrutura principal

```text
src/
├── components/
│   ├── AddTask.jsx   # Formulário para adicionar uma tarefa
│   ├── Button.jsx    # Botão reutilizável
│   ├── Input.jsx     # Campo de entrada reutilizável
│   ├── Tasks.jsx     # Lista e ações das tarefas
│   └── Title.jsx     # Título reutilizável
├── pages/
│   └── TaskPage.jsx  # Página de detalhes da tarefa
├── App.jsx           # Estado e operações da lista de tarefas
└── main.jsx          # Inicialização do React e configuração das rotas
```

## Scripts disponíveis

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com Vite. |
| `npm run build`   | Gera a versão de produção em `dist/`.          |
| `npm run preview` | Serve localmente a versão de produção gerada.  |
| `npm run lint`    | Verifica o código com ESLint.                  |
