export const todoService = async (payload) => {
    try {
        const data = [
            {
                id: "dssasadsdsa",
                children: "this is a testing message",
                checked: true
            },
            {
                id: "dssasadsdsa",
                children: "this is a testing message",
                checked: true
            },
            {
                id: "dssasadsdsa",
                children: "this is a testing message",
                checked: false
            },
            {
                id: "dssasadsdsa",
                children: "this is a testing message",
                checked: true
            },
            {
                id: "dssasadsdsa",
                children: "this is a testing message",
                checked: false
            }
        ]
        return data
    } catch (error) {
        throw new Error(error)
    }
}