/*global Highcharts, jQuery, $*/

var DNHC;
var _pubSub = $({});

var getPartiName = function(partiName)
{
    if(partiName.indexOf('kv') > -1 || partiName.indexOf('man') > -1)
    {
        return 'MP';
    }    
    else
    {
        return partiName.toUpperCase();
    }
    return '';
};

(function () {
    'use strict';
    


    var isTouchDevice = function () {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    };

    Highcharts.theme = {
        lang: {
            resetZoom: 'Zooma ut',
            resetZoomTitle: 'Zooma ut',
            months: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
        },
        title: {
            style: {
                color: '#000',
                font: '2.8em Georgia, serif'
            }
        }
    };
    Highcharts.setOptions(Highcharts.theme);

    function parseJsonDate(jsonDateString) {
        if (jsonDateString != null) {
            return new Date(parseInt(jsonDateString.replace('/Date(', '')));
        } else {
            return '';
        }
    }

    var hideZoomBar = function (chart) {
        chart.rangeSelector.zoomText.hide();
        $.each(chart.rangeSelector.buttons, function () {
            this.hide();
        });
        $(chart.rangeSelector.divRelative).hide();
    };

    var DNHCCustomLegends = function (chart) {

        var selector = {
            legendNavContainer: 'dnhc_legend-nav__container',
            legendNav:          'dnhc_legend-nav',
            button:             'dnhc_legend-nav__button',
            buttonInactive:     'dnhc_legend-nav__button__inactive',
            iconPrefix: 'dnhc_icon--',

            container: 'dnhc_legend-nav',
            item: 'dnhc_legend-nav__button',
            itemShowAll: 'dnhc_legend-nav__button__show-all',
            itemHideAll: 'dnhc_legend-nav__button__hide-all',
            iconClass: 'dnhc_icon',
            iconAll: 'dnhc_icon--all',
            itemTitle: 'dnhc_legend-nav__button-title',
            togglerNav: 'dnhc_legend-nav__toggler',
            resetZoomButton: 'dnhc_legend-nav__reset-zoom-button',
            togglerModule: 'dnhc_legend-nav__module'
        };

        var LegendNav = function (chart) {
            
            this.chart = chart;
            this.container = chart.container;
            this.series = chart.series;

            this.init();

        };

        // Custom legend nav Constructor Prototype
        LegendNav.prototype = {

            init: function () {
                this.$container = $('<div class="' + selector.legendNavContainer + '"></div>');
                this.$legendNav = $('<div class="' + selector.legendNav + '"></div>');
                this.$legendNav.on('click', '.' + selector.button , $.proxy(this.toggleSeries, this));
                
                this.createLegendNav();
                this.insertLegendNav();
            //    this.createTogglers();
            },

            toggleSeries: function (e) {
                var $navItem = $(e.target);
                var serie;

                if (!$navItem.hasClass(selector.button)) {
                    $navItem = $navItem.parents('.' + selector.button);
                }

                serie = this.series[$navItem.index()];

                if (serie.visible) {
                    serie.hide();
                } else {
                    serie.setVisible();
                }

                $navItem.toggleClass(selector.buttonInactive);
                
            },

            createLegendNav: function () {
                var _this = this;
                var $legendNavItem;
                $.each(this.series, function (i, legend) {
                    
                    if (legend.name !== 'custom' && legend.name.toLowerCase() !== 'navigator') {
                        $legendNavItem = $('<a href="javascript:void(0)">'+
                            '<span><span class="' + selector.itemTitle + '">' + getPartiName(legend.name) + '</span><span class="' + selector.iconClass + '"></span></span>'+
                            '</a>').addClass(selector.button + ' ' + selector.iconPrefix + legend.name.toLowerCase() || 'default');
                        _this.$legendNav.append($legendNavItem);
                    }
                });
            },

            insertLegendNav: function () {
                this.$legendNav.prependTo(this.$container);
                this.$container.insertAfter($(this.container).parent());
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

              //  if (!this.allSwitch) { return; }

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

                _pubSub.on('zoom:chart', function () {

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

            }

        };

        return new LegendNav(chart);

    };


    DNHC = function ($chartEl, chartData, chartSettings) {

        var _this = this;
        var obj;

        this.data = chartData;
        this.elID = $chartEl.attr('id');
        this.hasCustomNav = $chartEl.data('customNav');

        $.each(chartData, function (index) {
            obj = {};
            obj.name = chartData[index].name;
            obj.data = chartData[index].data;
            obj.color = chartData[index].color;
            //
            obj.pointStart = parseInt(chartData[index].pointStart.substr(6), 10);

            $.each(obj.data, function (j, item) {
                var dte = parseJsonDate(item[0]);
                var d = new Date(dte);
                var month = d.getMonth();
                var year = d.getFullYear();
               
                item[0] = Date.UTC(year, month, d.getDay());
            });
            chartSettings.series.push(obj);
        });
        if (this.hasCustomNav) {
            chartSettings.legend.enabled = false;
        }
        //   hideZoomBar(this);
        //chart.rangeSelector.zoomText.hide();
        chartSettings.chart.renderTo = this.elID;

        // make a new chart instance
        this.chart = new Highcharts.StockChart(chartSettings, function () {
            if (_this.hasCustomNav) {
                DNHCCustomLegends(this);
            }
        });

    };

    DNHC.prototype = {

        createDate: function (dateObject) {
            var d = new Date(dateObject);
            var month = d.getMonth();
            var year = d.getFullYear();
            var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
            var date = '';
            
            date = months[month] + ' ' + year;

            return date;
        },

        parseJsonDate: function(jsonDateString) {
            if (jsonDateString && typeof jsonDateString === 'string') {
                return new Date(parseInt(jsonDateString.replace('/Date(', '')));
            } else {
                return '';
            }
        },

        createDatesArray: function(categoriesData) {
            var freshDataArr = [];
            var _this = this;

            $.each(categoriesData, function (i, data) {
                var parsedJsonDate = _this.parseJsonDate(data);
                if (parsedJsonDate !== '') {
                    freshDataArr.push(
                        _this.createDate(parsedJsonDate)
                    );
                }
            });

            return freshDataArr;
        }

    };

}());



