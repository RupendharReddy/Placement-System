import * as React from 'react';
import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';
// import './styles.css';
const PopUps = () => {
  const anchor = React.useRef();
  const [show, setShow] = React.useState(false);
  const [animate, setAnimate] = React.useState(true);
  const [openDuration, setOpenDuration] = React.useState(300);
  const [closeDuration, setCloseDuration] = React.useState(300);
  return <div>
      <div className="example-config">
        <input id="animate" type="checkbox" className="k-checkbox k-checkbox-md k-rounded-md" checked={animate} onChange={() => setAnimate(!animate)} />
        <label htmlFor="animate" className="k-checkbox-label">
          Animate
        </label>
        <hr />
        <input id="openDuration" type="number" min="0" disabled={!animate} value={openDuration} onChange={event => setOpenDuration(event.target.value ? event.target.valueAsNumber : 0)} style={{
        width: '60px'
      }} />
        <label htmlFor="openDuration" className="k-label">
          &nbsp;Opening duration
        </label>
        &nbsp;
        <input id="closeDuration" type="number" min="0" disabled={!animate} value={closeDuration} onChange={event => setCloseDuration(event.target.value ? event.target.valueAsNumber : 0)} style={{
        width: '60px'
      }} />
        <label htmlFor="closeDuration">&nbsp;Closing duration</label>
        <hr />
      </div>
      <div ref={anchor}>
      <Button type="button" onClick={() => setShow(!show)} ref={anchor}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <Popup anchor={anchor.current} show={show} animate={animate ? {
        openDuration,
        closeDuration
      } : false} popupClass={'popup-content'}>
        <p style={{
          margin: '15px'
        }}>Popup content.</p>
      </Popup>
      </div>
    </div>;
};
export default PopUps;