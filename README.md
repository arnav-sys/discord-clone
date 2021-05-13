# Discord Clone using React,Redux & Firebase

the app has login functionality and send message functionality.

All the login feature stuff will be find under login.js file

firebase is used for authentication and storing all the data

2 redux slices(in the features directory) are used in this project(app slice, user slice)

appSlice deals with the channel information stuff like channel name and id

userslice deals with the user and see if user is login or logout

in the store.js file(under app directory) reducers are combined together

firebase.js file contains all our firebase config

besides login, the app is split into two main components

the first main component is sidebar. It contains the ui for the sidebar and adding and selecting channel functionality. SidebarChannel file is the component for channels that are rendered on the sidebar. the channel is fetched from firebase

the second main component is chat. It contains the functionality to send messages to the group. It also has a top header. Chatheader.js contains the ui for the header of chat component. Chat also renders the message component from message.js

all the messages are stored in the field message of collection channels in firebase firestore.
"# discord-clone" 
