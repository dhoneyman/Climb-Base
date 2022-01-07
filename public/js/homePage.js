// ========== VARIABLES ===========
let stateName = document.querySelector('#state-name');
const routeNames = document.querySelector('#route-names');
const wallSelect = document.querySelector('#wall-name');

// ============= STATE DROPDOWN ==============

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
      option.textContent = 'Select Location';
      option.value = '0';
      locationSelect.appendChild(option);
    for(let i=0; i < locations.length; i++){
      const option = document.createElement('option');
      option.textContent = locations[i].name;
      option.value = locations[i].id;
      locationSelect.appendChild(option);
    }
})

// ============= LOCATION DROPDOWN ==============

let locationName = document.querySelector('#location-name');

locationName.addEventListener('change', async event => {
  const id = event.target.options[event.target.selectedIndex].value
    const response = await fetch('/api/wall/' + id, {
        method: 'GET'
      });
    const walls = await response.json();
    
    wallSelect.innerHTML = '';
    routeNames.innerHTML = '';
    const option = document.createElement('option');
      option.textContent = 'Select Wall';
      option.value = '0';
      wallSelect.appendChild(option);
    for(let i=0; i < walls.length; i++){
      const option = document.createElement('option');
      option.textContent = walls[i].name;
      option.value = walls[i].id;
      wallSelect.appendChild(option);
    }
})


// ============= WALL DROPDOWN ==============

let wallNames = document.querySelector('#wall-name');

wallNames.addEventListener('change', async event => {
  console.log('help');
  const id = event.target.options[event.target.selectedIndex].value
    const response = await fetch('/api/route/' + id, {
        method: 'GET'
      });
    const routes = await response.json()
console.log(routes);
    routeNames.innerHTML = '';
    const header = document.createElement('p');
    header.innerHTML = '<h4>Routes in your selected region:</h4>';
    routeNames.appendChild(header);
    for(let i=0; i < routes.length; i++){
      const par = document.createElement('p');
      par.innerHTML = `<a href='/route/${routes[i].id}'>${routes[i].name} - ${routes[i].difficulty}</a>`
      // let linkedPar = `<a href='/route/${routes[i].id}'>${par}</a>`
      // let newPar = document.createElement('p');
      // newPar.innerHTML = linkedPar;
      routeNames.appendChild(par);
    }
})