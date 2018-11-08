// Charts

Chart.defaults.global.defaultFontFamily = 'IBM Plex Sans';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#000';
Chart.defaults.global.legend.position = 'bottom';
// Chart.defaults.global.tooltips = '';



var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
	    datasets: [
	    /* Outer doughnut data starts*/
	    {
	   		data: [100, 0],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 1)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Graphics'
	    },
	    /* Outer doughnut data ends*/
	    /* Inner doughnut data starts*/
	    {
	      	data: [50, 50],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.75)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Development'
	    },
	    /* Inner doughnut data ends*/
	    {
	      	data: [15, 85],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.5)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Branding'
	    },
	    {
	      	data: [5, 95],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.25)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Architecture'
	    }
	   	],
	    // labels: ["Branding"]
	},
  	options: {
        title: {
            display: true,
            text: 'One & All Agency',
            fontFamily: "'IBM Plex Sans', arial, sans-serif",
            fontSize: 18,
            paddingBottom: 20,
        },
  		scales: {
        	xAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}],
        	yAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}]
      	},
	    tooltips: {
	    	callbacks: {
	      		label: function(tooltipItem, data) {
	            	var dataset = data.datasets[tooltipItem.datasetIndex];
	            	var dslabelamt = dataset.data[tooltipItem.index];
	            	return data.datasets[tooltipItem.datasetIndex].label + ': ' + dslabelamt + '%';
	            }
	        }
	   	}	
  	}
}
);



var ctx = document.getElementById("myChart2");

var myChart2 = new Chart(ctx, {
	type: 'doughnut',
	data: {
	    datasets: [
	    /* Outer doughnut data starts*/
	    {
	   		data: [80, 20],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 1)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Graphics'
	    },
	    /* Outer doughnut data ends*/
	    /* Inner doughnut data starts*/
	    {
	      	data: [60, 40],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.75)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Development'
	    },
	    /* Inner doughnut data ends*/
	    {
	      	data: [75, 25],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.5)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Branding'
	    },
	    {
	      	data: [60, 40],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.25)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Architecture'
	    }
	   	],
	    // labels: ["Branding", "Graphics"]
	},
  	options: {
        title: {
            display: true,
            text: 'The Pillyr Foundation',
            fontFamily: "'IBM Plex Sans', arial, sans-serif",
            fontSize: 18,
            paddingBottom: 20,
        },
  		scales: {
        	xAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}],
        	yAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}]
      	},
	    tooltips: {
	       	filter: function (tooltipItem, data) {
	           	var label = data.labels[tooltipItem.index];
	           	if (label == "Branding") {
	            	return false;
	           	} else {
	            	return true;
	           	}
	       	},
	    	callbacks: {
	      		label: function(tooltipItem, data) {
	            	var dataset = data.datasets[tooltipItem.datasetIndex];
	            	var dslabelamt = dataset.data[tooltipItem.index];
	            	return data.datasets[tooltipItem.datasetIndex].label + ': ' + dslabelamt + '%';
	            }
	        }
	   	}
  	}
}
);



var ctx = document.getElementById("myChart3");

var myChart3 = new Chart(ctx, {
	type: 'doughnut',
	data: {
	    datasets: [
	    /* Outer doughnut data starts*/
	    {
	   		data: [90, 10],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 1)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Graphics'
	    },
	    /* Outer doughnut data ends*/
	    /* Inner doughnut data starts*/
	    {
	      	data: [60, 40],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.75)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Development'
	    },
	    /* Inner doughnut data ends*/
	    {
	      	data: [40, 60],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.5)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Branding'
	    },
	    {
	      	data: [10, 90],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.25)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Architecture'
	    }
	   	],
	    // labels: ["Branding", "Graphics"]
	},
  	options: {
        title: {
            display: true,
            text: 'Freelance',
            fontFamily: "'IBM Plex Sans', arial, sans-serif",
            fontSize: 18,
            paddingBottom: 20,
        },
  		scales: {
        	xAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}],
        	yAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}]
      	},
	    tooltips: {
	       	filter: function (tooltipItem, data) {
	           	var label = data.labels[tooltipItem.index];
	           	if (label == "Branding") {
	            	return false;
	           	} else {
	            	return true;
	           	}
	       	},
	    	callbacks: {
	      		label: function(tooltipItem, data) {
	            	var dataset = data.datasets[tooltipItem.datasetIndex];
	            	var dslabelamt = dataset.data[tooltipItem.index];
	            	return data.datasets[tooltipItem.datasetIndex].label + ': ' + dslabelamt + '%';
	            }
	        }
	   	}	
  	}
}
);



