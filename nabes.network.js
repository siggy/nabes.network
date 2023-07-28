const city0 = document.getElementById('city0');
const city1 = document.getElementById('city1');
const neighborhoods = document.getElementById('neighborhoods');

Promise.all([
  fetch('data/nyc.sf.json')
    .then(response =>
      response.ok ? response.json() : Promise.reject(response.status)
    ),
])
.then(responses => {
  const cityName0 = responses[0].cities[0];
  const cityName1 = responses[0].cities[1];

  city0.appendChild(document.createTextNode(cityName0));
  city1.appendChild(document.createTextNode(cityName1));

  responses[0].neighborhoods.forEach(element => {
    const neighborhood0 = element[cityName0];
    const neighborhood1 = element[cityName1];

    const neighborhood0Node = document.createElement("div");
    const neighborhood1Node = document.createElement("div");

    neighborhood0Node.classList.add('neighborhood0');
    neighborhood1Node.classList.add('neighborhood1');

    neighborhood0Node.appendChild(document.createTextNode(neighborhood0));
    neighborhood1Node.appendChild(document.createTextNode(neighborhood1));


    const names = document.createElement('div');
    names.classList.add('names');

    names.appendChild(neighborhood0Node);
    names.appendChild(neighborhood1Node);

    console.log(element[cityName0]);
    console.log(element[cityName1]);
    console.log(element.Description);

    const descNode = document.createElement("div");
    descNode.classList.add('desc');
    descNode.appendChild(document.createTextNode(element.Description));

    const compare = document.createElement('div');
    compare.classList.add('compare');
    compare.appendChild(names);
    compare.appendChild(descNode);

    neighborhoods.appendChild(compare);
  });
});
