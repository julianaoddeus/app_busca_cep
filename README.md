## Aplicação que consome uma API

#Utilizado a API viaCep
**URl:** https://viacep.com.br
**Chamada:**  https://viacep.com.br/ws/01001000/json/
**Retorno:** 
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}

##Desenvolvimento
1. Pegar o cep do formulário
2. Fazer a chamada para a API
3. Preencher as informações.