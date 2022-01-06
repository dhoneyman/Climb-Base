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
      option.textContent = 'Select Location';
      option.value = '1';
      locationSelect.appendChild(option);
    const addNewLocation = document.createElement('option');
      addNewLocation.textContent = '+ add new location +';
      addNewLocation.value = '2';
      locationSelect.appendChild(addNewLocation);
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
      option.textContent = 'Select Wall';
      option.value = '0';
      wallSelect.appendChild(option);
      const addNewWall = document.createElement('option');
      addNewWall.textContent = '+ add new wall +';
      addNewWall.value = '2';
      wallSelect.appendChild(addNewWall);


      if( event.target.value === '+ add new location +'){
        document.getElementById('new-location').style.display = "none";
      }
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


// ADD ROUTE DATA
let routeCreator = document.querySelector('#route-creation');

routeCreator.addEventListener('submit', async event => {
    console.log('submitted');

    const locationName = document.querySelector('#location-name').value.trim();
    const wallName = document.querySelector('#wall-name').value.trim();
    const routeName = document.querySelector('#route-name').value.trim();
    const difficulty = document.querySelector('#difficulty').value.trim();
    const firstAscent = document.querySelector('#first-ascent').value.trim();
    const wallId = document.querySelector('#wall-name').value.trim();
    
    if (routeName && difficulty && firstAscent) {
        const response = await fetch(`/api/route`, {
            method: 'POST',
            body: JSON.stringify({ name: routeName, difficulty: difficulty, wall_id: wallId, FA: firstAscent }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        
        
        
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    };
})