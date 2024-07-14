const element = (
  //   Write your code here
  <div className='bg-container'>
    <h1 id='heading'>Super Over League</h1>
    <div className='image-container'>
      <img
        className='images'
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
      />
      <img
        className='images'
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
