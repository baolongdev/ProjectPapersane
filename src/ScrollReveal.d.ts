declare module 'scrollreveal' {
  interface ScrollRevealOptions {
    origin?: 'top' | 'right' | 'bottom' | 'left';
    distance?: string;
    duration?: number;
    delay?: number;
    opacity?: number;
    scale?: number;
    easing?: string;
    reset?: boolean;
    viewFactor?: number;
    viewOffset?: { top?: number; right?: number; bottom?: number; left?: number };
    afterReveal?: () => void;
    afterReset?: () => void;
  }

  interface ScrollRevealObject {
    reveal: (selector: string, options?: ScrollRevealOptions, interval?: number) => void;
    sync: () => void;
    destroy: () => void;
  }

  const ScrollReveal: (options?: ScrollRevealOptions) => ScrollRevealObject;

  export = ScrollReveal;
}
