/*  script.js
    Modifié par: Mathieu Thériault
    Dernière modification: 6/13/2020 */
(function filterList() {
    const input = document.querySelector("#myInput");
    const list = document.querySelector("#myUL");
    const listItems = Array.from(list.children);
    const text = listItems.map(item => item.firstChild.innerText.toLowerCase());

    function filter(e) {
        const value = e.target.value.toLowerCase()

        listItems.forEach((item, i) => {
            if (!text[i].includes(value)) listItems[i].style.display = "none";
            if (text[i].includes(value)) listItems[i].style.display = "block";
        });
    }

    input.oninput = filter;
})();

(function pieChart() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    const data = google.visualization.arrayToDataTable([
        ['Jeux', 'Copies vendues (Millions)'],
        ['Breath of the Wild', 19.08],
        ['Ocarina of Time', 13.22],
        ['Link\'s Awakening', 10.24],
        ['Twilight Princess', 9.96],
        ['Autres', 48.85]
    ]);

    const options = {
        title: 'Copies vendues'
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
    }
})();

(function geoChart() {
    google.charts.load('current', { 'packages': ['geochart'], 'mapsApiKey': 'AIzaSyD16IynSMtOOu196W-ZIAY5OZLpmGsRJ_o' });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
    const data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Japan', 1000],
        ['United States', 1000],
        ['Canada', 400],
        ['Mexico', 200],
        ['Australia', 200],
        ['France', 800],
        ['UK', 500],
        ['Italy', 500],
        ['Germany', 500],
        ['RU', 200],
        ['Brazil', 0]
    ]);

    const options = {};

    const chart = new google.visualization.GeoChart(document.getElementById('geochart'));

    chart.draw(data, options);
    }
})();

AOS.init();