const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relation_db")
  .then(() => {
    console.log("Sukses Koneksi Ke MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = new mongoose.Schema({
  userName:{
    type: String,
    required:true
  },
  age: {
    type:Number,
    required:true
  }
},(runValidators = true));

const TweetScema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", UserSchema);
const Tweet = mongoose.model("Tweet", TweetScema);

const makeTweets = async (nama,age,cuitan) => {
    let user = await User.findOne({userName: nama});
    if (!user) {
        user = new User({userName: nama, age: age});
        await user.save();  
    }
    const tweet = new Tweet({text: cuitan, likes: 0, user: user._id});
    await tweet.save();
};

makeTweets("Mama", 22, "Tweet Ketiga");

const newTweet = async () => {
    const user = await User.findOne({ userName: "RizqiKevin" }).populate('userName');
    const tweet = new Tweet({ text: "Tweet Kedua", likes: 10 });
    tweet.user = user;  
    tweet.save();
    console.log(tweet);

};

// newTweet();
