const reactiveVar = new ReactiveVar(42)

Tracker.autorun(async () => {
    // basic awaits are supported
    await somethingOrOther()

    // assignments from awaits work
    const a = await Meteor.currentUserAsync()

    // That's all that's guaranteed to work. This always works for the first level of the function body
    // of async functions.

    // normally after the first await you'd have to wrap each reactive call in a Tracker.withComputation() statement
    const b = await Collection1.findOneAsync()
    const c = await Collection2.findOneAsync()

    // in order for your code to stay reactive. But with the babel plugin you won't need to do this anymore.
    const myVal = reactiveVar.get()
})
