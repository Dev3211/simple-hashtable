# What is a hashtable?

It is basically like the map function in Javascript, in other words it is like a data structure which stores keys/value pairs. It uses a hash function to compute an index(in an integer form) into an array in which an element will be inserted or searched and this is what exactly the script does.

# What functions does this script offer?

It uses functions like:

get: This function can be used to get a specific pair.

set: This function can be used to set a specific data in pairs.

delete: This function can be used to delete a specific pair.

clear: This function can be used to clear out the whole array which will also destroy the pairs.

overwrite: This function can be used to overwrite a specific pair.

# Example

```
var class = require('class.js');

let m = new class()

m.set('x', 1)
m.overwrite('x', 2)
m.get('x') //2
```
The hash table works pretty fast and does not go longer than even 1 second, it can handle lots of pairs so good luck :)

# Requirements

The only module you require is: string-hash
