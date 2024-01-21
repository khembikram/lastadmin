/**
* Theme: Simple - Tailwind HTML Admin Dashboard Template
* Author: coderthemes
* Module/App: Theme Config Js
*/

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'simplebar';
import 'preline';


class ThemeCustomizer {

    constructor() {
        this.html = document.getElementsByTagName('html')[0]
        this.config = {};
        this.defaultConfig = {};
    }

    initConfig() {
        this.setSwitchFromConfig();
    }

    initSidenav() {
        var self = this;
        var pageUrl = window.location.href.split(/[?#]/)[0];
        document.querySelectorAll('ul.menu a.menu-link').forEach((element) => {
            if (element.href === pageUrl) {
                element.classList.add('active');

                let parentMenu = element.parentElement.parentElement.parentElement;
                if (parentMenu && parentMenu.classList.contains('menu-item')) {
                    const collapseElement = parentMenu.querySelector('[data-hs-collapse]');
                    if (collapseElement) {
                        const nextE = collapseElement.nextElementSibling;
                        if (nextE) {
                            HSCollapse.show(nextE)
                        }
                    }

                }
            }
        })

        // Hide other collapse when click on collapse
        const allCollapse = document.querySelectorAll('ul.menu .sub-menu');
        allCollapse.forEach((element) => {
            element.addEventListener('open.hs.collapse', (evt) => {
                allCollapse.forEach((sElement) => {
                    if (sElement !== evt.target) {
                        HSCollapse.hide(sElement);
                    }
                })
            })
        })

        setTimeout(function () {
            var activatedItem = document.querySelector('ul.menu .active');
            if (activatedItem != null) {
                var simplebarContent = document.querySelector('.app-menu .simplebar-content-wrapper');
                var offset = activatedItem.offsetTop - 300;
                if (simplebarContent && offset > 100) {
                    scrollTo(simplebarContent, offset, 600);
                }
            }
        }, 200);

        // scrollTo (Sidenav Active Menu)
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        function scrollTo(element, to, duration) {
            var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
            var animateScroll = function () {
                currentTime += increment;
                var val = easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if (currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        }
    }

    reverseQuery(element, query) {
        while (element) {
            if (element.parentElement) {
                if (element.parentElement.querySelector(query) === element) return element
            }
            element = element.parentElement;
        }
        return null;
    }

    changeThemeDirection(direction) {
        this.config.direction = direction;
        this.html.setAttribute('dir', direction);
        this.setSwitchFromConfig();
    }

    changeThemeMode(color) {
        this.config.theme = color;
        this.html.setAttribute('data-mode', color);
        this.setSwitchFromConfig();
    }

    changeTopbarColor(color) {
        this.config.topbar.color = color;
        this.html.setAttribute('data-topbar-color', color);
        this.setSwitchFromConfig();
    }

    changeSidenavColor(color) {
        this.config.sidenav.color = color;
        this.html.setAttribute('data-sidenav-color', color);
        this.setSwitchFromConfig();
    }

    changeSidenavView(view, save = true) {
        this.html.setAttribute('data-sidenav-view', view);
        if (save) {
            this.config.sidenav.view = view;
            this.setSwitchFromConfig();
        }
    }

    resetTheme() {
        this.config = JSON.parse(JSON.stringify(this.defaultConfig));
        this.changeThemeDirection(this.config.direction);
        this.changeThemeMode(this.config.theme);
        this.changeTopbarColor(this.config.topbar.color);
        this.changeSidenavColor(this.config.sidenav.color);
        this.changeSidenavView(this.config.sidenav.view);
        this.adjustLayout();
    }

    initSwitchListener() {
        var self = this;

        //  Light Dark Button
        var themeColorToggle = document.getElementById('light-dark-mode');
        if (themeColorToggle) {
            themeColorToggle.addEventListener('click', function (e) {

                if (self.config.theme === 'light') {
                    self.changeThemeMode('dark');
                } else {
                    self.changeThemeMode('light');
                }
            });
        }

        // Menu Toggle Button ( Placed in Topbar)
        var menuToggleBtn = document.querySelector('#button-toggle-menu');
        if (menuToggleBtn) {
            menuToggleBtn.addEventListener('click', function () {
                var configView = self.config.sidenav.view;
                var view = self.html.getAttribute('data-sidenav-view', configView);

                if (view === 'mobile') {
                    self.showBackdrop();
                    self.html.classList.toggle('sidenav-enable');
                } else {
                    if (configView == 'hidden') {
                        if (view === 'hidden') {
                            self.changeSidenavView(configView == 'hidden' ? 'default' : configView, false);
                        } else {
                            self.changeSidenavView('hidden', false);
                        }
                    } else {
                        if (view === 'condensed') {
                            self.changeSidenavView(configView == 'condensed' ? 'default' : configView, false);
                        } else {
                            self.changeSidenavView('condensed', false);
                        }
                    }
                }
            });
        }

        document.querySelectorAll('input[name=dir]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeThemeDirection(element.value);
            })
        });

        document.querySelectorAll('input[name=data-mode]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeThemeMode(element.value);
            })
        });

        document.querySelectorAll('input[name=data-topbar-color]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeTopbarColor(element.value);
            })
        });

        document.querySelectorAll('input[name=data-sidenav-color]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeSidenavColor(element.value);
            })
        });

        document.querySelectorAll('input[name=data-sidenav-view]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeSidenavView(element.value);
            })
        });

        // Config Reset Button
        var resetBtn = document.querySelector('#reset-layout')
        if (resetBtn) {
            resetBtn.addEventListener('click', function (e) {
                self.resetTheme();
            });
        }
    }

    showBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.id = 'backdrop';
        backdrop.classList = 'transition-all fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80';
        document.body.appendChild(backdrop);

        if (document.getElementsByTagName('html')[0]) {
            document.body.style.overflow = "hidden";
            if (window.innerWidth > 1140) {
                document.body.style.paddingRight = "15px";
            }
        }

        const self = this
        backdrop.addEventListener('click', function (e) {
            self.html.classList.remove('sidenav-enable');
            self.hideBackdrop();
        })
    }

    hideBackdrop() {
        var backdrop = document.getElementById('backdrop');
        if (backdrop) {
            document.body.removeChild(backdrop);
            document.body.style.overflow = null;
            document.body.style.paddingRight = null;
        }
    }

    initWindowSize() {
        var self = this;
        window.addEventListener('resize', function (e) {
            self.adjustLayout();
        })
    }

    adjustLayout() {
        var self = this;

        if (window.innerWidth <= 1140) {
            self.changeSidenavView('mobile', false);
        } else {
            self.changeSidenavView(self.config.sidenav.view);
        }
    }

    setSwitchFromConfig() {

        sessionStorage.setItem('__SIMPLE_CONFIG__', JSON.stringify(this.config));
        // localStorage.setItem('__SIMPLE_CONFIG__', JSON.stringify(this.config));

        document.querySelectorAll('#theme-customization input[type=checkbox]').forEach(function (checkbox) {
            checkbox.checked = false;
        })

        var config = this.config;
        if (config) {
            var layoutDirectionSwitch = document.querySelector('input[type=checkbox][name=dir][value=' + config.direction + ']');
            var layoutModeSwitch = document.querySelector('input[type=checkbox][name=data-mode][value=' + config.theme + ']');
            var topbarColorSwitch = document.querySelector('input[type=checkbox][name=data-topbar-color][value=' + config.topbar.color + ']');
            var sidenavColorSwitch = document.querySelector('input[type=checkbox][name=data-sidenav-color][value=' + config.sidenav.color + ']');
            var sidenavViewSwitch = document.querySelector('input[type=checkbox][name=data-sidenav-view][value=' + config.sidenav.view + ']');

            if (layoutDirectionSwitch) layoutDirectionSwitch.checked = true;
            if (layoutModeSwitch) layoutModeSwitch.checked = true;
            if (topbarColorSwitch) topbarColorSwitch.checked = true;
            if (sidenavColorSwitch) sidenavColorSwitch.checked = true;
            if (sidenavViewSwitch) sidenavViewSwitch.checked = true;
        }
    }

    initAfter(){
        this.initConfig();
        this.initSidenav();
        this.initSwitchListener();
        this.initWindowSize();
        this.adjustLayout();
        this.setSwitchFromConfig();
    }

    init() {

        window.addEventListener('DOMContentLoaded', ()=>this.initAfter());

        var savedConfig = sessionStorage.getItem("__SIMPLE_CONFIG__");
        // var savedConfig = localStorage.getItem("__SIMPLE_CONFIG__");

        var defaultConfig = {
            direction: "ltr",
            theme: "light",
            topbar: {
                color: "light",
            },
            sidenav: {
                color: "light",
                view: "default"
            },
        };


        const html = document.getElementsByTagName("html")[0];

        let config = Object.assign(JSON.parse(JSON.stringify(defaultConfig)), {});

        config.direction = html.getAttribute("dir") || defaultConfig.direction;
        config.theme = html.getAttribute("data-mode") || defaultConfig.theme;
        config.topbar.color = html.getAttribute("data-topbar-color") || defaultConfig.topbar.color;
        config.sidenav.color = html.getAttribute("data-sidenav-color") || defaultConfig.sidenav.color;
        config.sidenav.view = html.getAttribute("data-sidenav-view") || defaultConfig.sidenav.view;

        this.defaultConfig = JSON.parse(JSON.stringify(config));

        if (savedConfig !== null) {
            config = JSON.parse(savedConfig);
        }

        this.config = config;

        if (config) {
            html.setAttribute("dir", config.direction);
            html.setAttribute("data-mode", config.theme);
            html.setAttribute("data-topbar-color", config.topbar.color);
            html.setAttribute("data-sidenav-color", config.sidenav.color);

            if (window.innerWidth <= 1140) {
                html.setAttribute("data-sidenav-view", "mobile");
            } else {
                html.setAttribute("data-sidenav-view", config.sidenav.view);
            }
        }
    }

}

new ThemeCustomizer().init();


