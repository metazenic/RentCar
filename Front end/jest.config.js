module.exports = {   
  moduleNameMapper: {
   '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js', 
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"]
};
  
