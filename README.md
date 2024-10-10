# Cars API

API desenvolvida com **Node.js e Express.js** para gerenciar informações de carros.

## Tecnologias

- Node.js
- Express.js
- TypeScript
- Prisma (para interação com o banco de dados)
- Jest (para realizar os testes)
- PostgreSQL

## Instalação

Para instalar e executar a API, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   $ git clone https://github.com/joaolucasgusmao/cars_api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   $ cd cars_api
   ```
3. Instale as dependências:
   ```bash
    $ npm install
   ```
4. Variáveis de Ambiente:
   - Crie um arquivo chamado `.env` na raiz do seu projeto.
   - Copie as variáveis de ambiente do arquivo `.env.example` e cole no seu `.env`.
   - Substitua os valores de exemplo pelas suas informações reais. Isso é importante para configurar corretamente a conexão com o banco de dados e outras configurações específicas.
5. Rode as migrações:
   ```bash
    $ npm run migrate:dev
   ```
6. Inicie o servidor:
   ```bash
    $ npm run dev
   ```
   
## Endpoints

### 1. `POST /cars`

- **Descrição**: Cria um novo Carro.
  - **Corpo**:
  ```json
  {
    "name": "Fusca",
    "description": "Carro clássico",
    "brand": "Volkswagen",
    "year": 1975,
    "km": 100000
  }
  ```
- **Resposta**:
  - **Código 201**: Created
  - **Corpo**:
  ```json
  {
    "id": "ec0ad1a7-a682-42e0-b6bf-5b4f9a6a7763",
    "name": "Fusca",
    "description": "Carro clássico",
    "brand": "Volkswagen",
    "year": 1975,
    "km": 100000
  }
  ```

### 2. `GET /cars`

- **Descrição**: Retorna todos os Carros.
- **Parâmetros**: Nenhum
- **Resposta**:
  - **Código 200**: OK
  - **Corpo**:
  ```json
  [
      {
          "id": "ec0ad1a7-a682-42e0-b6bf-5b4f9a6a7763",
          "name": "Fusca",
          "description": "Carro clássico",
          "brand": "Volkswagen",
          "year": 1975,
          "km": 100000
      },
  ]
  ```

### 3. `GET /:carId`

- **Descrição**: Retorna detalhes de um Carro específico.
- **Parâmetros**:
  - `carId`: ID do Carro
- **Respostas**:
  - **Código 200**: OK
  - **Corpo**:
  ```json
  {
    "id": "ec0ad1a7-a682-42e0-b6bf-5b4f9a6a7763",
    "name": "Fusca",
    "description": "Carro clássico",
    "brand": "Volkswagen",
    "year": 1975,
    "km": 100000
  }
  ```
  - **Código 404**: Not found
  - **Corpo**:
  ```json
  {
    "message": "Car not found."
  }
  ```

### 4. `PATCH /:carId`

- **Descrição**: Atualiza as informações de um Carro específico.
- **Parâmetros**:
  - `carId`: ID do Carro
  - **Corpo**:
  ```json
  {
    "km": 95000
  }
  ```
- **Respostas**:
  - **Código 200**: OK
  - **Corpo**:
  ```json
  {
    "id": "ec0ad1a7-a682-42e0-b6bf-5b4f9a6a7763",
    "name": "Fusca",
    "description": "Carro clássico",
    "brand": "Volkswagen",
    "year": 1975,
    "km": 95000
  }
  ```
  - **Código 404**: Not found
  - **Corpo**:
  ```json
  {
    "message": "Car not found."
  }
  ```

### 5. `DELETE /:carId`

- **Descrição**: Remove um Carro específico.
- **Parâmetros**:
  - `carId`: ID do Carro
- **Respostas**:

  - **Código 204**: No content

  ```bash
  # No body returned for response
  ```

  - **Código 404**: Not found
  - **Corpo**:

  ```json
  {
    "message": "Car not found."
  }
  ```

## Testes

1. Certifique-se de que a API está rodando:
 ```bash
    $ npm run dev
   ```
2. Rodando os testes:
```bash
    $ npm run test
   ```
