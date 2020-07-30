// JS: Events & The Loop

// Events
const toxicTeam = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// handling events (listening to events)
// 1. Inline event handlers => <button onclick="soSomthing();"></button>
// const doSomething = () => console.log('Did something');
// 2. DOM event handlers => window.onload = () => console.log('window loaded')

// 3. Using addEventListener() => modern way and it allows us to register as many handlers as we need 
// <selected-node>.addEventListener(<event-name>, <listener-callback>);
// this method allows us to react with a callback to events that 
// occure on a node in the browser

// Its first argument is a string that corresponds to the name of an event.
// You write any name here. It must be on the possible events.
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second argument is a callback named "listener" that is 
// called/executed when the event is triggered
// Much like setTimeout or setInterval, it is asynchronous

// Exercise: clicking on titles
// document.querySelectorAll(".doggo.fighter h1").forEach(node => {
//     node.addEventListener('click', (event) => {
//         debugger
//         console.log(`${event.currentTarget.innerText} clicked`);
//     })
// })

if (false) {
    teamSalmon.addEventListener('click', (event) => {
        console.log('Team Salmon was clicked!');
        console.log('event: ', event);
        // The 'event' object contains a host of useful information
        // about the triggered event
        // including (but not limitted to) the position of the cursor,
        // which modifier was held at the time (e.g. shift, alt, cmd, etc)
        // which node was clicked, at what datetime the event was triggered
        // etc....
        console.log('==========================');
        console.log('type: ', event.type);

        // The 'target' property refers to the node that originally
        // triggered the event. In the case of a 'click' event,
        // that is the node where the cursor was located at 
        // the time of the click.
        // It will always be a descendant of the currentTarget node,
        // Or the currentTarget node.
        console.log('target: ', event.target);
        // The 'currentTarget' property refers to the node that 
        // calls the 'addEventListener' method.
        // It si the 'listening node'.
        // In this case, it is always going to be 'teamSalmon'
        console.log('currentTarget: ', event.currentTarget);
        console.log('==============================');
    })
}

// Instance of Node
const p = document.querySelector('p');
// When document.querySelector finds nothing, it returns null
if (p instanceof Node) {
    // so since null is not an instanceof Node, this will never execute
    p.addEventListener('click', () => console.log('this was a p node'));
}

if (false) {
    toxicTeam.addEventListener('click', event => {
        console.log('target: ', event.target);
        console.log('currentTarget: ', event.currentTarget);
        console.log(`cursor position: (${event.clientX}, ${event.clientY})`);
        console.log('arrow this === currentTarget ', this === event.currentTarget);
        // 'this' is the window when using arrow function for the callback
    });

    teamSalmon.addEventListener('click', function (event) {
        console.log(
            "non-arrow this === currentTarget ",
            this === event.currentTarget
        ); // true
        // Whereas when using a non-arrow function, 'this' refers to the currentTarget
    })
}

// Exercise: Last In Queue
document.querySelectorAll('.doggo.fighter').forEach(node => {
    node.addEventListener('click', event => {
        const doggoNode = event.currentTarget;
        const rosterNode = doggoNode.closest('.roster');
        rosterNode.append(doggoNode)
    })
})

// Events and the loop
// http://latentflip.com/loupe/

if (false) {
    function c() {
        console.log('c');
        setTimeout(function getFavAnimal() {
            console.log('Wolf');
        }, 0)
    }

    function b() {
        console.log('b');
        setTimeout(function getName() {
            console.log("Hindreen")
        }, 0);
        c();
    }

    function a() {
        console.log('a');
        b();
    }

    a();
}