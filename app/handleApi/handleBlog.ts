const fetchBlogs = async (id? : string) => {
    const url = id ? `http://localhost:8000/api/v1/blog/${id}` : 'http://localhost:8000/api/v1/blog/all-blogs';
    try {
        const res = await fetch( url , {
            method : "GET",
            headers : {
                "content-type" : "Application/json",
            },
            credentials : 'include'
        }
    )
    const data = await res.json()
    return data
    } catch (error) {
        // @ts-ignore
        console.log(error?.message)
    }
}


const fetchCategories = async () => {
    try {
        const url = 'http://localhost:8000/api/v1/category/get-all'
        const res = await fetch(url, {
            method : "GET",
            credentials : "include",
            headers : {
                "content-type" : "application/json"
            }
        })

        const result = await res.json()
        return result
    } catch (error) {
        // @ts-ignore
        console.log("error", error?.message)
    }
}

export {
    fetchBlogs,
    fetchCategories
}