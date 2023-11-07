const logRequestDetails = (req, res, next) => {
  const colors = {
    reset: '\x1b[0m',
    cyan: '\x1b[36m',
  };

  let logMessage;
  switch (req.method) {
    case 'GET':
      logMessage = `📗 ${colors.cyan}${req.method} request to ${req.path}${colors.reset}`;
      break;
    case 'POST':
      logMessage = `📘 ${colors.cyan}${req.method} request to ${req.path}${colors.reset}`;
      break;
    case 'PUT':
      logMessage = `📙 ${colors.cyan}${req.method} request to ${req.path}${colors.reset}`;
      break;
    case 'DELETE':
      logMessage = `📕 ${colors.cyan}${req.method} request to ${req.path}${colors.reset}`;
      break;
    default:
      logMessage = `📔 ${colors.cyan}${req.method} request to ${req.path}${colors.reset}`;
  }

  console.info(logMessage);
  next();
};

module.exports = { logRequestDetails };