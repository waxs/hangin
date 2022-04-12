# Hangin JS

![Testing](https://github.com/waxs/hangin/workflows/Testing/badge.svg)

Schedule, plan, and await the outcome with hangin JS, just hang in there. Hangin can schedule one, or multiple, functions to take place and recur the process incrementaly. It's a straight forward toolkit that can be used either for front- and/or backend projects. It provides a clean and easy to read syntax for planning actions, and making sure to schedule them taking place for a specific moment in time.

## Initiate Hangin JS

Getting started is easy, just initiate a new schema from the package and add jobs to the queue. This can all be done within the `schedule` method. 

```javascript
const hangin = new Hangin();

hangin.schedule([
    {
        name: 'Fetch API',
        action: next => { ... }
    }
]);
```

Once Hangin JS has been initiated multiple options are available to schedule and plan recurring queues. For instance, you can set the schedule to recur every `week` on `saterday` for example.

```javascript
hangin.schedule([ ... ]).every('week', 'saterday');
```

🚧 Package is currently in beta.

## Getting started

Hangin is as simple, select the methods from the toolbox to describe events, log watchers and reschedule actions from taking place. The following methods are available from this package:

**Actions** (2 methods)

*  `job()` set a single job and plan it's excecution
*  `schedule()` add multiple jobs to a schedule

**Loop** (10 methods)

* `cron()`
* `daily()`
* `every()`
* `hourly()` 
* `interval()`
* `monthly()`
* `weekly()` 
* `yearly()`
* `weekend()`
* `weekdays()`

**Once** (4 methods)

* `date()`
* `instant()`
* `once()`
* `timestamp()`

**Extension** (1 methods)

* `at()`

**Limiter** (4 methods)

* `times()`
* `from()`
* `to()`
* `between()`

**Data** (3 methods)

* `models()`
* `planning()`
* `log()`

### Hooks

Hooks provivide a way to monitor changes taking place. For instance, a specific method is called like the `play()` event. The hook will dispatch once the function is called. You can register new hooks with the `event` method, the `on` function will provide you with a function to call a specific event and a callback that will be fired once the event takes place. You are able to register multiple hooks for the same event, an example is shown below: 

```javascript
hangin.event.on('active', payload => {
    console.log(`Active has been changed: ${ payload }.`);
});
```

The following hooks are available:

**State:**

- `active` this value will show if the script is active
- `done` this event will fire once the schedule is completed
- `loading` will return if the loading state
- `play` executed once the `start()` method has been called
- `planned` returns all planned models
- `progress` will return the status of the queue
- `log` will be called once the log function is enabled or disabled

```javascript
hangin.event.on('progress', ({ state, percentage }) => {
    console.log(`${ percentage }%: ${ state }`);
});
```

**Controls** (4 methods)

* `done()` execute after the schedule has been executed
* `pause()` pause the schedule and deactive executing
* `start()` initiate the schedule and play your jobs
* `update()` imidiatly execute once callback has been fired

### Architecture

The architecture revoles around jobs, jobs are then added to events, these events are part of a schedule. These jobs describe a progress, function, or step, that needs to be resolved, multiple steps can be taken by adding them to the queue. A schema can be planned, meaning steps can be taken incrementaly or only once. A planned schedule will be added to a queue, once the schedule is completed the initial frame will remain, the planned schedule will be deleted and (if needed) a looped schedule will be rescheduled. The queue will automatically rearrange schedules based on their timing.

### Roadmap

- [x] Set validation rules for main functions
- [x] Optimize CRON operations
- [ ] Convert package to Typescript?
- [ ] Optimize codebase
- [ ] 100% testing coverage

## About

Check out my [personal website](http://sanderhidding.nl) for more information. That's all folks! Cheers.
