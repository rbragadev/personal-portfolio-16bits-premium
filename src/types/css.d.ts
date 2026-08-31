/* Allow CSS custom properties in inline `style` objects.
   We use `--cq-delay` to stagger entrance animations from the markup. */

import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
