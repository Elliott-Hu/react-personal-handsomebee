/**
 * 简化mapDispatchToProps
 * 
 * @param {any} actions 
 * @returns {Function} [mapDispatchToProps];
 */

export const mapDispatchToProps = actions => {
  return (dispatch) => {
    let result = Object.keys(actions).map(reducer => {
      return [reducer, actions[reducer]]
    }).reduce((prev, reducer) => {
      return Object.assign(prev, { 
        [reducer[0]]: Object.keys(reducer[1]).reduce((handlers, handler) => {
          return Object.assign(handlers, { [handler]: () => {
            dispatch(reducer[1][handler]());
          } })
        }, {})
      })

    }, {})
    console.log(result);
    return result;
  }
}