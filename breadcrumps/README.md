# Breadcrumps

Renders a breadcrumb component that displays the current page's path.

## Prerequisites

Icons by Lucide. But you can use any or none.

```bash
npm install lucide-react
```

Copy the functions 'cn' and 'capitalize', e.g. from our FunctionsHQ

GitHub Link: [cn Function](https://github.com/BoilerplateHQ/FunctionsHQ/tree/main/cn)

GitHub Link: [capitalize Function](https://github.com/BoilerplateHQ/FunctionsHQ/tree/main/capitalize)

## Usage

*Assuming you are collecting components in the components folder and use @paths.*

```tsx
import Breadcrumps from '@/components/Breadcrumps';

export default function Page(){
    return(
        <Breadcrumps/>
    )
}
```
