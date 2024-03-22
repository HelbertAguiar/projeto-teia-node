
# Projeto TEIA

Código desenvolvido para submissão ao Projeto TEIA.



## Autor

- [C132267 - Helbert Oscar de Aguiar Silva](https://github.com/HelbertAguiar) 


## Instalação

Instale o projeto com npm

```bash
  npm install 
```
## Testes

Execute na pasta do projeto:

```bash
  npm run test
```
    
## Uso/Exemplos

```javascript
node app.js 
```
ou
```javascript
npm start 
```

Será servido um serviço web local como API sendo necessário usar um software como o Postman para enviar as requisições http para a API instanciada no localhost na porta 8080


#### Rotas implementadas na API

<details>
<summary><code>POST</code> <code><b>/api/manipulacao-string</b></code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|--------------------|
> | texto  |  required | object (JSON)   | texto a ser verificado/processado

##### Responses

Se o testo for passado igual a "Renner", a resposta seguinte será apresentada:

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json; charset=utf-8`        | {
    "palindromo": true,
    "ocorrencias_caracteres": {
        "r": 2,
        "e": 2,
        "n": 2
    }

</details>


## Referência

 - [NodeJS](https://nodejs.org/en)



## Stack utilizada

**Back-end:** Node, Express, 
**Dependencias NPM:** Helmet, compression
**Dependencias de Teste:** Jest, Supertest

