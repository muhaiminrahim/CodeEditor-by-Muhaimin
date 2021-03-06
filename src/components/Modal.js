import React from 'react'
import ReactDOM from 'react-dom'

const modal_styles={
    position: 'fixed',
    top: '25%',
    left: '34%',
    transfrom: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const overlay_styles={
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    zIndex: 1000
}

export default function Modal({open, children, onClose}) {
    if (!open) return null

    return ReactDOM.createPortal (
        <>
            <div style={overlay_styles} />
            <div style={modal_styles}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

