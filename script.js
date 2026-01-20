const countryList = document.getElementById("countryList");
const countryDetails = document.getElementById("countryDetails");

const countryName = document.getElementById("countryName");
const capital = document.getElementById("capital");
const continent = document.getElementById("continent");
const code = document.getElementById("code");
const population = document.getElementById("population");

console.log("Script loaded");

// Use fields parameter (IMPORTANT)
fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,cca2,population")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        return response.json();
    })
    .then(data => {

        // SAFETY CHECK
        if (!Array.isArray(data)) {
            throw new Error("API did not return an array");
        }

        console.log("Countries fetched:", data.length);

        data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
        );

        displayCountryNames(data);
    })
    .catch(error => {
        console.error("API Error:", error.message);
        countryList.innerHTML =
            `<li class="list-group-item text-danger">
                Failed to load countries
             </li>`;
    });

function displayCountryNames(countries) {
    countryList.innerHTML = "";

    countries.forEach(country => {
        const li = document.createElement("li");const countryList = document.getElementById("countryList");
const searchInput = document.getElementById("searchInput");

const countryDetails = document.getElementById("countryDetails");
const countryName = document.getElementById("countryName");
const capital = document.getElementById("capital");
const continent = document.getElementById("continent");
const code = document.getElementById("code");
const population = document.getElementById("population");

let allCountries = [];

console.log("Script loaded");

fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,cca2,population,flags")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) {
            throw new Error("Invalid API response");
        }

        allCountries = data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
        );

        displayCountryList(allCountries);
    })
    .catch(error => {
        console.error("API Error:", error.message);
        countryList.innerHTML =
            `<li class="list-group-item text-danger">Failed to load countries</li>`;
    });

function displayCountryList(countries) {
    countryList.innerHTML = "";

    countries.forEach(country => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex align-items-center";
        li.style.cursor = "pointer";

        li.innerHTML = `
            <img src="${country.flags.png}"
                 alt="flag"
                 width="30"
                 height="20"
                 class="me-2 border">
            <span>${country.name.common}</span>
        `;

        li.onclick = () => showCountryDetails(country);

        countryList.appendChild(li);
    });
}

function showCountryDetails(country) {
    countryDetails.classList.remove("d-none");

    countryName.textContent = country.name.common;
    capital.textContent = country.capital ? country.capital[0] : "N/A";
    continent.textContent = country.region;
    code.textContent = country.cca2;
    population.textContent = country.population.toLocaleString();
}

/* SEARCH FUNCTIONALITY */
searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();

    const filteredCountries = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(searchValue)
    );

    displayCountryList(filteredCountries);
});

        li.className = "list-group-item";
        li.textContent = country.name.common;

        li.onclick = () => showCountryDetails(country);

        countryList.appendChild(li);
    });
}

function showCountryDetails(country) {
    countryDetails.classList.remove("d-none");

    countryName.textContent = country.name.common;
    capital.textContent = country.capital ? country.capital[0] : "N/A";
    continent.textContent = country.region;
    code.textContent = country.cca2;
    population.textContent = country.population.toLocaleString();
}
