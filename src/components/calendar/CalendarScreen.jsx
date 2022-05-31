import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import addHours from 'date-fns/addHours';
import es from 'date-fns/locale/es';

import Appbar from '../ui/Appbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import CalendarModal from './CalendarModal';

const locales = {
  es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CalendarScreen() {
  return (
    <div className="calendar__container">
      <Appbar />
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
      />
      <CalendarModal />
    </div>
  );
}

export default CalendarScreen;
