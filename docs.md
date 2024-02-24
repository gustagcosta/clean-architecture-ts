# clean-arch-ts

### entities

entidades da aplicação, forma simples, apenas com ID, acoplado ao banco

### application

regras de negócio

### use case

lógica de negócio, deve conter apenas o seu gateway e outros use cases como dependencia

### gateways

centralizador das dependencias que o use case precisa

### repositories

componentes que lidam com dados / banco, são usados pelo gateway

### services

componentes que lidam com chamadas a apis externas

### shared

arquivos a serem compartilhados por toda a aplicação

### adapters

é onde você vai criar as ferramentas de tradução de interface para seu caso de uso

### infra

tudo que for tecnologia, implementação
