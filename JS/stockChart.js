var chart = AmCharts.makeChart( "chartdiv", {
  "type": "stock",
"theme": "light",

  "dataSets": [ {
    "title": "Minimum",
    "fieldMappings": [ {
      "fromField": "field1",
      "toField": "temp"
    } ],
    "compared": false,
    "categoryField": "created_at",
    "color": "#0000FF",


    "dataLoader": {
      "url": "https://api.thingspeak.com/channels/115328/fields/1.csv?api_key=JBLP09FSEYH935UH",
      "format": "csv",
      "showCurtain": true,
      "showErrors": true,
      "async": true,
      "delimiter": ",",
      "useColumnNames": true
    },

  }, {
    "title": "Maximum",
    "fieldMappings": [ {
      "fromField": "field2",
      "toField": "temp"
    } ],
    "compared": true,
    "categoryField": "created_at",
    "color": "#FF0000",

    "dataLoader": {
      "url": "https://api.thingspeak.com/channels/115328/fields/2.csv?api_key=JBLP09FSEYH935UH",
      "format": "csv",
      "showCurtain": true,
      "showErrors": true,
      "async": true,
      "delimiter": ",",
      "useColumnNames": true
    }
  } ],
  // 2018-03-30 22:57:30 UTC
  "dataDateFormat": "YYYY-MM-DD JJ:NN:SS UTC",

  "panels": [ {
      "title": "Value",

      "stockGraphs": [ {
        "id": "g1",
        "valueField": "temp",
        "comparable": true,
        "compareField": "temp",
        "showBalloon": true,
        "balloonText": "[[title]]:<b>[[value]]</b>",
        "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>",
        "compareGraphLineThickness": 3,
        "lineThickness": 3
      } ],

      "stockLegend": {
        "valueTextRegular": "[[value]]",
        "periodValueTextComparing": "[[value.close]]",
        "periodValueTextRegular": "[[value.close]]"
      }

    }
  ],

  "panelsSettings": {
    //    "color": "#fff",
    "plotAreaFillColors": "#333",
    "plotAreaFillAlphas": 1,
    "marginLeft": 60,
    "marginTop": 5,
    "marginBottom": 5,
    "recalculateToPercents": "never"
  },

  "chartScrollbarSettings": {
    "graph": "g1",
    "graphType": "line",
    "usePeriod": "WW",
    "backgroundColor": "#333",
    "graphFillColor": "#666",
    "graphFillAlpha": 0.5,
    "gridColor": "#555",
    "gridAlpha": 1,
    "selectedBackgroundColor": "#444",
    "selectedGraphFillAlpha": 1
  },

  "categoryAxesSettings": {
    "equalSpacing": true,
    "parseDates" : true,
    "gridColor": "#555",
    "gridAlpha": 1
  },

  "valueAxesSettings": {
    "gridColor": "#555",
    "gridAlpha": 1,
    "inside": false,
    "showLastLabel": true
  },

  "chartCursorSettings": {
    "pan": true,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true
  },

  "legendSettings": {
    //"color": "#fff"
  },

  "balloon": {
    "textAlign": "left",
    "offsetY": 10
  },

  "periodSelector": {
    "position": "bottom",
    "periods": [ {
        "period": "DD",
        "count": 5,
        "label": "5D"
      }, {
        "period": "DD",
        "count": 10,
        "label": "10D"
      }, {
        "period": "MM",
        "count": 1,
        "label": "1M"
      }, {
        "period": "MM",
        "count": 2,
        "label": "2M"
      }, {
        "period": "MAX",
        "label": "MAX"
      }
    ]
  }
} );