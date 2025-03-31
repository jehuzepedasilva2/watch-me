import './clock.css';
import Template from './Template.jsx';
import { 
  useState, 
  useEffect 
} from 'react';


function Hours({ hour }) {
  return (
    <div id='hours' className='number-pairs'>
      <Template hour={hour}/>
    </div>
  );
}

function Minutes() {
  return (
    <div id='minutes' className='number-pairs'>
      <Template />
    </div>
  );
}

function Seconds() {
  return (
    <div id='minutes' className='number-pairs'>
      <Template />
    </div>
  );
}

export default function Clock() {

  const [time, setTime] = useState(new Date());

  // get the time every second 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='clock'>
      <Hours hour={time.getHours()}/>
      <div className='separator'><p>:</p></div>
      <Minutes />
      <div className='separator'><p>:</p></div>
      <Seconds />
    </div>
  );
}