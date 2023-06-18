# Projeto GameOn mobile
Este é um projeto de comércio eletrônico desenvolvido com MongoDB e React Native. A aplicação permite o cadastro e autenticação de usuários e a visualização dos produtos disponíveis.

## Configuração do projeto
Para começar a utilizar a aplicação, siga as etapas abaixo:

### Clonar o projeto
Clone este repositório para o seu ambiente local usando o seguinte comando:

```bash
git clone https://github.com/machado-joao/gameon-mobile.git
```

### Abrir o projeto
Abra o projeto em um editor de código de sua preferência.

### Instalar dependências
Certifique-se de ter o Node.js e o npm instalados em seu sistema. Navegue até a raiz do projeto e execute o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install
```

### Configurar variáveis de ambiente
Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```makefile
USER_KEY=user
TOKEN_KEY=jwt
API_HOST=http://[IPv4]:5050
USER_REGISTER=/users/register
USER_LOGIN=/users/login
PRODUCTS=/products
PRODUCT=/products/
RANDOM_PRODUCTS=/products/random/7
PRODUCTS_BY_NAME=/products/filter/name/
PRODUCTS_BY_PLATFORM=/products/filter/platform/
```

Lembre-se de substituir [IPv4] pelo endereço IP correspondente ao host da máquina em que a aplicação está sendo executada.

### Inicializar
Execute o comando a seguir para inicializar a aplicação e utilizá-la:

```bash
npm start --tunnel
```

## Conclusão
Esta aplicação foi desenvolvida usando MongoDB, Next.js e Tailwind CSS e oferece recursos para registro e autenticação de usuários e visualização de produtos. Certifique-se de ter todas as dependências instaladas e configurar corretamente as variáveis de ambiente.
