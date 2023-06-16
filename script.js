// Get the form element
const form = document.querySelector('form');
const numInvitees = document.getElementById('numInviteesEl');
const rows = document.getElementById('rows');
const articles = document.getElementById('articles');

// const formArray = document.getElementsByTagName('form')
// const form = formArray[0]

const displayDiv = document.getElementById('display');

numInvitees.addEventListener('change', function (event) {
    let current = rows.innerHTML;
    for(i=1; i<numInvitees.value; i++){
        rows.innerHTML += current.replaceAll("_0", "_" + i);
    }
    current = articles.innerHTML;
    for(i=1; i<numInvitees.value; i++){
        articles.innerHTML += current.replaceAll("_0", "_" + i);
    }
});

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    for(i=0; i<numInvitees.value; i++){
        // Get the input field values
        const recipientNameInput = document.getElementById('recipientNameEl_' + i);
        const organizationNameInput = document.getElementById('organizationNameEl_' + i);
        const eventDateInput = document.getElementById('eventDateEl_' + i);
        const websiteURLInput = document.getElementById('websiteURLEl_' + i);
        const hostNameInput = document.getElementById('hostNameEl_' + i);

        // varialbes for display

        const recipientNameDisplay = document.getElementById('recipientName_' + i);
        const organizationNameDisplay = document.getElementById('organizationName_' + i);
        const eventDateDisplay = document.getElementById('eventDate_' + i);
        const websiteURLDisplay = document.getElementById('websiteURL_' + i);
        const hostNameDisplay = document.getElementById('hostName_' + i);

        const recipientName = recipientNameInput.value;
        const organizationName = organizationNameInput.value;
        const eventDate = eventDateInput.value;
        const websiteURL = websiteURLInput.value;
        const hostName = hostNameInput.value;

        // Manipulate the DOM to display the data
        // displayDiv.innerHTML = `Name: ${recipientName}<br>Organization: ${organizationName}`;

        recipientNameDisplay.innerHTML = recipientName;
        organizationNameDisplay.innerHTML = organizationName;
        eventDateDisplay.innerHTML = eventDate;
        websiteURLDisplay.innerHTML = websiteURL;
        hostNameDisplay.innerHTML = hostName;

        // Clear the input fields
        recipientNameInput.value = '';
        organizationNameInput.value = '';
        eventDateInput.value = '';
        websiteURLInput.value = '';
        hostNameInput.value = '';
    }
});