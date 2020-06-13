export function getValueById(id) {
    let val = null;
    if (document.getElementById(id) != null) {
        val = document.getElementById(id).textContent;
    }
    return val;
}

export function getValuesByName(name) {
    let vals = []
    if (document.getElementsByName(name).length > 0) {
        let tags = document.getElementsByName(name);
        for (let tag of tags) {
            vals.push(tags.textContent);
        }
    }
    return vals;
}

export function getArrayValuesByName(name) {
    let vals = []
    if (document.getElementsByName(name).length > 0) {
        let tags = document.getElementsByName(name);
        for (let tag of tags) {
            vals.push([]);
            for (let child of tag.children) {
                vals[vals.length - 1].push(child.textContent);
            }
        }
    }
    return vals;
}