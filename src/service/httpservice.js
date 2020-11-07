export const checkLogin = (data) => {
    localStorage.setItem('userDtls',JSON.stringify(data));
    // base64
    // axios
    return true;
  };
