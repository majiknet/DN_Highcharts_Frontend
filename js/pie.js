

    /*        $(function () {*/
    $(function () {
        $('#Pie').highcharts({
            chart: {
                height:500
            },
            title: {
                text: 'Valresultat<br /> 2010',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -20,
                        style: {
                            fontWeight: 'bold',
                            color: '#000'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Politiska Block',
                size: '80%',
                innerSize: '68%',
                data: testData
            },
                    {
                        type: 'pie',
                        name: 'Partier',
      
                        size: '100%',
                        innerSize: '80%',
                        data: outerData
                    }]
        });
    });


    var testData = [{
        y: 43.6,
        name: 'S, V, MP',
        color: 'red'
    },
           {
               y: 49.3,
               color: 'blue',
               name: 'M, FP, C, KD'
           },
    {
        y: 7.1,
        color: '#fff',
        name: ''
    }];


    var outerData = [
        {
            spacingTop: 20,
            y: 30.7,
            name: 'Socialdemokraterna',
            color: '#f5181e'
        },
            {
                y: 5.6,
                name: 'Vänsterpartiet',
                color: '#c01015'
            },
            {
                y: 7.3,
                name: 'Miljöpartiet',
                color: '#89bf5e'
            },
            {
                y: 5.7,
                name: 'Sverigedemokraterna',
                color: '#ffd442'
            },
            {
                y: 6.6,
                name: 'Centerpartiet',
                color: '#39b581'
            },
            {
                y: 7.1,
                name: 'Folkpartiet',
                color: '#50cdf0'
            },
            {
                y: 5.6,
                name: 'Kristdemokraterna',
                color: '#327cad'
            },
            {
                y: 30.1,
                name: 'Moderaterna',
                color: '#21acd8'
            }
    ];

    var pieChartOptions = {
        chart: {
            height:500
        },
        title: {
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -20,
                    style: {
                        fontWeight: 'bold',
                        color: '#000'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Politiska Block',
            size: '80%',
            innerSize: '68%',
            data: testData
        },
                {
                    type: 'pie',
                    name: 'Partier',
      
                    size: '100%',
                    innerSize: '80%',
                    data: outerData
                }]

    };

    /*global Highcharts, jQuery, $*/

    var DNHC;

    (function () {
        'use strict';


        DNHC = function ($chartEl, opts) {

            var _this = this;

            this.elID = $chartEl.attr('id');
            
            //opts.series = this.data;

            opts.chart.renderTo = this.elID;

            // make a new chart instance
            this.chart = new Highcharts.Chart(opts);
        //    this.chart = new Highcharts.Chart(opts);
        };

    })();

    new DNHC($("#PIE"), pieChartOptions);




