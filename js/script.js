document.addEventListener('DOMContentLoaded', function() {
    const serachBtn = document.getElementById('search-btn');

    serachBtn.addEventListener('click', async function(e) {
        e.preventDefault();

        const searchTerm = document.getElementById('search-term').value;
        if(!searchTerm){
            alert('Please enter a search term.');
            return;
        }

        try{
            const response = await fetch(`http://localhost:3000/getMusicData?term=${searchTerm}`);
            const data = await response.json(); 
 
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    });
}); 