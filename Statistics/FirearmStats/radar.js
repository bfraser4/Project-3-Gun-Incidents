const data = {
    labels: [
      'Texas',
      'California',
      'Florida',
      'Georgia',
      'Pennsylvania',
      'Ohio',
      'Illinois'
    ],
    datasets: [{
      label: 'Suicides',
      data: [10961, 7972, 8802, 4660, 4877, 4689, 2739],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Homicides',
      data: [6654, 7155, 5156, 3553, 3057, 3115, 4620],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true, 
          text: 'Gun Incidents from 2016-2020',
          padding: {
            top: 10,
            bottom: 30
          }
        }
      },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );