# pizza-bot
Order 🍕 From Slack

## Exercise 2: List Nearby Stores
* When your bot hears "I want a pizza", list stores close to this hard-coded address: `11 Times Square, New York, NY 10036` (we will make this dynamic in the next exercise). Use the `pizzapi` library to do this.
* Tell the user you have found some stores nearby and print the list. You should print `<Store.StoreID>: <Store.AddressDescription>` one on each line sorted by StoreID. Try to format the address nicely (it should fit on one line and just be the address).
* Only show stores that are `Open`, `OnelineCapable`, and `Online` now.

## Concepts

### Using External Libraries

We're going to use a library called `pizzapi` to find out details about nearby Domino's "restaurants". Don't worry, this library can't make real orders, so you won't accidentally order 100 pizzas while you're testing :smile:. We'll talk about accepting payments in a real bot later.

You can find the docs here: http://riaevangelist.github.io/node-dominos-pizza-api/. 

### Small Steps

By focusing on getting stores near a hard-coded location, we can focus on learning one thing at a time. We'll add getting a dynamic address later, but for now focus on what you need to ask for a list of stores and how to display them.

## Helpful Hints

Require the `pizzapi` library at the top of the file: `const pizzapi = require('pizzapi')`. It's already in your `package.json`, so you won't need to install it.

To get a list of stores use this method call: `pizzapi.Util.findNearbyStores('11 Times Square, New York, NY 10036', 'Delivery', (storeData) => { ... })`

`storeData` will look like this (you can always use `console.log` to see for yourself):

```js
{
  "success": true,
  "result": {
    "Status": 0,
    "Granularity": "PostalCode",
    "Address": {
      "Street": "",
      "StreetNumber": "",
      "StreetName": "",
      "UnitType": "",
      "UnitNumber": "",
      "City": "11 TIMES SQUARE,NEW YORK",
      "Region": "NY",
      "PostalCode": "10036"
    },
    "Stores": [
      {
        "StoreID": "3693",
        "IsDeliveryStore": false,
        "Phone": "212-944-0400",
        "AddressDescription": "227 W 40th St\nNew York, NY 10036",
        "HolidaysDescription": "",
        "HoursDescription": "Su-Th 10:00am-2:00am\nFr-Sa 10:00am-3:00am",
        "ServiceHoursDescription": {
          "Carryout": "Su-Th 10:00am-2:00am\nFr-Sa 10:00am-3:00am",
          "Delivery": "Su-Th 10:00am-2:00am\nFr-Sa 10:00am-3:00am"
        },
        "IsOnlineCapable": true,
        "IsOnlineNow": true,
        "IsNEONow": false,
        "IsSpanish": true,
        "LocationInfo": null,
        "LanguageLocationInfo": {
          "es": null
        },
        "AllowDeliveryOrders": true,
        "AllowCarryoutOrders": true,
        "IsOpen": true,
        "ServiceIsOpen": {
          "Carryout": true,
          "Delivery": true
        }
      }
    ]
  }
}
```

You might take a look at the Array `filter` and `map` methods when you filter out stores and format addresses.

Use `\r\n` to make a new line in Slack.

## Next Exercise

Congratulations! Now you are able to find stores near an address usine the `pizzapi` external library! Next we'll make this even more usefyl by asking a user for their real address.

Next exercise: https://github.com/SparkPost/pizza-bot/tree/03-address
