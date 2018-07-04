AmCharts.makeChart
("chartdiv",
	{
		"type": "serial",
		"categoryField": "created_at",
		"dataDateFormat": "YYYY-MM-DD hh:ss:mm UTC",
		"startDuration": 1,
		"accessibleTitle": "minimumtemperature",
		"backgroundAlpha": 0.8,
		"theme": "light",
		"categoryAxis": {
			"equalSpacing": true,
			"gridPosition": "start",
			"parseDates": true,
			"firstDayOfWeek": 0,
			"title": "Date"
		},
		"chartCursor": {
			"enabled": true
		},
		"trendLines": [],
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"bullet": "round",
				"id": "AmGraph-1",
				"title": "graph 1",
				"valueField": "column-1"
			},
			{
				"fixedColumnWidth": -2,
				"id": "Minimum",
				"title": "Minimum Temperature",
				"valueField": "field1"
			},
			{
				"fontSize": -1,
				"id": "AmGraph-3",
				"lineColor": "#FF0000",
				"lineThickness": 3,
				"title": "maximum",
				"valueField": "field2"
			}
		],
		"guides": [],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"tickLength": 2,
				"title": "Temperature (C)"
			}
		],
		"allLabels": [],
		"balloon": {},
		"titles": [
			{
				"id": "max",
				"text": "Maximum Temperature"
			}
		],
		"dataSets": [{
		    "dataLoader": {
		      "url": "https://api.thingspeak.com/channels/115328/fields/2.csv?api_key=JBLP09FSEYH935UH",
		      "format": "csv",
		      "delimiter": ",",       // column separator
		      "useColumnNames": true, // use first row for column names
		      "skip": 1               // skip header row
		    }
		}]
	}
);
