import * as ReactDOM from 'react-dom';

import './Model.css'

const Backdrop = props => {
    console.log("backdrop", props);
    return <div className="backdrop position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75" onClick={props.onCloseModel}></div>
}

const ModelOverlay = props => {
    return <div className="model position-fixed p-3 rounded-4 shadow-lg bg-light">
        <div className="content">{props.children}</div>
    </div>
}

const portalEl = document.getElementById('overlay');

const Model = props => {
    console.log("model", props);
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCloseModel={props.onClose} />, portalEl)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalEl)}
        </>
    )
}

export default Model;