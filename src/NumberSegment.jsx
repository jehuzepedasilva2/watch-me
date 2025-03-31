import './number-segment.css'

// this file represents an individual number segment
// foundation for every number

export default function NumberSegment() {
  return (
    <div className='segment'>
      <div className='outer segment-top'></div>
      <div className='segment-line'></div>
      <div className='outer segment-bottom'></div>
    </div>
  );
}