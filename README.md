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

#### [#31](https://github.com/Dedetat/powerpuff-yourself/pull/31/files) - Avoid required fields
> Sometimes we don't want fields to be required
 1. To do so, we can use the type `maybe`, which sets the field to `null` if it's not defined
 2. So now, when we instanciate our powerpuff with an empty snapshot, it works !
 3. And if we want to instanciate the model with a valued name, we still can do it 👍

#### [#32](https://github.com/Dedetat/powerpuff-yourself/pull/32/files) - Avoid required fields
> There are lots of available types provided by mobx-state-tree, find the entire list in the [documentation](https://github.com/mobxjs/mobx-state-tree#types-overview)
 1. Because a Powerpuff is not only a name but also has feelings, we add the field `mood` to describe her
 2. But each Powerpuff has her own personality so let's say she must be into a mood defined in an enumeration
 3. If you try to create a Powerpuff with a mood which is not in the enumeration, it fails (Don't try to counterfeit a Powerpuff 💪)
 4. Use a mood of the enumeration and now you can instanciate a new Powerpuff !

### Actions
### Views
### Lifecycle
### Nested models
### References & Identifiers
### Utils