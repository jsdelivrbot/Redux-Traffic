//An action creator, selectLight , just returns an action
export function selectLight(light) {
  return {
    type: "SELECTED_LIGHT",
    payload: light
  }
};
