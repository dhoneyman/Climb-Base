let stateName = document.querySelector('#state-name');

stateName.addEventListener('change', async event => {
  const id = event.target.options[event.target.selectedIndex].value
    const response = await fetch('/api/location/' + id, {
        method: 'GET'
      });
    const locations = await response.json()
    console.log(locations);
    const locationSelect = document.querySelector('#location-name');
    locationSelect.innerHTML = '';
    const option = document.createElement('option');
      option.textContent = 'Choose State';
      option.value = '0';
      locationSelect.appendChild(option);
    for(let i=0; i < locations.length; i++){
      const option = document.createElement('option');
      option.textContent = locations[i].name;
      option.value = locations[i].id;
      locationSelect.appendChild(option);
    }
})


let locationName = document.querySelector('#location-name');

locationName.addEventListener('change', async event => {
  const id = event.target.options[event.target.selectedIndex].value
    const response = await fetch('/api/wall/' + id, {
        method: 'GET'
      });
    const walls = await response.json()
    const wallSelect = document.querySelector('#wall-name');
    wallSelect.innerHTML = '';
    const option = document.createElement('option');
      option.textContent = 'Choose Location';
      option.value = '0';
      wallSelect.appendChild(option);
    for(let i=0; i < walls.length; i++){
      const option = document.createElement('option');
      option.textContent = walls[i].name;
      option.value = walls[i].id;
      wallSelect.appendChild(option);
    }
})




let wallNames = document.querySelector('#wall-name');

wallNames.addEventListener('change', async event => {
  const id = event.target.options[event.target.selectedIndex].value
    const response = await fetch('/api/route/' + id, {
        method: 'GET'
      });
    const routes = await response.json()
console.log(routes);
    const routeNames = document.querySelector('#route-names');
    for(let i=0; i < routes.length; i++){
      const par = document.createElement('p');
      par.textContent = routes[i].name;
      routeNames.appendChild(par);
    }
})