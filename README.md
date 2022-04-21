# Hangin JS

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

## Actions

Using the `next()` resolver you are able to determine the next job being fired. Using the `next()` callback is mandatory for handeling the queue. Each job should therefor call and execute this function to keep the queue in sync. A function call be assigned to the `action` key, futhermore you are able to give your job a specific name and configure a delay. The name of the job can be used to track progress with the according event listener. These will fire once an action has been executed from the queue. 

```javascript
hangin.schedule([
    {
        name: 'Start app',
        action: next => { ... }
    }
]);

hangin.event.on('progress', ({ state }) => {
    console.log(state); // Start app
});
```

### Payloads

Jobs can pass information to the next job, this can be handy for resolving endpoints and then passing it to the next job that needs the data. In this case we resolve the data from an endpoint, we use the `next` resolver to pass the data to the next job that will log the data. The next job will recieve a `payload` as a second parameter that contains the data. Using this approach you are able to decouple multiple tasks with their own responsiblities. 

```javascript
hangin.schedule([
    {
        name: 'Fetch data', 
        action: next => { 
            fetch('https://example.com/api/')
                .then(response => response.json())
                .then(next);
        } 
    },
    {
        name: 'Handle data',
        action: (next, payload) => {
            console.log('Data from endpoint:', payload);
            next();
        }
    }
]) 
```

🚧 Package is currently in beta.

## Getting started

Hangin is as simple, select the methods from the toolbox to describe events, log watchers and reschedule actions from taking place. The following methods are available from this package:

**Actions** (2 methods)

*  `job()` set a single job and plan it's excecution
*  `schedule()` add multiple jobs to a schedule

**Loops** (10 methods)

* `cron()` used for setting a cron job like `.cron('* * * * *')`
* `daily()` set daily execution at specific time `.daily('14:00')`
* `every()` create a recurring schedule for minutes, hours, day, week, month or year `.every('hour')`
* `hourly()` recur a schedule every hour
* `interval()` use an interval in milliseconds `.interval(10000)`
* `monthly()` recur a schedule every month on given day `.monthly(10)`
* `weekly()` recur a schedule every week on given day `.weekly('monday')`
* `yearly()` recur a schedule every year on given month `.yearly('jan')`
* `weekend()` will execute on saterday and sunday `.weekend('17:00')`
* `weekdays()` will recur on every day from monday till friday `weekdays('12:00')`

**Once** (4 methods)

* `date()` set on a given date `.date('2022-02-12')` using YYYY-MM-DD format
* `instant()` will execute instantly after running the script
* `once()` will execute once on a given day and time `.once('2022-02-12', '11:45')`
* `timestamp()` set a specific timestamp for execution

**Extension** (1 methods)

* `at()` can be combined for setting a specific time `.daily().at('14:00')`

**Limiter** (5 methods) 🚧

* `times()`
* `untill()`
* `between()`
* `from()`
* `to()`

### Information

You can retrieve information from the queue using some of the getters that will retract information from scheduled jobs. 

**Data**

* `models` will return array of models (collection of schedules)

### Hooks

Hooks provivide a way to monitor changes taking place. For instance, a specific method is called like the `play()` event. The hook will dispatch once the function is called. You can register new hooks with the `event` method, the `on` function will provide you with a function to call a specific event and a callback that will be fired once the event takes place. You are able to register multiple hooks for the same event, an example is shown below: 

```javascript
hangin.event.on('loading', state => {
    console.log(state ? 'Loading...' : 'Done!');
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

Currently I'm still working on the package. Check out my [personal website](http://sanderhidding.nl) for more information. That's all folks! Cheers.
