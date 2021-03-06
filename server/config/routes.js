var jsforce = require("jsforce");
 //Salesforce OAuth2 client information
 var conn = new jsforce.Connection({  oauth2: {    
	 // you can change loginUrl to connect to sandbox or prerelease env.    
	 loginUrl: "https://login.salesforce.com",    
	 clientId: process.env.Consumer_Key,    
	 clientSecret: process.env.Consumer_Secret,    
	 redirectUri: process.env.Callback_URL,  
 },});
//all the routes for our application
module.exports = function (app, db, pgp) {  
	app.get("/api/getPersons", function (req, res) {    
    //res.render("index.ejs"); 
    // load the index.ejs file  const results = [];    
    var query = "SELECT * FROM persons ";
	console.log("Query result", query);
	db.query(query, true)      
    .then(function (data) {        
        return res.json(data);
          })      
          .catch(function (err) {
                      console.log("ERROR:", err); 
                      // print the error;        
                      return res.status(400).json({ success: false, error: err });      })   
                      .finally(function () {        
                          pgp.end(); // for immediate app exit, closing the connection pool.      
                        });  
                    });
app.post("/api/createperson", function (req, res) {
	console.log(req.body);
    const { address, city } = req.body;   
    var insertQuery ="INSERT INTO persons (address, city) VALUES ('" +     address +     "','" +     city +     "')";
	console.log("Query result", insertQuery);
    db.query(insertQuery, true)     
    .then(function (data) {       
        return res.json(data);     
    })     
        .catch(function (err) {       
            console.log("ERROR:", err); 
	    return res.status(400).json({ success: false, error: err });      })
	       .finally(function () {        
                          pgp.end();      
                        });
});

