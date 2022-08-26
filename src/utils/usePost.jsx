import { useState } from "react"
import axios from "axios"

export const api_url = import.meta.env.VITE_API_URL

const usePost = url => {
    const [ isLoading, setIsLoading ] = useState(false)

    const execute = async payload => {

        setIsLoading(true)

        var config = {
            method: 'post',
            url: `${api_url}/${url}`,
            headers: { 'Content-Type': 'application/json' },
            data: payload
        }
        
        try {
            const { data, status } = await axios(config)
            return status === 200 && data
        } catch (err) {
            console.log(err.response)
            console.log(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { execute, isLoading }
}

export default usePost