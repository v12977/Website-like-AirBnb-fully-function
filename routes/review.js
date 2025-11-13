const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isreviewAuthor}=require("../middlware.js");
const reviewController = require("../controllers/reviews.js");


//Post(Create) review route.

router.post("/",
  isLoggedIn,
  validateReview, 
  wrapAsync( reviewController.createReview));


//post review delete router
router.delete("/:reviewId",
  isLoggedIn, 
  isreviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports=router;



