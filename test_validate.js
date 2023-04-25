(async () => {
    const validator = require('html-validator')
    const options = {
      url: 'localhost:3000',
      format: 'text'
    }
    
    try {
      const result = await validator(options)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  })()