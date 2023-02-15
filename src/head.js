fetch("./assets/fonts.css")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#headStyle").innerHTML = data;
  });
