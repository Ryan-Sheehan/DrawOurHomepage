const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);
client.setDefaultRequest({baseUrl: 'https://api.sendgrid.com/'});




export default async (req, res) => {

  const body = {
    list_ids: [
      "249f7b05-e94f-4d0b-98d0-1e9711a6ad09"
    ],
    contacts: [
      {
        email: req.body.email,
      }
    ]
  }

  /* run this if you want to get the id of all of the lists in send grid 
  const request = {
    method: 'GET',
    url: '/v3/marketing/lists'
  };
  */

  const request = {
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: JSON.stringify(body)
  };

  return new Promise((resolve, reject) => {
    client.request(request)
    .then(() => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(response))
        resolve();
    })
    .catch((error) => {
        res.json(error);
        res.status(405).end();
        return resolve(); 
    });
  });

};