export const formatDate = date => {
    const d = new Date(date)
    try {
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    } catch(e) {}
    return undefined
}