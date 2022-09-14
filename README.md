# API Emprestimo

-API: https://api-emprestimo.herokuapp.com/

## Emprestimo

#### POST /loans


_Formato da requisição_

```json
{
  "cpf": "1111111112",
  "uf": "SP",
  "birthDate": "1993-03-03",
  "loanAmount": 50000,
  "installmentValue": 500
}
```

_Formato de resposta_

```json
{
  "Empréstimo realizado"
}
```

_Se o corpo da requisição estiver incompleto

```json
{
  
  "uf": "SP",
  "birthDate": "1993-03-03",
  "loanAmount": 50000,
  "installmentValue": 500
}
```

_Formato de resposta_

```json
{
{
  "message": [
    "cpf is a required field"
  ]
}
}
```

_Caso o valor do emprestimo seja menor que 50.000

```json
{
  "cpf": "1111111112",
  "uf": "SP",
  "birthDate": "1993-03-03",
  "loanAmount": 5000,
  "installmentValue": 500
}
```

_Formato de resposta_

```json
{
"O valor minimo de emprestiomo é de R$50.000,00"
}
```

_Caso o valor da parcela seja menor que 1% do valor do emprestimo

```json
{
  "cpf": "1111111112",
  "uf": "SP",
  "birthDate": "1993-03-03",
  "loanAmount": 50000,
  "installmentValue": 50
}
```

_Formato de resposta_

```json
{
"O valor minimo das parcelas é de 1% do valor do emprestimo"
}
```

#### GET /loans

_Formato da requisição_

```json
{}
```

_Formato de resposta_

```json
{
  "loans": [
    {
      "uuid": "a18925b0-e05e-43c7-8bcc-656d0c01bd6f",
      "cpf": "1111111112",
      "uf": "SP",
      "birthDate": "1993-03-03",
      "loanAmount": 50000,
      "installmentValue": 5000
    },
    {
      "uuid": "b0b26a50-0472-45f2-82a2-2beb2116fa93",
      "cpf": "1111111112",
      "uf": "SP",
      "birthDate": "1993-03-03",
      "loanAmount": 50000,
      "installmentValue": 5000
    }
  ]
}
```

