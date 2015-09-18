/**
 * Created by Administrator on 2015/9/17.
 */

(function () {
    'use strict';
    var module = angular.module('StarterApp', ['ngMaterial']);
    module.config(function ($mdDateLocaleProvider) {
        $mdDateLocaleProvider.days = ['1', '2', '3', '4', '5', '6', '7'];
        $mdDateLocaleProvider.shortDays = ['日', '一', '二', '三', '四', '五', '六'];
        $mdDateLocaleProvider.months = ['一月', '二月', '三月', '四月', '五月', '六月','七月','八月','九月','十月','十一月','十二月'];
        $mdDateLocaleProvider.shortMonths = ['一月', '二月', '三月', '四月', '五月', '六月','七月','八月','九月','十月','十一月','十二月'];
        $mdDateLocaleProvider.msgOpenCalendar='选择日期';
        $mdDateLocaleProvider.msgCalendar='日期';

    });
    module.controller('date', function ($scope) {

    })
})();