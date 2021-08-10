const express = require('express');
//console.log(express);
const app = express();
const users = require('./user.json');

app.use(express.json());

//console.log(users);


//console.log(users);

//REST API
//HTTP Verbs
//get - get a data from server
//post - create a data on server
//patch - update a data on server
//delete - delete a data on server


app.post("/users", function (request, response) {
    //console.log(request);
    users.push(request.body);
    return response.send("User added");


})
app.get("/", function (request, response) {
    return response.send("Welcome to Home page");

})

app.get("/users", function (request, response) {
    return response.send({ data: users });

})
app.patch("/users/:id", function (request, response) {
    var x = Number(request.params.id);
    for (let i = 0; i < users.length; i++) {
        //console.log(users[i].id);
        if (users[i].id == x) {
            var pos = i;
        }
    }
    users[pos] = request.body;
    //return response.send({ data: users });
    //console.log(request.body);

    //response.send(JSON.stringify(request.body));
    return response.send("User Edited");


})
app.delete('/users/:id', function (request, response) {
    var x = Number(request.params.id);
    for (let i = 0; i < users.length; i++) {
        //console.log(users[i].id);
        if (users[i].id == x) {
            var pos = i;
        }
    }
    users.splice(pos, 1);
    //return response.send({ data: users });
    //console.log(request.body);

    //response.send(JSON.stringify(request.body));
    return response.send("User Deleted");

})

app.listen(2345, () => {
    console.log("Listening");
})