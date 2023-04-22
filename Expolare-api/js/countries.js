const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data))
}
const displaycountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');

    // console.log(countries);
    f
}
loadCountries();