# Real-Time Chat Website with MERN Stack, Socket.io, Redux Toolkit, and Tailwind CSS

This is a real-time chat website that allows users to connect with each other and chat in real-time. It was built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), Socket.io, Redux Toolkit, and Tailwind CSS. 

- If you liked it then give this Repository a Star⭐


## Technologies Used

- MERN stack (MongoDB, Express.js, React.js, and Node.js)
- Socket.io
- Redux Toolkit
- Tailwind CSS

## Features

- Real-time chat: users can send and receive messages in real-time
- User authentication: users can sign up, log in, and log out using JWT and Google Auth
- Group creation: users can create chat rooms and invite others to join
- Notifications: users can receive notifications on new messages
- Emojis: users can send and receive emojis in messages
- Profile page where users can update their avatar and display name.
- Users can create a room to chat with others.
- Search functionality.
- Responsive design: the website is optimized for different screen sizes and devices

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal
- cd client and create a .env file in the root of your client directory.
- Supply the following credentials

```
REACT_APP_GOOGLE_CLIENT_ID = 
REACT_APP_SERVER_URL='http://localhost:8000'
```



```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```
In the second terminal
- cd server and create a .env file in the root of your server directory.
- Supply the following credentials

```
PORT=8000
URL=
SECRET=
CLIENT_ID=
BASE_URL="http://localhost:3000"
```
```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```




