import React from 'react'

function FallBack() {
    function debounce(func, delay) {
        let timeoutId;
      
        return function () {
          const context = this;
      
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(context);
          }, delay);
        };
      }
      
      // Example usage:
      function handleInput() {
        console.log("Input event debounced");
      }
      
      const debouncedHandleInput = debounce(handleInput, 2000);
  return (
    <div>
        <input type="text" onClick={debouncedHandleInput}/>
    </div>
  )
}

export default FallBack