// 1. Pending 2. Resolve 3. Reject

const willMarry = true

function pormiseOne () {
    const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (willMarry) {
            resolve("Success")
        } else {
            reject("Failed")
        }
    }, 2000)
})
return myPromise;
}

pormiseOne().then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})