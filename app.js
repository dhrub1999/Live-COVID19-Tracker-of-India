async function getCovidApi() {
  //? dom variables

  const date_span = document.querySelector(".date");
  const newConfirmed_p = document.querySelector("#new-confirmed");
  const newRecovered_p = document.querySelector("#new-recovered");
  const newDeaths_p = document.querySelector("#new-deaths");
  const totalDeaths_p = document.querySelector("#total-death");
  const totalConfirmed_p = document.querySelector("#total-confirmed");
  const totalRecovered_p = document.querySelector("#total-recovered");

  //? api variables

  const jsonData = await fetch("https://api.covid19api.com/summary");
  const jsData = await jsonData.json();
  const ourCountry = jsData.Countries[76];

  console.log(ourCountry);

  //? Inserting on html

  date_span.textContent = ourCountry.Date;
  newConfirmed_p.textContent = ourCountry.NewConfirmed;
  totalConfirmed_p.textContent = ourCountry.TotalConfirmed;
  newRecovered_p.textContent = ourCountry.NewRecovered;
  totalRecovered_p.textContent = ourCountry.TotalRecovered;
  newDeaths_p.textContent = ourCountry.NewDeaths;
  totalDeaths_p.textContent = ourCountry.TotalDeaths;
}

getCovidApi();
