# Random Quote Machine

## Demo
[try in browser](https://rolemadelen-quote.vercel.app/)

![Demo](./demo.gif)

## Issues
- Q. `componentDidMount()` is called twice, why is that?
  + "componentDidMount() may be called multiple times if the key prop value for the component changes" -> [ref](https://www.knowledgehut.com/blog/web-development/react-js-componentdidmount)
  + but in my small app, I'm not updating any key prop value.. at least I don't think I am?
  + From further research, it seems like it has to do with dev env vs. prod env as well. I removed `React.StrictMode` and it was called only once -> [ref](https://stackoverflow.com/questions/39974210/why-componentdidmount-gets-called-multiple-times-in-react-js-redux)
  + I put it back the `React.StrictMode`
- Q. I'm calling `axio` in `componentDidMount()` and this takes some time to fetch data. Because of that, it fails to update the state and causes a logical error in the later stage. I used `setTimeout` so that it waits before I update the state using `setState`, but is there a better way to handle this case?
  + As a temporary solution, I just made a copy of fetched data in a local JSON file and removed `axios`.