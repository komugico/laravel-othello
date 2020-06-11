export function getValueById(id) {
    let val = null;
    if (document.getElementById(id) != null) {
        val = document.getElementById(id).textContent;
    }
    return val;
}