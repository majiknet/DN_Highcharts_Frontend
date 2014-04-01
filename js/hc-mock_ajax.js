


var dateTimeChartOptions = {
        
    chart: {
        renderTo: null,
        type: 'line',
        zoomType: 'x',
        
        padding: 0,
        marginLeft:0
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
            return Highcharts.dateFormat('%b %Y', new Date(this.x)) + '<br /><b>' + this.series.name.toUpperCase() + ': ' + this.y + '%</b>';
        }
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {month: '%b %Y'},
        tickLength: 10,
        labels: {
            align: 'center',
            y: 15
        }
    },

    yAxis: {
        opposite: true,
        title: null,
        min: 0,
        max: 60,
        plotBands: {
            from: 0,
            to: 4.2,
            color: 'rgba(0,0,0,.1)'
        }
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            pointStart: Date.UTC(1979, 0, 1),
          //  pointInterval: 14 * 24 * 3600 * 1000, // 14 days
            showInLegend: false,
            lineWidth: 4,
            marker: {
                enabled: false,
                radius: 2,
                fillColor: '#000',
                lineColor: '#fff',
                lineWidth: 0.5,
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



var DNHC = (function ($) {

    var dataUrl = '/import/test.json';
    console.log(dataUrl);
    var pointIntervals = {
        weeks: (7 * 24 * 3600 * 1000),
        days: (24 * 3600 * 1000),
        hours: (24 * 60 * 60 * 1000),
        twoWeeks: (14 * 24 * 3600 * 1000)
    };

    var selector = {
        legendNav: {
            container: 'legend-nav',
            button: 'legend-nav__button',
            buttonInactive: 'legend-nav__button__inactive',
            item: 'legend-nav__item',
            itemShowAll: 'legend-nav__item__show-all',
            iconPrefix: 'legend-nav__icon-',
            iconAll: 'legend-nav__icon-all'
        }
    };

    var colors = {
        s: '#f5181e',
        v: '#c01015',
        mp: '#89bf5e',
        sd: '#ffd442',
        ov: '#ccc',
        c: '#39b581',
        fp: '#50cdf0',
        kd: '#327cad',
        m: '#21acd8'
    };

    var _this;

    return {

        bootstrap: function () {

            var _this = this;

            var jqXHR = $.ajax({
                url: dataUrl,
                dataType: 'json'
            });
            $.when(jqXHR).then($.proxy(this.init, this));

        },

        init: function (data) {
            console.log('!');
            console.log('!');
            console.log(data);
            this.data = data;
            
            // fix. modify data items pointStart property date-format to timestamps
            this.makeTimestamps();
            this.createDateTimeChart();
        },

        makeTimestamps: function () {

            $.each(this.data, function (i, dataItem) {
                if (typeof dataItem.pointStart === 'string') {
                    dataItem.pointStart = parseInt(dataItem.pointStart.substr(6), 10);
                }
            });

        },

        createDateTimeChart: function () {
            dateTimeChartOptions.series = this.data;
            dateTimeChartOptions.chart.renderTo = 'dateTimeChart';
            console.log(this.data);
            // make a new chart instance
            this.dateTimeChart = new Highcharts.Chart(dateTimeChartOptions);
            console.log(this.dateTimeChart);
            // give this chart a custom navigation
            this.MakeLegendNav(this.dateTimeChart, true);
        },

        MakeLegendNav: function (chart, allSwitch) {

            var LegendNav = function (chart, allSwitch) {

                // requires chart object from highcharts.js
                this.chart = chart;
                this.container = chart.container;
                this.series = chart.series;
                this.allSwitch = allSwitch;

                this.init();

            };

            LegendNav.prototype = {

                init: function () {
                    this.$container = $('<ul class="' + selector.legendNav.container + '"></ul>');
                    this.$container.on('click', '.' + selector.legendNav.button , $.proxy(this.toggleSeries, this));

                    $.when(this.createLegendNav()).then($.proxy(this.insertLegendNav, this));
                },

                toggleSeries: function (e) {
                    var $navItem = $(e.target).parents('.' + selector.legendNav.item);
                    var serie = this.series[$navItem.index()];

                    // use highcharts.js own methods to hide/show series
                    if (!$navItem.hasClass(selector.legendNav.itemShowAll)) {

                        if (serie.visible) {
                            serie.hide();
                        } else {
                            serie.setVisible();
                        }

                        $navItem.find('button').toggleClass(selector.legendNav.buttonInactive);

                    } else {
                        this.showAll();
                    }
                    
                },

                showAll: function () {

                    var self = this;

                    $.each(this.series, function (i, serie) {
                        
                        if (!serie.visible) {

                            serie.setVisible();
                            self.$container.find('.' + selector.legendNav.buttonInactive).removeClass(selector.legendNav.buttonInactive);
                        }
                        
                    });

                },

                createLegendNav: function () {
                    var self = this;
                    var $legendNavItem;
                    var $legendButton;
                    var $allSwitchItem;
                    var $allSwitch;

                    $.each(this.series, function (i, legend) {
                        $legendNavItem = $('<li></li>').addClass(selector.legendNav.item);
                        $legendButton = $('<button><span>' + legend.name + '</span></button>').addClass(selector.legendNav.button + ' ' + selector.legendNav.iconPrefix + legend.name.toLowerCase() || 'default');
                        
                        $legendNavItem.append($legendButton);
                        self.$container.append($legendNavItem);
                    });

                    if (this.allSwitch) {
                        $allSwitchItem = $('<li></li>').addClass(selector.legendNav.item + ' ' + selector.legendNav.itemShowAll);
                        $allSwitch = $('<button><span>Alla</span></button>').addClass(selector.legendNav.button + ' ' + selector.legendNav.iconAll);
                        
                        $allSwitchItem.append($allSwitch);
                        this.$container.append($allSwitchItem);
                    }

                },

                insertLegendNav: function () {
                    this.$container.insertAfter(this.container);
                }

            };

            new LegendNav(chart, allSwitch);

        }

    };

}(jQuery));



DNHC.bootstrap();


















// THE GRAVEYARD +++++++++++++++++


// Highcharts.theme = {
//     chart: {
//         marginTop: 40,
//         backgroundColor: '#fff'
//     },
//     yAxis: {
//         gridLineColor: '#aaa'
//     },
//     xAxis: {
//         lineColor: '#666',
//         tickColor: '#666'
//     },
//     title: {
//         style: {
//             color: '#000',
//             font: '2.8em Georgia, serif'
//         }
//     },
//     subtitle: {
//         style: {
//             color: '#666666',
//             font: '1.2em Georgia, serif'
//         }
//     }
// };

// Highcharts.setOptions(Highcharts.theme);

// (function ($) {

//     var LegendNav = function (chart, allSwitch) {

//         // requires chart object from highcharts.js
//         this.chart = chart;
//         this.container = chart.container;
//         this.series = chart.series;
//         this.allSwitch = allSwitch;

//         this.init();

//     };

//     LegendNav.prototype = {

//         init: function () {
//             this.$container = $('<ul class="' + selector.legendNav.container + '"></ul>');
//             this.$container.on('click', '.' + selector.legendNav.button , $.proxy(this.toggleSeries, this));
            
//             $.when(this.createLegendNav()).then($.proxy(this.insertLegendNav, this));
//         },

//         toggleSeries: function (e) {
//             var $navItem = $(e.target).parents('.' + selector.legendNav.item);
//             var serie = this.series[$navItem.index()];

//             // use highcharts.js own methods to hide/show series
//             if (!$navItem.hasClass(selector.legendNav.itemShowAll)) {

//                 if (serie.visible) {
//                     serie.hide();
//                 } else {
//                     serie.setVisible();
//                 }

//                 $navItem.find('button').toggleClass(selector.legendNav.buttonInactive);

//             } else {
//                 this.showAll();
//             }
            
//         },

//         showAll: function () {

//             var self = this;

//             $.each(this.series, function (i, serie) {
                
//                 if (!serie.visible) {

//                     serie.setVisible();
//                     self.$container.find('.' + selector.legendNav.buttonInactive).removeClass(selector.legendNav.buttonInactive);
//                 }
                
//             });

//         },

//         createLegendNav: function () {
//             var self = this;
//             var $legendNavItem;
//             var $legendButton;
//             var $allSwitchItem;
//             var $allSwitch;

//             $.each(this.series, function (i, legend) {
//                 $legendNavItem = $('<li></li>').addClass(selector.legendNav.item);
//                 $legendButton = $('<button><span>' + legend.name + '</span></button>').addClass(selector.legendNav.button + ' ' + selector.legendNav.iconPrefix + legend.name.toLowerCase() || 'default');
                
//                 $legendNavItem.append($legendButton);
//                 self.$container.append($legendNavItem);
//             });

//             if (this.allSwitch) {
//                 $allSwitchItem = $('<li></li>').addClass(selector.legendNav.item + ' ' + selector.legendNav.itemShowAll);
//                 $allSwitch = $('<button><span>Alla</span></button>').addClass(selector.legendNav.button + ' ' + selector.legendNav.iconAll);
                
//                 $allSwitchItem.append($allSwitch);
//                 this.$container.append($allSwitchItem);
//             }

//         },

//         insertLegendNav: function () {
//             this.$container.insertAfter(this.container);
//         }

//     };

//     var makeTimestamps = function (data) {

//         $.each(data, function (i, data) {
//             mockData[i].pointStart = parseInt(mockData[i].pointStart.substr(6), 10);
//         });

//     };

//     makeTimestamps(mockData);

//     var chartOptions = {
        
//         chart: {
//             renderTo: 'charty',
//             type: 'line',
//             zoomType: 'x'
//         },

//         title: {
//             text: 'Rubrik',
//             align: 'left'
//         },

//         tooltip: {
//             backgroundColor: 'rgba(255,255,255,.7)',
//             borderColor: '#999',
//             borderRadius: 0,
//             borderWidth: 1,
//             shadow: false,
//             formatter: function() {
//                 return Highcharts.dateFormat('%e %b %Y', new Date(this.x)) + '<br /><b>' + this.series.name + ': ' + this.y + '%</b>';
//             }
//         },

//         xAxis: {
//             type: 'datetime',
//             tickLength: 10,
//             labels: {
//                 align: 'center',
//                 y: 25
//             },
//             dateTimeLabelFormats: {
//                 second: '%H:%M:%S',
//                 minute: '%H:%M',
//                 hour:   '%H:%M',
//                 day:    '%e. %b',
//                 week:   '%e. %b',
//                 month:  '%b %Y',
//                 year:   '%Y'
//             }
//         },

//         yAxis: {
//             opposite: true,
//             title: null,
//             min: 0,
//             max: 40,
//             plotBands: {
//                 from: 0,
//                 to: 4.2,
//                 color: 'rgba(0,0,0,.1)'
//             }
//         },

//         credits: {
//             enabled: false
//         },

//         plotOptions: {
//             series: {
//                 pointStart: Date.UTC(1979, 0, 1),
//                 pointInterval: 14 * 24 * 3600 * 1000, // 14 days
//                 showInLegend: false,
//                 lineWidth: 4,
//                 marker: {
//                     enabled: false,
//                     radius: 2,
//                     fillColor: '#000',
//                     lineColor: '#fff',
//                     lineWidth: 0.5,
//                     symbol: 'circle',
//                     states: {
//                         hover: {
//                             enabled: true
//                         }
//                     }
//                 }
//             }
//         },

//         legend: {
//             borderWidth: 0
//         },

//         series: mockData
//     };



//     // init a new chart instance
//     var chart1 = new Highcharts.Chart(chartOptions);

//     // init a new legend navigation instance
//     new LegendNav(chart1, true);

// }(jQuery));



// var createLegendNav = function (chart, legends) {
//         var $container = $('<ul class="legend-nav"></ul>');
//         var $legendNavItem;
//         var $legendButton;

//         var toggleSeries = function () {
//             var $el = $(this);
//             var serie = chart.series[$el.parent().index()];

//             // use Highcharts own methods to hide/show series
//             if (!$el.hasClass()) {

//             }
//             if (serie.visible) {
//                 serie.hide();
//             } else {
//                 serie.setVisible();
//             }

//             $el.toggleClass('legend-nav__button__inactive');
//         };
        
//         $.each(legends, function (i, legend) {
//             $legendNavItem = $('<li></li>').addClass('legend-nav__item');
//             $legendButton = $('<button><span>' + legend.name + '</span></button>').addClass('legend-nav__button legend-nav__icon__' + legend.name.toLowerCase() || 'default');
            
//             $legendNavItem.append($legendButton);
//             $container.append($legendNavItem);
//         });

//         $container.on('click', '.legend-nav__button', toggleSeries);

//         return $container;
//     };



// {"y": 22.5, "marker": {"symbol": "url(http://www.highcharts.com/demo/gfx/snow.png)"}









// // -------------------------------------------------------- idea



// var chartify = (function ($) {

//     var pointIntervals = {
//         months: (30 * 24 * 3600 * 1000),
//         weeks: (7 * 24 * 3600 * 1000),
//         days: (24 * 3600 * 1000),
//         hours: (24 * 60 * 60 * 1000),
//         twoWeeks: (14 * 24 * 3600 * 1000)
//     };

//     var chartSettings = {
        
//         chart: {
//             type: null,
//             zoomType: 'x'
//         },

//         title: {
//             text: null
//         },

//         subtitle: {
//             text: null
//         },

//         xAxis: {
//             type: 'datetime',
//             dateTimeLabelFormats: {
//                 second: '%H:%M:%S',
//                 minute: '%H:%M',
//                 hour:   '%H:%M',
//                 day:    '%e. %b',
//                 week:   '%e. %b',
//                 month:  '%b %Y',
//                 year:   '%Y'
//             }
//         },

//         plotOptions: {
//             series: {
//                 pointStart: Date.UTC(1979, 0, 1),
//                 pointInterval: pointIntervals.months
//             },
//             pie: {
//                 innerSize: '20%'
//             }
            
//         },

//         series: null

//     };

//     var _this;

//     return {

//         bootstrap: function (els) {

//             var dataUrl = '/js/mock.json';

//             if (els && els.length) {
//                 els.addClass('ch-mock__container__loading');
//             } else {
//                 return false;
//             }

//             var jqXHR = $.ajax({
//                 url: dataUrl,
//                 context: _this,
//                 dataType: 'json'
//             });

//             $.when(jqXHR, els).then($.proxy(this.init, this));

//             jqXHR.always(function () {
//                 els.removeClass('ch-mock__container__loading');
//             });
//         },

//         init: function (data, els) {

//             _this = this;
//             this.data = data[0];
//             this.els = els;

//             this.renderCharts();
//         },

//         customizeChartSettings: function (title, subtitle, type) {

//             chartSettings.series           = this.data;
//             chartSettings.title.text       = title || null;
//             chartSettings.subtitle.text    = subtitle || null;
//             chartSettings.chart.type       = type || null;

//         },

//         renderCharts: function () {
//             var $chart;

//             $.each(this.els, function() {

//                 $chart = $(this);

//                 _this.customizeChartSettings(
//                     $chart.data('chart-title'),
//                     $chart.data('chart-subtitle'),
//                     $chart.data('chart-type')
//                 );
     
//                 // Init highCharts plugin
//                 $chart.highcharts(chartSettings);
//             });
//         }

//     };

// }(jQuery));



// $(function () {
//    chartify.bootstrap($('.js-chart'));
// });




// // Pie
// // -----------------------------------------------------------------------------

// $(function () {
    
//     var colors = Highcharts.getOptions().colors;
//     var categories = ['S+V+P', '', 'C+FP+KD+M'];
//     var name = 'Test pie';
    
//     var data = [
//         {
//             y:  51.0,
//             color: 'red',
//             drilldown: {
//                 categories: ['S', 'V', 'MP'],
//                 data: [{y: 34.4, color: 'green'}, {y: 6.9, color: 'orange'}, {y: 9.7, color: 'brown'}]
//             }
//         }, {
//             y: 10,
//             color: 'transparent',
//             drilldown: {
//                 categories: ['SD', 'Ov.'],
//                 data: [{y: 8.4, color: 'yellow'}, {y: 1.6, color: '#ccc'}]
//             }
//         }, {
//             y: 39.0,
//             color: 'blue',
//             drilldown: {
//                 categories: ['C', 'FP', 'KD', 'M'],
//                 data: [{y: 4.1, color: 'green'}, {y: 5.8, color: 'orange'}, {y: 3.5, color: 'brown'}, {y: 25.6, color: '#ccc'}]
//             }
//         }
//     ];


//     // Build the data arrays
//     var browserData = [];
//     var versionsData = [];

//     for (var i = 0; i < data.length; i++) {

//         // add browser data
//         browserData.push({
//             name: categories[i],
//             y: data[i].y,
//             color: data[i].color
//         });

//         if (data[i].drilldown && data[i].drilldown.data.length) {
//             // add version data
//             for (var j = 0; j < data[i].drilldown.data.length; j++) {
//                 versionsData.push({
//                     name: data[i].drilldown.categories[j],
//                     y: data[i].drilldown.data[j].y,
//                     color: data[i].drilldown.data[j].color
//                 });
//             }
//         }
        
//     }

//     // Create the chart
//     var pie = new Highcharts.Chart({

//         chart: {
//             renderTo: 'pie',
//             type: 'pie'
//         },
//         title: {
//             text: 'Rubrik',
//             floating: true,
//             align: 'left',
//             x: 100,
//             y: 50
//         },
//         subtitle: {
//             text: 'Mätningen baseras på 2758 telefonintervjuer under tiden i är 17,7 procent.',
//             floating: true,
//             align: 'left',
//             x: 100,
//             y: 80,
//             width: 150
//         },
//         yAxis: {
//             title: {
//                 text: 'Total percent market share'
//             }
//         },
//         legend: {
//                 layout: 'horizontal',
//                 floating: true,
//                 align: 'center',
//                 verticalAlign: 'bottom',
//                 shadow: false,
//                 border: 0,
//                 borderRadius: 0,
//                 borderWidth: 0,
//                 useHTML: true,
//                 labelFormatter: function() {
//                     return '<div class="test legend-icon__' + this.name + '"><div>' + this.y + '%</div><div>' + this.name + '</div>';
//                 }
//             },
//         plotOptions: {
//             pie: {
//                 shadow: false,
//                 center: ['50%', '50%'],
//                 innerSize: '40%',
//                 size: '59%',
//                 borderWidth: 0,
//                 startAngle: 180
//             },
//             series: {
//                     legendItemClick: function (e) {e.preventDefault();}
//                 }

//         },
//         credits: {
//             enabled: false
//         },
//         tooltip: {
//             valueSuffix: '%'
//         },
//         series: [{
//             name: 'Partiblock',
//             data: browserData,
//             size: '50%',
//             innerSize: '48%',
//             dataLabels: {
//                 formatter: function() {
//                     return this.y > 5 ? this.point.name : null;
//                 },
//                 color: '#444',
//                 distance: -35
//             }
//         }, {
//             name: 'Partier',
//             data: versionsData,
//             size: '80%',
//             innerSize: '60%',

//             showInLegend: true,
//             dataLabels: {
//                 enabled: false,
//                 formatter: function() {
//                     // display only if larger than 1
//                     return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
//                 }
//             }
//         }]
//     });

//    pie.clipRect.height= 10;
//    console.log(pie);
// });






















// var date = new Date(parseInt(jsonDate.substr(6)));


// (function ($) {

//     var LegendNav = function (chart, allSwitch) {

//         // requires chart object from highcharts.js
//         this.chart = chart;
//         this.container = chart.container;
//         this.series = chart.series;
//         this.allSwitch = allSwitch;

//         this.init();

//     };

//     LegendNav.prototype = {

//         init: function() {
//             this.$container = $('<ul class="legend-nav"></ul>');
//             this.$container.on('click', '.legend-nav__button', this.toggleSeries);

//             $.when(this.createLegendNav()).then(this.insertLegendNav);
//         },

//         toggleSeries: function () {
//             var $el = $(this);
//             var serie = this.series[$el.parent().index()];

//             // use highcharts.js own methods to hide/show series
//             if (serie.visible) {
//                 serie.hide();
//             } else {
//                 serie.setVisible();
//             }

//             $el.toggleClass('legend-nav__button__inactive');
//         },

//         createLegendNav: function () {
//             var $legendNavItem;
//             var $legendButton;
//             var $allSwitch;

//             $.each(this.series, function (i, legend) {
//                 $legendNavItem = $('<li></li>').addClass('legend-nav__item');
//                 $legendButton = $('<button><span>' + legend.name + '</span></button>').addClass('legend-nav__button legend-nav__icon__' + legend.name.toLowerCase() || 'default');
                
//                 $legendNavItem.append($legendButton);
//                 this.$container.append($legendNavItem);
//             });

//             if (this.allSwitch) {
//                 this.$container.append($('<button><span>Alla</span></button>').addClass('legend-nav__button legend-nav__icon__all'));
//             }

//         },

//         insertLegendNav: function () {
//             this.$container.insertAfter(this.container);
//         }

//     };

// }(jQuery));






// var newData = function () {

//     var freshData = [];

//     $.each(mockData, function (i, data) {
//         freshData.push({
//             name: data.name,
//             color: data.color,
//             data: data.data,
//             pointStart: parseInt(data.pointStart.substr(6), 10) // parsing ex. \/Date(1293034567877)\/
//         });
//     });

//     return freshData;

// };



//createLegendNav(chart1, chart1.series).insertAfter(chart1.container);


// var createLegendNav = function (chart, legends) {
//         var $container = $('<ul class="legend-nav"></ul>');
//         var $legendNavItem;
//         var $legendButton;

//         var toggleSeries = function () {
//             var $el = $(this);
//             var serie = chart.series[$el.parent().index()];

//             // use Highcharts own methods to hide/show series
//             if (serie.visible) {
//                 serie.hide();
//             } else {
//                 serie.setVisible();
//             }

//             $el.toggleClass('legend-nav__button__inactive');
//         };
        
//         $.each(legends, function (i, legend) {
//             $legendNavItem = $('<li></li>').addClass('legend-nav__item');
//             $legendButton = $('<button><span>' + legend.name + '</span></button>').addClass('legend-nav__button legend-nav__icon__' + legend.name.toLowerCase() || 'default');
            
//             $legendNavItem.append($legendButton);
//             $container.append($legendNavItem);
//         });

//         $container.on('click', '.legend-nav__button', toggleSeries);

//         return $container;
//     };


// ----------------------------------------------------------- idea end



// ----------------------------------------------------------- plugin idea

// (function($) {

// $.fn.chartify = function (options) {

//     var setup = $.extend({}, $.fn.chartify.defaultOptions, options);

//     $.fn.chartify.defaultOptions = {};

//     return this.each(function () {

//         var $chart = $(this);

//     });
// };

// }(jQuery));

// ----------------------------------------------------------- plugin idea end




// var hcMock = (function () {

//     var _this;

//     return {

//         selectors: {
//             chartContainer: 'hc-container'
//         },

//         init: function (data) {

//             _this = this;

//             this.data = data;

//             this.renderChart(data);

//         },

//         renderChart: function () {

//             $.each(this.data, function (i, dataItem) {
//                 defaultDataSettings.series.push(dataItem);
//             });

//             $('.' + this.selectors.chartContainer).highcharts(defaultDataSettings);

//         }

//     };

// }());



// Document ready!
// $(function ($) {

//     var jqXHR = $.ajax({
//         url: '/js/mock.json',
//         dataType: 'json'
//     });

//     var charts = $('.js-chart').addClass('ch-mock__container__loading');

//     var generateCharts = function (data) {
//         var $this;

//         $.each(charts, function() {

//             $this = $(this);

//             defaultDataSettings.series = data;
//             defaultDataSettings.title.text      =   $this.data('chart-title') || null;
//             defaultDataSettings.chart.type      =   $this.data('chart-type') || null;
//             defaultDataSettings.subtitle.text   =   $this.data('chart-subtitle') || null;
        
//             $this.highcharts(defaultDataSettings);
//         });
//     };

//     jqXHR.done(generateCharts);

//     jqXHR.always(function () {
//         charts.removeClass('ch-mock__container__loading');
//     });

// });






// {"y": 22.5, "marker": {"symbol": "url(http://www.highcharts.com/demo/gfx/snow.png)"}}



// tooltip: {
//     formatter: function() {
//         return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '%</b>, in series '+ this.series.name;
//     }
// }

// series: [{
//     name: 'M',
//     color: 'blue',
//     data: [
//         {x: Date.UTC(1979, 0, 1), y: 16.4},
//         [Date.UTC(1979, 1, 1), 21.5],
//         [Date.UTC(1979, 2, 1), 14.4],
//         [Date.UTC(1979, 3, 1), 19.9],
//         [Date.UTC(1979, 4, 1), 41.5],
//         [Date.UTC(1979, 5, 1), 74.4],
//         [Date.UTC(1979, 6, 1), 89.9],
//         [Date.UTC(1979, 7, 1), 21.5],
//         [Date.UTC(1979, 8, 1), 94.4],
//         [Date.UTC(1979, 9, 1), 19.9],
//         [Date.UTC(1979, 10, 1), 21.5],
//         [Date.UTC(1979, 11, 1), 44.4]
//     ]
// },
// {
//     name: 'SD',
//     data: [
//         [Date.UTC(1979, 0, 1), null],
//         [Date.UTC(1979, 1, 1), null],
//         [Date.UTC(1979, 2, 1), null],
//         [Date.UTC(1979, 3, 1), 29.9],
//         [Date.UTC(1979, 4, 1), 51.5],
//         [Date.UTC(1979, 5, 1), 54.4],
//         [Date.UTC(1979, 6, 1), 79.9],
//         [Date.UTC(1979, 7, 1), 61.5],
//         [Date.UTC(1979, 8, 1), 44.4],
//         [Date.UTC(1979, 9, 1), 69.9],
//         [Date.UTC(1979, 10, 1), 71.5],
//         [Date.UTC(1979, 11, 1), 54.4]
//     ]
// }]

// series: [{
//     name: 'SD',
//     data: [20, 50, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, null, null, null],
//     pointStart: Date.UTC(2010, 3, 1)
// },
// {
//     name: 'M',
//     data: [29.9, 81.5, 96.4, 119.2, 134.0, 136.0, 115.6, 158.5, 116.4, 94.1, 35.6, 54.4],
//     pointStart: Date.UTC(2010, 2, 1)
// }]





// $('.destroy').click(function() {
//     var chart2 = $('.' + _this.selectors.chartContainer).highcharts();
//     chart2.destroy();
  
//   $('.' + _this.selectors.chartContainer).highcharts().addSeries({
//     name: 'SD',
//     data: [39.9, 41.5, 96.4, 119.2, {"y": 22.5, "marker": {"symbol": "url(http://www.highcharts.com/demo/gfx/snow.png)"}}, 126.0, 105.6, 138.5, 113.4, 44.1, 35.6, 54.4],
//     pointStart: Date.UTC(2010, 3, 1)
// });
    
// });






    

   

