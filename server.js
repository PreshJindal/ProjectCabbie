var express = require("express");
var mysql = require("mysql");

var app = express();

app.listen(3033, function () {
    console.log("server started!");
})



var dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "2021-project"
}
var dbCon = mysql.createConnection(dbConfig);
dbCon.connect(function (err) {
    if (err)
        console.log(err)
    else
        console.log("Connected");
});

app.use(express.static("public"));



app.get("/", function (req, resp) {
    resp.sendFile(process.cwd() + "/public/index.html");
})

app.get("/signup", function (req, resp) {
    resp.sendFile(process.cwd() + "/public/signup.html");
})

app.get("/login", function (req, resp) {
    resp.sendFile(process.cwd() + "/public/login.html");
})

app.get("/signup-user", function (req, resp) {
    //resp.send(req.query);
    resp.send(req.query.txtUid + "   " + req.query.txtPwd + "   " + req.query.txtMob);

})
app.get("/ownerview-table",function(req,resp){
    resp.sendFile(process.cwd()+"/public/ownerview-table.html");
    //resp.send("hello")
})

app.get("/admin-vau",function(req,resp){
    resp.sendFile(process.cwd()+"/public/Admin-view.html")
})

app.get("/clientview-table",function(req,resp){
    resp.sendFile(process.cwd()+"/public/clientview-table.html");
    resp.send("hellloo");
})

app.use(express.urlencoded({ extended: true }));
var x = require("express-fileupload");
app.use(x());

app.post("/signup-user", function (req, resp) {
    // console.log(req.body)
    // resp.send(req.body.txtemail + "    "+ req.body.txtpwd + "    " + req.body.combocat);

    var dataAry = [req.body.txtEid, req.body.txtpwd, req.body.combocat];
    dbCon.query("insert into user values(?,?,?)", dataAry, function (err) {
        if (err)
            resp.send(err);
        else
            resp.send("Saved Successfully")
    })
})

app.post("/login-process", function (req, resp) {
    // console.log(req.body)
    // resp.send(req.body.txtemail + "    "+ req.body.txtpwd + "    " + req.body.combocat);

    var uid = [req.body.txtuid];
    dbCon.query("select * from user where uid=?", uid, function (err, result) {
        if (err)
            resp.send(err);
        else
            Object.keys(result).forEach(function (key) {
                var row = result[key];
                if (req.body.txtuid == row.uid && req.body.txtpwd == row.pwd && row.utype=="VehicleOwner")
                    resp.sendFile(process.cwd() + "/public/owner-dashboard.html");
                else if(req.body.txtuid == row.uid && req.body.txtpwd == row.pwd && row.utype=="Client")
                    resp.sendFile(process.cwd()+"/public/vehicle-provider.html");
                else
                resp.send("WRONG CREDENTIALS");
                console.log(row.uid + "   " + row.pwd + "  "+row.utype)
            });
    })
})

app.get("/profile-page", function (req, resp) {
    resp.sendFile(process.cwd() + "/public/profile-page.html")
})

app.get("/vehicle-details", function (req, resp) {
    resp.sendFile(process.cwd() + "/public/vehicle-details.html");
})

app.get("/chkUid", function (req, resp) {
    console.log(req.query.x);
    var DataArry = [req.query.x];
    dbCon.query("select * from user where uid=?", DataArry, function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result);
        }
    })
})

app.post("/vehicle-save", function (req, resp) {
    var picname = req.files.ppic.name;
    console.log(picname);

    var desfolder = process.cwd() + "/public/uploads/" + picname;

    req.files.ppic.mv(desfolder, function (err) {
        if (err)
            console.log(err);
        else
            console.log("No Errrroooorrr-file uploaded ");
    })


    req.body.pppic = picname; //adding new property in req.body object
    console.log(req.body);

    var ppicname = req.files.pppic.name;
    console.log(ppicname);

    var desfolder = process.cwd() + "/public/uploads/" + ppicname;

    req.files.pppic.mv(desfolder, function (err) {
        if (err)
            console.log(err);
        else
            console.log("No Errrroooorrr-file uploaded ");
    })


    req.body.ppic = picname; //adding new property in req.body object
    console.log(req.body);

    var Dataa = [req.body.uid, req.body.txtvnumber, req.body.txtmodel, req.body.combopermit, req.body.txtcompany, req.body.comboseat, req.body.txtyear, req.body.combofuel, req.body.txtmincharge, req.body.ppic, req.body.pppic];
    dbCon.query("insert into vehicles values (?,?,?,?,?,?,?,?,?,?,?)", Dataa, function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result);
        }
    })

})

app.post("/profile-submit", function (req, resp) {

    var picname = req.files.ppic.name;
    console.log(picname);

    var desfolder = process.cwd() + "/public/uploads/" + picname;

    req.files.ppic.mv(desfolder, function (err) {
        if (err)
            console.log(err);
        else
            console.log("No Errrroooorrr-file uploaded ");
    })


    req.body.ppic = picname; //adding new property in req.body object
    console.log(req.body);

    var dataLelo = [req.body.txxtuid, req.body.txtadd, req.body.txtcity, req.body.combostate, req.body.txtzip, req.body.comboid, req.body.txtnumber, req.body.txtmobno, req.body.ppic]
    dbCon.query("insert into oprofile values (?,?,?,?,?,?,?,?,?)", dataLelo, function (err) {
        if (err)
            resp.send(err);
        else
            resp.send("Saved Successfully")
    })
})

app.get("/fetchRecord", function (req, resp) {
    console.log(req.query);
    dbCon.query("select * from oprofile where uid=?", [req.query.uid], function (err, result) {
        if (err) {
            resp.send(err);
        }
        else {
            resp.send(result);
        }
    })
})

app.get("/fetchOwners",function(req,resp){
    dbCon.query("select * from oprofile",function(err,result){
        if(err){
            resp.send(err);
        }
        else{
            resp.send(result);
        }
    })
})

app.get("/fetchCities",function(req,resp){
    dbCon.query("select distinct city from oprofile",function(err,result){
        if(err){
            resp.send(err);
        }
        else{
            resp.send(result);
        }
    })
})

app.get("/vehicle-provider",function(req,resp){
    resp.sendFile(process.cwd()+"/public/vehicle-provider.html");
})

app.get("/fetchVehicle",function(req,resp){
    console.log(req.query.city);
    dbCon.query("select * from oprofile where city=?",[req.query.city],function(err,result){
        if(err){
            resp.send(err);
        }
        else{
            resp.send(result);
        }
    })
})

app.get("/chkUserType",function(req,resp){
    console.log(req.query.x);
})