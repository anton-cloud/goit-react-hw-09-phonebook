const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getMail = (state) => state.auth.user.email;
const getError = (state) => state.auth.error;
const getName = (state) => state.auth.user.name;

export default { getIsAuthenticated, getMail, getError, getName };
