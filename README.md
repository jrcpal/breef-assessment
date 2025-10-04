# skills-selection

Intention

A component featuring a custom dropdown menu where users can search for and select skills. Selected skills are visible; the component also suggests additional skills.

Run

Prerequisites: Node 18+ and npm

```powershell
npm install
npm run dev
```

Test

```powershell
npm test
# or watch mode
npm run test:watch
```

Build

```powershell
npm run build
```

Approach
- Display different methods of handling css (css file, tailwind, styled-components) to broadcast the various methods. In a real-world scenario I would pick whichever is consistant with the global codebase. 
- Create a Skills Selection component to display and capture user's input. 
- Build a custom reusable multi-select and searchable dropdown to be used within a Skills Selection component.
- Display selected skills 
- Expand upon the data with mock categories and popularity in order to create an algorithm for suggested skills based on selected skills. 

Assumptions

- That database would be able to handle expanded details (category, popularity)
- That skills list has a relatively small number of options.
- That not all skill options should be available for suggestions. 
- That no server-side rendering or authentication is needed for skill options 

How I'd expand this application

- I'd like to improve the layout so that expanding the options list does not visually block the Selected and Suggested skills. 
- Scope out gathering the information from a real, or more fleshed out mock api
- Create a broader component test in addition to the unit tests
- Add fuzzy matching to the search input 
- Add select all / clear all buttons for selected/suggested skills. 
