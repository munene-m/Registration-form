const signupForm = document.getElementById('signupForm')
const submitBtn  = document.getElementById('signupBtn')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let birthDay = document.getElementById('birthDay').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value
    let error = document.getElementById('password-error')
    let confirmError =  document.getElementById('confirm-password-error')

    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('birthDay', birthDay)

    if (password === confirmPassword) {
        localStorage.setItem('password', password)
        localStorage.setItem('confirmPassword', confirmPassword)        
    } else {
        error.innerHTML = 'The passwords do not match'
        confirmError.innerHTML = 'The passwords do not match'
    }
    setTimeout(() => {
        signupForm.reset()
    },1000)

})

