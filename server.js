var cors = require('cors');
const app = require('./src/config/custom-express');
const bodyParser = require('body-parser');
var db = require("./db");
var Post = db.Mongoose.model('post', db.postSchema, 'post');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/addPost', function(req,res){
    console.log(req.body);
    // db.Post.save(req.body, (err, result) => {
    //     if (err) return console.log(err)

    //     console.log('Salvo no Banco de Dados');
    // })
});