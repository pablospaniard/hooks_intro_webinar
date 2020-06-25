//useState
const [state, setState] = useState(initialState)

//----------

//useEffect
useEffect(doSomethingHere)

//ComponentDidMount
useEffect(() => {
    //do what need to be done here
}, [])

//ShoudlComponentUpdate
const { value } = props
useEffect(() => {
    //do what need to be done here
}, [value])

//WillComponentUnmount
useEffect(() => {
    effect
    return () => {
        //do what need to be done here
    }
}, [])

//----------

//useContext
const value = useContext(MyContext)
//it is equal to static contextType = MyContext in Class component
