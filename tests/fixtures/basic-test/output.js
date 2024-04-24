const reactiveVar = new ReactiveVar(42);
Tracker.autorun(async () => {
  const ____secretCurrentComputation____ = Tracker?.currentComputation || null;
  // basic awaits are supported
  await somethingOrOther();

  // assignments from awaits work
  return Tracker.withComputation(____secretCurrentComputation____, async () => {
    const ____secretCurrentComputation____ = Tracker?.currentComputation || null;
    const a = await Meteor.currentUserAsync();

    // That's all that's guaranteed to work. This always works for the first level of the function body
    // of async functions.

    // normally after the first await you'd have to wrap each reactive call in a Tracker.withComputation() statement
    return Tracker.withComputation(____secretCurrentComputation____, async () => {
      const ____secretCurrentComputation____ = Tracker?.currentComputation || null;
      const b = await Collection1.findOneAsync();
      return Tracker.withComputation(____secretCurrentComputation____, async () => {
        const ____secretCurrentComputation____ = Tracker?.currentComputation || null;
        const c = await Collection2.findOneAsync();

        // in order for your code to stay reactive. But with the babel plugin you won't need to do this anymore.
        return Tracker.withComputation(____secretCurrentComputation____, async () => {
          const ____secretCurrentComputation____ = Tracker?.currentComputation || null;
          const myVal = reactiveVar.get();
        });
      });
    });
  });
});
