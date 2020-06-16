export const getDate = (creationDate) => {
    const date = new window.Date (creationDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return day + "/" + month + "/" + year;
}