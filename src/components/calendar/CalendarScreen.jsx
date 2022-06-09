import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { useDispatch } from 'react-redux';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import es from 'date-fns/locale/es';

import { add } from 'date-fns';
import Appbar from '../ui/Appbar';
import CalendarModal from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

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

const dateNow = add(new Date(), { hours: 1 });

const events = [{
  title: 'Birthday',
  start: dateNow,
  end: add(dateNow, { hours: 1 }),
  bgcolor: '#fafafa',
  notes: 'Buy a gift',
  user: {
    _id: '1234',
    name: 'Fernando',
  },
}];

function CalendarScreen() {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onDoubleClickEvent = () => {
    dispatch(uiOpenModal());
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  return (
    <div className="calendar__container">
      <Appbar />
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={onSelectEvent}
        onDoubleClickEvent={onDoubleClickEvent}
        onView={onViewChange}
        defaultView={lastView}
      />
      <CalendarModal />
    </div>
  );
}

export default CalendarScreen;
