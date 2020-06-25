// ------------
// useReducer
// ------------
const [state, dispatch] = useReducer(reducer, initialArg, init)

//

// ------------
// useCallback
// ------------
const memoizedCallback = useCallback(() => {
    doSomething(a, b)
}, [a, b])

//

// ------------
// useMemo
// ------------
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])

//

// ------------
// useRef
// ------------
const ref = useRef(initialValue)
