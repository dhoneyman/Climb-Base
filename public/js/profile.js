let stateName = document.querySelector('#state-name');

stateName.addEventListener('change', async event => {
    const response = await fetch('http://localhost:3001/api/locations/1', {
        method: 'GET'
      });
    const locations = await response.json()
})