# Projeto Web — ONG Esperança

## 📌 Apresentação
Projeto web desenvolvido para uma ONG, com páginas institucionais, projetos sociais e cadastro de voluntários. A aplicação utiliza SPA, navegação dinâmica, validações, armazenamento local e recursos de acessibilidade.

## 🧱 HTML
**Tecnologias:** HTML5 e elementos semânticos.
Foram desenvolvidas as páginas institucional, projetos e cadastro, com estrutura semântica, acessibilidade e validações nativas do HTML5.

## 🎨 CSS
**Tecnologias:** CSS3, Grid, Flexbox, Media Queries e variáveis CSS.
Foi criado um layout responsivo com componentes para cards, formulários, botões, mensagens e modal. Também foram implementados modo escuro e alto contraste por preferências do sistema.

## ⚙️ JavaScript
**Tecnologias:** JavaScript ES6+, módulos, DOM, Fetch API, DOMParser, History API e LocalStorage.
Foram implementados SPA, roteamento, eventos, validação, modal, armazenamento local e renderização dinâmica.

## 📦 Build e minificação
**Bundler:** Vite, configurado em `vite.config.js`.
A build de produção utiliza `esbuild` para minificar JavaScript, CSS e HTML e gerar os arquivos na pasta `dist/`. O código-fonte permanece organizado em módulos.

A comparação dos arquivos HTML, CSS e JS indicou redução aproximada de **17,5%** no tamanho total após a minificação/bundle produzido para esta entrega.

## 🧪 Validação da build
A aplicação foi mantida modular no código-fonte e o bundle de produção foi verificado quanto à sintaxe JavaScript. Os principais desafios foram preservar imports/exports, eventos da SPA, validação dinâmica do formulário e navegação com `fetch()` após a transformação dos módulos.

## ▶️ Execução
Instale as dependências com `npm install` e execute `npm run dev` para desenvolvimento. Para gerar a versão de produção, execute `npm run build`. A saída será criada em `dist/`.

## 📂 Estrutura
```text
desenvolvimento-web/
├── CSS/
├── html/
├── js/
├── dist/
├── package.json
├── vite.config.js
└── README.md
```

## 🖼️ Otimização de imagens
As imagens fotográficas utilizam **WebP** como formato principal, com JPEG como fallback. A imagem de voluntários possui versões responsivas de 480, 960 e 1440 px, selecionadas pelo navegador com `srcset` e `sizes`. Isso evita baixar uma imagem maior do que a necessária para a viewport. A versão JPEG original tem 102.428 bytes; as versões WebP têm 9.450, 21.148 e 35.322 bytes.

A versão responsiva reduz o arquivo em aproximadamente **90,8% (480 px)**, **79,4% (960 px)** e **65,5% (1440 px)** em relação ao JPEG original. O impacto exato no tempo de carregamento depende da rede, dispositivo, cache e demais recursos, portanto o projeto não atribui uma redução fixa em milissegundos.
