const setLocalStorage = () => {
    localStorage.setItem("name", "Shariar");
    localStorage.setItem("age", "23");
    localStorage.setItem("email", "[EMAIL_ADDRESS]");
}

const setSessionStorage = () => {
    sessionStorage.setItem("name", "Shariar");
    sessionStorage.setItem("age", "23");
    sessionStorage.setItem("email", "[EMAIL_ADDRESS]");
}

const removeLocalStorage = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    localStorage.removeItem("email");
}

const removeSessionStorage = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("age");
    sessionStorage.removeItem("email");
}