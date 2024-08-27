document.addEventListener('DOMContentLoaded', () => {
    const requestList = document.getElementById('request-list');

    const requests = [
        { id: 1, name: 'John Doe', profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVvupcNbxQG7el8ULHca7qTHgdps5JrhR-A&s' },
        { id: 2, name: 'Jane Smith', profilePic: 'https://m.media-amazon.com/images/M/MV5BMTg4Yzc3MDctZjI2Yy00YTQwLWEzNTItODBiOTc0MjJhMzE3XkEyXkFqcGc@._V1_.jpg' },
        { id: 3, name: 'Alice Johnson', profilePic: 'https://www.shutterstock.com/image-photo/happy-beautiful-brunette-woman-on-260nw-446508760.jpg' }
    ];

    function createRequestItem(request) {
        const listItem = document.createElement('li');
        listItem.classList.add('request-item');

        listItem.innerHTML = `
            <img src="${request.profilePic}" alt="${request.name}" />
            <span class="name">${request.name}</span>
            <div class="actions">
                <button class="accept" data-id="${request.id}">Accept</button>
                <button class="reject" data-id="${request.id}">Reject</button>
            </div>
        `;

        return listItem;
    }

    function updateRequestList() {
        requestList.innerHTML = '';
        requests.forEach(request => {
            requestList.appendChild(createRequestItem(request));
        });
    }

    function handleRequestAction(event) {
        if (event.target.tagName === 'BUTTON') {
            const requestId = parseInt(event.target.getAttribute('data-id'));
            const action = event.target.classList.contains('accept') ? 'accepted' : 'rejected';

            // For demonstration, we'll just log the action
            console.log(`Request ${requestId} ${action}`);

            // Remove the request from the list
            const requestIndex = requests.findIndex(req => req.id === requestId);
            if (requestIndex !== -1) {
                requests.splice(requestIndex, 1);
                updateRequestList();
            }
        }
    }

    requestList.addEventListener('click', handleRequestAction);

    updateRequestList();
});
