
const { response } = require("express");
const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());


app.use(express.json());



const students = [
  { id: 1, name: "sachin", hometown: "bangalore" },
  { id: 2, name: "virat", hometown: "mysore" },
  { id: 3, name: "sam", hometown: "bijapur" },
  { id: 4, name: "samuel", hometown: "bijapur" },
  { id: 5, name: "kiran", hometown: "tumkur" },
];



app.get("/users", function (request, response) {
  response.send([
    { id: 1, name: "arjun" },
    { id: 2, name: "saurav" },
  ]);
});

app.get("/students", function (request, response) {
  response.send(students);
});

//named parameters
app.get("/students/:sid", function (request, response) {
  // console.log('incoming methods',request.method)
  // console.log('request url', request.url)
  // console.log(request.params)
  // response.send(`you selected student with id, ${request.params.sid}`)
  let student = students.find(function (stud) {
    return stud.id == request.params.sid;
  });
  if (student) {
    response.send(student);
  } else {
    //response.send(`no user id found ${request.params.sid}`)
    response.send({});
  }
});

// using map to loop inside that array of object

const data = {
  data: [
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "worthington",
      supplier_number: 55571,
      base_material: "blend",
    },
    {
      Jan: 36.39,
      Feb: 36.39,
      Mar: 36.39,
      Apr: 36.39,
      May: 36.39,
      Jun: 36.39,
      July: 36.39,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 36.39,
      supplier_name: "worthington",
      supplier_number: 55571,
      base_material: "US-steel",
    },
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "supplier",
      supplier_number: 2666,
      base_material: "blend",
    },
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "supplier",
      supplier_number: 2666,
      base_material: "blend",
    },
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "supplier",
      supplier_number: 2666,
      base_material: "blend",
    },
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "supplier",
      supplier_number: 2666,
      base_material: "blend",
    },
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "supplier",
      supplier_number: 2666,
      base_material: "blend",
    },
    {
      Jan: 34.11,
      Feb: 34.11,
      Mar: 34.11,
      Apr: 34.11,
      May: 34.11,
      Jun: 34.11,
      July: 34.11,
      Aug: 34.11,
      Sep: 34.11,
      Oct: 34.11,
      Nov: 34.11,
      Dec: 34.11,
      supplier_name: "worthington",
      supplier_number: 55571,
      base_material: "blend",
    },
  ],
};

app.get("/forecast", function (req, res) {
  console.log(req.method, req.url);
  console.log(data);
  res.send(data.data);
});

app.get("/suppliers", function (req, res) {
  console.log(req.method, req.url);
  let suppliers = data.data.slice(0, 5);
  console.log(suppliers)
  res.send(suppliers);
});

app.listen(port, function () {
  console.log("server up.. listen to port", port);
});
