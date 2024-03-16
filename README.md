# Vacation Plans

Nossa solução oferece uma maneira abrangente de gerenciar as férias dos funcionários dentro da empresa. Ela inclui um calendário detalhado com todos os feriados marcados, permitindo que funcionários e administradores planejem e acompanhem os dias de férias de forma fácil. O sistema fornece informações essenciais como títulos de feriados, descrições, locais e intervalos de datas, garantindo um gerenciamento eficiente do tempo de folga dos funcionários. Com essa solução, as empresas podem otimizar o processo de planejamento de férias, minimizar conflitos de agendamento e melhorar a produtividade geral.

## 📚 Índice 

* [Começando](#-começando)
* [Pré-requisitos](#-pré-requisitos)
* [Instalação e configuração](#-instalação-e-configuração)
* [Executando o projeto](#-executando-o-projeto)
* [Acesso ao Projeto](#-acesso-ao-projeto)
* [Executando os testes](#-executando-os-testes)
* [Construído com](#-construído-com)
* [Autor](#-autor)
* [Licença](#-licença)

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Instalação e configuração](#-instalação-e-configuração)** para saber como implantar o projeto.

## 📋 Pré-requisitos

- Node.js
- npm (gerenciador de pacotes)


## 🔧 Instalação e configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/eduardouglas99/vacation-plan.git

2. Navegue até o diretório do projeto:
   ```bash
   cd vacation-plan

3. Instale as dependências:
   ```bash
   npm install

4. Iniciar o JSON Server:
   O projeto requer um servidor JSON para fornecer dados simulados. Certifique-se de ter o JSON Server instalado globalmente ou instalado localmente no projeto. Para iniciar o servidor JSON, execute o seguinte comando:
   ```bash
   json-server --watch server/api/db.json --port 3003

## ⚙️ Executando o projeto

1. Iniciar o Projeto em Ambiente de Desenvolvimento:
   Depois de iniciar o JSON Server, você pode iniciar o projeto em um ambiente de desenvolvimento local. Use o seguinte comando:
   ```bash
   npm run dev
   # ou
   yarn dev

2. Construir o Projeto para Produção:
   Antes de implantar o projeto em um ambiente de produção, você deve construí-lo. Use o seguinte comando para criar uma versão otimizada para produção:
   ```bash
   npm run build
   # ou
   yarn build

3. Iniciar o Projeto em Ambiente de Produção:
   Depois de construir o projeto, você pode iniciar o servidor de produção localmente. Use o seguinte comando:
   ```bash
   npm start
   # ou
   yarn start

## 🌐 Acesso ao Projeto

Após a execução bem-sucedida dos passos acima, o projeto estará acessível localmente em http://localhost:3000. Você pode abrir este URL em um navegador da web para visualizar o projeto em execução.

## ⚙️ Executando os testes

npm test


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário
- [Next.js](https://nextjs.org/) - Framework React para produção
- [Styled Components](https://styled-components.com/) - Estilização CSS em componentes React
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones para React
- [Date-fns](https://date-fns.org/) - Manipulação de datas em JavaScript
- [jsPDF](https://github.com/MrRio/jsPDF) - Biblioteca JavaScript para geração de PDF
- [React Day Picker](https://react-day-picker.js.org/) - Componente React para seleção de datas
- [React Hook Form](https://react-hook-form.com/) - Biblioteca React para formulários
- [Zod](https://github.com/colinhacks/zod) - Validação de esquemas de dados em TypeScript
- [React Multi Select Component](https://www.npmjs.com/package/react-multi-select-component) - Componente React para seleção múltipla
- [React Responsive](https://www.npmjs.com/package/react-responsive) - Componente React para responsividade

## 📌 Versão

Nós usamos Git para controle de versão. Para as versões disponíveis, observe as tags neste repositório [tags neste repositório](https://github.com/eduardouglas99/vacation-plan.git). 

## ✒️ Autor

* **Eduardo Caetano** - *Desenolvedor Front-end* - [eduardouglas99](https://github.com/eduardouglas99)

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.