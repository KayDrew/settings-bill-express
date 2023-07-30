import express  from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import SettingsBill from './settings-bill.js';
const app = express();



app.use(express.static('public'));
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const settingsBill=SettingsBill();

app.get('/', function (req, res) {

    res.render('index',{
        settings: settingsBill.getSettings(),
        totals: settingsBill.totals()
        

    
    
    });

});

app.post('/settings', function (req, res) {
    
settingsBill.setSettings({
    
    callCost:req.body.callCost,
    smsCost: req.body.smsCost,
    warningLevel: req.body.warningLevel,
    criticalLevel: req.body.criticalLevel
}

);
    console.log(settingsBill.getSettings());
    res.redirect('/');

});

app.post('/action', function (req, res) {

    settingsBill.recordAction(req.body.actionType);
    
  
    res.redirect('/');

});

app.get('/actions', function (req, res) {

    

});

app.get('/actions/:type', function (req, res) {

    

});




let PORT = process.env.PORT || 3007;



app.listen(PORT, function(){

  console.log('App starting on port', PORT);

});