const debuggingMode = {
  headless: false,
  slowMo: 250,
  devtools: true
};

export const isDebugging = () => {
  return process.env.NODE_ENV === 'debug' ? debuggingMode : {};
};
