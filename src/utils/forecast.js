const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a7ddff2b85e3acf4f46ccfaba35f98e9/' + encodeURIComponent (latitude) + ',' +  + encodeURIComponent (longitude)
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
           }   else if (body.error) {
                callback('Unable to find required location. Try another search', undefined)
            } else{
                
                callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. Min. temp = ' + body.daily.data[0].temperatureMin + ' Max temp = ' + body.daily.data[0].temperatureMax)
                    
                
            }
        
    })

}
module.exports = forecast