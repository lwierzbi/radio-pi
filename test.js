//test

var https = require('https');

function main()
{

https.get('https://ozb5brulgk.execute-api.us-east-1.amazonaws.com/myDeployment/weather1?city=Warsaw', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});


}

main()

