export function login(username, avatar, admin) {

  return new Promise(function(resolve, reject) {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        avatar: avatar,
        admin: admin
      }),
    })
    .then(res => {return (res.json())}) // expecting a json response
    .then(json => {resolve(json)})
    .catch(e => reject(e))
  });
}
