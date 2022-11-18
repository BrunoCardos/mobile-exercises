import { Avatar, Modal, Typography } from "@mui/material"
import { deepOrange, green } from '@mui/material/colors';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import BackspaceIcon from '@mui/icons-material/Backspace';
import './Dial.css';
import { useState } from "react";
import { Box } from "@mui/system";
import LinearColor from "../../Components/linearColor/LinearColor";


function Dial(){

    const [display, setDisplay] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

    function del(){
        display.pop()
        setDisplay([...display])
    }

    let add = e => {

        display.push(e.target.textContent)
        setDisplay([...display])
    

    }

    return <>
        <div className="container">
        
            <div className="display">
                <div>
                    {display.map(task => <span>{task}</span> )}
                </div>
                <div >
                    < BackspaceIcon color='success' onClick={del} />
                </div>

             </div>

            <div className="flex">
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>1</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>2</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>3</Avatar>
            </div>
            <div className="flex">
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>4</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>5</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>6</Avatar>
            </div>
            <div className="flex">
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>7</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>8</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>9</Avatar>
            </div>
            <div className="flex">
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>*</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>0</Avatar>
                <Avatar onClick={(e)=> add(e)} sx={{ bgcolor: deepOrange[500] }}>#</Avatar>
            </div>
            <div className=" flex flex-one">
            <Avatar onClick={handleOpen} sx={{width: 50, height: 50, bgcolor: green[500] }}>
                <PhoneForwardedIcon />
            </Avatar>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box className='modal' sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Calling...
                        <LinearColor />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                       {display}
                    </Typography>
                </Box>
            </Modal>
            </div>
        </div>
    </>
}

export default Dial 