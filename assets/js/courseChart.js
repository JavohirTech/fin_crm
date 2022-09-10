const ctxCourse = document.getElementById('myCourseChart').getContext('2d');
const myCourseChart = new Chart(ctxCourse, {
    type: 'doughnut',
    data: {
        labels: ['Red'],
        datasets: [{
            data: [80, 20],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ]
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