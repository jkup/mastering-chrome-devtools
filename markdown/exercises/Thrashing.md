# Layout Thrashing

This page loads just fine and the Frontend Master logos don't cause and jank. But try adding 100. Do the animations stay smooth or get choppy? What if you add 200? 300? 400?

Use the "Add 100" button to generate enough images to cause significant jank. Then open up the DevTools and run a profile.

1. Notice how you can quickly tell that there is page jank? Can you find the specific function that is causing the slowdown?
2. Notice when you hip the Optimize button things get a lot smoother. Can you find what optimize does to make the site go so much faster?

<div id="app">
    <img class="proto mover" src="/logo.jpeg"/>
    <div class="controls">
        <button class="add"></button>
        <button class="subtract" disabled></button>
        <button class="stop">Stop</button>
        <button class="optimize">Optimize</button>
        </a>
    </div>
</div>

## Finished?

Head back to the [CPU Lesson](/lesson/CPU)
