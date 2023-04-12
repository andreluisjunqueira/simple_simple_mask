# SimpleSimpleMask

This is a simple simple mask using pure js to apply in any string text you want !

## Installation

Use yarn or npm.

```bash
yarn add @andrejunqueira/simple_simple_mask
```
OR
```bash
npm install @andrejunqueira/simple_simple_mask
```
## Usage

```typescript
import { makeMask } from '@andrejunqueira/simple_simple_mask';

const phone = "+# ### ### ####";
const phoneMask = makeMask(phone);
const maskedPhone = phoneMask("19998887777");

console.log(maskedPhone);

# it will log +1 999 888 7777

# in addition you can set the mask character

const date = "$$$$-$$-$$";
const dateMask = makeMask(phone, "$");
const dateMasked = dateMask("20231204");

# it will log 2023-12-04

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)