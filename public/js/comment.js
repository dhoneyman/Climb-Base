const commentSubmit = document.querySelector('#comment-btn');
commentSubmit.addEventListener('click', async event => {
    console.log('test');
    const review = document.querySelector('#new-comment').value;
    const rating = document.querySelector('#rating').value;
    const id = location.pathname.split('/')[2];
    // console.log(id)
    const response = await fetch('/api/route/'+ id, {
        method: 'POST',
        body: JSON.stringify({ review: review, rating: rating}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response)
    
    
    
    if (response.ok) {
        document.location.replace('/route/' + id);
    } else {
        alert('Failed to create project');
    }
})