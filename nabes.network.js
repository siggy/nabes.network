const compare = document.getElementById('compare');

Promise.all([
  fetch('data/nyc.sf.json')
    .then(response =>
      response.ok ? response.text() : Promise.reject(response.status)
    ),
])
.then(responses => {
  // data/nyc.sf.json
  const nycSF = responses[0];
  compare.appendChild(document.createTextNode(nycSF));
});
