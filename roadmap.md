# Roadmap

- save system: defer until later (will have better idea of what data needs to be saved, etc.)

## Animation basic scaffolding

- add failing TDD test and then to Game object: tickLengthInMilliseconds, default 2000
- Probably don’t need to remove and add divs. Can just check to see if text and/or css class are changing
- See if water tile CSS can inherit from a generic tile css for borders/etc.
- water: 25% chance to render dash instead of tilde: will let me test game speed!

## Other

- No hover effect
- Clicking a tile immediately pauses the game + brings up a Vertically centered Bootstrap modal with Info + Actions
- Do a timed helper Bootstrap toast to tell people to click Tiles (https://getbootstrap.com/docs/5.3/components/toasts/)

- Swap feedback/new game left/right
- Replace feedback text with Bootstrap button that triggers slide-in right drawer thing
- Update design: grid contains generic Tile objects; Water/etc. inherits from Tile; each Tile has add remove functions; enforces max 2 length etc for water plus other tiles; rename existing tile stuff to entity

- Do text size rather than lower and uppercase for levels of buildings/units
- Should look into the inactive tab pauses game thing; may want to try to prevent that

- w basic wall builder
- 1/10/100/etc. wall, where number is the hit points
- E basic enemy
- R resource tower extracts resources for building and sells resources for money
- b B bomb enemy tile type that does (larger than normal enemy) damage to all tiles around it
- L laser enemy tiles that shoot a powerful beam in a straight line (then maybe expire?)

- Native Bootstrap Donate button + make sure it opens in new window/tab!
