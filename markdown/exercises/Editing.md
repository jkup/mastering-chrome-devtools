# Exercise 1 - Quick Edits

Let's take 15 minutes, fire up the DevTools (refer back to the [Introduction](/lesson/Introduction) if you forgot how!) and complete the following tasks.

1. Change this list from an ordered list `ol` to an unordered list `ul`.
1. Clicking on <a id="link" href="#">this link</a> makes a popup appear. Can you find the JavaScript code that calls the `alert`?

There is a button below. When clicked, it will reveal a `blockquote`. The `blockquote` has the following HTML:

```html
<blockquote class="quote" id="quote" style="background-color: blue;">
  Did you get it right?
</blockquote>
```

And the following CSS:

```css
blockquote {
  background-color: red;
}

.quote {
  background-color: orange;
}

#quote {
  background-color: yellow !important;
}
```

1. Can you guess what background color it will have?
1. Can you "cheat" using the DevTools to be 100% sure before you click?

<button id="button">Click here to find out!</button>

<blockquote class="quote" id="quote" style="background-color: blue;">
  Did you get it right?
</blockquote>

There are a bunch of cards! Can you figure out the border color of the one with id **12345678**? Can you do it in a way that would work if there were 1000 cards on the page?

<div id="513425" class="card">Apple</div>
<div id="873234" class="card">Bird</div>
<div id="485073" class="card">Car</div>
<div id="182370" class="card">Dove</div>
<div id="438975" class="card">Elephant</div>
<div id="127369" class="card">Fire</div>
<div id="234709" class="card">Goat</div>
<div id="983745" class="card">Hello</div>
<div id="320283" class="card">Igloo</div>
<div id="089734" class="card">Jon</div>
<div id="283740" class="card">Kuperman 😂</div>
<div id="346708" class="card">Lion</div>
<div id="12345678" class="card">Mars</div>
<div id="210387" class="card">Nope</div>

## Back to the lesson

Finished? Let's head back to the [Lesson](/lesson/Editing)
