const reducer = (themeContext, { type, payload }) => {
  switch (type) {
    case "TOGGLE_DARK_THEME":
      console.log("TOGGLE_DARK_THEME ", payload);
      return {
        ...themeContext,
        dark: !themeContext.dark
      };

    default:
      return themeContext;
  }
};

export default reducer;
