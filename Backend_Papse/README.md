# Disciplina WEBII - PAPSE

Este é o repositório para o desenvolvimento do backend do projeto da disciplina de Desenvolvimento de Web II.

## 🚀 Como Rodar o Projeto

### **Pré-requisitos**

- **Git:** Para clonar o repositório.
- **Docker Desktop:** Para orquestrar os contêineres. (Certifique-se de que ele esteja **executando** em segundo plano).

### **Passo a Passo**

1.  **Clonar o Repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO_NO_GITHUB.git>
    ```

2.  **Acessar a Pasta do Projeto:**

    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Iniciar os Contêineres:**
    Este comando vai baixar as imagens necessárias, construir a API, iniciar o banco de dados e conectar tudo.
    ```bash
    docker-compose up -d
    ```

### **Verificando a Instalação**

- **API:** Acesse `http://localhost:3000` no seu navegador ou Postman. Você deve ver a mensagem `{"message":"API está funcionando!"}`.
- **Banco de Dados:** Você pode se conectar ao banco de dados usando um cliente como DBeaver, HeidiSQL ou MySQL Workbench com as seguintes credenciais:
  - **Host:** `localhost`
  - **Porta:** `3307` (porta máquina local)
  - **Banco de Dados:** `papse_db`
  - **Usuário:** `docker_user`
  - **Senha:** `supersecreto`

---

### **Comandos Úteis do Docker**

- **Ver logs da API em tempo real:** `docker-compose logs -f app`
- **Parar todos os contêineres:** `docker-compose down`
- **Acessar o terminal dentro do contêiner da API:** `docker-compose exec app bash`
