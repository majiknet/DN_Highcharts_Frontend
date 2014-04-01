/*global Highcharts, jQuery, $*/

(function (win, doc, $, undefined) {
    'use strict';

    var data = null;

    var jqXHR = $.ajax({
        url: 'ImportedFiles/ChartData_101_2014-01-20_04-34-36.js',
        dataType: 'json'
    });

    jqXHR.done(function (data) {
        DNHC.bootstrap(data);
    });

    Highcharts.theme = {
        chart: {
            marginTop: 40,
            backgroundColor: '#fff',
            resetZoomButton: {
                theme: {
                    fill: 'black',
                    stroke: 'black',
                    style: {
                                color: 'white'
                            },
                    r: 0,
                    states: {
                        hover: {
                            fill: '#444',
                            stroke: 'black'
                        }
                    }
                }
            }
        },

        lang: {
            resetZoom: 'Zooma ut',
            resetZoomTitle: 'Zooma ut',
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dec"]
        },
        
        yAxis: {
            gridLineColor: '#ccc'
            
        },
        xAxis: {
            lineColor: '#666',
            tickColor: '#666',
            categories: []
        },
        title: {
            style: {
                color: '#000',
                font: '2.8em Georgia, serif'
            }
        },
        subtitle: {
            style: {
                color: '#666666',
                font: '1.2em Georgia, serif'
            }
        },
        legend: {
            itemDistance: 15,
            itemMarginTop: 15
        }
    };

    Highcharts.setOptions(Highcharts.theme);

    var dateTimeChartOptions = {
            
        chart: {
            renderTo: null,
            type: 'line',
            zoomType: 'x'
        },

        title: {
            text: 'Rubrik',
            align: 'left'
        },

        tooltip: {
            backgroundColor: 'rgba(255,255,255,.7)',
            borderColor: '#999',
            borderRadius: 0,
            borderWidth: 1,
            shadow: false,
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                Highcharts.dateFormat('%B. %Y ', this.x) +': <b>' + this.y + ' %</b>';
            }
        },

        xAxis: {
            type: 'datetime',
           tickLength: 8,
            labels: {
                align: 'center',
                y: 25
            },
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour:   '%H:%M',
                day:    '%e. %b',
                week:   '%e. %b',
                month:  '%b %Y',
                year:   '%Y'
            }
        },

        yAxis: {
            opposite: true,
            title: null,
        },

        credits: {
            enabled: false
        },

        plotOptions: {
            series: {
                lineWidth: 2.5,
                marker: {
                    radius: 3,
                    fillColor: '#000',
                    lineColor: '#fff',
                    lineWidth: 1,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },

        legend: {
            borderWidth: 0
        },

        series: []

    };

    var DNHC = (function () {

        var _this;

        return {

            bootstrap: function (data) {

                _this = this;
                this.data = data;

                this.init();

            },

            init: function () {
                this.makeTimestamps();
                this.createDateTimeChart();
            },

            makeTimestamps: function () {

                var _this = this;

                this.parsedData = [];

                $.each(this.data, function (i, data) {

                    if (_this.data[i].pointStart != null) {
                        _this.data[i].pointStart = parseInt(_this.data[i].pointStart.substr(6), 10);
                    }
                    $.each(data.data, function (j, item) {
   
                        item[0] = parseInt(item[0].substr(6), 10);
                 
                    });

                });

            },

            createDateTimeChart: function () {

                dateTimeChartOptions.series = this.data;
                dateTimeChartOptions.chart.renderTo = 'dnhc-culture-chart';

                // make a new chart instance
                this.dateTimeChart = new Highcharts.Chart(dateTimeChartOptions);
        
            }

        };

    }());

}(window, document, jQuery));

