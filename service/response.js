function createResponse(statusCode, message, data) {
  return {
    message,
    data,
    isSuccess: statusCode === 200 ? true : false,
  };
}

module.exports = { createResponse };
