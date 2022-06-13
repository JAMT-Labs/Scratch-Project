const connection = mysql.createConnection({
    host: "localhost:3000",
    user: "yourusername",
    password: "yourpassword"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  app.use(cors());
  //we need to make a get request with CORS policy
  app.get('/posts', (req, res) => {
    connection.query("SELECT * FROM 'disasters_table';", (err, req, res) => {
      if(err) throw err;
      res.send(results);
    });
  });