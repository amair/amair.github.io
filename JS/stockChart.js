AmCharts.ready(function() {

    AmCharts.loadFile( "https://api.thingspeak.com/channels/115328/fields/1.csv?api_key=JBLP09FSEYH935UH", {}, function( response ) {

    var minData = AmCharts.parseCSV( response, {
        "useColumnNames": true,
        "skip": 1
    } );

        AmCharts.loadFile( "https://api.thingspeak.com/channels/115328/fields/2.csv?api_key=JBLP09FSEYH935UH", {}, function( response ) {

            var maxData = AmCharts.parseCSV( response, {
                "useColumnNames": true,
                "skip": 1
            } );

            var chart = new AmCharts.AmStockChart();

            chart.dataDateFormat = ("YYYY-MM-DD JJ:NN:SS");

            chart.pathToImages = "images/";

            var dataSet1 = new AmCharts.DataSet();
            dataSet1.dataProvider = minData;
            dataSet1.fieldMappings = [{fromField:"field1", toField:"min"}];
            dataSet1.categoryField = "created_at";
            dataSet1.title = "Minimum";
            dataSet1.compared = true;
            dataSet1.color =  "#0000FF";


            var dataSet2 = new AmCharts.DataSet();

            dataSet2.dataProvider = maxData;
            dataSet2.fieldMappings = [{fromField:"field2", toField:"max"}];
            dataSet2.categoryField = "created_at";
            dataSet2.title = "Maximum";
            dataSet2.compared = true;
            dataSet2.color = "#FF0000";


            chart.dataSets = [dataSet1, dataSet2];

            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.id = "axis";
            valueAxis.type = "date";

            var stockPanel = new AmCharts.StockPanel();

            chart.panels = [stockPanel];

            // var panelsSettings = new AmCharts.PanelsSettings();
            // panelsSettings.startDuration = 1;
            // chart.panelsSettings = panelsSettings;

            var graph = new AmCharts.StockGraph();

            graph.valueField = "min";
            graph.compareField = "max";
            graph.type = "line";
            graph.title = "Min-Max"
            graph.comparable = true;
            graph.valueAxis = 'axis';
            // graph.lineThickness = ;
            // graph.compareGraphLineThickness = ;
            // graph.compareGraph = {
            //     "type": "smoothedLine",
            //     "bullet": "round"
            // };

            stockPanel.addStockGraph(graph);

            var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
            categoryAxesSettings.dashLength = 5;
            categoryAxesSettings.equalSpacing = true;
            categoryAxesSettings.parseDates = true;
            chart.categoryAxesSettings = categoryAxesSettings;


            var chartCursorSettings = new AmCharts.ChartCursorSettings();
            chartCursorSettings.valueBalloonsEnabled = true;
            chart.chartCursorSettings = chartCursorSettings;

            var dataSetSelector = new AmCharts.DataSetSelector();
            dataSetSelector.position = "left";

            chart.dataSetSelector = dataSetSelector;

            // var periodSelector = new AmCharts.PeriodSelector();
            // periodSelector.periods = [{period:"DD", count:1, label:"1 day"},
            //                           {period:"DD", selected:true, count:5, label:"5 days"},
            //                           {period:"MM", count:1, label:"1 month"},
            //                           {period:"YYYY", count:1, label:"1 year"},
            //                           {period:"YTD", label:"YTD"},
            //                           {period:"MAX", label:"MAX"}];
            // periodSelector.dateFormat  = ("YYYY-MM-DD JJ:NN:SS");
            // chart.periodSelector = periodSelector;

            chart.write("chartdiv");

        });
    });
});