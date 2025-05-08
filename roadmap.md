# Roadmap

- game.js class that takes arguments but has defaults for grid height/width, tick rate in ms, etc.
- game object contains everything else (grid, time speed, money) for easy clearing and saving of data
- save system: defer until later (will have better idea of what data needs to be saved, etc.)

- No hover effect
- Clicking a tile immediately pauses the game + brings up a Vertically centered Bootstrap modal with Info + Actions
- Do a timed helper toast to tell people to click Tiles (https://getbootstrap.com/docs/5.3/components/toasts/)

- ~ water
- w basic wall builder
- 1/10/100/etc. wall, where number is the hit points
- e basic enemy
- c basic coin
- m M money towers
- b B bomb enemy tile type that does (larger than normal enemy) damage to all tiles around it
- L laser enemy tiles that shoot a powerful beam in a straight line (then maybe expire?)
