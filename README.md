A web app for real-time messaging and video calling.

### Set Up

1. Clone the front-end repo (this repo) and back-end repo.
    ```sh
    git clone https://github.com/danielphan-dp/chat-io
    git clone https://github.com/danielphan-dp/chat-io-be
    ```

2. Run `npm install` in cloned repos (front-end and back-end).

3. Inside the back-end repo, create `.env` and set variables.
    ```shell
    # content of the .env file for the back-end
    API_PORT=5002
    MONGO_URI=placeholder-for-your-mongodb-uri
    TOKEN_KEY=placeholder-for-a-secure-jwt-token-secret-key
    ```

4. Run the back-end. Use `npm start` to start the front-end and back-end.
