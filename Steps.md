	1.	initialize npm
	2.	install webpack
	3.	add scripts
	4.	create src/index.js
	5.	install React + Babel
	6.	configure webpack + Babel
	7.	render first React component
	8.	add index.html + html plugin
	9.	add dev server
	10.	create List container
	11.	create Card component
	12.	add assets
	13.	fetch local JSON in List
	14.	pass movie data to Card
	15.	add Bootstrap + CSS loaders
	16.	style layout and cards
	17.	add ESLint
	18.	add PropTypes  

￼

Project 1 quick build guide

1. Create the Card component

Create this file:

src/components/Card/Card.js

Start with a placeholder component so the structure exists before real data is added. The book makes Card a low-level component under components/Card, while List remains the top-level container.  ￼

⸻

2. Import Card into List

Update src/containers/List.js so List returns <Card /> instead of the old heading. This is just structure first, data later. The visible output barely changes, but the component tree becomes App -> List -> Card.  ￼

⸻

3. Add the project assets

Inside src, create:

assets/data.json
media/avatar.jpg
media/avengers_infinity_war.jpg
media/jurassic_world.jpg
media/star_wars_the_force_awakens.jpg
media/titanic.jpg

The chapter says data.json contains the five movie objects with fields like title, distributor, year, amount, img, and ranking, and img itself contains src and alt.  ￼

⸻

4. Upgrade Card to accept a movie prop

Replace the placeholder with a real component that renders:
	•	ranking
	•	title
	•	year
	•	image
	•	distributor
	•	amount

This is the point where Card becomes a display component instead of dead decorative scaffolding.  ￼

⸻

5. Add state to List

In List, add a constructor and initialize:
	•	data: []
	•	loading: true

The chapter uses class component state so the container can hold fetched movies and rerender when the state changes.  ￼

⸻

6. Fetch the movie data in componentDidMount

Add an async componentDidMount() to List and fetch the local JSON. After the fetch completes, set:
	•	data to the movie array
	•	loading to false

The chapter notes that this version does not handle failure yet, so if fetch fails, loading stays stuck. That is the book’s limitation, not cosmic truth.  ￼

⸻

7. Render the movie cards from state

In List.render():
	•	read data and loading from state
	•	show Loading... while loading is true
	•	otherwise map over data
	•	render one Card per movie
	•	pass movie={movie}
	•	use key={movie.id}

That is the full data flow pattern for this app: fetch in container, pass props to child, render list.  ￼

⸻

8. Install Bootstrap

Install Bootstrap and import its CSS in src/index.js. The chapter uses Bootstrap for all the visual polish in this app.  ￼

Commands:

npm install --save-dev bootstrap
npm install --save-dev css-loader style-loader

The CSS loaders are required because webpack cannot process CSS imports by default. The chapter specifically says the loader order matters: css-loader compiles first, style-loader injects into the DOM.  ￼

⸻

9. Add CSS loader support to webpack.config.js

Add a .css rule to webpack so the Bootstrap stylesheet can be imported into the app. That is what makes the styling actually work instead of just sitting there like a decorative dependency.  ￼

⸻

10. Wrap the app in a Bootstrap container

Update App in src/index.js to wrap <List /> with a container-fluid div. This gives the whole app a proper layout container.  ￼

⸻

11. Turn List into a Bootstrap grid

Wrap the mapped cards in a row, and wrap each card in a Bootstrap column. The book shows a row with col-sm-2 columns so the five cards display in a horizontal layout.  ￼

Important modern fix: in React, use className, not class. The parsed book text shows class in places, but your actual React code should use className. That old parsing mess is not your fault.  ￼

⸻

12. Style Card with Bootstrap card classes

Update Card to use Bootstrap card markup:
	•	card
	•	card-img-top
	•	card-body
	•	card-title
	•	list-group
	•	list-group-item

This is what transforms the app from “unstyled data dump” into the final card layout shown in the chapter screenshots.  ￼

⸻

13. Add the navbar header

Update App again in src/index.js so the top of the app includes a dark sticky navbar with the title movieList. That is the last UI touch in the styling section.  ￼

⸻

14. Add ESLint

Install:

npm install --save-dev eslint eslint-loader eslint-plugin-react

Then create .eslintrc.js in the project root with the browser, ES6, JSX, and React plugin configuration the chapter provides. The point is to enforce standard JavaScript and React patterns.  ￼

⸻

15. Add eslint-loader to webpack

Update the JS rule in webpack.config.js so webpack runs ESLint along with Babel. The chapter adds eslint-loader next to babel-loader. That makes linting happen during development.  ￼

⸻

16. Add PropTypes

Install:

npm install --save prop-types

Then import PropTypes into Card and validate the movie prop. First the chapter uses a loose shape({}), then it expands the validation to include:
	•	title
	•	distributor
	•	year
	•	amount
	•	img.src
	•	img.alt
	•	ranking

and marks the whole movie prop as required.  ￼

Final build order
	1.	Create Card
	2.	Import Card into List
	3.	Add assets and media
	4.	Make Card accept movie
	5.	Add state to List
	6.	Fetch data.json in componentDidMount
	7.	Map state into Card components
	8.	Install Bootstrap
	9.	Add CSS loaders to webpack
	10.	Wrap app in container-fluid
	11.	Turn List into a grid
	12.	Turn Card into a Bootstrap card
	13.	Add navbar header
	14.	Install ESLint
	15.	Add ESLint to webpack
	16.	Add PropTypes validation  ￼  ￼

Two important modern notes

This chapter was written for React 16.10.2, not your modern setup, so where the book uses older patterns like ReactDOM.render, you should keep using the updated React 19 entry approach you already fixed. Also, some parsed snippets are malformed, especially around Babel and JSX attributes, so trust the chapter flow, not every mangled character.  ￼  ￼

We should now go one step at a time starting at Step 1: create Card.js properly, and I’ll keep each step tight so this doesn’t turn into another small religion.