# Setup
```
bundle
```
```
rails db:setup
```
```
rails s
```


# Reproduce

1. Visit `localhost:3000`
2. Click "New post"
3. Click on "Status"
4. Select an arbitrary option
5. Click "Create Post"
6. On show view label will be the product ID and that's ok
7. Click "Edit this post"
8. Stauts will have the product' ID instead the TITLE
9. Click status then click outside of the select (to close it without selecting another value)
10. Notice than step 9. made the status to refresh with the product's TITLE

# Goal

When using the `combobox` form helper there should be possible to pass the `value` as a hash or any other object type that respond to `value` and `label`.

Passing that as value the combobox should have the needed information to render the current option correctly.
