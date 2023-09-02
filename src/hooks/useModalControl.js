




import { useState } from 'react';


const useModalControl = () => {
    const [showModal, setShowModal] = useState(false);
    const [usrData, setUsrData] = useState({});

    return {
        showModal, setShowModal,
        usrData, setUsrData,
    }
}

export default useModalControl;