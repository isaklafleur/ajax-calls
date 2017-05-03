// When the WALL-E button is clicked
$('#post-wall-e').on('click', (event) => {
  // Create an object with data to submit
  const characterInfo = {
    name:       'WALL-E',
    occupation: 'Waste Allocation Robot',
    weapon:     'Gun'
  };

$('#character-form').on('submit', (event) => {
  event.preventDefault();

  const characterInfo = {
    name: $('#the-name-input').val(),
    occupation: $('#the-occupation-input').val(),
    weapon: $('#the-weapon-input').val()
  };

  $.ajax({
    method: 'POST',
    url: 'https://ih-api.herokuapp.com/characters',
    data: characterInfo,
    success: showFeedback,
    error: handleError
  });
});

  // Make a POST request
  $.ajax({
      // Notice that we are using POST
    method:  'POST',
    url:     'https://ih-api.herokuapp.com/characters',
      // The data key is for sending data in a POST, PUT or PATCH!
    data:    characterInfo,
    success: showFeedback,
    error:   handleError
  });
});

// Update a char with the update form
$('#update-form').on('submit', (event) => {
  event.preventDefault();

  const updateInfo = {
    name: $('#update-name-input').val(),
    occupation: $('#update-occupation-input').val(),
    weapon: $('#update-weapon-input').val()
  };

  // The character ID that we will plug into the API's URL
  const charId = $('#character-id-input').val();

  $.ajax({
      // Notice that we are using PATCH. You could also use PUT.
    method: 'PATCH',
    url: `https://ih-api.herokuapp.com/characters/${charId}`,
    data: updateInfo,
    success: (patchResponse) => {
      console.log('Update SUCCESS!');
      console.log(patchResponse);
    },
    error: handleError
  });
});



function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
    const newCharacterHtml = `
    <li>
      <h3> ${postResponse.name} </h3>
      <p> Id: ${postResponse.id} </p>
    </li>
  `;

  $('#characters-list').append(newCharacterHtml);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}