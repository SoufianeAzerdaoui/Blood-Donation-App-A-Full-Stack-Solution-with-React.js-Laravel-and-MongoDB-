// import React, { useState, useEffect, useRef } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { useNavigate } from 'react-router-dom';
// import Icon from '../../context/Animation - 1704422749481.json';
// import Lottie from 'lottie-react'




// export default function DonationAlertDialog({ onFirstTime }) {
//   const [open, setOpen] = useState(true);
//   const navigate = useNavigate();

//   const animationRef = useRef(null);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       handleClose(false);
//     }, 8000);

//     return () => clearTimeout(timeoutId);
//   }, []);

//   const handleClose = (agreed) => {
//     setOpen(false);

//     if (agreed) {
//       localStorage.setItem('firstTimeDonation', 'true');
//       navigate('/confirmationdonation');
//     }
//   };

//   return (

//     <div>
//       <Dialog
//         open={open}
//         onClose={() => handleClose(false)}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         style={{ marginBottom: '20rem' }}
//       >
//       <Lottie
//       className="w-[5rem]"
//       style={{ position: 'absolute', top: 0, left: 350, zIndex: 1  , width : '12rem' }}
//       lottieRef={animationRef}
//       animationData={Icon}
//     />
//         <DialogTitle id="alert-dialog-title">
//           {"Is this your first time for donating?"}
//         </DialogTitle>
//         <DialogContent>

//           <DialogContentText id="alert-dialog-description" >
//             Welcome! Is this your first time contributing to our cause through a donation?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => handleClose(false)}>Disagree</Button>
//           <Button onClick={() => handleClose(true)} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import Icon from '../../context/Animation - 1704422749481.json';
import Lottie from 'lottie-react';

export default function DonationAlertDialog({ onFirstTime }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const animationRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClose(false);
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = (agreed) => {
    setOpen(false);

    if (agreed) {
      localStorage.setItem('firstTimeDonation', 'true');
      navigate('/learn/first-time-give-blood');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ marginBottom: '20rem' }}
    >
      <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
        <Lottie
          className="w-[6rem]"
          style={{ display: 'block', margin: '0 auto', zIndex: 1 }}
          lottieRef={animationRef}
          animationData={Icon}
        />
        {"Is this your first time for donating?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" style={{ textAlign: 'center' }}>
          Welcome! Is this your first time contributing to our cause through a donation?
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={() => handleClose(false)}>NON</Button>
        <Button onClick={() => handleClose(true)} autoFocus>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  );
}
