# Asset Loading and Resource Management

We need a resource manager. It's responsibility will be to load resources at runtime given some resource database and references to resources within said database.

Our resource manager must have functions to load different types of resources, including, but not limited to:

- Models (collections of meshes, textures, materials)
- Meshes
- Textures
- Materials

Resources are characterized by the fact that they should be loaded once and referenced in objects that require them. A resource manager's job is to load the asset from a URL when it's needed and keep a reference to the generated resource to return upon subsequent requests for the same resource URL.

## User Story

As a user of the renderer, I want to be able to get a model from the Resource Manager in one method call, like this:

```js
ResourceManager.get<Model>('assets/Rayman/model.json');
```

It should return me a fully-loaded `Model` object.

Because `Model`s are composite resources, they require meshes, textures, and materials to be loaded and referenced inside them. If I just want a texture, I should be able to load it like so:

```js
ResourceManager.get<Texture>('assets/Rayman/albedo.png')
```
