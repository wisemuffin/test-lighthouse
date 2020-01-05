import { initialState } from "./context";

const reducer = (stateContext, { type, payload }) => {
  switch (type) {
    case "UPDATE_VIZS":
      return {
        ...stateContext,
        pins: payload
      };
    case "CURRENT_VIZ":
      return {
        ...stateContext,
        currentViz: payload
      };
    case "CURRENT_USER":
      return {
        ...stateContext,
        currentUser: payload
      };
    case "CREATE_COMMENT":
      const vizToAddCommentTo = stateContext.currentViz;
      vizToAddCommentTo.comments.items.push({
        ...payload
      });
      return {
        ...stateContext,
        currentViz: vizToAddCommentTo
      };
    case "reset":
      return initialState;
    case "increment":
      return { ...stateContext, count: stateContext.count + 1 };
    case "decrement":
      return { ...stateContext, count: stateContext.count - 1 };

    default:
      return stateContext;
  }
};

export default reducer;
