const viewport = (width: number) => `max-width: ${width}px`;

export const constants = {
  /**
   * Text foreground. Example: main text color.
   */
  TEXT_FG: "#161723",

  /**
   * Text for background. Example: supplimental text
   */
  TEXT_BG: "#aaa",

  /**
   * Primary link color.
   */
  LINK_PRIMARY: "#5982f3",

  /**
   * Secondary link color. Used for `a::hover`.
   */
  LINK_SECONDARY: "#385198",

  /**
   * Screen definition for small viewport. Example: smartphone.
   */
  SCREEN_SM: viewport(500),
};
