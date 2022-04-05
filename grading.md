# Self-Care Bear

Y'all - I love this so much -- its too flipping cute. Great work! I've added some notes throughout the app plus a few general comments here.

- I wonder if a slightly better user experience would be to automatically select the first five habits that you enter -- just so that you don't need to both enter a habit and then also click on "Set Habit"
- If using relative font sizes, I'd also add a minimum to make sure it doesn't accidentally get tiny (mine did :smile: )
- When I login and already have tasks created, I need to refresh my page to see my tasks -- this is related to an error that you get when you first load up the auth page where the TaskContext is trying to grab the list of tasks without a user. If you wrap your useEffect with a conditional, you'll get that fetch to happen when the user logs in instead of before
- It would be good to have some UX to indicate when a task is selected -- it would also be nice to unselect tasks? Can you do that?
- I'm able to keep selecting habits and the counter goes to negative values -- also even if I have some habits selected, it still says I have 5 to pick. There's some logic that needs cleaned up there. My sense is you're getting a little confused between your local state and the database state -- I would allow the database to be the source of "truth" for selected rather than trying to track it in a separate `isSelected` state variable -- I added a little refactor. Feel free to let me know if you have questions.
- Remember the differences between state and derived state -- if state can be derived from something else, we should avoid making state variables for it. Instead we can just make regular variables.
- Your TaskSelector is pretty complex -- looks like a good opportunity to move some stuff into separate components
