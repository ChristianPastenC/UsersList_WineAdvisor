import { useState } from 'react';


const useModalControl = () => {
    const [showModal, setShowModal] = useState(false);

    return {
        showModal, setShowModal,
    }
}

export default useModalControl;