# react-circular-progress

## Installation

```
  npm install react-circular-gradient-progress --save
```

## Usage

```js
import React from "react";
import { CircularProgress } from "react-circular-gradient-progress";

const HomePage: React.FunctionComponent = () => (
  <CircularProgress
    color="#F00"
    size={size}
    progress={progress}
  />
)

export default HomePage;
```

## Props

Component accepts several self-descriptive properties:


## CircularProgress
- **`color`** _(String)_ - Color for the circle.

## GradientCircularProgress
- **`startColor`** _(String)_ - Start Color for the circle.
- **`middleColor`** _(String)_ - MIddle Color for the circle.
- **`endColor`** _(String)_ - End Color for the circle.

## Common Props
- **`id`** _(String | null)_ - The html id attribute.
- **`size`** _(Number)_ - This is diameter of the circle.
- **`progress`** _(Number)_ - The progress. (0 to 100).
- **`strokeWidth`** _(Number)_ - This weight of the circle. (default is 6px).
- **`emptyColor`** _(String)_ - The color of the circle that is not filled. (default is lightgrey).
- **`withSnail`** _(Boolean | null)_ - A dot at the end of the circle that follows the progress.
- **`classes`** _(Object | null)_ - Class names that can be applied to the component.

```js
  classes?: {
    indicator: {
      progression: string;
      container: string;
      empty: string;
    };
    snail: string;
    textContent: {
      container: string;
      text: string;
    };
  };
  ```
  
  
## Circular Progress with snail
![Alt text](/../master/githubAssets/CircularProgressWithSnail.png?raw=true "Circular Progress with snail")

## Gradient Circular Progress
![Alt text](/../master/githubAssets/CircularProgress.png?raw=true "Gradient Circular Progress")
