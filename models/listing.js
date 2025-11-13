// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const Review=require("./review.js");
// const listingSchema=new Schema({
//     // title:{
//     //     type:String,
//     //     required:true,
//     // },

//     //updated title
//     title: {
//     type: String,
//     required: [true, "Title is required"],
//     validate: {
//       validator: function (v) {
//         return /^[A-Za-z\s]+$/.test(v); // only letters and spaces allowed
//       },
//       message: props => `${props.value} is not a valid title! Only letters are allowed.`
//     }
//   },

//     description :String,
//     // image:{
//     //     type:String,
//     //     default:"",
//     //     set: (v)=>v==="" ? "default link":v,
//     // },
//     image: {
//   filename: {
//     type: String,
//     default: "listingimage"
//   },
//   url: {
//     type: String,
//     default: "default link"
//   }
// },
//     price:Number,
//     location:String,
//     country:String,
//     reviews:[
//       {
//       type:Schema.Types.ObjectId,
//       ref:"Review", 
//       }
//     ],
//     owner:{
//       type:Schema.Types.ObjectId,
//       ref:"User",

//     }
// });

// listingSchema.post("findOneAndDelete",async(listing)=>{
//   if(listing){
//     await Review.deleteMany({_id:{$in: listing.reviews}});
//   }
// });


// const Listing=mongoose.model("Listing",listingSchema);
// module.exports=Listing;



//updated code
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    validate: {
      validator: function (v) {
        // allow letters, spaces, hyphens, and slashes
        return /^[A-Za-z\s\-\/]+$/.test(v);
      },
      message: props =>
        `${props.value} is not a valid title! Only letters, spaces, hyphens (-), and slashes (/) are allowed.`
    }
  },

  description: String,
  image:{
    // type:String,
    // default:"https://ssl-images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     set:(v) =>
    //       v=== "" ? "https://ssl-images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60":
    //        v,
         url:String,
         filename:String,
  },

  price: Number,
  location: String,
  country: String,

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// ✅ Correct delete middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing.reviews.length > 0) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
