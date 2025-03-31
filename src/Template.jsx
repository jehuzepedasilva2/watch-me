import './template.css';

// we can make every number out of an 8

/**
 * 
 * for 1 - b, c
 * for 2 - a, b, d, e, g 
 * for 3 - a, b, c, d, g
 * for 4 - b, c, f, g
 * for 5 - a, c, d, f, g
 * for 6 - a, c, d, e, f, g
 * for 7 - a, b, c
 * for 8 - a, b, c, d, e, f, g
 * for 9 - a, b, c, d, f, g
 * for 0 - a, b, c, d, e, f
 * 
 */

const convert = {
  0: ['.barA', '.barB', '.barC', '.barD', '.barE', '.barF'],
  1: ['.barB', '.barC'],
  2: ['.barA', '.barB', '.barD', '.barE', '.barG'],
  3: ['.barA', '.barB', '.barC', '.barD', '.barG'],
  4: ['.barB', '.barC', '.barF', '.barG'],
  5: ['.barA', '.barC', '.barD', '.barF', '.barG'],
  6: ['.barA', '.barC', '.barD', '.barE', '.barF', '.barG'],
  7: ['.barA', '.barB', '.barC'],
  8: ['.barA', '.barB', '.barC', '.barD', '.barE', '.barF', '.barG'],
  9: ['.barA', '.barB', '.barC', '.barD', '.barF', '.barG']
};


function Pairs({ time }) {

  return (
    <div className='pair'>
      <div className="number number-left">
        <div className="bar barA"></div>
        <div className="bar barB"></div>
        <div className="bar barC"></div>
        <div className="bar barD"></div>
        <div className="bar barE"></div>
        <div className="bar barF"></div>
        <div className="bar barG"></div>
      </div>
      <div className="number number-right">
        <div className="bar barA"></div>
        <div className="bar barB"></div>
        <div className="bar barC"></div>
        <div className="bar barD"></div>
        <div className="bar barE"></div>
        <div className="bar barF"></div>
        <div className="bar barG"></div>
      </div>
    </div>
  );
}


export default function Template() {
  return (
    <Pairs />
  );
}