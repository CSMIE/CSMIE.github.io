
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        contentHeight: 'auto',
        initialView: 'timeGridWeek',
        nowIndicator: true,
        headerToolbar:{
            start: 'dayGridMonth timeGridWeek', // will normally be on the left. if RTL, will be on the right
            center: 'title',
            end: 'today prev,next'
        },
        slotMinTime: '06:00:00',
        slotMaxTime: '23:30:00',
        events: {
            url: 'https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/1dea8a1c-7412-47d4-b59e-7b93bfe775ee/cid-8A6979840DDBECE9/calendar.ics',
            format: 'ics'
        }
    });
    calendar.render();
    calendar.refetchEvents()
});

