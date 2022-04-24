export const selectCategoriesMap = (state) => {
  return state.categories.categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
