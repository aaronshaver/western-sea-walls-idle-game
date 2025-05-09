# Roadmap

- save system: defer until later (will have better idea of what data needs to be saved, etc.)

- No hover effect
- Clicking a tile immediately pauses the game + brings up a Vertically centered Bootstrap modal with Info + Actions
- Do a timed helper Bootstrap toast to tell people to click Tiles (https://getbootstrap.com/docs/5.3/components/toasts/)
- rendering: Batch the changes inside one requestAnimationFrame callback to avoid repeated reflows

- w basic wall builder
- 1/10/100/etc. wall, where number is the hit points
- e basic enemy
- c basic coin
- m M money towers
- b B bomb enemy tile type that does (larger than normal enemy) damage to all tiles around it
- L laser enemy tiles that shoot a powerful beam in a straight line (then maybe expire?)
