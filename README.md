# Behavior Driven Development Demo

This project is a demo of how various tool can be to help you in behavior driven development in an angular project. The project is as close as possible to the base generated angular project.

# Stepwise commits

To facilitate the use of this project as a learning tool, the commits all repsrent a step in the process. They have git tags associated with them for easy checkout. If you prefer looking at the git log to referring back to this README the commits also feature long descriptive text that often is identical to the step information here.

## Step 1 - Testing the fizzbuzz function

At the first step fizzbuzz is created as a pure javascript function and tested. The test serves to describe the behavior of the function and work regardless of implementation details.

## Step 2 - Testing a fizzbuzz pipe

Using a javascript function isn't very angular, so we create a pipe to handle fizzbuzz in a template and demonstrate how testing a pipe works.

## Step 3 - Testing a fizzbuzz service

Using the pipe was nice, but still isn't very angular and will only work in templates. So we put the logic in a service and test that service. This gives us the chance to examine the angular testbed in the service test but also the pipe test since we test it in module.

## Step 4 - Testing the fizzbuzz pipe in isolation

In step 3 we tested the service directly and through the pipe, but an arguement could be made the only thing we need to test is that the pipe called the service. In step four we do this, testing the pipe in isolation and exploring the basics of spies.

## Step 5 - Creating the pokestuff library

Up to this point the examples have been pretty simple and we have been able to prove with tests that the fizzbuzz family is working, but it turns out what we are actually supposed to be building is a pokedex app a bit like the one at [this site](https://dgm1600-baseball-cards.crystalpugina.com/). They want to use the already well defined [PokeAPI](https://pokeapi.co/) to make the calls. To make matters worse, they want the components as a library and not included in the app, because they intend to eventually use them in multiple apps.

Since this is a big change we create the library using `ng g lib pokestuff` and commit immediately.

## Step 6 - Testing the component for basic information

We are finally ready to create our card component. In this step we test that the basic input works. Notably we don't test that the input bind, but rather that the important information shows up in the template.

## Step 7 - Adding the PokeAPI service

Here we add the PokeAPI service to the project. It notably does not test this service. Testing using HttpClient is complex and will be covered in the future, but we want the service defined to know how the component will call it.

## Step 8 - Adding an async pipe test

In step to we add the call to get additional information to the component, and test that the binding work given time for the template to stablize.

## Step 9 - Adding the angular-playground to the project

We finally are ready to style so we want the playground. We include the angular playground in the project with the command  `ng add angular-playground`. We don't do anything else here yet, because this is fairly complex in and of itself.

## Step 10 - Configuring the playground to use the library

Here we also follow the instructions at [use angular libraries](https://angularplayground.it/docs/getting-started/use-angular-libraries) To make the playground find sandboxes in the library so we can work rapidly.

## Step 11 - Adding a sandbox for visual testing

Finally at step 11 we are reasonably confident that the component is functional and can begin working on how it looks. We setup a sandbox to style and test the functionality with a mocked PokeAPI service.

## Step 12 - Putting it all together

This is the last step in the series. We are now ready to put it all together. We add the PokeAPI service to the app and the component to the app. We make out inital request in the app.component and push the output to our cards.


# Addition Resources

* [Angular Playground](https://angularplayground.it/) - Offical Page for  angular playground. Explains the basics and philosophy of the playground.
* [Angular Component Testing Scenarios](https://angular.io/guide/testing-components-scenarios) - The Offical documententation for component testing scenarios. This covers more than what we have here and is worth a read.

