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

            chart.dataDateFormat = ("YYYY-MM-DD hh:mm:ss");

            chart.pathToImages = "images/";

            var dataSet1 = new AmCharts.DataSet();
            dataSet1.dataProvider = minData;
            dataSet1.fieldMappings = [{fromField:"field1", toField:"min"}];
            dataSet1.categoryField = "created_at";
            dataSet1.title = "Minimum";
            dataSet1.compared = true;


            var dataSet2 = new AmCharts.DataSet();

            dataSet2.dataProvider = maxData;
            dataSet2.fieldMappings = [{fromField:"field2", toField:"max"}];
            dataSet2.categoryField = "created_at";
            dataSet2.title = "Maximum";
            dataSet2.compared = true;

            chart.dataSets = [dataSet1, dataSet2];

            var stockPanel = new AmCharts.StockPanel();

            chart.panels = [stockPanel];

            // var panelsSettings = new AmCharts.PanelsSettings();
            // panelsSettings.startDuration = 1;
            // chart.panelsSettings = panelsSettings;

            var graph = new AmCharts.StockGraph();

            graph.valueField = "min";
            graph.type = "line";
            graph.title = "Min"
            graph.comparable = true;
            // graph.valueAxis = 'axis1';

            stockPanel.addStockGraph(graph);

            // var graph2 = new AmCharts.StockGraph();
            // graph2.title = "Max"
            // graph2.type = "line";
            // graph2.comparable = true;
            // graph2.valueField = "max";
            // graph2.compareField = "max";
            // graph2.compareGraph = {
            //     "type": "smoothedLine",
            //     "bullet": "round"
            // };
            // graph2.valueAxis = 'axis2';

            // stockPanel.addStockGraph(graph2);

            var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
            categoryAxesSettings.dashLength = 5;
            categoryAxesSettings.equalSpacing = true;
            categoryAxesSettings.parseDates = true;
            chart.categoryAxesSettings = categoryAxesSettings;

            var valueAxesSettings = new AmCharts.ValueAxesSettings();
            valueAxesSettings .dashLength = 5;
            chart.valueAxesSettings  = valueAxesSettings;

            // var valueAxis1 = new AmCharts.ValueAxis();
            // valueAxis1.id = "axis1";

            // var valueAxis2 = new AmCharts.ValueAxis();
            // valueAxis2.id = "axis2";

            // var chartScrollbarSettings = new AmCharts.ChartScrollbarSettings();
            // chartScrollbarSettings.graph = graph;
            // chartScrollbarSettings.graphType = "line";
            // chart.chartScrollbarSettings = chartScrollbarSettings;

            // var chartCursorSettings = new AmCharts.ChartCursorSettings();
            // chartCursorSettings.valueBalloonsEnabled = true;
            // chart.chartCursorSettings = chartCursorSettings;

            // var periodSelector = new AmCharts.PeriodSelector();
            // periodSelector.periods = [{period:"DD", count:1, label:"1 day"},
            //                           {period:"DD", selected:true, count:5, label:"5 days"},
            //                           {period:"MM", count:1, label:"1 month"},
            //                           {period:"YYYY", count:1, label:"1 year"},
            //                           {period:"YTD", label:"YTD"},
            //                           {period:"MAX", label:"MAX"}];
            // chart.dataDateFormat = ("YYYY-MM-DD HH:NN:SS");
            // chart.periodSelector = periodSelector;

            chart.write("chartdiv");

        });
    });
});