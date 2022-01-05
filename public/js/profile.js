let stateName = document.querySelector('#state-name');

stateName.addEventListener('change', async event => {
    const response = await fetch('/api/location/1', {
        method: 'GET'
      });
    const locations = await response.json()
    console.log(locations);
})