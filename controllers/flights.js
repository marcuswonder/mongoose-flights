const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights', { flights })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Detail', flight });
    });
  }

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) console.log(err)
        if (err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect('/flights')
    })
}

