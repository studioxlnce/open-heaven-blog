import { buildLegacyTheme } from "sanity";


/// Colours for components of the Sanity Studio's theme can be altered here.
/// Some base colours have been pre-defined, add component themes below these.
///
/// To implement theme changes made in this file:
/// 1. Open `sanity.config.ts`
/// 2. Add the following line to `sanity.config.ts` under the other import statements:
///     import { myTheme } from './theme';
/// 3. Add the following line to `sanity.config.ts` in `defineConfig` under the `schema` property:
///     theme: ohTheme,
/// 4. Save `sanity.config.ts` and restart the studio.
/// 5. Verify the changes have taken effect by visiting "https://localhost:3000/studio" in your browser.

const props = {
    "--my-white": "#fafafa",
    "--my-black": "#131313",
    "--my-blue": "#1AB5EC",
    "--my-highlight-blue": "#aacefe",
    "--my-bg-blue": "#cfefff",
    "--my-dark-blue": "#2F3192",
    "--my-green": "#2ECC71",
    "--my-red": "#FF0000",
    "--my-yellow": "#E9D502",
};

export const ohTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#757575",
    "--gray-base": "#757575",

    "--component-bg": props["--my-dark-blue"],
    '--component-text-color': props['--my-white'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#375777',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-bg-blue'],
  '--main-navigation-color--inverted': '#373737',
  // '--main-navigation-color': props['--my-bg-blue'],
  // '--main-navigation-color--inverted': props['--my-black'],

  '--focus-color': props['--my-blue'],
});

// export default defineConfig({
//   // rest of config...,

//   theme: ohTheme,
// })