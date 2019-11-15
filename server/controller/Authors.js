const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    index: (req, res) => {
        Author.find().sort({name: 1})
        .then(allAuthors => {
            console.log("*************** allAuthors = " + allAuthors);
            res.json({status: true, allAuthors: allAuthors});
        })
        .catch(err => {
            console.log(err);
            let messages = [];
            for (let key in err.errors) {
                messages.push(err.errors[key].message);
            }
            res.json({status: false, errors: messages});
        })
    },
    create: (req, res) => {
        Author.create(req.body)
        .then(addedAuthor => {
            console.log(addedAuthor);
            res.json({status: true, addedAuthor});
        })
        .catch(err => {
            console.log(err);
            let messages = [];
            for (let key in err.errors) {
                messages.push(err.errors[key].message);
            }
            res.json({status: false, errors: messages});
        })
    },
    show: (req, res) => {
        Author.findById(req.params.id)
        .then(currentAuthor => {
            console.log(currentAuthor);
            res.json({status: true, currentAuthor})
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    },
    update: (req, res) => {
        Author.updateOne({_id: req.params.id}, {
            name: req.body.name,
        }, { runValidators: true })
        .then(oneTask => {
            res.json({status: true, oneTask});
        })
        .catch(err => {
            let messages = [];
            for (var key in err.errors) {
                messages.push(err.errors[key].message)
            }
            res.json({status: false, errors: messages});
        })
    },
    remove: (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then( result => {
            console.log(result);
            res.json({status: true});
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    },
    removeId: (req, res) => {
        Author.updateOne({_id: req.params.id}, {
            Comments: []
        })
        .then(data => {
            res.json({status: true, data});
        })
        .catch(err => {
            res.json({status: false, errors: err});
        })
    }
}