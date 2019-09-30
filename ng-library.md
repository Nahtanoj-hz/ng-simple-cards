```
ng new ng-simple-cards --create-application=false
```
---
```
ng generate library ng-cards
```
---

```
npm run build ng-cards --watch
```
---

```
npm i --save ../ng-simple-cards
```

---
```html
<lib-ng-simple-card *ngFor="let hero of heroes" [hero]="hero"></lib-ng-simple-card>
```

---
```typescript
import { NgCardsModule } from 'ng-simple-cards/dist/ng-cards';
```
---
```typescript
import { IHero } from 'ng-simple-cards/dist/ng-cards/lib/interfaces';
```
---
```json
{
    "files": ["/dist"]
}
```

```zsh
npm config set registry https://registry.npmjs.org/
npm login
npm publish
npm unpublish ng-simple-cards --force
```
