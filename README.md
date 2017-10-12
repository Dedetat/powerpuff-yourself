# Pimp my Powerpuff
Welcome to our source speech repository about [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) and powerpuffs.

 - All informations are in the README 👌
 - Source code of our livecoding are described here too ! 📖
 - Feel free to open issues / PR 🤗

> Final application link : https://powerpuff.herokuapp.com/

## Who

<div style="display: flex; justify-content: center">
  <a href="https://twitter.com/milletdelphine" style="margin: 1em">
    <img
      src="https://pbs.twimg.com/profile_images/872165301546344454/10U9vh8z_400x400.jpg"
      style="border-radius: 100%"
      width=150
    >
    <div style="text-align: center; width: 150px">Delphine MILLET</div>
  </a>
  <a href="https://twitter.com/fabienjuif" style="margin: 1em">
    <img
      src="https://pbs.twimg.com/profile_images/888132448760057857/a-WQ65Zy_400x400.jpg"
      style="border-radius: 100%"
      width=150
    >
    <div style="text-align: center; width: 150px">Fabien JUIF</div>
  </a>
</div>

## Deck
 - Comming soon

## Videos
 - Comming soon

## Events
 - [Devfest Nantes, France - 2017](https://devfest2017.gdgnantes.com/)

## Livecoding
### Model
> This is about creating our first model

#### [#12](https://github.com/Dedetat/powerpuff-yourself/pull/12/files) - Create the first model and instanciate it
> Write our first model about a **Powerpuff**, we can call it `Powerpuff` (damn, clever)
 1. We import `types` from `mobx-state-tree`, this is the most common used API
 2. `types` is used to ... types fields 👌, we can already use it to describe models ! And  `types.model` is the way to go !
 3. Here we create a model with only one field, a `name` which is a string !
 4. Ok, let's instanciate our model with `Powerpuff.create({})`
    - `Powerpuff` is our model
    - `create` means we instanciate a new tree, a new instance
    - `{}` is the snapshot, the raw data, to use to instanciate a new powerpuff !
 5. Let's print it with a `console.log` !
    - You can see we use `powerpuff.toJSON()` to convert our tree to a snapshot.
 6. 🤔 oups, it doesn't work at all ! This is because, by default, a type is required.
 7. Let's instanciate our powerpuff, it will be... hm... `Rebelle` (this is Blossum in french, sorry)
 8. Print it
 9. it works :tada:


### Actions
### Views
### Lifecycle
### Nested models
### References & Identifiers
### Utils
