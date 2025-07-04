
"use client"
import { useState, useEffect } from "react"

const usefetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<T | null>(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetchFunction()
            setLoading(false)
            setError(null)
            setData(res)
        } catch (error) {
            // @ts-ignore
            setError(error?.message || "error in fetchData")
        }
        finally {
            setLoading(false)
        }
    }

    const reset = () => {
        setError(null)
        setData(null)
        setLoading(false)
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData()
        }
    }, [])


    return { fetchData, data, error, loading, autoFetch, reset }
}

export default usefetch