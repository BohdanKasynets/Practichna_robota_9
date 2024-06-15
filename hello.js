const jsonStructure = {
    "name": "root",
    "children": [
        {
            "name": "child1",
            "children": [
                {
                    "name": "child1.1",
                    "children": []
                },
                {
                    "name": "child1.2",
                    "children": [
                        {
                            "name": "child1.2.1",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "child2",
            "children": []
        }
    ]
};

function recursivePrint(node, indent = '') {
    console.log(indent + node.name);
    if (node.children) {
        node.children.forEach(child => recursivePrint(child, indent + '  '));
    }
}

recursivePrint(jsonStructure);
