const db = require("../models/scratchModel");
const phq = require("predicthq");
const { locals } = require("../server");
const axios = require("axios");

//const requests = require('requests')
// ?
// const requests = phq.requests

// Error handling
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `apiController.${method} ${type}: ERROR: ${
      typeof err === "object" ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in apiController.${method}. Check server logs for more details.`,
    },
  };
};

// predicthq client
const client = new phq.Client({
  access_token: "JNqbwoSL31X0CaUWCN0F-Cm6zX2Ie5O0qehjOIqs",
});
/**
 * import requests

response = requests.get(
    url="https://api.predicthq.com/v1/events/",
    headers={
      "Authorization": "Bearer $ACCESS_TOKEN",
      "Accept": "application/json"
    },
    params={
      "category": "disasters,terror",
      "country": "US,CN,AU",
      "label": "avalanche,blizzard,coastal-event,cyclone,disaster,earthquake,explosion,fire,flood,landslide,thunderstorm,tornado,tropical-storm,tsunami,typhoon,volcano,wildfire,extreme-weather",
      "rank_level": "5"
    }
)
print(response.json())
 */

const apiController = {};

apiController.addDisastersToDB = (req, res, next) => {
  //query if disaster(event_id) exists
  //if yes, set res.locals to

  // const disasterState = res.locals.allDisasters
  const options = {
    method: "GET",
    url: "https://api.predicthq.com/v1/events/?category=disasters%2Cterror&country=US%2CCN%2CAU&label=avalanche%2Cblizzard%2Ccoastal-event%2Ccyclone%2Cdisaster%2Cearthquake%2Cexplosion%2Cfire%2Cflood%2Clandslide%2Cthunderstorm%2Ctornado%2Ctropical-storm%2Ctsunami%2Ctyphoon%2Cvolcano%2Cwildfire%2Cextreme-weather&rank_level=5",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer JNqbwoSL31X0CaUWCN0F-Cm6zX2Ie5O0qehjOIqs",
    },
  };

  try {
    axios.get(options.url,options).then((response) => {
      const disasters = response.data;
      res.locals.allDisasters = disasters;
      console.log(disasters, "these ");
    });
  } catch (error) {
    next({
      log: "blah",
    });
  }

  // response = requests
  //   .get(
  //     (url = "https://api.predicthq.com/v1/events/"),
  //     (headers = {
  //       Authorization: "Bearer $ACCESS_TOKEN",
  //       Accept: "application/json",
  //     }),
  //     (params = {
  //       category: "disasters,terror",
  //       country: "US,CN,AU",
  //       label:
  //         "avalanche,blizzard,coastal-event,cyclone,disaster,earthquake,explosion,fire,flood,landslide,thunderstorm,tornado,tropical-storm,tsunami,typhoon,volcano,wildfire,extreme-weather",
  //       rank_level: "5",
  //     })
  //   )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.results[0]),
  //       "this is our data.results from our addDisastersToDB middleware!";
  //   })
  //   .catch((err) =>
  //     next({
  //       log: "apiController.addDiasterstoDB error.",
  //       message: { err: err.message },
  //     })
  //   );
};

apiController.getDisasters = (req, res, next) => {
  // have to call the api and fetch the data to give us back JSON of disasters
  //add that data to our database - (only if its ID does not exist in our database)
};

// async getWatchlist(req, res, next) {
//   // fetch data from watchlist and set to res.locals.watchlist
//   try {
//     const watchlist = await Movie.find({}).exec();
//     res.locals.watchlist = watchlist;
//     next();
//   } catch (err) {
//     next(
//       createErr({
//         method: 'getWatchlist',
//         type: JSON.stringify(err),
//         err: err,
//       })
//     );
//   }
// },

module.exports = apiController;
