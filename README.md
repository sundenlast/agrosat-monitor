# 🛰 AgroSat Monitor

## Sobre o Projeto

O AgroSat Monitor é uma solução desenvolvida para a Global Solution FIAP com foco na aplicação de tecnologias da Indústria Espacial ao agronegócio.

A plataforma simula o monitoramento agrícola por meio de dados provenientes de satélites de observação terrestre, permitindo acompanhar indicadores relacionados à produtividade e à saúde das plantações.

O projeto foi construído utilizando serviços da Microsoft Azure, aplicando conceitos de Cloud Computing, DevSecOps, CI/CD, Segurança e Observabilidade.

---

## Problema

O monitoramento de grandes áreas agrícolas pode ser complexo e custoso, principalmente em regiões remotas.

A utilização de dados coletados por satélites permite obter informações sobre áreas cultivadas de forma rápida e eficiente, apoiando a tomada de decisão e aumentando a produtividade agrícola.

---

## Solução

O AgroSat Monitor simula uma plataforma capaz de:

- Receber informações provenientes de satélites;
- Processar indicadores agrícolas;
- Disponibilizar informações para produtores rurais;
- Centralizar o monitoramento em uma interface web acessível pela nuvem.

---

## ODS Relacionado

### ODS 2 – Fome Zero e Agricultura Sustentável

A solução contribui para a melhoria da gestão agrícola através da utilização de tecnologias espaciais e computação em nuvem.

---

## Arquitetura

```
GitHub Repository
        │
        ▼
GitHub Actions (CI/CD)
        │
        ▼
Azure App Service
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
Key    App    Alert
Vault Insights Rule
        │
        ▼
 Usuário Final
```

## Tecnologias Utilizadas

Microsoft Azure App Service
Azure Key Vault
Azure Application Insights
Azure Monitor
Azure Alert Rules
GitHub Actions
Node.js
HTML, CSS e JavaScript
Pipeline CI/CD

O deploy da aplicação é realizado automaticamente através do GitHub Actions.

## Fluxo:

Push na branch main
Execução do workflow
Publicação automática no Azure App Service
Segurança
Credenciais armazenadas em GitHub Secrets
Segredos protegidos no Azure Key Vault
Controle de acesso via Azure RBAC
Aplicação acessível via HTTPS
Monitoramento

## A aplicação possui monitoramento ativo utilizando:

Application Insights
Azure Monitor
Alert Rule para HTTP Server Errors
Equipe
Felipe Hideki – RM98323
Guilherme Milheiro – RM550295
Jhonatan Curci – RM94188
Enzo Vasconcelos – RM550702
Ricardo Queiroz – RM94241
Link da Aplicação

## Azure App Service:

[[URL](https://agrosat-insight-rm550702-gqfwfrexexekdjf8.brazilsouth-01.azurewebsites.net/#dashboard)]

## Projeto desenvolvido para a Global Solution FIAP utilizando Microsoft Azure.
