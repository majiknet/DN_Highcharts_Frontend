/*global Highcharts, jQuery, $*/


(function () {
    // minimal publish subscribe solution
    var _pubSub = $({});
    
    var isTouchDevice = function () {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    };

    dateTimeChartData = this.dateTimeChartData;

    Highcharts.theme = {
        chart: {
            marginTop: 0,
            backgroundColor: '#fff',

        },

    };

    Highcharts.setOptions(Highcharts.theme);

    var dateTimeChartOptions = {
        chart: {
            type: 'pie',
            name: 'TEST',
            innerSize: '50%',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Valet 2010',
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
                    distance: -90,
                    style: {
                        fontWeight: 'bold',
                        color: '#333',
                        fontSize: '18px'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '150%']
            },
        },
        colors: ['#f5181e', '#c01015', '#89bf5e', '#ffd442', '#39b581', '#50cdf0', '#327cad', '#21acd8', '#eee'],
        
        series: [
           
        ]

    };

    var dateTimeChartData = dateTimeChartData;

    var dateTimeChartHappeningsData = [];
 
    var DNHC = (function ($) {

        var selector = {
            legendNav: {
                legendNavContainer: 'dnhc_legend-nav__container',
                container: 'dnhc_legend-nav',
                button: 'dnhc_legend-nav__button',
                buttonInactive: 'dnhc_legend-nav__button__inactive',
                item: 'dnhc_legend-nav__button',
                itemShowAll: 'dnhc_legend-nav__button__show-all',
                itemHideAll: 'dnhc_legend-nav__button__hide-all',
                iconClass: 'dnhc_icon',
                iconPrefix: 'dnhc_icon--',
                iconAll: 'dnhc_icon--all',
                itemTitle: 'dnhc_legend-nav__button-title',
                togglerNav: 'dnhc_legend-nav__toggler',
                resetZoomButton: 'dnhc_legend-nav__reset-zoom-button',
                togglerModule: 'dnhc_legend-nav__module'
            }
        };

        var _this;

        return {

            bootstrap: function () {

                _this = this;

                this.init(dateTimeChartData);

            },

            init: function (data) {
                
                this.data = data;

                _pubSub.on('loaded:dateTimeChart', function (e, chart) {
                  //  _this.MakeLegendNav(chart, true);
                    _this.addNewSeries(chart, dateTimeChartData);
                 //   _this.addNewSeries(chart, dateTimeChartHappeningsData);
                });

                this.createDateTimeChart();
            },

            createDateTimeChart: function () {
                
                dateTimeChartOptions.series = dateTimeChartData;

                dateTimeChartOptions.chart.renderTo = 'dateTimeChart';

                // make a new chart instance
                this.dateTimeChart = new Highcharts.Chart(dateTimeChartOptions);

            },
            addNewSeries: function (chart, data) {
        
                if (chart) {

                    chart.addSeries({
                         
                        marker: {
                            enabled: true,
                            radius: 5,
                            fillColor: 'transparent',
                            lineColor: '#000',
                            lineWidth: 1.5,
                            symbol: 'circle',
                            states: {
                                hover: {
                                    radius: 5,
                                    fillColor: '#000',
                                    lineColor: '#000',
                                    lineWidth: 1.5
                                }
                            }
                        },
                        showInLegend: false,
                        lineWidth : 0,
                        name: 'custom',
                        data: data
                    });
                }
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
                        this.$container = $('<div class="' + selector.legendNav.legendNavContainer + '"></div>');
                        this.$legendNav = $('<div class="' + selector.legendNav.container + '"></div>');
                        this.$legendNav.on('click', '.' + selector.legendNav.button, $.proxy(this.toggleSeries, this));

                        $.when(this.createLegendNav(), this.createTogglers()).then(
                                $.proxy(this.insertLegendNav, this)
                            );
                    },

                    showCustomSeries: function () {

                        $.each(this.series, function (i, serie) {

                            if (serie.name === 'custom' && !serie.visible) {
                                serie.setVisible();
                            }

                        });

                    },

                    toggleSeries: function (e) {
                        var $navItem = $(e.target);
                        var serie;

                        if (!$navItem.hasClass(selector.legendNav.button)) {
                            $navItem = $navItem.parents('.' + selector.legendNav.button);
                        }

                        serie = this.series[$navItem.index()];

                        // use highcharts.js own methods to hide/show series    
                        if (serie.visible) {
                            serie.hide();
                        } else {
                            serie.setVisible();

                            this.showCustomSeries();
                        }

                        $navItem.toggleClass(selector.legendNav.buttonInactive);

                    },

                    hideAllSeries: function () {

                        $.each(this.series, function (i, serie) {

                            if (serie.visible) {
                                serie.hide();
                            }

                        });

                        this.$legendNav.find('.' + selector.legendNav.button).addClass(selector.legendNav.buttonInactive);

                    },

                    showAll: function () {

                        var self = this;

                        $.each(this.series, function (i, serie) {

                            if (!serie.visible) {
                                serie.setVisible();
                            }

                        });

                        self.$legendNav.find('.' + selector.legendNav.buttonInactive).removeClass(selector.legendNav.buttonInactive);

                    },

                    createTogglers: function () {

                        var self = this;
                        var $togglerContainer = $('<div></div>').addClass(selector.legendNav.togglerNav);
                        var zoomText = (isTouchDevice()) ? 'Zooma in valfri tidsperiod' : 'Zooma in valfri tidsperiod genom att dra på grafen med muspekaren';
                        var $buttonModule = $('<div></div>').addClass(selector.legendNav.togglerModule);
                        var $resetZoomModule = $('<div></div>').addClass(selector.legendNav.togglerModule);
                        var $allSwitchItem;
                        var $hideSwitchItem;
                        var $resetZoomButton;

                        if (!this.allSwitch) { return; }

                        $allSwitchItem = $('<a class="' + selector.legendNav.itemShowAll + '" href="javascript:void(0)">Visa alla</a>');
                        $hideSwitchItem = $('<a class="' + selector.legendNav.itemHideAll + '" href="javascript:void(0)">Dölj alla</a>');
                        $resetZoomButton = $('<a class="' + selector.legendNav.resetZoomButton + ' ' + selector.legendNav.resetZoomButton + '--disabled" href="javascript:void(0)">Zooma ut</a>');

                        $allSwitchItem.prependTo($buttonModule);
                        $hideSwitchItem.prependTo($buttonModule);
                        $('<p>Klicka på partisymbolerna</p>').prependTo($buttonModule);

                        $('<p>' + zoomText + '</p>').appendTo($resetZoomModule);
                        $resetZoomButton.appendTo($resetZoomModule);

                        $buttonModule.appendTo($togglerContainer);
                        $resetZoomModule.appendTo($togglerContainer);

                        $togglerContainer.appendTo(this.$container);

                        $resetZoomButton.bind('click', function () {

                            self.chart.zoomOut();

                        });

                        _pubSub.on('zoom:dateTimeChart', function () {

                            var timeID = window.setTimeout(function () {

                                if (self.chart.resetZoomButton) {
                                    $resetZoomButton.removeClass(selector.legendNav.resetZoomButton + '--disabled');
                                } else {
                                    $resetZoomButton.addClass(selector.legendNav.resetZoomButton + '--disabled');
                                }

                                window.clearTimeout(timeID);

                            }, 200);


                        });

                        $togglerContainer.on('click', function (e) {

                            var $item = $(e.target);

                            if ($item.hasClass(selector.legendNav.itemShowAll)) {

                                self.showAll();

                            } else if ($item.hasClass(selector.legendNav.itemHideAll)) {

                                self.hideAllSeries();

                            }

                        });

                    },

                    createLegendNav: function () {

                        var self = this;
                        var $legendNavItem;

                        $.each(this.series, function (i, legend) {

                            if (self.series[i].name !== 'custom') {
                                 
                                $legendNavItem = $('<a href="javascript:void(0)"><span><span class="' + selector.legendNav.itemTitle + '">' + legend.name + '</span><span class="' + selector.legendNav.iconClass + '"></span></span></a>').addClass(selector.legendNav.button + ' ' + selector.legendNav.iconPrefix + legend.name.toLowerCase() || 'default');
                                self.$legendNav.append($legendNavItem);

                            }

                        });

                    },

                    insertLegendNav: function () {
                        this.$legendNav.prependTo(this.$container);
                        this.$container.insertAfter($(this.container).parent());
                    }

                };

                return new LegendNav(chart, allSwitch);

            }

        };

    } (jQuery));

    DNHC.bootstrap();

} ());

