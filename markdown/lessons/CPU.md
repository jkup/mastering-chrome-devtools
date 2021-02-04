# On Page Performance

In this lesson we'll learn:

- How to read a flamegraph
- Find page jank
- Paint rectangles
- Check your applications FPS
- Understand scripting, rendering and painting
- Find slow functions
- Web vitals

## Rail

![Chrome's RAIL model](/rail.png)

**0 to 16 ms** Users are exceptionally good at tracking motion, and they dislike it when animations aren't smooth. They perceive animations as smooth so long as 60 new frames are rendered every second. That's 16 ms per frame, including the time it takes for the browser to paint the new frame to the screen, leaving an app about 10 ms to produce a frame.

**0 to 100 ms** Respond to user actions within this time window and users feel like the result is immediate. Any longer, and the connection between action and reaction is broken.

**100 to 1000 ms** Within this window, things feel part of a natural and continuous progression of tasks. For most users on the web, loading pages or changing views represents a task.

**1000 ms or more** Beyond 1000 milliseconds (1 second), users lose focus on the task they are performing.

**10000 ms or more** Beyond 10000 milliseconds (10 seconds), users are frustrated and are likely to abandon tasks. They may or may not come back later.

## What is page jank?

> Jank is any stuttering, juddering or just plain halting that users see when a site or app isn't keeping up with the refresh rate.

## Understanding 60 FPS

Most devices today refresh their screens 60 times a second. The browser needs to match the device’s refresh rate and put up 1 new picture, or frame, for each of those screen refreshes.

Each of those frames has a budget of just over 16ms (1 second / 60 = 16.66ms). In reality, however, the browser has housekeeping work to do, so all of your work needs to be completed inside 10ms.

## Pragmatic Approaches

- Use requestAnimationFrame
- Use Web Workers
- Use a framework
- Reduce complexity

### requestAnimationFrame

```javascript
// Read
var h1 = element1.clientHeight;

// Write (invalidates layout)
element1.style.height = (h1 * 2) + 'px'

// Read (triggers layout)
var h2 = element2.clientHeight;

// Write (invalidates layout)
element2.style.height = (h2 * 2) + 'px'

// Read (triggers layout)
var h3 = element3.clientHeight;

// Write (invalidates layout)
element3.style.height = (h3 * 2) + 'px'
```

Enter `requestAnimationFrame()`

```javascript
function repeatOften() {
  // Do whatever
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);
```

After watching the layout thrashing video, head over to the [layout thrashing exercise](/exercise/thrashing)

## Web Workers

You can invoke a worker from any JavaScript file like this:

```javascript
// script.js
const input = document.querySelector("#input");
const display = document.querySelector("#display");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  input.onchange = function () {
    myWorker.postMessage(input.value);
    console.log("Message posted to worker");
  };

  myWorker.onmessage = function (e) {
    display.textContent = e.data;
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
```

And then just create a `worker.js` file like this:

```javascript
// worker.js
onmessage = function (e) {
  console.log("Worker: Message received from main script");
  const result = e.data;
  console.log("Worker: Posting message back to main script");
  postMessage(`Worker received ${result} from the main script`);
};
```

## Running DevTools on Node.js apps

Try killing the current process and running

```bash
node --inspect server/server.js
```

## Next Lesson

We've covered a lot about CPU performance, now let's take a look at Memory management in the [next Lesson](/lesson/Memory)
