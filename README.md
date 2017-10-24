# Pimp my Powerpuff
Welcome to our source speech repository about [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) and powerpuffs.

 - All informations are in the README 👌
 - Source code of our livecoding is described here too ! 📖
 - Feel free to open issues / PR 🤗

> Final application link : https://powerpuff.herokuapp.com/

## Who
 - Delphine MILLET [ [Twitter](https://twitter.com/milletdelphine) | [Github](https://github.com/delphinemillet) ]
 - Fabien JUIF [ [Twitter](https://twitter.com/fabienjuif) | [Github](https://github.com/fabienjuif) ]

## Deck
 - Comming soon

## Videos
 - Comming soon

## Events
 - [Devfest Nantes, France - 2017](https://devfest2017.gdgnantes.com/)

## Livecoding
### Model
> This is about creating our first model

#### [#30](https://github.com/Dedetat/powerpuff-yourself/pull/30/files) - Create the first model and instanciate it
> Writing our first model of **Powerpuff** is pretty simple. We'll call it `Powerpuff` (damn, clever 🤓)
 1. Import `types` from `mobx-state-tree`, this is the most common used API
 2. `types` is used to ... type fields 👌, we can also use it to describe models ! And  `types.model` is the way to go !
 3. Here we create a model with only one field, a `name` which is a string !
 4. Ok, let's instanciate our model with `Powerpuff.create({})`
    - `Powerpuff` is our model
    - `create` means we instanciate a new tree, a new instance
    - `{}` is the snapshot, the raw data, to use to instanciate a new powerpuff !
 5. Let's print it with a `console.log` !
    - As you can see, we use `powerpuff.toJSON()` to convert our tree to a snapshot
 6. 🤔 oups, it doesn't work at all ! This is because, by default, a field is required
 7. Let's instanciate our powerpuff, it will be... hm... `Rebelle` (the french name of Buttercup)
 8. Print it
 9. It works 🎉

### Actions
### Views
### Lifecycle
### Nested models
### References & Identifiers
### Utils