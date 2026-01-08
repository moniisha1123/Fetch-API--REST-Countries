const button = document.getElementById("loadBtn");
const countriesDiv = document.getElementById("countries");

button.addEventListener("click", fetchCountries);

function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
        .then(response => {
            if (!response.ok) {
                throw new Error("API Error");
            }
            return response.json();
        })
        .then(data => {
            displayCountries(data);
        })
        .catch(error => {
            console.error("Error:", error);
            countriesDiv.innerHTML = "Failed to load data";
        });
}

function displayCountries(countries) {
    countriesDiv.innerHTML = "";

    countries.forEach(country => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p><b>Capital:</b> ${country.capital ? country.capital[0] : "N/A"}</p>
            <p><b>Region:</b> ${country.region}</p>
            <p><b>Population:</b> ${country.population}</p>
            <img src="${country.flags.png}" width="100">
            <hr>
        `;

        countriesDiv.appendChild(div);
    });
}
