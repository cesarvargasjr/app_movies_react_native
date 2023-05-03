## Projeto consumindo API de filmes

### Objetivo do desenvolvimento:

Tem-se por objetivo desenvolver uma aplicação usando React Native, tanto para usuários de smartphones Android quanto IOS, com o intuito de proporcionar um layout agradável, uma ótima experiência para o usuário e performance. Consumindo a API ([Acessar API](https://developers.themoviedb.org/3)) que possui uma extensa lista de filmes contendo informações relacionadas ao mesmo.

##

### Detalhes do desenvolvimento do projeto:

Antes de iniciar o desenvolvimento de fato, após entender claramente a proposta do teste, criei um roadmap para evoluir as implementações de forma organizada e planejada. Desde o início criando branches para cada feature e realizando mesclagens após a conclusão das etapas para maior segurança na implementação.
Tendo também como princípio três pilares, UI, UX e Código. Como base para proporcionar interfaces interativas e agradáveis para o usuário, experiência intuitiva e performática na utilização do sistema, e é claro, um código bem construído, de forma clean e legível para facilitar o entendimento de qualquer programador que for dar manutenção.

Aprofundando um pouco a parte técnica, para o consumo da API utilizei o Axios. A API disponibilizada exigia uma chave para acessá-la, sendo assim, segui padrões de segurança utilizando um arquivo .env com as credenciais. Não esquecendo de tratar possíveis erros de requisições evitando gerar experiência negativa ao usuário. Apliquei uma arquitetura organizada conforme a convenção recomenda e componentizando todos os componentes que possam ser reutilizados em outros pontos do sistema, dessa forma, além de ser possível reutilizá-los tornam os códigos implementados mais otimizados e organizados para futuras manutenções. Um detalhe importante para o bom funcionamento do sistema e também aplicando uma boa prática na manipulação de estados globais, utilizei o o "Redux" e "contextApi" para fazer o gerenciamento dos mesmos.

Para manipular a lista de favoritos utilizei o AsyncStorage para armazenamento de dados, dessa forma é possível manipular os dados e não perder o histórico armazenado, proporcionando uma experiência mais real e positiva para o usuário que utiliza o sistema.

Em relação ao Redux, utilizei a biblioteca para armazenar em um estado global o id de um filme que foi selecionado para exibir mais detalhes do mesmo. Com este id fiz uma nova requisição a API trazendo somente o que é relevante para o filme em questão exibindo as infomações no modal personalizado.

Quanto ao contextApi, fiz questão de também utilizá-lo mesmo sendo uma ferramenta para controlar estados globais da aplicação, mas para mostrar que também tenho conhecimento na utilização da mesma. Na sua aplicabilidade do sistema, implementei para duas questões, uma delas para manipular a abertura de um modal.O que foi necessário, devido que, o botão que dispara a abertura do modal fica no header que refere-se ao arquivo de rotas e screen, então para manipular esta ação foi necessário uma variável global, devido que, não é possível receber propriedades. Na outra situação criei um estado com o objetivo de fazer um redraw de funções quando desejado.

Para exibir a listagem dos filmes utilizei a própria ferramenta do React Native, o FlatList, que atende muito bem a necessidade de consumir um conteúdo paginado e depois exibí-lo em tela. E para o compartilhamento externo de conteúdo dos filmes utilizei a ferrameta Share, também do próprio React Native, simples e objetiva na execução.

Alterei a splashscreen e ícones da aplicação para proporcionar uma identidade visual agradável e uma identificação padronizada.

Para finalizar, defini fontes e cores globais que auxiliam e proporcionam um desenvolvimento veloz e garante que os estilos utilizados estão seguindo o padrão pré-definido. Em relação aos testes end-to-end realizei todos no emulador e em meu smarthphone sendo os dois IOS.

##

### Funcionalidades desenvolvidas:

- Na screen principal tem-se listas com filmes conforme as categorias disponibilizadas pela API, são exibidos de forma paginada e quando chega-se ao fim da página executa-se um loading e carrega os filmes da página seguinte;
- Ao clicar em um banner do filme, abre-se um modal personalizado com as informações mais relvantes do filme selecionado. Neste modal é possível executar duas funcionalidades, sendo elas: Adicionar ou remover um filme de uma lista de favoritos (Quando o filme já é um favorito o ícone é vermelho, senão for favorito ele é branco) ou compartilhar a descrição do filme com o link da sua homepage (Alguns filmes não possuem homepage, mas a descrição mantém-se para envio);
- Clicando no ícone lupa do header, direciona o usuário para a screen de busca de filmes, sendo possível digitar em um input o filme que deseja encontrar;
- Clicando no ícone de coração do header, direciona o usuário para a screen de favoritos, ou seja, uma listagem com os filmes favoritos que o usuário definiu. Nesta mesma screen temos a opção de limpar a toda a lista de favoritos clicando no ícone de lixeira, ao clicar no mesmo abre-se um modal de confirmação para saber se o usuário deseja realmente excluir todos da lista.

##

### Tecnologias utilizadas no desenvolvimento:

- React Native
- Typescript
- JavaScript
- HTML
- CSS (Styled Components)
- ContextAPI
- Redux
- Axios

##

### Para executar o projeto:

Clonar o repositório
```bash
$ git clone https://github.com/cesarvargasjr/app_movies_react_native.git
```

Acessar a pasta do projeto via terminal
```bash
$ cd app_movies_react_native
```

Criar o arquivo .env copiando as informações do arquivo .env.example.
ATENÇÃO! Para acessar a API é preciso de uma chave, neste .env é preciso inserir a sua chave na variável API_KEY, caso não tenha, poderá usar a chave a seguir:
```bash
$ 3061a37d71a9e614fa59362eeed265b1
```

Instale as dependências
```bash
$ npm i
```

Execute a aplicação
```bash
$ expo start
```

- Instale o EXPO em seu emulador.

- Após realizar os itens acima, em seu terminal digite "A" para executar a aplicação em um emulador Android ou "I" para emulador IOS.

##

### QR Code para acessar o build da aplicação:

Este projeto é compatível com as plataformas Android e IOS, no entanto, neste momento somente smartphones Android conseguirão navegar no aplicativo através deste QR Code. Caso queira acessar a aplicação em um smartphone IOS será necessário fazer o clone deste repositório e executar o projeto localmente conforme os passos indicados na seção anterior.

<p align="center">
<img width="290" alt="image" src="https://user-images.githubusercontent.com/72532360/232252387-39c29491-f629-4d05-a7ee-7d6a7e719b7f.png">
</p>

##

### Screenshot da aplicação:

<p align="center">
<img width="354" alt="image" src="https://user-images.githubusercontent.com/72532360/232251624-36109cc7-4254-465b-89ec-7efa2e234fe9.png">

<img width="354" alt="image" src="https://user-images.githubusercontent.com/72532360/232251640-d76caea5-9759-4a6e-a15a-e936bb031ebf.png">

<img width="353" alt="image" src="https://user-images.githubusercontent.com/72532360/232251652-3117af96-01e0-4984-a76c-fe5c80ba755b.png">

<img width="357" alt="image" src="https://user-images.githubusercontent.com/72532360/232252420-01a51a0b-051b-4b17-8b69-7f9f72e82b6d.png">

<img width="356" alt="image" src="https://user-images.githubusercontent.com/72532360/232251677-5edc07f2-d7ef-49c0-9f8d-6eed807b773d.png">

<img width="353" alt="image" src="https://user-images.githubusercontent.com/72532360/232251688-d3e29d14-41df-4a68-aaf7-5a3f47507d22.png">
</p>
