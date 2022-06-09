import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, Modal, Stack, TextareaAutosize, TextField, Typography,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { SaveOutlined } from '@mui/icons-material';
import { add } from 'date-fns';

import { uiCloseModal } from '../../actions/ui';

import style from '../../theme/style';
import useForm from '../../hooks/useForm';

const dateNow = add(new Date(), { hours: 1 });
const dateNowPlus = add(dateNow, { hours: 1 });

function CalendarModal() {
  const { showModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(dateNow);
  const [endDate, setEndDate] = useState(dateNowPlus);
  const [validTitle, setValidTitle] = useState(true);

  const [formValues, handleInputChange, formValueChange] = useForm({
    title: 'Nuevo evento',
    notes: '',
    start: dateNow,
    end: dateNowPlus,
  });

  const { title, notes } = formValues;

  const handleStartDateChange = (e) => {
    setStartDate(e);
    formValueChange(e, Object.keys(formValues)[2]);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e);
    formValueChange(e, Object.keys(formValues)[3]);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      return setValidTitle(false);
    }
    return null;
  };

  useEffect(() => {
    setEndDate(add(startDate, { hours: 1 }));
  }, [startDate]);

  return (
    <Modal
      open={showModal}
      onClose={() => dispatch(uiCloseModal())}
    >
      <Box sx={style.modalStyle}>
        <Box textAlign="center">
          <Typography sx={{ marginBottom: 2 }} variant="h5">New Event</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmitForm}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <Typography id="modal-picker-title" variant="h6" component="h2">
                Start date and time
              </Typography>
              <DateTimePicker
                label="Start"
                onChange={handleStartDateChange}
                value={startDate}
                inputFormat="dd/MM/yyyy hh:mm a"
                mask="__/__/____ __:__ _M"
                // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography id="modal-picker-title" variant="h6" component="h2">
                End date and time
              </Typography>
              <DateTimePicker
                label="End"
                onChange={handleEndDateChange}
                value={endDate}
                minDateTime={endDate}
                inputFormat="dd/MM/yyyy hh:mm a"
                mask="__/__/____ __:__ _M"
            // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Title and Notes
              </Typography>
              <TextField
                error={!validTitle}
                helperText={!validTitle ? 'Title is required.' : false}
                onFocus={() => setValidTitle(true)}
                onChange={handleInputChange}
                value={title}
                name="title"
                id="title"
                placeholder="Add Title"
                required
              />
              <TextareaAutosize placeholder="Notes" onChange={handleInputChange} value={notes} name="notes" />
              <Button type="submit" sx={{ width: '50%', alignSelf: 'center' }} variant="contained">
                <SaveOutlined />
                Save
              </Button>
            </Stack>
          </LocalizationProvider>
        </Box>
      </Box>
    </Modal>
  );
}

export default CalendarModal;
