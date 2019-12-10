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

app.get('/screams',(req,res)=>{
    admin.firestore()
    .collection('screams')
    .get()
    .then(data=>{
    let screams = [];
    data.forEach(doc =>{
        screams.push(doc.data());
    })
    return res.json(screams);
    })
    .catch(err => console.error(err));
    }
)

exports 

exports.helloWorld = functions.https.onRequest((request,response)=>{
    response.send('Hello world')
});



app.post('/screams',(req,res)=>{

    const newScream = {
        body : req.body.body,
        userHandle : req.body.userHandle,
        createAt : admin.firestore.Timestamp.fromDate(new Date())      
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

exports.api = functions.https.onRequest(app);