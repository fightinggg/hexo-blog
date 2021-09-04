function parseYaml(blog) {
    if (blog.startsWith("---\n")) {
        i = 3
        while (i < blog.length && (blog.substring(i, i + 5) !== "\n---\n")) i++;
        head = {}
        console.log(blog.substring(4, i))
        blog.substring(4, i).split("\n").map(o => {
            index = o.indexOf(":")
            return {
                key: o.substring(0, index),
                value: o.substring(index, o.length)
            }
        }).forEach(o => head[o.key] = o.value)
        return {
            ...head,
            md: blog.substring(i + 5, blog.length)
        }
    }
}


function blogPrework(blog) {
    blog = parseYaml(blog)
    console.log(blog)
    return blog.md
}