// Skill chart using Chart.js
const ctx = document.getElementById('skill-chart').getContext('2d');
const skillChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Python', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Java', 'C', 'Django'],
        datasets: [{
            data: [85, 90, 85, 80, 80, 75, 70],
            backgroundColor: ['#ffeb3b', '#1a73e8', '#ff5722', '#673ab7', '#00bcd4', '#8bc34a', '#ff9800'],
            hoverOffset: 4
        }]
    }
});
