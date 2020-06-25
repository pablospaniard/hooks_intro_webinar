// ------------
// First render
// ------------
useState('Mary') // 1. Initialize the name state variable with 'Mary'
useEffect(persistForm) // 2. Add an effect for persisting the form
useState('Poppins') // 3. Initialize the surname state variable with 'Poppins'

// -------------
// Second render
// -------------
useState('Mary') // 1. Read the name state variable (argument is ignored)
useEffect(persistForm) // 2. Replace the effect for persisting the form
useState('Poppins') // 3. Read the surname state variable (argument is ignored)

// -------------
// 🔴 We're breaking the first rule by using a Hook in a condition
// -------------

if (name !== '') {
    useEffect(function persistForm() {
        localStorage.setItem('formData', name)
    })
}

// -------------
// Third render
// -------------
useState('Mary') // 1. Read the name state variable (argument is ignored)
// useEffect(persistForm)  // 🔴 This Hook was skipped!
useState('Poppins') // 🔴 2 (but was 3). Fail to read the surname state variable

// -------------
// 👍 We're not breaking the first rule anymore
// -------------
useEffect(function persistForm() {
    if (name !== '') {
        localStorage.setItem('formData', name)
    }
})
