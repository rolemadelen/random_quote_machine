# Random Quote Machine

## Demo
![Demo](./demo.gif)

## Issues
- Q. `componentDidMount()` is called twice, why is that?
- Q. I'm calling `axio` in `componentDidMount()` and this takes some time to fetch data. Because of that, it fails to update the state and causes a logical error in the later stage. I used `setTimeout` so that it waits before I update the state using `setState`, but is there a better way to handle this case?