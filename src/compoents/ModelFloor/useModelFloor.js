import { useEffect, useRef } from "react"

export const useModelFloor = () => {
    const modelRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            console.log(modelRef)
        }, 1000);

    }, [modelRef]);
    return {
        modelRef
    }
}
