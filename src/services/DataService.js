

const catalog = [
  {
    "title":"Banana",
    "image":"banana.png",
    "price":"3",
    "category":"fruits",
    "_id":"1"
  },

  {
    "title":"Cheese",
    "image":"chesse.png",
    "price":"2",
    "category":"dairy",
    "_id":"2"
  },

  {
    "title":"Coffee",
    "image":"coffee.png",
    "price":"4.25",
    "category":"coffee",
    "_id":"3"
  },

  {
    "title":"Hoodie",
    "image":"hoodie.png",
    "price":"25",
    "category":"clothing",
    "_id":"4"
  },

  {
    "title":"milk",
    "image":"milk.png",
    "price":"4.25",
    "category":"milk",
    "_id":"5"
  },

  {
    "title":"oranges",
    "image":"oranges.png",
    "price":"5",
    "category":"fruits",
    "_id":"6"
  },

  {
    "title":"Steak",
    "image":"Steak.jpeg",
    "price":"6",
    "category":"meat",
    "_id":"7"
  },

  {
    "title":"tea",
    "image":"tea.jpg",
    "price":"2.99",
    "category":"tea",
    "_id":"8"

  },
  {
    "title":"teapot",
    "image":"teapot.jpg",
    "price":"6",
    "category":"teapot",
    "_id":"9"

  },
  {
    "title":"vitamins",
    "image":"vitamins.png",
    "price":"8.99",
    "category":"vitamins",
    "_id":"10"
  },

]

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;