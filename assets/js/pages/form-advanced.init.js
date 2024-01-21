/*
Template Name: Simple - Responsive Tailwind CSS Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form advanced init js
*/

import 'selectize';
import 'selectize/dist/css/selectize.css';
import select2 from 'select2';
select2();
import 'select2/dist/css/select2.css'
import Switchery from 'mohithg-switchery';

import 'mohithg-switchery/dist/switchery.css'


!function($) {
    "use strict";

    var FormAdvanced = function() {};

    //initializing tooltip
    FormAdvanced.prototype.initSelect2 = function() {
        // Select2
        $('[data-toggle="select2"]').select2();
    },


    //initializing Custom Select
    FormAdvanced.prototype.initSelectize = function() {
        $('#selectize-tags').selectize({
            persist: false,
            createOnBlur: true,
            create: true
        });
        $('#selectize-select').selectize({
            create: true,
            sortField: {
                field: 'text',
                direction: 'asc'
            },
            dropdownParent: 'body'
        });
        $('#selectize-maximum').selectize({
            maxItems: 3
        });
        $('#selectize-links').selectize({
            theme: 'links',
            maxItems: null,
            valueField: 'id',
            searchField: 'title',
            options: [
                {id: 1, title: 'Coderthemes', url: 'https://coderthemes.com/'},
                {id: 2, title: 'Google', url: 'http://google.com'},
                {id: 3, title: 'Yahoo', url: 'http://yahoo.com'},
            ],
            render: {
                option: function(data, escape) {
                    return '<div class="option">' +
                            '<span class="title">' + escape(data.title) + '</span>' +
                            '<span class="url">' + escape(data.url) + '</span>' +
                        '</div>';
                },
                item: function(data, escape) {
                    return '<div class="item"><a href="' + escape(data.url) + '">' + escape(data.title) + '</a></div>';
                }
            },
            create: function(input) {
                return {
                    id: 0,
                    title: input,
                    url: '#'
                };
            }
        });
        $('#selectize-confirm').selectize({
            delimiter: ',',
            persist: false,
            onDelete: function(values) {
                return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
            }
        });
        $('#selectize-optgroup').selectize({
            sortField: 'text'
        });
        $('#selectize-programmatic').selectize({
            options: [
                {class: 'mammal', value: "dog", name: "Dog" },
                {class: 'mammal', value: "cat", name: "Cat" },
                {class: 'mammal', value: "horse", name: "Horse" },
                {class: 'mammal', value: "kangaroo", name: "Kangaroo" },
                {class: 'bird', value: 'duck', name: 'Duck'},
                {class: 'bird', value: 'chicken', name: 'Chicken'},
                {class: 'bird', value: 'ostrich', name: 'Ostrich'},
                {class: 'bird', value: 'seagull', name: 'Seagull'},
                {class: 'reptile', value: 'snake', name: 'Snake'},
                {class: 'reptile', value: 'lizard', name: 'Lizard'},
                {class: 'reptile', value: 'alligator', name: 'Alligator'},
                {class: 'reptile', value: 'turtle', name: 'Turtle'}
            ],
            optgroups: [
                {value: 'mammal', label: 'Mammal', label_scientific: 'Mammalia'},
                {value: 'bird', label: 'Bird', label_scientific: 'Aves'},
                {value: 'reptile', label: 'Reptile', label_scientific: 'Reptilia'}
            ],
            optgroupField: 'class',
            labelField: 'name',
            searchField: ['name'],
            render: {
                optgroup_header: function(data, escape) {
                    return '<div class="optgroup-header">' + escape(data.label) + ' <span class="scientific">(' + escape(data.label_scientific) + ')</span></div>';
                }
            }
        });

        $("#selectize-optgroup-column").selectize({
            options: [
                {id: 'avenger', make: 'dodge', model: 'Avenger'},
                {id: 'caliber', make: 'dodge', model: 'Caliber'},
                {id: 'caravan-grand-passenger', make: 'dodge', model: 'Caravan Grand Passenger'},
                {id: 'challenger', make: 'dodge', model: 'Challenger'},
                {id: 'ram-1500', make: 'dodge', model: 'Ram 1500'},
                {id: 'viper', make: 'dodge', model: 'Viper'},
                {id: 'a3', make: 'audi', model: 'A3'},
                {id: 'a6', make: 'audi', model: 'A6'},
                {id: 'r8', make: 'audi', model: 'R8'},
                {id: 'rs-4', make: 'audi', model: 'RS 4'},
                {id: 's4', make: 'audi', model: 'S4'},
                {id: 's8', make: 'audi', model: 'S8'},
                {id: 'tt', make: 'audi', model: 'TT'},
                {id: 'avalanche', make: 'chevrolet', model: 'Avalanche'},
                {id: 'aveo', make: 'chevrolet', model: 'Aveo'},
                {id: 'cobalt', make: 'chevrolet', model: 'Cobalt'},
                {id: 'silverado', make: 'chevrolet', model: 'Silverado'},
                {id: 'suburban', make: 'chevrolet', model: 'Suburban'},
                {id: 'tahoe', make: 'chevrolet', model: 'Tahoe'},
                {id: 'trail-blazer', make: 'chevrolet', model: 'TrailBlazer'},
            ],
            optgroups: [
                {$order: 3, id: 'dodge', name: 'Dodge'},
                {$order: 2, id: 'audi', name: 'Audi'},
                {$order: 1, id: 'chevrolet', name: 'Chevrolet'}
            ],
            labelField: 'model',
            valueField: 'id',
            optgroupField: 'make',
            optgroupLabelField: 'name',
            optgroupValueField: 'id',
            lockOptgroupOrder: true,
            searchField: ['model'],
            plugins: ['optgroup_columns'],
            openOnFocus: false
        });

        $('.selectize-close-btn').selectize({
            plugins: ['remove_button'],
            persist: false,
            create: true,
            render: {
                item: function(data, escape) {
                    return '<div>"' + escape(data.text) + '"</div>';
                }
            },
            onDelete: function(values) {
                return confirm(values.length > 1 ? 'Are you sure you want to remove these ' + values.length + ' items?' : 'Are you sure you want to remove "' + values[0] + '"?');
            }
        });

        $('.selectize-drop-header').selectize({
            sortField: 'text',
            hideSelected: false,
            plugins: {
                'dropdown_header': {
                    title: 'Language'
                }
            }
        })
    },

    //initializing Slimscroll
    FormAdvanced.prototype.initSwitchery = function() {



        $('[data-plugin="switchery"]').each(function (idx, obj) {
            new Switchery(obj, $(obj).data());
        });

    },

    //initilizing
    FormAdvanced.prototype.init = function() {
        var $this = this;
        this.initSelect2(),
        this.initSelectize(),
        this.initSwitchery(),


        //Removing error from selectize
        window.addEventListener("resize", function(){
            var elements =  document.body.querySelectorAll('span');
            var element = elements[elements.length-1];
            if(element.style.top=="-99999px")
                element.remove();
        });



    },

    $.FormAdvanced = new FormAdvanced, $.FormAdvanced.Constructor = FormAdvanced

}(window.jQuery),
    //initializing main application module
    function ($) {
        "use strict";
        $.FormAdvanced.init();
    }(window.jQuery);
