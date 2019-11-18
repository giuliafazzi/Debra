# Backend
## Dependências
### Docker e Docker Compose:
Todo o backend foi containerizado utilizando o Docker e Docker Compose.
Para instalar o Docker e o Docker Compose siga as instruções abaixo.

#### Linux (Ubuntu e derivados)
- Faça o download do script de instalação do Docker Engine
```
curl -fsSL https://get.docker.com -o get-docker.sh
```
- Execute o script
```
sudo sh get-docker.sh
```
- Faça o download do arquivo binário do Docker Compose
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
- Conceda permissão para executar o arquivo
```
 sudo chmod +x /usr/local/bin/docker-compose
```

## Como configurar e executar a aplicação
- Dentro da pasta **backend** altere o arquivo **.env.example**, inserindo um usuário
  e senha para o banco de dados, em seguida renomeie o arquivo para **.env**
- Execute o comando abaixo para criar e configurar o banco.
```
sudo docker-compose -f docker-compose-startdb.yml run --rm node
```
- Agora sempre que quiser executar a aplicação, basta usar o comando:
```
sudo docker-compose up
```
Ou, para executar em background:
```
sudo docker-compose up -d
```
Quando executado em background, utilize o seguinte comando para interromper a execução:
```
sudo docker-compose stop
```
