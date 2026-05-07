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




const getFromLocalStorage = () => {
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const email = localStorage.getItem("email");
    console.log(name, age, email);
}

const getFromSessionStorage = () => {
    const name = sessionStorage.getItem("name");
    const age = sessionStorage.getItem("age");
    const email = sessionStorage.getItem("email");
    console.log(name, age, email);
}




// For clear local storage and session storage we use localStorage.clear() and sessionStorage.clear()

function clearLocalStorage() {
    localStorage.clear();
}

function clearSessionStorage() {
    sessionStorage.clear();
}


// clear all local storage and session storage we use localStorage.clear() and sessionStorage.clear()
function clearAllLocalStorageAndSessionStorage() {
    localStorage.clear();
    sessionStorage.clear();
}
