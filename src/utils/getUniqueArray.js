function getUniqueArray(...arrays)
{
    let uniqueSet = new Set();
    for (let n=0; n<arrays.length; n++)
    {
        let arr=arrays[n];
        arr.map( item => uniqueSet.add(item));
    }
    return Array.from(uniqueSet);
}

export default getUniqueArray;