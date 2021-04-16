const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* Word Models */
const Adjective = require('./models/adjectives.model');
const Adverb = require('./models/adverb.model');
const Colour = require('./models/colours.model');
const Expression = require('./models/expressions.model');
const Noun = require('./models/nouns.model');
const Verb = require('./models/verbs.model');
const Time = require('./models/time.model');

const app = express();
app.use(bodyParser.json())
const router = express.Router();


mongoose.connect('mongodb+srv://admin:passwordpassword@cluster0.iftmg.mongodb.net/japaneseDictionary?retryWrites=true&w=majority')
.then(()=>{
  console.log("Connected to Database")
})
.catch(()=>
{
  console.log("Connection Failed")
});

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

//~~~~~~~~~~~~~~Words~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~ADJECTIVES~~~~~~~~~~~~~~~~~~\\
app.post('/word/adjectives', (req, res, next) => {
  const adjective = new Adjective({
    japanese: req.body.japanese,
    english: req.body.english,
    context: req.body.context
  }, {id: false})

  adjective.save().then(result => {
    res.status(201).json({
      message: "Adjective saved Successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        context: result.context
      }
    })
  })
})

app.get('/word/adjectives', (req, res, next) => {
  Adjective.find().then(documents => {
    res.status(200).json({
      message: "Adjectives fetched successfully",
      adjectiveWords: documents
    })
  })
})


//~~~~~~~~~~~~~~~~~ADVERBS~~~~~~~~~~~~~~~~~~\\
app.post('/word/adverbs', (req, res, next) => {
  const adverb = new Adverb({
    japanese: req.body.japanese,
    english: req.body.english,
    context: req.body.context
  })

  adverb.save().then(result => {
    res.status(201).json({
      message: "Adverb saved Successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        context: result.context
      }
    })
  })
})

app.get('/word/adverbs', (req, res, next) => {
  Adverb.find().then(documents => {
    res.status(200).json({
      message: "Adverbs fetched successfully",
      adverbWords: documents
    })
  })
})


//~~~~~~~~~~~~~~COLOURS~~~~~~~~~~~~~~~~\\
app.post("/word/colours", (req, res, next) => {
  const colour = new Colour({
    japanese: req.body.japanese,
    english: req.body.english,
    hex: req.body.hex
  }, {id: false})

  colour.save().then(result=>{
    res.status(201).json({
      message:"Color saved successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        hex: result.hex
      }
    })
  })
});

app.get("/word/colours", (req, res, next) => {
  Colour.find().then(documents=>{
    res.status(200).json({
      message: "Colours fetched successfully",
      colourWords: documents
    });
  })
});

//~~~~~~~~~~EXPRESSIONS~~~~~~~~~~~~~\\
app.post("/word/expressions", (req, res, next) => {
  const expression = new Expression ({
    japanese: req.body.japanese,
    english: req.body.english,
    context: req.body.context
  })

  expression.save().then(result => {
    res.status(201).json({
      message:"Expression saved successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        context: result.context,
      }
    })
  })
});

app.get("/word/expressions", (req, res, next) => {
  Expression.find().then(documents=>{
    res.status(200).json({
      message: "Expressions fetched successfully",
      expressionWords: documents
    });
  });
});

//~~~~~~~~~~NOUNS~~~~~~~~~~~~~~~\\
app.post("/word/nouns", (req, res, next) => {
  const noun = new Noun ({
    japanese: req.body.japanese,
    english: req.body.english,
    context: req.body.context,
  })

  noun.save().then(result=> {
    res.status(201).json({
      message:"Noun saved successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        context: result.context,
      }
    })
  })
})

app.get("/word/nouns", (req, res, body) => {
  Noun.find().then(documents=>{
    res.status(200).json({
      message: "Nouns fetched successfully",
      nounWords: documents
    })
  })
})

//~~~~~~~~~~~~~~TIME~~~~~~~~~~~~~~~~~~~~~~~\\
app.post("/word/times", (req, res, next) => {
  const time = new Time ({
    japanese: req.body.japanese,
    english: req.body.english,
    context: req.body.context,
  })

  time.save().then(result=> {
    res.status(201).json({
      message: "Time saved successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        type: result.type
      }
    })
  })
})


app.get("/word/times", (req, res, next) => {
  Time.find().then(documents=>{
    res.status(200).json({
      message: "Times fetched successfully",
      timeWords: documents
    })
  })
});

//~~~~~~~~~~VERBS~~~~~~~~~~~\\
app.post("/word/verbs", (req, res, next) => {
  const verb = new Verb({
    japanese: req.body.japanese,
    english: req.body.english,
    type: req.body.type,
    presentPositive: req.body.presentPositive,
    presentNegative: req.body.presentNegative,
    pastPositive: req.body.pastPositive,
    pastNegative: req.body.pastNegative
  })
  verb.save().then(result=> {
    res.status(201).json({
      message: "Verb saved successfully",
      word: {
        japanese: result.japanese,
        english: result.english,
        type: result.type,
        presentPositive: result.presentPositive,
        presentNegative: result.presentNegative,
        pastPositive: result.pastPositive,
        pastNegative: result.pastNegative
      }
    })
  })
})

app.get("/word/verbs", (req, res, body) => {
  Verb.find().then(documents =>{
    res.status(200).json({
      message: "Verbs Fetched successfully",
      verbWords: documents
    });
  })
})

module.exports = app;
