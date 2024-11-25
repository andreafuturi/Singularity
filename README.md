# Singularity

Singularity is a minimal, modern framework for building server-side rendered (SSR) and partially hydrated web applications with (P)React. It combines the power of Deno, JSX and Vite to deliver fast, SEO-friendly, and lightweight web apps with a focus on seamless Developer Experience.

Deno manages server-side rendering, while Vite handles client-side hydration, HMR reload and production build.

## Features

- 🔥 **Zero Setup**: Clone, code, and deploy. No boilerplate needed.
- 🖥️ **Server-Side Rendering (SSR)**: Better SEO and faster initial load by default.
- 💧 **Partial Hydration**: Easily hydrate only where necessary, saving resources.
- 🧩 **Minimal Interactivity**: Execute simple client-side logic without hydrating the component.
- 🚗 **Lightweight SPA Navigation**: SPA-like experience with just 1.5 KB of JavaScript.
- 🌐 **File-Based Routing**: Automatically map files to routes and apis.
- 🎨 **Scoped Styling**: Easiliy import CSS files for clean and modular CSS.
- 🌟 **Preact or React**: Flexibility to choose based on your needs.
- 🤖 **Automatic static files serving:** Easily serve static assets like images and files
- 📁 **Clear separation of server code and client code**: /server/main.jsx serves client/index.jsx
- 🔀 **Automatic Development/Production Switching**: In production minified and otpimized css and js are used.
- 🚀 **Deno Deploy Ready**: Deploy seamlessly with Deno Deploy.

And meny others coming:

- ✅ **Middleware Support**: Thanks to Deno
- ✅ **TypeScript Support**: Thanks to Deno
- ✅ **Dynamic Metadata Management**: Route-specific titles and meta tags.
- ✅ **Take away**: Easily optout of routing and hydration if not needed making the project 0kb js by default. You choose what gets in in index.jsx and what not.
- ❌ **Serverside Data Fetch**: Async components are not supported in Preact, trying to implement async routes like saw in fresh but it's not working properly right now. Use normal api fetch for data fetching.
- ❌ **Dynamic & Nested Routing**: Support for dynamic parameters (e.g., /post/[id]).
- ❌ **Global Error Handling**: Custom component for server errors
- ❌ **Static Site Generation (SSG)**: Smartly pre-render routes for blazing-fast delivery. Server will automatically knows when he has to rerender.

## Why? 💡

- Faster, lighter, and simpler than most frameworks.
- Perfect for SEO-focused, high-performance web apps.
- Combines the best of server rendering and minimal client-side interaction.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the application with `npm start`.
4. Visit localhost:8000 and see your code changes in real time.
5. When ready build the client-side code with `npm run build`.
6. Deploy to Deno deploy and select server/main.jsx as entry point (might add a script in package.json in the future)

## Project Structure

The structure separates server and client code for clarity.

### /server

