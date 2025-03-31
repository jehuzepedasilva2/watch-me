import './clock.css';
import { 
  useState, 
  useEffect, 
  useRef,
} from 'react';

const convert = {
  0: ['barA', 'barB', 'barC', 'barD', 'barE', 'barF'],
  1: ['barB', 'barC'],
  2: ['barA', 'barB', 'barD', 'barE', 'barG'],
  3: ['barA', 'barB', 'barC', 'barD', 'barG'],
  4: ['barB', 'barC', 'barF', 'barG'],
  5: ['barA', 'barC', 'barD', 'barF', 'barG'],
  6: ['barA', 'barC', 'barD', 'barE', 'barF', 'barG'],
  7: ['barA', 'barB', 'barC'],
  8: ['barA', 'barB', 'barC', 'barD', 'barE', 'barF', 'barG'],
  9: ['barA', 'barB', 'barC', 'barD', 'barF', 'barG']
};


function turnAllOff(refs) {
  for (const side in refs.current) {
    for (const bar in refs.current[side]) {
      const barRef = refs.current[side][bar];
      if (barRef && barRef.classList) {
        barRef.classList.remove('on');
      }
    }
  }
}



function Hours({ time }) {

  const hourSegments = useRef({
    left: {
      barA: null,
      barB: null,
      barC: null,
      barD: null,
      barE: null,
      barF: null,
      barG: null,
    },
    right: {
      barA: null,
      barB: null,
      barC: null,
      barD: null,
      barE: null,
      barF: null,
      barG: null,
    }
  });
  

  let left = 0;
  let right = time;
  if (time > 9) {
    right = time % 10;
    left = Math.floor(time / 10) % 10;
  }

  turnAllOff(hourSegments);

  // left digit
  if (left !== null) {
    for (const bar of convert[left]) {
      if (hourSegments.current.left[bar]) {
        hourSegments.current.left[bar].classList.add('on');
      }
    }
  }

  if (right !== null) {
    for (const bar of convert[right]) {
      if (hourSegments.current.right[bar]) {
        hourSegments.current.right[bar].classList.add('on');
      }
    }
  }
  

  return (
    <div id='hours' className='number-pairs'>

      <div className="number hour-left">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
          <div
            key={`left-bar${letter}`}
            className={`bar bar${letter}`}
            ref={el => hourSegments.current.left[`bar${letter}`] = el}
          />
        ))}
      </div>
      
      <div className="number hour-right">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
          <div
            key={`right-bar${letter}`}
            className={`bar bar${letter}`}
            ref={el => hourSegments.current.right[`bar${letter}`] = el}
          />
        ))}
      </div>

    </div>
  );
}

function Minutes({ time }) {

  const minuteSegments = useRef({
    left: {
      barA: null,
      barB: null,
      barC: null,
      barD: null,
      barE: null,
      barF: null,
      barG: null,
    },
    right: {
      barA: null,
      barB: null,
      barC: null,
      barD: null,
      barE: null,
      barF: null,
      barG: null,
    }
  });

  let left = 0;
  let right = time;
  if (time > 9) {
    right = time % 10;
    left = Math.floor(time / 10) % 10;
  }

  turnAllOff(minuteSegments);

  if (left !== null) {
    for (const bar of convert[left]) {
      if (minuteSegments.current.left[bar]) {
        minuteSegments.current.left[bar].classList.add('on');
      }
    }
  }
  
  if (right !== null) {
    for (const bar of convert[right]) {
      if (minuteSegments.current.right[bar]) {
        minuteSegments.current.right[bar].classList.add('on');
      }
    }
  }

  return (
    <div id='minutes' className='number-pairs'>

      <div className="number minutes-left">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
          <div
            key={`left-bar${letter}`}
            className={`bar bar${letter}`}
            ref={el => minuteSegments.current.left[`bar${letter}`] = el}
          />
        ))}
      </div>
      
      <div className="number minutes-right">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
          <div
            key={`right-bar${letter}`}
            className={`bar bar${letter}`}
            ref={el => minuteSegments.current.right[`bar${letter}`] = el}
          />
        ))}
      </div>

    </div>
  );
}

function Seconds({ time }) {

  const secondSegments = useRef({
    left: {
      barA: null,
      barB: null,
      barC: null,
      barD: null,
      barE: null,
      barF: null,
      barG: null,
    },
    right: {
      barA: null,
      barB: null,
      barC: null,
      barD: null,
      barE: null,
      barF: null,
      barG: null,
    }
  });

  let left = 0;
  let right = time;
  if (time > 9) {
    right = time % 10;
    left = Math.floor(time / 10) % 10;
  }

  turnAllOff(secondSegments);

  if (left !== null) {
    for (const bar of convert[left]) {
      if (secondSegments.current.left[bar]) {
        secondSegments.current.left[bar].classList.add('on');
      }
    }
  }
  
  if (right !== null) {
    for (const bar of convert[right]) {
      if (secondSegments.current.right[bar]) {
        secondSegments.current.right[bar].classList.add('on');
      }
    }
  }

  return (
    <div id='seconds' className='number-pairs'>

      <div className="number seconds-left">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
          <div
            key={`left-bar${letter}`}
            className={`bar bar${letter}`}
            ref={el => secondSegments.current.left[`bar${letter}`] = el}
          />
        ))}
      </div>
      
      <div className="number seconds-right">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(letter => (
          <div
            key={`right-bar${letter}`}
            className={`bar bar${letter}`}
            ref={el => secondSegments.current.right[`bar${letter}`] = el}
          />
        ))}
      </div>

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
      <Hours time={time.getHours() == 0 ? 12 : time.getHours()} />
      <div className='separator'><p>:</p></div>
      <Minutes time={time.getMinutes()} />
      <div className='separator'><p>:</p></div>
      <Seconds time={time.getSeconds()} />
    </div>
  );
}