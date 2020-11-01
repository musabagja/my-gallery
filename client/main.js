const SERVER = 'http://localhost:4004'
ready()

function ready() {
  $(document).ready(() => {
    const token = localStorage.getItem("token");
    if(token) {
      getAllPhotos();
      $("#login-page").hide();
      $("#main-page").show();
    } else {
      $("#main-page").hide();
      $("#login-page").show();
    }
  })
}

function login(e) {
  e.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();
  $.ajax({
    method: 'POST',
    url: SERVER + '/login',
    data: {
      email,
      password
    }
  }).done(response => {
    localStorage.setItem("token", response.access_token);
    ready();
  }).fail(err => {
    console.log(err)
  })
}

function logout() {
  localStorage.clear();
  ready();
}

function getAllPhotos() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: 'GET',
    url: SERVER + '/photos',
    headers: {
      token
    }
  }).done(response => {
    $("#my-gallery-page").empty();
    response.forEach(element => {
      $("#my-gallery-page").append(`
        <div class="card-custom uk-card uk-card-default uk-card-hover uk-card-body">
          <i class="trash far fa-minus-square" id="delete${element.id}"></i>
          <img src="${element.imageUrl}" alt="image">
        </div>
      `)
      $(`#delete${element.id}`).on('click', () => {
        deletePhoto(element.id)
      })
    });
  }).fail(err => {
    console.log('ERROR LAGI')
  })
}

function deletePhoto(id) {
  const token = localStorage.getItem('token');
  $.ajax({
    method: 'DELETE',
    url: SERVER + '/photos/' + id,
    headers: {
      token
    }
  }).done(response => {
    ready();
  }).fail(err => {
    console.log(err)
  })
}

function addPhoto(e) {
  e.preventDefault()
  const token = localStorage.getItem("token");
  const imageUrl = $('#image-url').val();
  $.ajax({
    method: 'POST',
    url: SERVER + '/photos',
    headers: {
      token
    },
    data: {
      imageUrl
    }
  }).done(response => {
    ready();
  }).fail(err => {
    console.log(err)
  })
}