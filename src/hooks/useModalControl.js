import { useState } from 'react';


const useModalControl = () => {
    const [showModal, setShowModal] = useState(false);
    const [usrData, setUsrData] = useState(null);

    return {
        showModal, setShowModal,
    }
}

export default useModalControl;