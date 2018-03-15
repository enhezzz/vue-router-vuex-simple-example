import items from '../data/items.json'
export function fetchItem(id){
    return new Promise((resolve,reject) => {
        resolve(item[id]);
    })
}