import ReduxToastr from 'react-redux-toastr'

const Toastr = () => {
  return <div>
    
    <ReduxToastr
      timeOut={2000}
      newestOnTop={false}
      position='top-right'
      preventDuplicates
      transitionIn='fadeIn'
      transitionOut='fadeOut'
      progressBar
      closeOnToastrClick />
  
  </div>
}

export default Toastr