- **main.jsx**: Entry point for the server-side application.
- **api/**: API routeS, automatically served at `/api/`
- **deno.json**: Server configuration file (only needed if you want to use Preact).

  _Add any additional server logic files here._

### /client

- **main.jsx**: Front-end entry point for client-side hydration and router initialization. (imported with MainJsx component)
- **index.jsx**: Main HTML content; editable with Preact components to customize `<head>`, etc. Automatically used as wrapper for routes (must accept a children)
- **index.css**: Global styles, automatically included in `index.jsx` (imported with IndexCss component).
- **home/home.jsx**: Main route automatically served at `/` or `/home`.
- **about.jsx**: Another route example automatically served at `/about`.
- **components**: Folder for components and their relative CSS/JS modules.
- **vite.config.js**: Client configuration file for Vite's Preact HMR.

  _Add client-side files (e.g., front-end functions, UI components, or static files) here._

### Routing

filename.ext inside client folder will be automatically served at /filename.ext

Tihs is to prevent relative and absolute paths hell.

filename.jsx inside client folder will be automatically rendered and served at /filename

filename/filename.jsx inside client folder will be automatically rendereda and served at /filename

This is to prevent index hell, where every file in your project is called index. The frameworks enforces you to either have a filename.jsx on client or filename/filename.jsx. any index.jsx apart from the main client/index.jsx will be ingored.

## Minimal Project Structure

For a simple setup, structure the project as:

- `client/index.jsx`: JSX landing page
- `server/main.jsx`: Serves `index.jsx` at each request
- `server/deno.json`: Optional Preact config (you can also use React instead)
- `client/vite.config.js`: Basic Vite configuration

To add interactivity

- `client/main.jsx`: Hydrates interactive components (import in `index.jsx` with the MainJsx component)

Future: if index.css and index.js files generated by Vite are less than a certain amount of bytes then they're directly included in index.html for faster broswer site rendering

## How it Works

Deno runs on port 8000, processing each client request through `/server/main.jsx` to render `client/index.jsx` with route-specific content. Files in `client/` are served at `yoursite.com/` (non-JSX files as static assets; JSX files rendered as routes, e.g., `about.jsx` at `/about`).

The generated index includes `client/main.jsx`, which enables client-side hydration and [optional lightweight SPA navigation](https://github.com/andreafuturi/lightweight-router) without Virtual DOM.

Vite runs on `localhost:3456/main.jsx` during development. When compiled, it’s served from `dist` at `yoursite.com/dist/index.js`, same for css files etc...
The compiled file is included in the `<head>` of `index.jsx` to enable hydration in the browser thanks to the ScriptAndCss component.
This is a smart component that will automatically switch between the compiled and non compiled files in production.

```jsx
function Index({children) {
  return (
    <html lang="en">
      <head>
        <IndexCss isDev={globalThis.dev} />
        <MainJsx isDev={globalThis.dev} />
        <Title>App Title</Title>
      </head>
      <body>
       <Menu />
       <router>
        <route path={globalThis.location.pathname}>{children}</route>
       </router>
      </body>
    </html>
  );
}
export default Index;
```

Title is an optional special component that let you have a dyamic title that changes for each route example when we're in about title will be About - App title
When your app is ready for production you can compile it with "npm run build" or "npm run preview" which will also start the server in prod mode for you to test everything.
When everything is working properly you will soon be able to deploy to denodeploy with "npm run deploy"

## Special Components and tags

### Interactivity

Every component is only server side rendered by default. To make the component executes javascript code on the browser you have 2 options:

- Use the withInteractivity HOC (ships Preact to the browser, old way -> not really recommended):

```jsx
//Counter a general interactive component
import { useState } from "https://esm.sh/preact/hooks";
import withInteractivity from "../../lib/withInteractivity.jsx";

const Counter = ({ start }) => {
  const [count, setCount] = useState(start || 0);
  return (
    <counter>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </counter>
  );
};

export default withInteractivity(Counter);
```

This is useful for complex logic that needs to be executed on the browser, like animations or interactions.
You will also need to add the component to the interactiveComponents array in the client/main.jsx file to make it hydrate.

```jsx
import Counter from "./components/counter.jsx";
import About from "./about.jsx";

//CLIENT HYDRATION
const interactiveComponents = [Counter, About];
hydrateInteractiveComponents(document, interactiveComponents);
```

Or

- Use the ultra lightweight Import tag (no Preact needed, recommended):

```jsx
import { inlineImport } from "../../lib/framework-utils.jsx";

export default function LightCounter() {
  return (
    <counter>
      <span class="count">0</span>
      <button>Count! 🚀</button>
      {inlineImport({ src: counterLogic, selfExecute: true })}
    </counter>
  );
}

function counterLogic() {
  // 🎯 Classic js counter logic
  const countView = document.querySelector("counter .count");
  let count = 0;
  const updateCount = () => (countView.textContent = ++count);
  document.querySelector("counter button").addEventListener("click", updateCount);
}
```

This is useful for simpler vanilla js logic where preact or react are not needed.
You can declare the function outside of the component and pass it as a prop.
Function will be declared on the browser and can also be self executed if selfExecute is true.

Otherwise you can just declare it and use it later

```html
<div onchange="doSomethingOnBrowser()"></div>
```

You can also use the Import tag to import js files that will be executed on the browser.

```jsx
//path starts from client folder
Component content
{inlineImport({ src: "counter.js" })}
```

They will be executed once per render and they will automativally not be hydrated by client (since they don't have any interactivity) even if they are inside interactive components.
If they are local they will be included in the final html page (as script tags).
If they are remote they will be fetched from the remote url and then included in the final html page (as external src script tags).

### Styling

The import tag can also be used to import css files that will be included in the final html page (as inline styles tags).
Example:

```jsx
{inlineImport({ src: "counter.css" })}
Component content
```

They will appear once per render and they will automativally not be hydrated by client (since they don't have any interactivity)
They are not css modules and therefore you have to use normal css syntax techniques like nesting for scoping.
Example:

```css
.counter {
  p {
    color: red;
    /* this will be a scoped style */
  }
}
```

## Change Preact to React

If you want to switch between Preact and React you can easily do it by removing deno.json file, removing the Preact hmr plugin from vite.config.js and replacing render and hydrate functions with React ones.

## Limitatations

- This is experimental and not yet tested in big applications
- You still manually need to hydrate interactive components in main.jsx but it's very easy to do it.

## Suggestions and Contributions

Your suggestions and contributions are highly appreciated! Feel free to provide feedback, report issues, or contribute to making this template even better. Stay tuned for a React version for increased compatibility.

## Future

It would be nice to implement SSG as default for no server side rendering and improve css modules
See if this works without main.jsx
Create Dynamic routes
Create a hook to perform client side js easily
maybe just a .js filed linked to the component (counter.js)

Happy coding!
