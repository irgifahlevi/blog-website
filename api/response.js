export const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
      playLoad: {
        status_code: statusCode,
        data: data,
        message: message
      },
      pagination: {
        prev: '',
        next: '',
        max: ''
      }
    })
  }
  
export default response