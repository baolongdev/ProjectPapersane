declare module 'mixitup' {
  interface MixItUpOptions {
    // Define the options here
    // For example:
    selectors?: {
      target?: string;
      control?: string;
    };
    animation?: {
      duration?: number;
    };
    // Add more options as needed
  }

  interface MixItUp {
    // Define the methods and properties here
    // For example:
    destroy: () => void;
    mix: () => void;
  }

  function mixitup(container: string | Element, options?: MixItUpOptions): MixItUp;

  export default mixitup;
}
