// api url
const api_url = "https://adminpanel.sacode.web.id/api/sacodeweekend";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (response) {
    hideloader();
  }

  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  var div = "";
  // Loop to access all rows
  for (let r of data.data) {
    if (r.status === "active") {
      div += `<div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
        <div class="single-review card">
          <div class="card-top p-4">
            <a href="./weekend.html">
              <img src="https://adminpanel.sacode.web.id/storage/${r.poster}" alt="${r.topic}" />
            </a>
          </div>
        </div>
      </div>`;
    }
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = div;
}
