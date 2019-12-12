/* eslint-disable handle-callback-err */
/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const app  = express();
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const config ={
   
        apiKey: "AIzaSyDuC_6PBim6jphQc6V9Q3jeNaAyAHF__f8",
        authDomain: "social-media-web-app.firebaseapp.com",
        databaseURL: "https://social-media-web-app.firebaseio.com",
        projectId: "social-media-web-app",
        storageBucket: "social-media-web-app.appspot.com",
        messagingSenderId: "778610052646",
        appId: "1:778610052646:web:714be3fc1d2efe0b7720e7",
        measurementId: "G-P80HNC7WZ8"
      
}
const firebase = require('firebase');
firebase.initializeApp(config)


app.get('/screams',(req,res)=>{
    admin.firestore()
    .collection('screams')
    .orderBy('createdAt','desc')
    .get()
    .then(data=>{
    let screams = [];
    data.forEach(doc =>{
        screams.push({
            
            screamId: doc.id,
            body : doc.data().body,
            userHandle : doc.data().userHandle,
            createAt : doc.data().createAt

        }); 
    })
    return res.json(screams);
    })
    .catch(err => console.error(err));
    }
)

app.post('/screams',(req,res)=>{

    const newScream = {
        body : req.body.body,
        userHandle : req.body.userHandle,
        createAt : new Date().toISOString()   
    };

    admin
    .firestore()
    .collection('screams')
    .add(newScream)
    .then(doc =>{
    res.json({message : `document ${doc.id} create successfully`})
    })
    .catch(err=>{  
        res.status(500).json({error: 'something went wrong' })
        console.error(err)
    })
}
)


exports.helloWorld = functions.https.onRequest((request,response)=>{
    response.send('Hello world')
});

//sign up route

app.post('/signup',(req,res) =>{
    const newUser ={
        email : req.body.email,
        password : req.body.password,
        confirmPassword : req.body.confirmPassword,
        handle : req.body.handle,
    }

    //validate data
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data=>{
            return res.status(201).json({message : `user ${data.user.uid} sign up successfully`})
        }).catch(err => {
            console.error(err);
            return res.status(500).json({error : err.code})
        }) 
});

//validate data






exports.api = functions.region('asia-east2').https.onRequest(app);