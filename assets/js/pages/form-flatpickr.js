/**
 * Theme: Shreyu - Responsive Tailwind CSS 3 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Flat picker
*/

import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css'

flatpickr('#basic-datepicker');

flatpickr('#datetime-datepicker', {
    enableTime: true,
    dateFormat: "Y-m-d H:i"
});

flatpickr('#humanfd-datepicker', {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

flatpickr('#minmax-datepicker', {
    minDate: "2020-01",
    maxDate: "2020-03"
});

flatpickr('#disable-datepicker', {
    onReady: function () {
        this.jumpToDate("2025-01")
    },
    disable: ["2025-01-10", "2025-01-21", "2025-01-30", new Date(2025, 4, 9)],
    dateFormat: "Y-m-d",
});

flatpickr('#multiple-datepicker', {
    mode: "multiple",
    dateFormat: "Y-m-d"
});

flatpickr('#conjunction-datepicker', {
    mode: "multiple",
    dateFormat: "Y-m-d",
    conjunction: " :: "
});

flatpickr('#range-datepicker', {
    mode: "range"
});

flatpickr('#inline-datepicker', {
    inline: true
});

flatpickr('#basic-timepicker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i"
});

flatpickr('#fullhours-timepicker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

flatpickr('#minmax-timepicker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minDate: "16:00",
    maxDate: "22:30",
});

flatpickr('#preloading-timepicker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    defaultDate: "01:45"
});


