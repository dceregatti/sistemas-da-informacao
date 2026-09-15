# 🌐 Desafio de Desenvolvimento Web - HTML5 Semântico

O objetivo principal deste projeto é projetar e desenvolver um conjunto de páginas web institucionais para uma ONG, aplicando conceitos consolidados de semântica, arquitetura de informação e integridade de dados em formulários.

## 🎯 Objetivos do Projeto

- **HTML5 Semântico:** Garantir a acessibilidade e uma estrutura de código limpa utilizando tags semânticas adequadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.).
- **Arquitetura de Informação:** Organização lógica e coerente do fluxo de navegação do usuário entre as páginas do ecossistema.
- **Estruturação de Diretórios:** Manter arquivos organizados de forma profissional no repositório.
- **Validação Rigorosa de Dados:** Garantir que o formulário de captação de voluntários/colaboradores colete dados limpos e íntegros por meio de máscaras e regras nativas.

---

## 📂 Estrutura das Páginas

O projeto é composto por três páginas principais interconectadas:

1. **`index.html` (Página Inicial):** Apresentação institucional da ONG, sua missão, visão, valores e o impacto de suas ações na comunidade.
2. **`projetos.html` (Iniciativas Solidárias):** Vitrine detalhada exibindo os projetos ativos, metas alcançadas e áreas onde a organização atua.
3. **`cadastro.html` (Engajamento & Cadastro):** Central de relacionamento com foco no formulário de registro de novos colaboradores.

---

## 📑 Destaque Técnico: Formulário Interativo (`cadastro.html`)

O ponto focal de validação técnica deste desafio está concentrado no formulário de engajamento, que implementa:

- **Validações Nativas do HTML5:** Uso estratégico de atributos como `required`, `pattern`, `minlength`, `maxlength` e tipos de inputs específicos (`type="email"`, `type="tel"`) para mitigar erros de envio.
- **Máscaras de Entrada Auxiliares:** Restrição de digitação padronizada para campos críticos de identificação e localização para assegurar a consistência no banco de dados:
  - **CPF:** Validação de formato padrão `000.000.000-00`.
  - **Telefone:** Suporte a formatos fixos e celulares com DDD `(00) 00000-0000`.
  - **CEP:** Estrutura postal fixada em `00000-000`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estruturação Semântica)
- **CSS3** *(Caso tenha aplicado estilos na pasta `css`, comente aqui)*

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório ou baixe a pasta do projeto.
2. Navegue até o diretório `desenvolvimento-web/html/`.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador moderno.
