
import name from './multipleFiles'
import {helloWorld} from './helloWorld'
import {FetchWrapper} from './fetchWrapper'
import snackbar from "snackbar"
import "snackbar/dist/snackbar.min.css"
import simple_number_formatter from "@skalwar/simple_number_formatter";
import Chart from "chart.js/auto";


console.log("Hello again...", name)
console.log(helloWorld());

const API = new FetchWrapper (
    "https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/james9876"
);

API.get().then((data) => {
    console.log(data);
});

snackbar.show("Some Data is missing")

let result = simple_number_formatter(755400670);
snackbar.show(result)

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});