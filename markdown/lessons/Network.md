# Network Performance

### In this lesson we'll learn

- [Page load market research](#interesting-facts-about-page-load-time)
- [The Network waterfall](#the-network-waterfall)
- [JS Parse cost](#network-performance-isn-t-everything-)

## Interesting facts about page load time

> Walmart and Amazon both observed a 1% increase in earnings for every 100 milliseconds of improved webpage speed.

> Yahoo saw a 9% increase in traffic to every 400 milliseconds of webpage speed improvement.

> Google loses 20% of their traffic for every additional 100 milliseconds it takes for a page to load.

![Google Marketing](/google-marketing.png)

In this lesson, we'll learn about

- Network terminology
- Filtering requests
- Inspecting packets
- Watching your app load with screenshots
- Simulate Network conditions
- Emulate offline mode
- The Network waterfall

## The Network Waterfall

Let's talk about the life of a network request.

- ◻️ **Queueing**
  - There are higher priority requests.
  - There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
  - The browser is briefly allocating space in the disk cache
- ⬜️ **Stalled**
  - The request is stuck Queueing
- 🟩 **DNS Lookup**
  - Resolving an IP address
- 🟧 **Initial Connection**
  - TCP handshakes or establishing SSL
- 🟧 **Service Worker Startup**
  - Starting up a Service Worker
- 🟪 **Service Worker respondsWith**
  - Service Worker sending data to browser
- 🟩 **Waiting (TTFB)**
  - Waiting for the first byte from the server
- 🟦 **Content Download**
  - Browser is receiving a response from a server

## Network performance isn't everything!

![JS parse cost](/js-parse.png)

## Measuring real user performance

https://developer.mozilla.org/en-US/docs/Web/API/Performance

## Next Lesson

Now that we understand Network and page load performance, let's dive into on page performance in the [next lesson](/lesson/CPU)