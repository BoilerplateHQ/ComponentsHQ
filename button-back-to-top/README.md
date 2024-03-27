# Button_BackToTop

Renders a button component that scrolls the page to the top when clicked.

## Prerequisites

Icons by Lucide. But you can use any or none.

```bash
npm install lucide-react
```

Button component by [shadcn/ui](https://ui.shadcn.com/docs/components/button)

```bash
npx shadcn-ui@latest add button
```

Copy the function 'cn', e.g. from our FunctionsHQ

GitHub Link: [cn Function](https://github.com/BoilerplateHQ/FunctionsHQ/tree/main/cn)

## Usage

*Assuming you are collecting components in the components folder and use @paths.*

```tsx
import {Button_BackToTop} from '@/components/button-back-to-top'

export default function Page(){
  return(
    <Button_BackToTop />
  )
}
```
