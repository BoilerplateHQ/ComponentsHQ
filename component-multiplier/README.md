# Component Multiplier

Renders multiple instances of a given component, e.g. for testing purposes.

## Usage

*Assuming you are collecting components in the components folder and use @paths.*

```js
import {ComponentMultiplier} from '@/components/component-multiplier'

/*
 * This is a simple example of a component.
 */
const SquareComponent = () => {
    return <div className="h-6 w-6 mx-2 bg-black" />;
};

export default function Page(){
  return(
    <ComponentMultiplier component={SquareComponent} multiplier={4}/>
  )
}
```

## Use Cases

### Test what happens when you overflow another component

```tsx
const SquareComponent = () => {
    return <div className="h-6 w-6 mx-2 bg-black" />;
};

export default function Page(){
  return(
    <div className="max-w-48">
         <ComponentMultiplier component={SquareComponent} multiplier={20}/>
    </div>
  )
}
```
