import React,{useState} from 'react';
import './Modal.css';
const Modal=()=>{

    const [modal,setModal]=useState(false);

return (
<div>
    <button onClick={()=>setModal(!modal)}>Open</button>
    
    {modal && (
        <div className='modal'>
            <div onClick={()=>setModal(!modal)} className='overlay'></div>
            {/**Overlay */}
            <div className='absolute left-[50%] top-[40%] transform translate-x-[-50%] translate-y-[-50%] bg-gray-300 pt-14 pr-28 leading-normal rounded-md max-w-600 min-w-300'>
            <div className='border-4 border-transparent border-b-indigo-500'>
            <h1 className=''>Hello Modal</h1>
            </div>
            
                <p>my name is goku, what is your name? tell me please</p>

                <button className='absolute top-[10px] right-[10px] pr-5' onClick={()=>setModal(!modal)}>Close</button>
            </div>
        </div>
    )}
</div>
);
}

export default Modal;