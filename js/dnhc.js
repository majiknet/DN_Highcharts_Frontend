/*global Highcharts, jQuery, $*/

//documentReady(function() {



(function () {

   

    // minimal publish subscribe solution
    var _pubSub = $({});
    
    var isTouchDevice = function () {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    };
    
    dateTimeChartData = this.dateTimeChartData;

    Highcharts.theme = {
        chart: {
            marginTop: 40,
            marginRight: 30,
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
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
        },

        yAxis: {
            gridLineColor: '#aaa'
        },
        xAxis: {
            lineColor: '#666',
            tickColor: '#666'
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
            type:'line',
            zoomType: 'x',
            events: {
                load: function() {
                    _pubSub.trigger('loaded:dateTimeChart', this);
                },

                selection: function() {
                    _pubSub.trigger('zoom:dateTimeChart');
                }
            }
        },

        title: {
            text: 'Partisympatier 1979-2013',
            align: 'left'
        },

        tooltip: {
            backgroundColor: 'rgba(255,255,255,.7)',
            borderColor: '#999',
            borderRadius: 0,
            borderWidth: 1,
            shadow: false,
            formatter: function() {
                /*
                if (this.series.name === 'custom') {
                    return Highcharts.dateFormat('%b %Y', new Date(this.x)) + '<br /><br />' + this.point.text;
                } else {
                    var pointText = '';

                    if (this.point.text) {
                        pointText = this.point.text;
                    }

                    
                }
                */
                return Highcharts.dateFormat('%b %Y', new Date(this.x)) + '<br /><b> ' + this.y + '%</b><br />';
            }
        },

        xAxis: {
            type: 'datetime',
            minRange: 10368000000,
            minTickInterval: 2592000000,
            tickLength: 10,
            maxZoom: 24 * 3600 * 1000,
            labels: {
                align: 'center',
                y: 25
            },
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%e. %b',
                week: '%e. %b',
                month: '%b %Y',
                year: '%Y'
            },
            plotLines: [
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1979, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1982, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1985, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1988, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1991, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1994, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(1998, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(2002, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(2006, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            },
            {
                color: '#666',
                dashStyle: 'shortDot',
                width: 1,
                value: Date.UTC(2010, 8, 1),
                label: {
                    verticalAlign: 'top',
                    textAlign: 'left',
                    y: 10
                }
            }
            ]
        },

        yAxis: {
            tickPositions: [0, 4, 20, 40, 60],
            opposite: true,
            title: null,
            min: 0,
            max: 60,
            plotBands: {
                from: 0,
                to: 4
                
            },
            labels: {
                format: '{value} %',
                x: 25
            }
        },

        credits: {
            enabled: false
        },

        plotOptions: {
            series: {
                pointStart: Date.UTC(1979, 8, 1),
                showInLegend: false,
                lineWidth: 2.5,
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

    //var dateTimeChartData = dateTimeChartData;
    var dateTimeChartHappeningsData = [
        
        {
            name: 'custom', y: 55, x: Date.UTC(1979, 8, 1), text: 'De tre borgerliga partierna vinner med minsta möjliga marginal.<br />Moderaterna stärks på Folkpartiets och Centerpartiets bekostnad.'
        },
        {
            y: 55, x: Date.UTC(1982, 8, 1), text: 'Socialdemokraterna tillbaka vid makten efter sex år i opposition.<br />Moderaterna etablerar sig på allvar som största borgerliga parti.'
        },
        {
            y: 55, x: Date.UTC(1985, 8, 1), text: 'Socialdemokraterna och Olof Palme får förnyat förtroende.<br />Alf Svensson (KD) kommer in i riksdagen efter valteknisk samverkan med Centerpartiet.<br />Folkpartiet gör ett succéval.'
        },
        {
            y: 55, x: Date.UTC(1988, 8, 1), text: 'Socialdemokraterna, nu ledda av Ingvar Carlsson, vinner på nytt.<br />Miljöpartiet kommer in i riksdagen för första gången.'
        },
        {
            y: 55, x: Date.UTC(1991, 8, 1), text: 'Maktskifte. KD kommer in i riksdagen av egen kraft och ingår i en borgerlig fyrpartiregering.<br />Ny Demokrati kommer in i riksdagen och blir vågmästare.<br />S går under 40 procent och MP åker ur. '
        },
        {
            y: 55, x: Date.UTC(1994, 8, 1), text: 'Socialdemokraterna tillbaka vid makten efter ett av sina bästa val sedan Tage Erlanders dagar.<br />Ny Demokrati åker ur riksdagen och Miljöpartiet gör comeback.'
        },
        {
            y: 55, x: Date.UTC(1998, 8, 1), text: 'Göran Persson regerar vidare trots stort väljartapp. De stora vinnarna blir<br />Vänsterpartiet och Kristdemokraterna och deras respektive partiledare.'
        },
        {
            y: 55, x: Date.UTC(2002, 8, 1), text: 'Göran Persson gör sitt bästa val och bildar ny regering. Moderaterna gör sitt sämsta val på 30 år<br />och stora delar av den gamla ledningen tvingas bort. '
        },
        {
            y: 55, x: Date.UTC(2006, 8, 1), text: 'Alliansen vinner valet och Fredrik Reinfeldt blir ny statsminister.<br />Göran Persson aviserar sin avgång som S-ledare redan under valnatten. '
        },
        {
            y: 55, x: Date.UTC(2010, 8, 1), text: 'Alliansen vinner på nytt men får inte egen majoritet. Socialdemokraterna gör ett historiskt dåligt val.<br />Sverigedemokraterna blir riksdagens åttonde parti.'
        }
    ];
 
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
                    _this.MakeLegendNav(chart, true);
                    _this.addNewSeries(chart, dateTimeChartData);
                    _this.addNewSeries(chart, dateTimeChartHappeningsData);
                });

                this.createDateTimeChart();
            },

            createDateTimeChart: function () {

                dateTimeChartOptions.series = this.data;
                dateTimeChartOptions.chart.renderTo = 'dateTimeChart';

                // make a new chart instance
                this.dateTimeChart = new Highcharts.StockChart(dateTimeChartOptions);

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
                            symbol: 'url(/Documents/Charts/Images/Icons/val.png)',
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

//});