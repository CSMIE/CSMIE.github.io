const calendarEl = document.getElementById('calendar')
var calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, iCalendarPlugin],
  events: {
    url: 'https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/1dea8a1c-7412-47d4-b59e-7b93bfe775ee/cid-8A6979840DDBECE9/calendar.ics',
    format: 'ics'
  }
})

calendar.render()
calendar.refetchEvents()