# 🐾 AdoPets

Aplicação web para gerenciamento de pets disponíveis para adoção. Permite cadastrar, visualizar, editar e excluir pets de forma simples e intuitiva.

---

## 🚀 Tecnologias Utilizadas

- **JavaScript** (Vanilla JS com ES Modules)
- **Fetch API** para comunicação HTTP com o backend
- **REST API** com JSON como formato de dados
- **HTML5** e **CSS3**
- **Node.js + Express** (backend — servidor local ou hospedado no Render)

---

## 📁 Estrutura do Projeto

```
📦 adopets
├── assets/
│   └── imagens/
│       ├── icone-editar.png
│       ├── icone-excluir.png
│       └── icone-pata.png
├── api.js        # Camada de serviço — requisições HTTP
├── ui.js         # Camada de interface — manipulação do DOM
├── main.js       # Controlador — eventos e inicialização
└── index.html
```

---

## ⚙️ Funcionalidades

- ✅ Listar todos os pets cadastrados
- ✅ Cadastrar novo pet (espécie, nome e raça)
- ✅ Editar informações de um pet existente
- ✅ Excluir pet da lista
- ✅ Feedback visual com loading durante as requisições

---

## 🛠️ Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Backend da API em execução na porta `3000`

---

## 🌐 API

A aplicação consome uma API REST. Por padrão aponta para `http://localhost:3000`, mas também possui suporte à URL de produção hospedada no **Render**.

| Método | Rota         | Descrição              |
|--------|--------------|------------------------|
| GET    | `/pets/`     | Lista todos os pets    |
| GET    | `/pets/:id`  | Busca um pet por ID    |
| POST   | `/pets/`     | Cadastra um novo pet   |
| PUT    | `/pets/:id`  | Edita um pet existente |
| DELETE | `/pets/:id`  | Remove um pet          |
