export const createActionSet = actionName => ({
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
    actionName
});