/*global Highcharts, jQuery, $*/

var DNHC;

(function () {
    'use strict';

    // Bool to check touch support
    // incase there is a need to serve different content
    // for touch/non-touch devices
    var isTouchDevice = function () {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    };

    // Base theme for all charts
    // can be overridden with the chart options object
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
            },
            events: {
                selection: function () {
                    $(this.container).trigger('zoom:dateTimeChart');
                }
            }
        },

        lang: {
            resetZoom: 'Zooma ut',
            resetZoomTitle: 'Zooma ut',
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
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

    // Initialize the base theme options
    Highcharts.setOptions(Highcharts.theme);

    var makeLegendNav = function (chart) {

        var selector = {
            legendNav: {
                legendNavContainer: 'dnhc_legend-nav__container',
                container:          'dnhc_legend-nav',
                button:             'dnhc_legend-nav__button',
                buttonInactive:     'dnhc_legend-nav__button__inactive',
                item:               'dnhc_legend-nav__button',
                itemShowAll:        'dnhc_legend-nav__button__show-all',
                itemHideAll:        'dnhc_legend-nav__button__hide-all',
                iconClass:          'dnhc_icon',
                iconPrefix:         'dnhc_icon--',
                iconAll:            'dnhc_icon--all',
                itemTitle:          'dnhc_legend-nav__button-title',
                togglerNav:         'dnhc_legend-nav__toggler',
                resetZoomButton:    'dnhc_legend-nav__reset-zoom-button',
                togglerModule:      'dnhc_legend-nav__module'
            }
        };

        var LegendNav = function (chart) {

            // requires chart object from highcharts.js
            this.chart = chart;
            this.container = chart.container;
            this.series = chart.series;

            this.init();

        };

        LegendNav.prototype = {

            init: function () {
                this.$container = $('<div class="' + selector.legendNav.legendNavContainer + '"></div>');
                this.$legendNav = $('<div class="' + selector.legendNav.container + '"></div>');
                this.$legendNav.on('click', '.' + selector.legendNav.button , $.proxy(this.toggleSeries, this));
                
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

                $(this.container).on('zoom:dateTimeChart', function () {

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

        return new LegendNav(chart);

    };


    DNHC = function ($chartEl, chartData, opts) {

        var _this = this;

        this.data = chartData;
        this.elID = $chartEl.attr('id');
        this.hasCustomNav = $chartEl.data('customNav');

        opts.series = this.data;

        if (!this.hasCustomNav) {
            opts.plotOptions.series.showInLegend = true;
        }

        opts.chart.renderTo = this.elID;

        // make a new chart instance
        this.chart = new Highcharts.Chart(opts, function () {
            if (_this.hasCustomNav) {
                makeLegendNav(this);
            }
        });

    };

}());


