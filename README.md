This is an example to show how we can fetch data from the backend using API call and publish them in our Next Js app. I have used a real-world scenario with a very basic minimum dataset here.

In this example, I'm fetching a collection of blog posts from backend and list them in the frontend.

## Techstack:

Frontend - In the frontend Next Js, Typescript and Axios are used.
Backend - In the backend Node Js and Express are used.
Database - A json file with dummy data set has been used.

## DB schema for a Post object is:

{

id: {
type: Number,
required: true,
},

title: {
type: String,
required: true,
},

body: {
type: String,
required: true,
},

userId: {
type: mongoose.Types.ObjectId,
required: true,
ref: "User",
},

tags: [
{
type: String,
required: true,
}
],

reactions: {
type: Boolean,
required: false,
},

}

## Notes:

1. id for Post object has been considered as number type as per the sample JSON dataset. If you use MongoDB, you may change that to String type.
2. User object hasn't been mentioned separately as it is not required while using the sample JSON dataset. If you use MongoDB, you may create a model for User and put a reference to it in the Post model. You may add as many properties you want to the User and also Post object.
