# Ideas

This doc keeps track of cool ideas to add to this project!

- App / General
  - Loading screen
- UI
  - Refactor to generic interface
  - Dock around viewport
    - Support resize handles
  - Windowed panels
  - Scene Hierarchy
    - Details panel
- Renderer
  - Use some kind of event listener system to alert UI of new frames
  - Shadows (probably shadow mapped)
  - Optimization
    - Instancing
  - Raycasting
  - Animations
- Game
  - Click to move / attack
  - Camera
    - Rotate around character while holding mouse button
  - Fix map/minimap being reflected


## Renderer

### Optimization

Rendering is a bit slow right now. I get ~10ms frame time on my RTX3080 + Ryzen 5 5600X, which isn't great. A normal laptop will probably get closer to ~100ms.

#### Instancing

According to Chrome's Performance tab in Developer Tools, we call TWGL's `setUniforms` a lot. We are rendering each meshNode individually right now, but we could probably render instances of meshes by doing some initial computation and groruping up front.

If we traverse the scene graph and create a data structure bucketed by model we can render all mesh nodes with the same mesh at the same time. We'll need to store the final transformation matrix alongside each instance to do this.

**Sources**:
1. https://webgl2fundamentals.org/webgl/lessons/webgl-instanced-drawing.html
1. https://en.wikipedia.org/wiki/Scene_graph
1. https://teamwisp.github.io/research/scene_graph.html
1. https://cseweb.ucsd.edu/classes/wi18/cse167-a/lec10.pdf
