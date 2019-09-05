import React from 'react';

class FormAlgo extends React.Component {
  state = {
    input: null,
    countAmount: 0,
    array: [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 
    13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 
    68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 
    85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 
    46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 
    64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 
    54, 84, 34, 53, 78, 40, 14, 5
    ]
  }
   

handleSubmit = (event) => {
  event.preventDefault();
  let input = event.target['user-input'].value
  //console.log(input)
  let count = 1;
  let start;
  let end;
  let countAmount = this.binarySearch([...this.state.array], input, start, end, count)
    this.setState({
      input: input,
      countAmount: countAmount
    })
    event.target['user-input'].value = '';
  }


  binarySearch = (array, input, start, end, count) => {

    let sortedArr = array.sort((a, b) => a - b);
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
  
    //base case
    if (start > end) {
      return `Try again, number invalid.${count}`;
    }
  
    //split array in half
    const index = Math.floor((start + end) / 2);
    const item = sortedArr[index];
  
    if (item == input) {
      return `Number not found in dataset. Tried ${count} times before value was not found`;
    }
    else if (item < input) {
      ++count;
      return this.binarySearch(sortedArr, input, index + 1, end, count);
    }
    else if (item > input) {
      ++count;
      return this.binarySearch(sortedArr, input, start, index - 1, count);
    }
  }
  

  render() {
    return (
    <span>
      <div className='container'>
        <form onSubmit = {this.handleSubmit}>
          Binary Search:<br/>
          <input type='text' name='user-input' placeholder='example 54'/>
          <button type='submit' value='Submit'>
            Submit
          </button>
        </form>
        <p>{this.state.countAmount} tries to reach the result</p>
      </div>
    </span>

    )
  }

}

export default FormAlgo;