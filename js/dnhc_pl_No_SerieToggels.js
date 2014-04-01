/*global Highcharts, jQuery, $*/

var DNHC;

(function () {
    'use strict';
    
    

    Highcharts.theme = {
        lang: {
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
                    console.log(selector.button + ' ' + selector.iconPrefix + legend.name.toLowerCase());
                    if (legend.name !== 'custom') {
                        $legendNavItem = $('<a href="javascript:void(0)">'+
                            '<span><span class="' + selector.itemTitle + '">' + legend.name + '</span><span class="' + selector.iconClass + '"></span></span>'+
                            '</a>').addClass(selector.button + ' ' + selector.iconPrefix + legend.name.toLowerCase() || 'default');
                        _this.$legendNav.append($legendNavItem);
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

        chartSettings.chart.renderTo = this.elID;

        // make a new chart instance
        this.chart = new Highcharts.Chart(chartSettings, function () {
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

