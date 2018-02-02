import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './Backdrop.css';

const animationTiming = {
  enter: 300,
  exit: 200,
}

const backdrop = (props) => {
  // const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed']
  //
  // return <div className={cssClasses.join(' ')}></div>

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'BackdropOpen',
        exit: '',
        exitActive: 'BackdropClosed',
        appear: '',
        appearActive: '',
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className='Backdrop'></div>
    </CSSTransition>
  )
}

// const modal = (props) => {
//   const cssClasses = [
//     'Modal',
//   ]
//
//   return (
//     <CSSTransition
//       in={props.show}
//       timeout={animationTiming}
//       // classNames='fade-slide'
//       classNames={{
//         enter: '',
//         enterActive: 'ModalOpen',
//         exit: '',
//         exitActive: 'ModalClosed',
//         appear: '',
//         appearActive: '',
//       }}
//       mountOnEnter
//       unmountOnExit
//     >
//       <div className="Modal">
//         <h1>A Modal</h1>
//         <button className="Button" onClick={props.closed}>
//           Dismiss
//         </button>
//       </div>
//     </CSSTransition>
//   )

export default backdrop;
