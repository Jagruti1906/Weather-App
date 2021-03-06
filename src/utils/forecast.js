const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/82264fea8742d1e0d896c6472dd353e2/' + latitude +',' + longitude

    request({ url: url, json: true} , (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast