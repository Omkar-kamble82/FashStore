# FashStore: Full Stack Ecommerce App: React.js, Framer-motion, Clerk-Auth, MongoDB

<p><a href="https://fashstore-61d37.firebaseapp.com/">Fashstore</a> is a full stack Full Stack Ecommerce MERN app project using React.js, Node.js, MongoDB, Express.js and Clerk-Auth. User can interact with the store and add, update and delete product to cart. </p>
<img width="948" alt="image" src="https://github.com/Omkar-kamble82/FashStore/assets/96938880/b233ef5e-e3db-49bc-a1a3-a130c94bcd26">
<img width="945" alt="image" src="https://github.com/Omkar-kamble82/FashStore/assets/96938880/a2843f27-1c5e-4530-9470-84d1f61c093b">
<img width="948" alt="image" src="https://github.com/Omkar-kamble82/FashStore/assets/96938880/893dd185-9df5-4e9f-bb03-ea333c801f50">
<img width="945" alt="image" src="https://github.com/Omkar-kamble82/FashStore/assets/96938880/6726c1a6-c9d5-4d30-885d-2d5ab3d7bde4">

<h2>Key Features:</h2>

- React.js for frontend
- Framer-motion Animation
- Clerk for Authentication
- Vercel and Firebase for Hosting

### Cloning the repository

```shell
git clone https://github.com/Omkar-kamble82/FashStore.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
frontend:
VITE_REACT_APP_CLERK_PUBLISHABLE_KEY=
VITE_REACT_APP_API_KEY=
VITE_REACT_APP_AUTH_DOMAIN=
VITE_REACT_APP_PROJECT_ID=
VITE_REACT_APP_STORAGE_BUCKET=
VITE_REACT_APP_MESSAGING_SENDER_ID=
VITE_REACT_APP_APP_ID=

server:
CLIENT=
PORT=
MONGO_URI=
```
### Start the app

```shell
npm run dev
```

### Deploy app on firebase

```shell
firebase init

npm run build

firebase deploy
```

