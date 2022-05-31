import React, { useState } from 'react';
import { Box, Modal, Typography } from '@mui/material';

import style from '../../theme/style';

function CalendarModal() {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={style.modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>

    </Modal>
  );
}

export default CalendarModal;
