import React, { useEffect, useState } from 'react'

const Count2 = () => {
    let [Count, setCount] = useState(60)
    let [Min, setMin] = useState(10)

    useEffect(() => {
        setTimeout(() => {
            setCount(Count - 1)
            if (Count == 0) {
                setMin(Min - 1)
                setCount(60)
                if (Min == 0) {
                    setCount(0)
                    setMin(0)
                    alert("Time Over..!!")
                }
            }
        }, 10)
    }, [Count])

    

    return (
        <div>
            <hr /><br /><br />
            <h4>Timer</h4>
            <h2>Timer = {Min} : {Count}</h2>
        </div>
    )
}

export default Count2