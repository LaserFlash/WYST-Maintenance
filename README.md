[![Build Status](https://travis-ci.org/LaserFlash/WYST-Maintenance.svg?branch=master)](https://travis-ci.org/LaserFlash/WYST-Maintenance)
[![Greenkeeper badge](https://badges.greenkeeper.io/LaserFlash/WYST-Maintenance.svg)](https://greenkeeper.io/)

# WYST Maintenance

Source code for the web app hosted at wyst-stuff.tk
Built using Angular5 and Material2.

Records and provides information relating to boats and safety for the Wellington Youth Sailing Trust.

## Project Structure / Architecture

**Based on:** <https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40>

```
app/
|- app.module.ts
|- app-routing.module.ts
|- core/
   |- auth/
      |- auth.module.ts (optional since Angular 6)
      |- auth.service.ts
      |- index.ts
   |- othermoduleofglobalservice/
|- ui/
   |- carousel/
      |- carousel.module.ts
      |- index.ts
      |- carousel/
         |- carousel.component.ts
         |- carousel.component.css
    |- othermoduleofreusablecomponents/
|- heroes (page1)/
   |- heroes.module.ts
   |- heroes-routing.module.ts
   |- shared/
      |- heroes.service.ts
      |- hero.ts
   |- pages/
      |- heroes/
         |- heroes.component.ts
         |- heroes.component.css
      |- hero/
         |- hero.component.ts
         |- hero.component.css
   |- components/
      |- heroes-list/
         |- heroes-list.component.ts
         |- heroes-list.component.css
      |- hero-details/
         |- hero-details.component.ts
         |- hero-details.component.css
|- othermoduleofpages/
```