var ctx = document.getElementById("myChart4");

var myChart4 = new Chart(ctx, {
	type: 'doughnut',
	data: {
	    datasets: [
	    /* Outer doughnut data starts*/
	    {
	   		data: [40, 60],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 1)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Graphics'
	    },
	    /* Outer doughnut data ends*/
	    /* Inner doughnut data starts*/
	    {
	      	data: [0, 100],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.75)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Development'
	    },
	    /* Inner doughnut data ends*/
	    {
	      	data: [25, 75],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.5)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Branding'
	    },
	    {
	      	data: [90, 10],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 0.25)',
              	'rgba(158, 31, 99, 0.05)'
	      	],
	      	label: 'Architecture'
	    }
	   	],
	    // labels: ['Branding', 'Graphics', 'Development', 'Vizualizations']
	},
  	options: {
        title: {
            display: true,
            text: 'Estudio Carlos Ferrater',
            fontFamily: "'IBM Plex Sans', arial, sans-serif",
            fontSize: 18,
            paddingBottom: 20,
        },
  		scales: {
        	xAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}],
        	yAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}]
      	},
	    tooltips: {
	       	filter: function (tooltipItem, data) {
	           	var label = data.labels[tooltipItem.index];
	           	if (label == "Branding") {
	            	return false;
	           	} else {
	            	return true;
	           	}
	       	},
	    	callbacks: {
	      		label: function(tooltipItem, data) {
	            	var dataset = data.datasets[tooltipItem.datasetIndex];
	            	var dslabelamt = dataset.data[tooltipItem.index];
	            	return data.datasets[tooltipItem.datasetIndex].label + ': ' + dslabelamt + '%';
	            }
	        }
	   	}
  	}
}
);



var ctx = document.getElementById("myBarChart100");

var myBarChart100 = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
	    datasets: [
	    /* Outer doughnut data starts*/
	    {
	   		data: [100, 0],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 1)',
              	'rgba(158, 31, 99, 1)'
	      	],
	      	label: 'Branding'
	    },
	    /* Inner doughnut data ends*/

	   	],
	    labels: ["Branding"]
	},
  	options: {
  		legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'One & All Agency',
            fontFamily: "'IBM Plex Sans', arial, sans-serif",
            fontSize: 21,
            paddingBottom: 20,
        },
  		scales: {
        	xAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}],
        	yAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}]
      	}
  	}
}
);


var ctx = document.getElementById("myBarChart80");

var myBarChart80 = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
	    datasets: [
	    /* Outer doughnut data starts*/
	    {
	   		data: [80, 20],
	      	backgroundColor: [
              	'rgba(158, 31, 99, 1)',
              	'rgba(158, 31, 99, 0.2)'
	      	],
	      	label: 'Branding'
	    },
	    /* Inner doughnut data ends*/

	   	],
	    labels: ["Branding"]
	},
  	options: {
  		legend: {
            display: false,
        },
        title: {
            display: false,
            text: 'One & All Agency',
            fontFamily: "'IBM Plex Sans', arial, sans-serif",
            fontSize: 21,
            paddingBottom: 20,
        },
  		scales: {
        	xAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}],
        	yAxes: [{
          		gridLines: {
            		display: false,
            		drawBorder: false,
          		},
          		ticks: {
          			display: false,
          		}
        	}]
      	}
  	}
}
);