const Meeting = require('google-meet-api').meet;

Meeting({
  clientId: 'XXXXdds420ghq7195tfsbi04i7rduaans.apps.googleusercontent.com',
  clientSecret: 'XXXXxxeh2mrCZ',
  refreshToken: 'XXXXXXXXXCNfW2MMGvJUSk4V7LplXAXXXX',
  date: "2020-12-01",
  time: "10:59",
  summary: 'summary',
  location: 'location',
  description: 'description'
}).then(function (result) {
  console.log(result)
})